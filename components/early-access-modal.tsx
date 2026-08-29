"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Building2,
  UserCheck,
  X,
} from "lucide-react";
import { logoLandscape, logoLandscapeDarkMode } from "@repo/assets";
import { useTheme } from "../lib/theme-context";

export interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "individual" | "partner";
}

export function EarlyAccessModal({
  isOpen,
  onClose,
  initialType = "individual",
}: EarlyAccessModalProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState<"individual" | "partner">(initialType);
  const [organization, setOrganization] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState("direct");
  const [isKadunaEvent, setIsKadunaEvent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (initialType) {
      setRequestType(initialType);
    }
  }, [initialType]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const rawRef = searchParams.get("ref") || searchParams.get("referral") || searchParams.get("source");
      if (rawRef) {
        setReferralCode(rawRef);
        if (rawRef.toLowerCase().includes("kaduna")) {
          setIsKadunaEvent(true);
        }
        try {
          localStorage.setItem("inclusaai_referral", rawRef);
        } catch {}
      } else {
        try {
          const stored = localStorage.getItem("inclusaai_referral");
          if (stored) {
            setReferralCode(stored);
            if (stored.toLowerCase().includes("kaduna")) {
              setIsKadunaEvent(true);
            }
          }
        } catch {}
      }
    }
  }, [isOpen]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (requestType === "partner" && !organization.trim()) {
      setErrorMessage("Please enter your organization or company name.");
      return;
    }

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

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setEmail("");
    setFullName("");
    setOrganization("");
    setErrorMessage(null);
    onClose();
  };

  if (!mounted || !isOpen) return null;

  const logo = theme === "dark" ? logoLandscapeDarkMode : logoLandscape;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-access-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={handleResetAndClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-[10000] w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all animate-in zoom-in-95 duration-200 border border-border-default my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface-sunken text-text-secondary hover:bg-slate-200 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-intelligence"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="text-center space-y-6 py-4 animate-in fade-in duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-intelligence border border-blue-200">
                <Sparkles className="h-3.5 w-3.5" /> Early Access Reserved
              </span>
              <h2 id="early-access-modal-title" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                You&apos;re on the priority list! 🎉
              </h2>
              <p className="mx-auto max-w-sm text-xs sm:text-sm text-text-secondary leading-relaxed">
                Thank you for requesting early access to InclusaAI. We&apos;ve added <span className="font-semibold text-slate-900">{email}</span> to our priority queue.
              </p>
            </div>

            {isKadunaEvent && (
              <div className="mx-auto max-w-sm rounded-2xl bg-blue-50/80 border border-blue-100 p-3.5 text-xs text-blue-900 text-center">
                <p className="font-bold">👋 Thank you for scanning our QR code at Kaduna 10X!</p>
                <p className="mt-0.5 text-blue-800 text-[11px]">Referral tag: <span className="font-mono font-semibold">{referralCode}</span></p>
              </div>
            )}

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full rounded-xl bg-brand-intelligence py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
            >
              Awesome, thanks!
            </button>
          </div>
        ) : (
          /* Request Form */
          <div className="space-y-6">
            {/* Header Info */}
            <div className="space-y-2 text-left pr-8">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="InclusaAI"
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto object-contain object-left"
                />
                {isKadunaEvent && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-brand-intelligence">
                    Kaduna 10X
                  </span>
                )}
              </div>

              <h2 id="early-access-modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                Request Early Access
              </h2>
              <p className="text-xs text-text-secondary leading-relaxed">
                Be among the first to experience real-time AI sign language interpretation, live captions, and multi-modal accessibility.
              </p>
            </div>

            {/* Type Selector Tabs */}
            <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-surface-sunken rounded-2xl border border-border-default">
              <button
                type="button"
                onClick={() => setRequestType("individual")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-2 py-2 text-center transition-all ${
                  requestType === "individual"
                    ? "bg-white text-slate-900 shadow-xs border border-border-default font-semibold"
                    : "text-text-secondary hover:text-slate-900 font-medium"
                }`}
              >
                <UserCheck className="h-4 w-4 shrink-0 text-brand-intelligence" />
                <span className="text-[11px] sm:text-xs leading-tight">Individual</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType("partner")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-2 py-2 text-center transition-all ${
                  requestType === "partner"
                    ? "bg-white text-slate-900 shadow-xs border border-border-default font-semibold"
                    : "text-text-secondary hover:text-slate-900 font-medium"
                }`}
              >
                <Building2 className="h-4 w-4 shrink-0 text-brand-intelligence" />
                <span className="text-[11px] sm:text-xs leading-tight">Partner / Org</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="modalFullName" className="block text-[11px] font-semibold text-slate-900 mb-1">
                  Full Name (Optional)
                </label>
                <input
                  id="modalFullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  className="w-full h-10 rounded-xl border border-border-default bg-white px-3.5 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="modalEmail" className="block text-[11px] font-semibold text-slate-900 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="modalEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  disabled={isSubmitting}
                  className="w-full h-10 rounded-xl border border-border-default bg-white px-3.5 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
                />
              </div>

              {requestType === "partner" && (
                <div>
                  <label htmlFor="modalOrganization" className="block text-[11px] font-semibold text-slate-900 mb-1">
                    Organization / Company Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modalOrganization"
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Company, University, Event Name"
                    disabled={isSubmitting}
                    className="w-full h-10 rounded-xl border border-border-default bg-white px-3.5 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
                  />
                </div>
              )}

              {errorMessage && (
                <p className="text-xs text-rose-500 font-medium">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-xl bg-brand-intelligence text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>{requestType === "partner" ? "Submit Partnership Request" : "Request Early Access"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 flex items-center justify-between text-[11px] text-text-tertiary">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-intelligence" /> Enterprise Security
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Priority Access
              </span>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
