import { createAppMetadata } from "../public/assets/metadata";
import { logoLandscape } from "../public/assets";
import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@inclusaai/ui/theme-context";
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
  "InclusaAI — AI-Powered Accessible Communication",
  "Make every conversation more accessible with AI-powered captions, translation, sign-language experiences, accessible presentations, and inclusive participation.",
  logoLandscape,
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning={true}
      className={`${poppins.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-screen bg-surface-page font-sans text-text-primary antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider defaultTheme="light" enableSystem={false} enablePersistence={false}>
          <ReferralTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
