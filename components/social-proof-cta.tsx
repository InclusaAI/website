"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Headphones,
} from "lucide-react";

export function SocialProofCta() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Floating Attendee Reactions & Main Call To Action */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Floating Left Attendee Bubble */}
          <div className="hidden lg:flex absolute -left-20 top-0 items-center gap-2 rounded-full border border-border-default bg-white p-2 shadow-lg backdrop-blur-md">
            <span className="text-2xl">🧕</span>
            <span className="text-xs font-semibold text-slate-800 pr-2">&ldquo;Great session! 👏&rdquo;</span>
          </div>

          {/* Floating Right Attendee Bubble */}
          <div className="hidden lg:flex absolute -right-20 top-0 items-center gap-2 rounded-full border border-border-default bg-white p-2 shadow-lg backdrop-blur-md">
            <span className="text-2xl">👨🏼‍💼</span>
            <span className="text-xs font-semibold text-slate-800 pr-2">&ldquo;Very insightful!&rdquo;</span>
          </div>

          {/* Headline & Subhead */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Ready to make every conversation inclusive?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary">
            Join thousands of presenters and organizations using InclusaAI to create meaningful, accessible communication.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-intelligence px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#"
              className="inline-flex items-center justify-center rounded-xl border border-border-default bg-white px-6 py-3.5 text-base font-semibold text-text-primary shadow-xs transition-all hover:bg-surface-sunken hover:border-border-strong"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* 4 Trust Badges in a Row */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-border-default/70 pt-12">
          {/* Badge 1 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-brand-intelligence">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Enterprise-grade security</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">Your data is protected.</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">WCAG 2.2 AA Compliant</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">Accessibility built-in.</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">99.9% Uptime</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">Reliable when it matters.</p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <Headphones className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">24/7 Support</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">We&apos;re here to help.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
