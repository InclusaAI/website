"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, Mail } from "lucide-react";
import { logoLandscape } from "../../public/assets";

export function ForgotPasswordLeftPanel() {
  return (
    <div className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8">
      {/* Background Portrait Illustration */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FAFD]">
        <Image
          src="/assets/images/website_sign_up_illustration.png"
          alt="InclusaAI security"
          fill
          priority
          className="object-cover object-bottom opacity-85 pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 33.333vw"
        />
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

        <div className="space-y-1.5">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
            Let&apos;s get you{" "}
            <span className="text-brand-intelligence block mt-0.5">
              back in.
            </span>
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed max-w-xs">
            Securely recover your InclusaAI account and continue creating accessible communication experiences.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="rounded-xl border border-border-default/80 bg-white/90 p-2.5 shadow-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-brand-intelligence">
              <ShieldCheck className="h-3.5 w-3.5" />
              <p className="text-[10.5px] font-bold text-slate-900">Your security</p>
            </div>
            <p className="text-[9px] text-text-secondary mt-0.5 leading-tight">
              is our priority
            </p>
          </div>

          <div className="rounded-xl border border-border-default/80 bg-white/90 p-2.5 shadow-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <Clock className="h-3.5 w-3.5" />
              <p className="text-[10.5px] font-bold text-slate-900">Quick & secure</p>
            </div>
            <p className="text-[9px] text-text-secondary mt-0.5 leading-tight">
              recovery process
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
            <p className="text-xs font-bold text-slate-900">Enterprise-grade protection</p>
            <p className="text-[10px] text-text-secondary leading-tight mt-0.5">
              Your data is protected with industry-leading security standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
