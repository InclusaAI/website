"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Hand, ShieldCheck } from "lucide-react";
import { logoLandscape } from "@repo/assets";

export function AuthLeftBrandPanel() {
  return (
    <div className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10">
      {/* Background Illustration covering the left side */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F8FAFD] via-white/80 to-[#F8FAFD]">
        <Image
          src="/assets/images/website_sign_up_illustration.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom opacity-90 pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        {/* Subtle top gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD]/95 via-[#F8FAFD]/60 to-transparent h-1/2 -z-10 pointer-events-none" />
      </div>

      {/* Top Header & Branding */}
      <div className="relative z-10 space-y-5">
        <Link href="/" className="inline-block">
          <Image
            src={logoLandscape}
            alt="InclusaAI"
            width={logoLandscape.width}
            height={logoLandscape.height}
            priority
            className="h-10 w-auto object-contain object-left"
          />
        </Link>

        {/* Heading & Description */}
        <div className="space-y-2.5">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[1.85rem] lg:leading-[1.2]">
            Everyone has a place in the conversation.{" "}
            <span className="text-brand-intelligence block mt-1">
              Your way. Your experience.
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
            Whether you&apos;re here to share knowledge or experience it, InclusaAI makes
            every conversation more accessible, inclusive, and engaging.
          </p>
        </div>

        {/* 3 Mini Feature Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {/* Live Captions */}
          <div className="flex items-center gap-2 rounded-xl border border-border-default/90 bg-white/90 px-3 py-1.5 shadow-xs backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-100 text-purple-600 font-bold text-[9px]">
              CC
            </span>
            <div>
              <p className="text-[11px] font-bold text-slate-900 leading-tight">Live Captions</p>
              <p className="text-[9px] text-text-tertiary">Real-time text</p>
            </div>
          </div>

          {/* Translation */}
          <div className="flex items-center gap-2 rounded-xl border border-border-default/90 bg-white/90 px-3 py-1.5 shadow-xs backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-100 text-teal-600">
              <Globe className="h-3 w-3" />
            </span>
            <div>
              <p className="text-[11px] font-bold text-slate-900 leading-tight">Translation</p>
              <p className="text-[9px] text-text-tertiary">Multiple languages</p>
            </div>
          </div>

          {/* Sign Language */}
          <div className="flex items-center gap-2 rounded-xl border border-border-default/90 bg-white/90 px-3 py-1.5 shadow-xs backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
              <Hand className="h-3 w-3" />
            </span>
            <div>
              <p className="text-[11px] font-bold text-slate-900 leading-tight">Sign Language</p>
              <p className="text-[9px] text-text-tertiary">AI interpreters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Privacy Banner */}
      <div className="relative z-10 mt-auto pt-6">
        <div className="flex items-center gap-3 rounded-2xl border border-blue-200/80 bg-white/90 p-3.5 shadow-sm backdrop-blur-md">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-intelligence">
            <ShieldCheck className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Your privacy matters</h4>
            <p className="text-[10.5px] text-text-secondary leading-tight mt-0.5">
              We use industry-leading security standards to protect your data and privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
