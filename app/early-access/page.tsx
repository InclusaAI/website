"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Building2,
  UserCheck,
  ArrowLeft,
} from "lucide-react";
import { logoLandscape, logoLandscapeDarkMode } from "@repo/assets";
import { useTheme } from "../../lib/theme-context";

function EarlyAccessForm() {
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  
  const rawRef = searchParams.get("ref") || searchParams.get("referral") || searchParams.get("source");
  const isKadunaEvent = rawRef?.toLowerCase().includes("kaduna");
  const defaultType = searchParams.get("type") === "partner" ? "partner" : "individual";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState<"individual" | "partner">(defaultType);
  const [organization, setOrganization] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState("direct");

  useEffect(() => {
    if (rawRef) {
      setReferralCode(rawRef);
      try {
        localStorage.setItem("inclusaai_referral", rawRef);
      } catch {}
    } else {
      try {
        const stored = localStorage.getItem("inclusaai_referral");
        if (stored) setReferralCode(stored);
      } catch {}
    }
  }, [rawRef]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const sourceTag = requestType === "partner" ? "partner-early-access" : "early-access";
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: sourceTag,
          referral: referralCode,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Unable to submit request right now.");
      }
    } catch {
      setErrorMessage("Unable to connect. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const logo = theme === "dark" ? logoLandscapeDarkMode : logoLandscape;

  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] text-slate-900">
      {/* Soft Glow Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />

      {/* Top Header Navigation */}
      <header className="w-full border-b border-border-default/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="InclusaAI"
              width={logo.width}
              height={logo.height}
              className="h-10 w-auto object-contain object-left"
              priority
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-brand-intelligence transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {isSuccess ? (
          /* Success Card */
          <div className="rounded-3xl border border-blue-100 bg-white p-8 sm:p-12 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-intelligence border border-blue-200">
                <Sparkles className="h-3.5 w-3.5" /> Early Access Reserved
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                You&apos;re on the priority list! 🎉
              </h1>
              <p className="mx-auto max-w-md text-sm text-text-secondary leading-relaxed">
                Thank you for requesting early access to InclusaAI. We&apos;ve saved <span className="font-semibold text-slate-900">{email}</span> on our list. You&apos;ll be among the first to receive early invite codes and product previews.
              </p>
            </div>

            {isKadunaEvent && (
              <div className="mx-auto max-w-md rounded-2xl bg-blue-50/80 border border-blue-100 p-4 text-xs text-blue-900">
                <p className="font-bold">👋 Thank you for scanning our QR code at Kaduna 10X!</p>
                <p className="mt-1 text-blue-800">Your conference referral code (<span className="font-mono font-semibold">{referralCode}</span>) is recorded for priority onboarding.</p>
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-intelligence px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-all"
              >
                <span>Return to Home Page</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Request Form Card */
          <div className="rounded-3xl border border-border-default/80 bg-white p-6 sm:p-10 shadow-xl space-y-8">
            {/* Header Badge & Titles */}
            <div className="text-center space-y-3">
              {isKadunaEvent ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold text-brand-intelligence shadow-xs">
                  <Sparkles className="h-4 w-4" />
                  <span>Welcome Kaduna 10X Attendees 👋</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold text-brand-intelligence shadow-xs">
                  <Sparkles className="h-4 w-4" />
                  <span>Priority Early Access</span>
                </div>
              )}

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Request Early Access to InclusaAI
              </h1>
              <p className="mx-auto max-w-xl text-sm sm:text-base text-text-secondary leading-relaxed">
                Be among the first individuals and organizations to experience real-time AI sign language interpretation, live captions, and multi-modal accessibility.
              </p>
            </div>

            {/* Type Selector (Individual vs Partner) */}
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-surface-sunken rounded-2xl border border-border-default">
              <button
                type="button"
                onClick={() => setRequestType("individual")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all ${
                  requestType === "individual"
                    ? "bg-white text-slate-900 shadow-sm border border-border-default"
                    : "text-text-secondary hover:text-slate-900"
                }`}
              >
                <UserCheck className="h-4 w-4 text-brand-intelligence" />
                <span>Individual User</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType("partner")}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all ${
                  requestType === "partner"
                    ? "bg-white text-slate-900 shadow-sm border border-border-default"
                    : "text-text-secondary hover:text-slate-900"
                }`}
              >
                <Building2 className="h-4 w-4 text-brand-intelligence" />
                <span>Organization / Partner</span>
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-900 mb-1.5">
                  Full Name (Optional)
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl border border-border-default bg-white px-4 text-sm text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-900 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl border border-border-default bg-white px-4 text-sm text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
                />
              </div>

              {requestType === "partner" && (
                <div>
                  <label htmlFor="organization" className="block text-xs font-semibold text-slate-900 mb-1.5">
                    Organization / Company Name
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Kaduna Tech Hub, University, Conference Name"
                    disabled={isSubmitting}
                    className="w-full h-11 rounded-xl border border-border-default bg-white px-4 text-sm text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
                  />
                </div>
              )}

              {errorMessage && (
                <p className="text-xs text-rose-500 font-medium pt-1">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-brand-intelligence text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin text-white" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>{requestType === "partner" ? "Submit Partnership Request" : "Request Early Access"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Footer Trust Badges */}
            <div className="pt-4 border-t border-border-default/60 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-intelligence" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Priority Onboarding</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function EarlyAccessPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-xs text-text-tertiary">Loading Early Access...</div>}>
      <EarlyAccessForm />
    </Suspense>
  );
}
