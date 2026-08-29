"use client";

import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { FeaturesOverview } from "../components/features-overview";
import { HowItWorks } from "../components/how-it-works";
import { ProductModes } from "../components/product-modes";
import { FeatureHighlights } from "../components/feature-highlights";
import { SocialProofCta } from "../components/social-proof-cta";
import { Footer } from "../components/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 antialiased selection:bg-brand-intelligence selection:text-white">
      {/* Top Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Core Features Overview (6 Capabilities) */}
        <FeaturesOverview />

        {/* 3. How It Works (5 Connected Steps) */}
        <HowItWorks />

        {/* 4. Product Modes (Camera, Slides, Whiteboard, Hybrid) */}
        <ProductModes />

        {/* 5. Feature Highlights (A better experience for every audience) */}
        <FeatureHighlights />

        {/* 6. Social Proof & Final CTA */}
        <SocialProofCta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
