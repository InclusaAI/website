"use client";

import Link from "next/link";
import {
  FileText,
  Settings,
  Radio,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "1",
    label: "Create",
    description: "Upload or create your content and prepare your session.",
    icon: FileText,
    iconBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    numBg: "bg-blue-600",
  },
  {
    number: "2",
    label: "Configure",
    description: "Choose accessibility options, communication mode and audience settings.",
    icon: Settings,
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    numBg: "bg-emerald-600",
  },
  {
    number: "3",
    label: "Present",
    description: "Go live and deliver your message with AI-powered accessibility.",
    icon: Radio,
    iconBg: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    numBg: "bg-purple-600",
  },
  {
    number: "4",
    label: "Engage",
    description: "Interact with your audience using Q&A, polls, chat and more.",
    icon: Users,
    iconBg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    numBg: "bg-amber-600",
  },
  {
    number: "5",
    label: "Review",
    description: "Access recordings and insights to improve future presentations.",
    icon: TrendingUp,
    iconBg: "bg-cyan-50 border-cyan-200",
    iconColor: "text-cyan-600",
    numBg: "bg-cyan-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-[#F8FAFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-[#f8fafd] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-intelligence">
                From preparation to impact
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                How InclusaAI works
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                A simple end-to-end workflow for inclusive communication.
              </p>
              <div className="pt-2">
                <Link
                  href="/#"
                  className="inline-flex items-center gap-2 rounded-xl border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary shadow-xs transition-all hover:bg-surface-sunken hover:border-border-strong"
                >
                  <span>See how it works in detail</span>
                  <ArrowRight className="h-4 w-4 text-brand-intelligence" />
                </Link>
              </div>
            </div>

            {/* Right 5 Steps Connected Flow */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-5 items-start">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="relative flex flex-col items-center text-center group">
                      {/* Step Icon Box */}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-xs transition-transform group-hover:scale-110 ${step.iconBg} ${step.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Numbered Pill */}
                      <div className="mt-3 inline-flex items-center gap-1.5 font-bold text-xs text-slate-900">
                        <span className={`inline-flex h-4 w-4 shrink-0 items-center justify-center text-center rounded-full text-[10px] font-extrabold text-white leading-none select-none ${step.numBg}`}>
                          {step.number}
                        </span>
                        <span>{step.label}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-1.5 text-[11px] text-text-secondary leading-normal">
                        {step.description}
                      </p>

                      {/* Connector Arrow (on sm+ screens) */}
                      {idx < steps.length - 1 && (
                        <div className="hidden sm:block absolute -right-3 top-5 text-blue-300 font-bold">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
