"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
import { logoLandscape, logoLandscapeDarkMode } from "../public/assets";
import { useTheme } from "@inclusaai/ui/theme-context";
import { Button } from "@inclusaai/ui/button";
import { Badge } from "@inclusaai/ui/badge";
import { Modal } from "@inclusaai/ui/modal";

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

  if (!mounted) return null;

  const logo = theme === "dark" ? logoLandscapeDarkMode : logoLandscape;

  return (
    <Modal isOpen={isOpen} onClose={handleResetAndClose} size="md">
      {isSuccess ? (
        /* Success Screen */
        <div className="text-center space-y-6 py-2 animate-in fade-in duration-300">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-center">
              <Badge variant="outline" className="gap-1.5 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-intelligence border-blue-200">
                <Sparkles className="h-3.5 w-3.5" /> Early Access Reserved
              </Badge>
            </div>
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

          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleResetAndClose}
          >
            Awesome, thanks!
          </Button>
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
                <Badge variant="outline" className="gap-1 bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-brand-intelligence border-transparent">
                  Kaduna 10X
                </Badge>
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
          <div className="relative grid grid-cols-2 p-1.5 bg-surface-sunken rounded-2xl border border-border-default overflow-hidden">
            <Button
              type="button"
              variant={requestType === "individual" ? "outline" : "ghost"}
              size="sm"
              onClick={() => setRequestType("individual")}
              leftIcon={<UserCheck className="h-4 w-4 shrink-0 text-brand-intelligence" />}
              className="z-10 text-xs"
            >
              Individual
            </Button>

            <Button
              type="button"
              variant={requestType === "partner" ? "outline" : "ghost"}
              size="sm"
              onClick={() => setRequestType("partner")}
              leftIcon={<Building2 className="h-4 w-4 shrink-0 text-brand-intelligence" />}
              className="z-10 text-xs"
            >
              Partner / Org
            </Button>
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

            {/* Organization Field */}
            <div
              className={`overflow-hidden transition-[max-height,opacity,transform] duration-200 ease-out ${
                requestType === "partner"
                  ? "max-h-28 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <label htmlFor="modalOrganization" className="block text-[11px] font-semibold text-slate-900 mb-1">
                Organization / Company Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="modalOrganization"
                type="text"
                required={requestType === "partner"}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Company, University, Event Name"
                disabled={isSubmitting}
                className="w-full h-10 rounded-xl border border-border-default bg-white px-3.5 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-colors"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-rose-500 font-medium">
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              leftIcon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin text-white" /> : undefined}
              rightIcon={!isSubmitting ? <ArrowRight className="h-4 w-4" /> : undefined}
              className="mt-2"
            >
              {isSubmitting ? "Submitting..." : (requestType === "partner" ? "Submit Partnership Request" : "Request Early Access")}
            </Button>
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
    </Modal>
  );
}
