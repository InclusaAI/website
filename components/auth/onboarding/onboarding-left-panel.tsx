"use client";

import Link from "next/link";
import Image from "next/image";
import { logoLandscape } from "@repo/assets";

export function OnboardingLeftBrandPanel() {
  return (
    <div className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8">
      {/* Background Portrait Illustration */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FAFD]">
        <Image
          src="/assets/images/website_sign_up_illustration.png"
          alt="InclusaAI inclusive communication"
          fill
          priority
          className="object-cover object-center pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 33.333vw"
        />
        {/* Soft top gradient overlay to ensure header text readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/95 via-white/50 to-transparent pointer-events-none -z-10" />
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
            className="h-8 sm:h-9 w-auto object-contain object-left"
          />
        </Link>

        {/* Heading & Description */}
        <div className="space-y-2">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
            Communication without barriers.{" "}
            <span className="text-brand-intelligence block mt-0.5">
              Understanding without limits.
            </span>
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
            AI-powered presentations and conversations that are inclusive, accessible,
            and designed for everyone.
          </p>
        </div>
      </div>

      {/* Bottom Subtle Trust Note */}
      <div className="relative z-10 mt-auto pt-4">
        <div className="rounded-xl border border-border-default/80 bg-white/90 p-3 shadow-xs backdrop-blur-md">
          <p className="text-[10.5px] font-semibold text-slate-800">
            🔒 Enterprise-grade privacy & security built-in.
          </p>
        </div>
      </div>
    </div>
  );
}
