"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { FeaturesOverview } from "../components/features-overview";
import { HowItWorks } from "../components/how-it-works";
import { ProductModes } from "../components/product-modes";
import { FeatureHighlights } from "../components/feature-highlights";
import { SocialProofCta } from "../components/social-proof-cta";
import { Footer } from "../components/footer";
import { EarlyAccessModal } from "../components/early-access-modal";

export default function LandingPage() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [earlyAccessType, setEarlyAccessType] = useState<"individual" | "partner">("individual");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("early-access") === "true" || searchParams.has("ref") || searchParams.has("referral")) {
        const type = searchParams.get("type") === "partner" ? "partner" : "individual";
        setEarlyAccessType(type);
        setIsEarlyAccessOpen(true);
      }
    }
  }, []);

  const handleOpenEarlyAccess = (type: "individual" | "partner" = "individual") => {
    setEarlyAccessType(type);
    setIsEarlyAccessOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 antialiased selection:bg-brand-intelligence selection:text-white">
      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        initialType={earlyAccessType}
        onClose={() => setIsEarlyAccessOpen(false)}
      />

      {/* Top Header */}
      <Header onOpenEarlyAccess={handleOpenEarlyAccess} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* 2. Core Features Overview (6 Capabilities) */}
        <FeaturesOverview />

        {/* 3. How It Works (5 Connected Steps) */}
        <HowItWorks />

        {/* 4. Product Modes (Camera, Slides, Whiteboard, Hybrid) */}
        <ProductModes />

        {/* 5. Feature Highlights (A better experience for every audience) */}
        <FeatureHighlights />

        {/* 6. Social Proof & Final CTA */}
        <SocialProofCta onOpenEarlyAccess={handleOpenEarlyAccess} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
