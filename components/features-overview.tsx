"use client";

import Link from "next/link";
import {
  Subtitles,
  Globe,
  Hand,
  Presentation,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Live Captions",
    description: "Accurate real-time captions for every conversation.",
    icon: Subtitles,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Live Translation",
    description: "Break language barriers with multilingual translation.",
    icon: Globe,
    iconBg: "bg-teal-100 text-teal-600",
  },
  {
    title: "Sign Language",
    description: "AI-powered sign language avatars and interpreters.",
    icon: Hand,
    iconBg: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Accessible Presentations",
    description: "Create and deliver inclusive content with confidence.",
    icon: Presentation,
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Audience Engagement",
    description: "Q&A, polls, chat and more for active participation.",
    icon: Users,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Intelligent Assistance",
    description: "AI tools that support you before, during, and after your session.",
    icon: Sparkles,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
];

export function FeaturesOverview() {
  return (
    <section className="py-16 bg-white border-b border-border-default/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex flex-col items-start rounded-2xl border border-transparent p-5 transition-all hover:border-border-default hover:bg-surface-sunken/40 hover:shadow-xs"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.iconBg} shadow-xs transition-transform group-hover:scale-105`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Explore Link */}
        <div className="mt-8 text-center">
          <Link
            href="/#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-intelligence hover:underline"
          >
            <span>Explore all features</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
