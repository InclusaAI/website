"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Hand, ShieldCheck } from "lucide-react";
import { logoLandscape } from "@repo/assets";

export function AuthLeftBrandPanel() {
  return (
    <div className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8">
      {/* Background Portrait Illustration covering the left 1/3 panel */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FAFD]">
        <Image
          src="/assets/images/website_sign_up_illustration.png"
          alt="InclusaAI inclusive communication illustration"
          fill
          priority
          className="object-cover object-center pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 33.333vw"
        />
        {/* Soft top gradient overlay to ensure header text readability */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/95 via-white/50 to-transparent pointer-events-none -z-10" />
      </div>

      {/* Top Header & Branding */}
      <div className="relative z-10 space-y-4">
        <Link href="/" className="inline-block">
          <Image
            src={logoLandscape}
            alt="InclusaAI"
            width={logoLandscape.width}
            height={logoLandscape.height}
            priority
            className="h-10 sm:h-9 w-auto object-contain object-left"
          />
        </Link>

        {/* Heading & Description */}
        <div className="space-y-2">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.65rem] lg:leading-[1.2]">
            Everyone has a place in the conversation.{" "}
            <span className="text-brand-intelligence block mt-0.5">
              Your way. Your experience.
            </span>
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
            Whether you&apos;re here to share knowledge or experience it, InclusaAI makes
            every conversation more accessible, inclusive, and engaging.
          </p>
        </div>

        {/* 3 Mini Feature Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-0.5">
          {/* Live Captions */}
          <div className="flex items-center gap-1.5 rounded-lg border border-border-default/90 bg-white/90 px-2.5 py-1 shadow-xs backdrop-blur-sm">
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-purple-100 text-purple-600 font-bold text-[8.5px]">
              CC
            </span>
            <div>
              <p className="text-[10.5px] font-bold text-slate-900 leading-tight">Live Captions</p>
              <p className="text-[8.5px] text-text-tertiary">Real-time text</p>
            </div>
          </div>

          {/* Translation */}
          <div className="flex items-center gap-1.5 rounded-lg border border-border-default/90 bg-white/90 px-2.5 py-1 shadow-xs backdrop-blur-sm">
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-teal-100 text-teal-600">
              <Globe className="h-3 w-3" />
            </span>
            <div>
              <p className="text-[10.5px] font-bold text-slate-900 leading-tight">Translation</p>
              <p className="text-[8.5px] text-text-tertiary">Multiple languages</p>
            </div>
          </div>

          {/* Sign Language */}
          <div className="flex items-center gap-1.5 rounded-lg border border-border-default/90 bg-white/90 px-2.5 py-1 shadow-xs backdrop-blur-sm">
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded bg-indigo-100 text-indigo-600">
              <Hand className="h-3 w-3" />
            </span>
            <div>
              <p className="text-[10.5px] font-bold text-slate-900 leading-tight">Sign Language</p>
              <p className="text-[8.5px] text-text-tertiary">AI interpreters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Privacy Banner */}
      <div className="relative z-10 mt-auto pt-4">
        <div className="flex items-center gap-2.5 rounded-xl border border-blue-200/80 bg-white/90 p-3 shadow-xs backdrop-blur-md">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-intelligence">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-[11.5px] font-bold text-slate-900">Your privacy matters</h4>
            <p className="text-[10px] text-text-secondary leading-tight mt-0.5">
              We use industry-leading security standards to protect your data and privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
