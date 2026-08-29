"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Subtitles,
  Users,
  Hand,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { logoLandscape } from "../../../public/assets";

export interface OnboardingLeftBrandPanelProps {
  step?: number;
}

export function OnboardingLeftBrandPanel({ step = 1 }: OnboardingLeftBrandPanelProps) {
  const isPersonalizeStep = step === 4;
  const isVerifyStep = step === 3;

  return (
    <div className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8">
      {/* Background Portrait Illustration */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FAFD]">
        <Image
          src="/assets/images/website_sign_up_illustration.png"
          alt="InclusaAI inclusive communication"
          fill
          priority
          className="object-cover object-bottom opacity-85 pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 33.333vw"
        />
        {/* Soft top gradient overlay to ensure header text readability */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/95 via-white/60 to-transparent pointer-events-none -z-10" />
      </div>

      {/* Top Header & Branding */}
      <div className="relative z-10 space-y-3.5">
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
        <div className="space-y-1.5">
          {isPersonalizeStep ? (
            <>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
                Make InclusaAI{" "}
                <span className="text-brand-intelligence block mt-0.5">
                  work for you.
                </span>
              </h1>
              <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
                Tell us your preferences and accessibility needs so we can personalize your
                experience across every presentation.
              </p>
            </>
          ) : isVerifyStep ? (
            <>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
                You&apos;re{" "}
                <span className="text-brand-intelligence">almost</span> there.
              </h1>
              <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
                Verify your email to activate your workspace and continue your journey.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.65rem] lg:leading-[1.2]">
                Communication without barriers.{" "}
                <span className="text-brand-intelligence block mt-0.5">
                  Understanding without limits.
                </span>
              </h1>
              <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
                AI-powered presentations and conversations that are inclusive, accessible,
                and designed for everyone.
              </p>
            </>
          )}
        </div>

        {/* 4 Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Card 1 */}
          <div className="rounded-xl border border-border-default/80 bg-white/90 p-2.5 shadow-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-brand-intelligence">
              <Subtitles className="h-3.5 w-3.5" />
              <p className="text-[10.5px] font-bold text-slate-900">Live Transcription</p>
            </div>
            <p className="text-[9px] text-text-secondary mt-0.5 leading-tight">
              Accurate real-time speech to text.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-border-default/80 bg-white/90 p-2.5 shadow-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-purple-600">
              <Users className="h-3.5 w-3.5" />
              <p className="text-[10.5px] font-bold text-slate-900">Inclusive for All</p>
            </div>
            <p className="text-[9px] text-text-secondary mt-0.5 leading-tight">
              Accessible for every audience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-border-default/80 bg-white/90 p-2.5 shadow-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-indigo-600">
              <Hand className="h-3.5 w-3.5" />
              <p className="text-[10.5px] font-bold text-slate-900">AI Sign Language</p>
            </div>
            <p className="text-[9px] text-text-secondary mt-0.5 leading-tight">
              Real-time sign language avatars.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-border-default/80 bg-white/90 p-2.5 shadow-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-teal-600">
              <Globe className="h-3.5 w-3.5" />
              <p className="text-[10.5px] font-bold text-slate-900">Anytime, Anywhere</p>
            </div>
            <p className="text-[9px] text-text-secondary mt-0.5 leading-tight">
              Hybrid-ready for virtual & events.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Security Card */}
      <div className="relative z-10 mt-auto pt-3">
        <div className="flex items-center gap-2.5 rounded-xl border border-blue-200/80 bg-white/95 p-3 shadow-xs backdrop-blur-md">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-intelligence">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary leading-tight">
              Your information is safe and secure. You can always update your preferences later in Settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
