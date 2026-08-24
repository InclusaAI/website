"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, ArrowRight, ArrowLeft, Info, CheckCircle2 } from "lucide-react";
import { AuthTopBar } from "./auth-top-bar";

export function ForgotPasswordCard() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden">
      {/* Top Header Row with Top Controls */}
      <div className="shrink-0 flex justify-end">
        <AuthTopBar />
      </div>

      {/* Main Center Content */}
      <div className="my-auto flex w-full max-w-lg mx-auto flex-col justify-center py-2 space-y-4">
        <div className="space-y-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Forgot your password?
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Enter the email address associated with your InclusaAI account and we&apos;ll send you instructions to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold text-slate-900">
              Email address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-text-tertiary">
                <Mail className="h-4 w-4" />
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11 w-full rounded-xl border border-border-default bg-white pl-10 pr-3 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20 shadow-xs"
              />
            </div>
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
          >
            <span>Send reset link</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* OR Divider */}
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border-default/60" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-[11px] font-semibold text-text-tertiary">
                OR
              </span>
            </div>
          </div>

          {/* Recover with Google */}
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-border-default bg-white text-xs font-semibold text-slate-800 shadow-xs hover:bg-surface-sunken/40 transition-all"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Recover with Google</span>
          </button>

          {/* Info Check Your Email Banner */}
          <div className="flex items-start gap-2.5 rounded-2xl border border-blue-100 bg-[#F8FAFD] p-3.5 text-xs text-text-secondary shadow-xs">
            <Info className="h-4 w-4 shrink-0 text-brand-intelligence mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">Check your email</p>
              <p className="text-[11px] leading-relaxed mt-0.5">
                If an InclusaAI account is associated with that address, you&apos;ll receive instructions to reset your password.
              </p>
            </div>
          </div>
        </form>

        {/* Back to Sign In */}
        <div className="pt-2">
          <Link
            href="/signin"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-brand-intelligence transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
