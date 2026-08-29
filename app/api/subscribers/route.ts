import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email address.").max(254),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error("DATABASE_URL is missing in environment variables.");
      return NextResponse.json(
        { message: "Server database configuration missing." },
        { status: 500 }
      );
    }

    const sql = neon(databaseUrl);

    // Auto-create table if not existing in database
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        source TEXT DEFAULT 'website',
        subscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        is_active BOOLEAN NOT NULL DEFAULT TRUE
      );
    `;

    const [subscriber] = await sql`
      INSERT INTO subscribers (email, source)
      VALUES (${result.data.email.toLowerCase()}, 'website')
      ON CONFLICT (email)
      DO UPDATE SET is_active = TRUE
      RETURNING id, email;
    `;

    return NextResponse.json({
      success: true,
      message: "You're on the list!",
      subscriber,
    });
  } catch (error) {
    console.error("Subscriber API Error:", error);
    return NextResponse.json(
      { message: "Unable to subscribe right now." },
      { status: 500 }
    );
  }
}
