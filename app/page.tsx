import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  Globe,
  Hand,
  Layers,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Accessibility & Nav Header */}
      <header className="sticky top-0 z-50 border-b border-border-default/80 bg-surface-default/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-intelligence to-brand-cyan text-white shadow-sm">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Inclusa<span className="text-brand-intelligence">AI</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/features"
              className="text-sm font-medium text-text-secondary hover:text-brand-intelligence"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-text-secondary hover:text-brand-intelligence"
            >
              How It Works
            </Link>
            <Link
              href="/accessibility"
              className="text-sm font-medium text-text-secondary hover:text-brand-intelligence"
            >
              Accessibility
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-text-secondary hover:text-brand-intelligence"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-text-secondary hover:text-brand-intelligence"
            >
              Docs
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-text-primary hover:bg-surface-sunken"
            >
              Sign In
            </Link>
            <Link
              href="/signin"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-intelligence px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-surface-sunken/50 to-surface-page py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-intelligence/20 bg-brand-intelligence/10 px-3.5 py-1 text-xs font-semibold text-brand-intelligence">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  WCAG 2.2 AAA Conformance • Inclusive by Default
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                  Real-time AI Sign Language & Captions for{" "}
                  <span className="bg-gradient-to-r from-brand-intelligence to-brand-cyan bg-clip-text text-transparent">
                    Every Audience
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-text-secondary">
                  Break down communication barriers in live presentations, classrooms,
                  and events with instant 3D sign language avatars, multilingual
                  transcription, and universal assistive streaming.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/signin"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-intelligence px-6 text-base font-semibold text-white shadow-md hover:bg-primary-hover"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border-default bg-surface-default px-6 text-base font-semibold text-text-primary shadow-sm hover:bg-surface-sunken"
                  >
                    <Play className="h-4 w-4 text-brand-intelligence" />
                    Watch Interactive Demo
                  </Link>
                </div>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-4 pt-4 text-xs font-medium text-text-secondary">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    Instant browser join
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    Low-latency WebRTC fanout
                  </div>
                </div>
              </div>

              {/* Interactive Demo Preview Card */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-border-default/80 bg-surface-default p-6 shadow-xl">
                  <div className="flex items-center justify-between border-b border-border-default pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-error" />
                      <span className="h-3 w-3 rounded-full bg-warning" />
                      <span className="h-3 w-3 rounded-full bg-success" />
                    </div>
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
                      ● LIVE PREVIEW
                    </span>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="rounded-xl bg-surface-sunken p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-intelligence/10 text-brand-intelligence">
                          <Hand className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-text-primary">
                            AI Sign Language Avatar
                          </p>
                          <p className="text-[11px] text-text-tertiary">
                            ASL, BSL, Auslan in 60fps 3D WebGL
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-surface-sunken p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-intelligence">
                          <AudioLines className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-text-primary">
                            Live Multilingual Captions
                          </p>
                          <p className="text-[11px] text-text-tertiary">
                            Sub-second transcription in 40+ languages
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-surface-sunken p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-text-primary">
                            Universal Dual-Screen Pairing
                          </p>
                          <p className="text-[11px] text-text-tertiary">
                            Stage display & personal audience view sync
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Engineered for Complete Accessibility
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary">
                InclusaAI unifies neural sign language generation, audio intelligence,
                and audience personalization into one frictionless pipeline.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-surface-default p-6 shadow-sm border border-border-default/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-intelligence/10 text-brand-intelligence">
                  <Hand className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  Neural 3D Avatars
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Natural facial expressions, arm articulation, and finger spelling powered
                  by standard skeletal animation.
                </p>
              </div>

              <div className="rounded-2xl bg-surface-default p-6 shadow-sm border border-border-default/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-intelligence">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  Multi-Language Translation
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Instant multi-target translation allows audience members to read and listen
                  in their preferred language.
                </p>
              </div>

              <div className="rounded-2xl bg-surface-default p-6 shadow-sm border border-border-default/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  Zero-Install Guest Join
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Audience members join in seconds via short code, QR code, or link with full
                  preference controls on their personal devices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Accessible Footer */}
      <footer className="border-t border-border-default bg-surface-default py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-text-tertiary">
              © 2026 InclusaAI. All rights reserved. Built for accessible inclusion.
            </p>
            <div className="flex gap-6 text-xs text-text-secondary">
              <Link href="/privacy" className="hover:text-brand-intelligence">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-intelligence">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-brand-intelligence">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
