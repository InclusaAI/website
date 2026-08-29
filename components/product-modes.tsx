"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Camera,
  Monitor,
  PenTool,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const modes = [
  { id: "camera", label: "Camera", icon: Camera, desc: "Presenter camera broadcast", iconColor: "text-slate-800", iconBg: "bg-slate-100 border-slate-200" },
  { id: "slides", label: "Slides", icon: Monitor, desc: "Interactive presentation deck", iconColor: "text-blue-600", iconBg: "bg-blue-50 border-blue-200" },
  { id: "whiteboard", label: "Whiteboard", icon: PenTool, desc: "Collaborative live canvas", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border-emerald-200" },
  { id: "hybrid", label: "Hybrid", icon: Sparkles, desc: "Multi-feed combined layout", iconColor: "text-teal-600", iconBg: "bg-teal-50 border-teal-200" },
];

export function ProductModes() {
  const [activeMode, setActiveMode] = useState("hybrid");

  return (
    <section className="py-20 bg-white border-b border-border-default/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Mode Choices */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-intelligence">
                Present the way your message requires
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Choose the mode that fits your session.
              </h2>
            </div>

            {/* 4 Mode Buttons Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {modes.map((mode) => {
                const Icon = mode.icon;
                const isSelected = activeMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setActiveMode(mode.id)}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all ${
                      isSelected
                        ? "border-brand-intelligence bg-brand-intelligence/5 ring-2 ring-brand-intelligence/20 shadow-md scale-[1.02]"
                        : "border-border-default bg-surface-default hover:border-border-strong hover:bg-surface-sunken/40"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${mode.iconBg} ${mode.iconColor} transition-transform ${isSelected ? "scale-110 shadow-xs" : ""}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-2 text-xs font-bold text-slate-900">{mode.label}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              Combine camera, slides, and whiteboard seamlessly and switch anytime during your live session.
            </p>

            <Link
              href="/#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-intelligence hover:underline"
            >
              <span>Learn more about modes</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Column: Product Modes Illustration */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[650px] transition-all">
              <Image
                src="/assets/images/website_product_modes_illustration_no_background.png"
                alt="InclusaAI Product Modes: Camera, Slides, Whiteboard and Hybrid"
                width={800}
                height={550}
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
