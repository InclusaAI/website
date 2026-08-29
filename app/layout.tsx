import { createAppMetadata } from "@repo/assets/metadata";
import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "../lib/theme-context";
import { ReferralTracker } from "../components/referral-tracker";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createAppMetadata(
  "InclusaAI — Inclusive by Default Assistive AI Platform",
  "Real-time AI sign language interpretation, live captions, and multi-modal accessibility for presentations, events, and education.",
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${poppins.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-screen bg-surface-page font-sans text-text-primary antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <ReferralTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
