"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Subtitles,
  Globe,
  Sparkles,
  BarChart2,
  Users,
  ChevronDown,
  Activity,
  Heart,
} from "lucide-react";

export function HeroSection() {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-intelligence">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI-Powered Communication Platform</span>
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
              <Link
                href="/#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-intelligence px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border-default bg-white px-5 py-3.5 text-base font-semibold text-text-primary shadow-xs transition-all hover:bg-surface-sunken hover:border-border-strong"
              >
                <span>See How It Works</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
              </Link>
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

          {/* Right Column: Composite Broadcast Mockup */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px] rounded-3xl border border-blue-100/80 bg-gradient-to-tr from-blue-50/40 via-white to-cyan-50/30 p-5 shadow-2xl backdrop-blur-md">
              {/* Floating Card 1: Live Speech Bubble (Top Right) */}
              <div className="absolute -top-4 right-4 z-20 flex max-w-[280px] items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-lg backdrop-blur-md sm:-top-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-intelligence">
                  <Subtitles className="h-4 w-4" />
                </span>
                <p className="text-xs font-medium text-slate-700 leading-snug">
                  Technology is not just about innovation. It&apos;s about inclusion and opportunity.
                </p>
              </div>

              {/* Main Visual Stage Composition */}
              <div className="relative mt-8 grid grid-cols-12 gap-3.5 pt-4">
                {/* Presenter Illustration Placeholder Box (Center Left) */}
                <div className="col-span-7 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-brand-navy p-4 text-white shadow-md">
                  {/* Floating Soundwave Audio Badge */}
                  <div className="self-start flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] backdrop-blur-md border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-[#00d2d3] animate-pulse" />
                    <div className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 h-2 bg-[#00d2d3] animate-pulse rounded-full" />
                      <span className="w-0.5 h-3 bg-blue-400 animate-pulse delay-75 rounded-full" />
                      <span className="w-0.5 h-1.5 bg-[#00d2d3] animate-pulse delay-150 rounded-full" />
                    </div>
                  </div>

                  {/* Presenter Geometric Avatar Shape */}
                  <div className="my-auto flex flex-col items-center justify-center text-center">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-white">
                        <span className="text-3xl font-extrabold">👨🏾‍💼</span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs font-bold text-white">Live Presenter Feed</p>
                    <p className="text-[10px] text-white/70">Studio High-Definition Audio</p>
                  </div>
                </div>

                {/* Right Side: Sign Language Avatar (Far Right) & Impact Report */}
                <div className="col-span-5 flex flex-col gap-3.5">
                  {/* Sign Language Avatar Box */}
                  <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 p-3 text-white shadow-md border border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                        LIVE
                      </span>
                      <span className="text-[10px] text-white/60">ASL Avatar</span>
                    </div>

                    <div className="my-2 flex flex-col items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-2xl shadow-inner">
                        🧕
                      </div>
                    </div>

                    <p className="text-center text-[10px] font-medium text-white/80">
                      Synchronous Sign Output
                    </p>
                  </div>
                </div>
              </div>

              {/* Annual Impact Report Mini Card (Mid Overlay) */}
              <div className="mt-3.5 rounded-2xl border border-border-default bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-border-default pb-2">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-brand-intelligence" />
                    <span className="text-xs font-bold text-slate-900">Annual Impact Report</span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    +42% Growth
                  </span>
                </div>
                {/* Visual Bar Graph Placeholder */}
                <div className="mt-3 flex items-end justify-between gap-2 h-14 px-2">
                  {[35, 60, 45, 80, 65, 95, 75, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-sm bg-gradient-to-t from-blue-600 to-indigo-400"
                        style={{ height: `${val}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Floating Cards Row (Translation + Poll + Attendees) */}
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Translation Card */}
                <div className="rounded-xl border border-border-default bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between text-[11px] font-bold text-text-tertiary">
                    <span className="flex items-center gap-1 text-teal-700">
                      <Globe className="h-3 w-3" />
                      Translation
                    </span>
                    <span className="text-[10px] text-slate-500">Spanish ▾</span>
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-slate-700 italic leading-snug">
                    &ldquo;La tecnología se trata de inclusión y oportunidad.&rdquo;
                  </p>
                </div>

                {/* Poll Card */}
                <div className="rounded-xl border border-border-default bg-white p-3 shadow-sm">
                  <span className="text-[11px] font-bold text-purple-700">Live Poll</span>
                  <p className="mt-1 text-[10px] font-semibold text-slate-800 leading-tight">
                    How useful is AI in improving accessibility?
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-[85%] bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600">85%</span>
                  </div>
                </div>

                {/* Attendees Reaction Card */}
                <div className="rounded-xl border border-border-default bg-white p-3 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">124 Live</span>
                    <Users className="h-3 w-3 text-brand-intelligence" />
                  </div>
                  <div className="space-y-1 mt-1">
                    <p className="truncate text-[10px] text-slate-600 font-medium">
                      👩🏾 &ldquo;Great session! 👏&rdquo;
                    </p>
                    <p className="truncate text-[10px] text-slate-600 font-medium">
                      👨🏼 &ldquo;Very insightful&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
