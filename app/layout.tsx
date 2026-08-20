import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InclusaAI — Inclusive by Default Assistive AI Platform",
  description:
    "Real-time AI sign language interpretation, live captions, and multi-modal accessibility for presentations, events, and education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface-page font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
