"use client";

import Link from "next/link";
import Image from "next/image";
import { Subtitles, Globe, Hand, ShieldCheck } from "lucide-react";
import { logoLandscape } from "@repo/assets";

export function AuthLeftBrandPanel() {
  return (
    <div className="flex h-full flex-col justify-between space-y-6">
      {/* Top Brand Logo */}
      <div>
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

        {/* Headline & Description */}
        <div className="mt-8 space-y-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            Everyone has a place in the conversation.{" "}
            <span className="text-brand-intelligence block mt-1">
              Your way. Your experience.
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md">
            Whether you&apos;re here to share knowledge or experience it, InclusaAI makes
            every conversation more accessible, inclusive, and engaging.
          </p>
        </div>

        {/* 3 Mini Feature Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {/* Live Captions */}
          <div className="flex items-center gap-2 rounded-xl border border-border-default/80 bg-white px-3 py-2 shadow-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-100 text-purple-600 font-bold text-[10px]">
              CC
            </span>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Live Captions</p>
              <p className="text-[10px] text-text-tertiary">Real-time text</p>
            </div>
          </div>

          {/* Translation */}
          <div className="flex items-center gap-2 rounded-xl border border-border-default/80 bg-white px-3 py-2 shadow-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
              <Globe className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Translation</p>
              <p className="text-[10px] text-text-tertiary">Multiple languages</p>
            </div>
          </div>

          {/* Sign Language */}
          <div className="flex items-center gap-2 rounded-xl border border-border-default/80 bg-white px-3 py-2 shadow-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <Hand className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Sign Language</p>
              <p className="text-[10px] text-text-tertiary">AI interpreters</p>
            </div>
          </div>
        </div>

        {/* Center Main Illustration */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-[400px]">
            <Image
              src="/assets/images/website_sign_up_illustration.png"
              alt="InclusaAI audience and presenter illustration"
              width={600}
              height={400}
              priority
              className="h-auto w-full object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Bottom Privacy Banner */}
      <div className="mt-6 flex items-center gap-3.5 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-brand-intelligence">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900">Your privacy matters</h4>
          <p className="text-[11px] text-text-secondary leading-snug mt-0.5">
            We use industry-leading security standards to protect your data and privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
