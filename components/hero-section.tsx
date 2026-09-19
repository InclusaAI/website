"use client";

import Image from "next/image";
import { Button } from "@inclusaai/ui/button";
import { Badge } from "@inclusaai/ui/badge";
import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export interface HeroSectionProps {
  onOpenEarlyAccess?: (type?: "individual" | "partner") => void;
}

export function HeroSection({ onOpenEarlyAccess }: HeroSectionProps = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] py-12 lg:py-20">
      {/* Background Decorative Blur Gradients */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag Badge */}
            <div>
              <Badge variant="outline" className="gap-2 bg-blue-50 border-blue-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-intelligence">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI-Powered Communication Platform</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Inclusive communication for{" "}
              <span className="text-brand-intelligence">every audience</span>, everywhere.
            </h1>

            {/* Subheadline */}
            <p className="text-base text-text-secondary sm:text-lg leading-relaxed max-w-xl">
              InclusaAI helps presenters and organizations create, deliver, and engage in accessible
              experiences with the power of AI—live captions, translation, sign language, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                type="button"
                variant="primary"
                size="lg"
                onClick={() => (onOpenEarlyAccess ? onOpenEarlyAccess("individual") : (window.location.href = "/early-access"))}
              >
                Request Early Access
              </Button>
              <Button
                href="#how-it-works"
                variant="outline"
                size="lg"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-text-secondary">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Free to get started</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Section Illustration */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[620px] transition-all">
              <Image
                src="/assets/images/website_header_illustration_no_background.png"
                alt="InclusaAI Live Broadcast and Accessibility Platform"
                width={800}
                height={600}
                priority
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
