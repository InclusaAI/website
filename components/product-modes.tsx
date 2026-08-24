"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Camera,
  Monitor,
  PenTool,
  Sparkles,
  ArrowRight,
  Video,
  Check,
} from "lucide-react";

const modes = [
  { id: "camera", label: "Camera", icon: Camera, desc: "Presenter camera broadcast" },
  { id: "slides", label: "Slides", icon: Monitor, desc: "Interactive presentation deck" },
  { id: "whiteboard", label: "Whiteboard", icon: PenTool, desc: "Collaborative live canvas" },
  { id: "hybrid", label: "Hybrid", icon: Sparkles, desc: "Multi-feed combined layout" },
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
                        ? "border-brand-intelligence bg-brand-intelligence/5 ring-1 ring-brand-intelligence/30 shadow-xs"
                        : "border-border-default bg-surface-default hover:border-border-strong hover:bg-surface-sunken/40"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${isSelected ? "text-brand-intelligence" : "text-slate-500"}`} />
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

          {/* Right Column: Dark Broadcast Stage Simulation */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-[#081325] p-6 text-white shadow-2xl border border-slate-800">
              {/* Top Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-1.5 rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-bold text-red-400">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE
                </span>
                <span className="text-xs font-semibold text-white/70">
                  Hybrid Multimodal Viewport
                </span>
              </div>

              {/* Center Content Composition */}
              <div className="my-5 grid grid-cols-12 gap-4 items-center">
                {/* Presenter Avatar Video Box */}
                <div className="col-span-4 flex flex-col items-center justify-center rounded-xl bg-slate-900/90 p-4 border border-white/10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/30 text-3xl">
                    👩🏻‍💼
                  </div>
                  <p className="mt-2 text-xs font-bold text-white">Live Presenter</p>
                  <p className="text-[10px] text-white/60">HD Studio Feed</p>
                </div>

                {/* Slides & Whiteboard Split Stage */}
                <div className="col-span-8 rounded-xl bg-white p-4 text-slate-900 shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[11px] font-bold text-[#1a56db] uppercase">Q2 Strategy Update</span>
                    <span className="text-[10px] text-slate-400">Slide 3 of 12</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-left">
                    <div>
                      <ul className="space-y-1.5 text-[11px] text-slate-700">
                        <li className="flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-600" /> Market expansion
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-600" /> Product innovation
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-600" /> Customer success
                        </li>
                      </ul>
                    </div>
                    {/* Visual Whiteboard Diagram Box */}
                    <div className="rounded-lg border border-slate-100 bg-[#f8fafd] p-2 flex flex-col items-center justify-center text-center">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Whiteboard</p>
                      <p className="text-[11px] font-extrabold text-blue-600 mt-1">Plan → Execute → Grow</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Caption & Audio Wave Bar */}
              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 font-medium text-white/90">
                  <span>English (US) Captions</span>
                  <ArrowRight className="h-3 w-3 text-white/60" />
                </span>

                <div className="flex items-center gap-1">
                  {[20, 45, 80, 100, 60, 40, 90, 70, 30].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full bg-emerald-400 animate-pulse"
                      style={{ height: `${h * 0.16}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
