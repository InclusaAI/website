"use client";

import {
  Subtitles,
  Globe,
  Hand,
  Clock,
  Smartphone,
} from "lucide-react";

const highlights = [
  {
    title: "Live Captions",
    subtitle: "Read along in real time.",
    icon: Subtitles,
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Translation",
    subtitle: "Follow in your preferred language.",
    icon: Globe,
    iconColor: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    title: "Sign Language",
    subtitle: "Watch AI sign language avatars.",
    icon: Hand,
    iconColor: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Engage",
    subtitle: "Ask questions, join polls, chat.",
    icon: Clock,
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Any Device",
    subtitle: "Access from web, mobile or tablet.",
    icon: Smartphone,
    iconColor: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-16 bg-[#F8FAFD] border-b border-border-default/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Headline */}
          <div className="lg:max-w-xs">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              A better experience for every audience.
            </h2>
          </div>

          {/* 5 Capability Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 flex-1">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-border-default bg-white p-3.5 shadow-xs"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.iconColor}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                    <p className="text-[10px] text-text-secondary leading-tight mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
