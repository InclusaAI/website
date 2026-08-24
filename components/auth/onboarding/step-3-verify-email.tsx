"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Send,
  Clock,
  ExternalLink,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  Pencil,
  CheckCircle2,
} from "lucide-react";

export interface Step3VerifyEmailProps {
  email: string;
  onBack: () => void;
  onContinue: () => void;
  onEditEmail: () => void;
}

export function Step3VerifyEmail({
  email = "john.doe@example.com",
  onBack,
  onContinue,
  onEditEmail,
}: Step3VerifyEmailProps) {
  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(47);
  const [canResend, setCanResend] = useState(false);
  const [expiresSeconds, setExpiresSeconds] = useState(600); // 10:00
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Resend Countdown Timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  // Code Expiry Countdown Timer
  useEffect(() => {
    if (expiresSeconds > 0) {
      const timer = setTimeout(() => setExpiresSeconds(expiresSeconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [expiresSeconds]);

  function formatTime(secs: number) {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remaining.toString().padStart(2, "0")}`;
  }

  function handleDigitChange(index: number, value: string) {
    // If pasted multiple digits
    if (value.length > 1) {
      const pasted = value.replace(/\D/g, "").slice(0, 6).split("");
      const newDigits = [...digits];
      pasted.forEach((char, i) => {
        if (i < 6) newDigits[i] = char;
      });
      setDigits(newDigits);
      const nextIdx = Math.min(pasted.length, 5);
      inputRefs.current[nextIdx]?.focus();

      if (newDigits.every((d) => d !== "")) {
        setTimeout(onContinue, 400);
      }
      return;
    }

    const cleanChar = value.replace(/\D/g, "");
    const newDigits = [...digits];
    newDigits[index] = cleanChar;
    setDigits(newDigits);

    // Auto advance
    if (cleanChar && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto trigger continue if all 6 filled
    if (cleanChar && index === 5 && newDigits.every((d) => d !== "")) {
      setTimeout(onContinue, 400);
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handleResend() {
    if (!canResend) return;
    setDigits(["", "", "", "", "", ""]);
    setCountdown(60);
    setCanResend(false);
    setExpiresSeconds(600);
    inputRefs.current[0]?.focus();
  }

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto py-1 space-y-4">
      {/* Header Info */}
      <div className="space-y-0.5 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
          Verify your email ✉️
        </h2>
        <p className="text-xs text-text-secondary">
          We&apos;ve sent a 6-digit verification code to the email address below.
        </p>
      </div>

      {/* Email Sent Info Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-[#F8FAFD] p-3.5 shadow-xs">
        <div className="flex items-center gap-3">
          {/* Mail Icon Circle */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-intelligence">
            <Mail className="h-5 w-5" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white text-[9px] shadow-xs">
              <Send className="h-2.5 w-2.5" />
            </span>
          </div>

          {/* Sent to Details */}
          <div>
            <p className="text-[10px] uppercase font-bold text-text-tertiary">Sent to</p>
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold text-slate-900">{email}</p>
              <button
                type="button"
                onClick={onEditEmail}
                className="inline-flex items-center gap-0.5 text-[10.5px] font-semibold text-brand-intelligence hover:underline"
              >
                <span>Edit</span>
                <Pencil className="h-2.5 w-2.5" />
              </button>
            </div>
            <p className="text-[10px] text-text-secondary">
              Enter the 6-digit code we sent to your email.
            </p>
          </div>
        </div>

        {/* Right Status */}
        <div className="sm:text-right flex flex-col sm:items-end gap-0.5 text-[10.5px]">
          <span className="flex items-center gap-1 font-bold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Code sent!
          </span>
          <p className="text-[10px] text-text-tertiary">
            If you don&apos;t see it, check your spam folder.
          </p>
          <span className="flex items-center gap-1 font-medium text-text-secondary pt-0.5">
            <Clock className="h-3 w-3 text-text-tertiary" />
            Expires in {formatTime(expiresSeconds)}
          </span>
        </div>
      </div>

      {/* 6-Digit OTP Code Inputs */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-900">
          Enter verification code
        </label>
        <div className="grid grid-cols-6 gap-2 sm:gap-3">
          {digits.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={digit}
              onChange={(e) => handleDigitChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className={`h-12 w-full rounded-xl border-2 bg-white text-center text-lg font-extrabold text-slate-900 transition-all focus:outline-none ${
                digit
                  ? "border-brand-intelligence shadow-xs ring-1 ring-brand-intelligence/20"
                  : "border-border-default hover:border-border-strong focus:border-brand-intelligence"
              }`}
            />
          ))}
        </div>

        {/* Resend Controls Row */}
        <div className="flex items-center justify-between pt-1 text-[11px]">
          <span className="text-text-secondary">Didn&apos;t receive the code?</span>
          <div className="flex items-center gap-2">
            {!canResend && (
              <span className="text-text-tertiary">
                Resend code in{" "}
                <span className="font-bold text-brand-intelligence">
                  {formatTime(countdown)}
                </span>
              </span>
            )}
            <button
              type="button"
              disabled={!canResend}
              onClick={handleResend}
              className="inline-flex items-center gap-1 font-bold text-brand-intelligence hover:underline disabled:cursor-not-allowed disabled:text-text-tertiary disabled:no-underline"
            >
              <Send className="h-3 w-3" />
              <span>Resend Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access to Email Provider Buttons */}
      <div className="space-y-1.5 pt-1">
        <div>
          <p className="text-xs font-bold text-slate-900">Quick access to your email</p>
          <p className="text-[10.5px] text-text-secondary">
            Open your inbox to find the verification code.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2.5 pt-1">
          {/* Gmail */}
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border-default bg-white p-2.5 shadow-xs hover:border-border-strong hover:bg-surface-sunken/40 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">📧</span>
              <span className="text-xs font-bold text-slate-900">Gmail</span>
            </div>
            <ExternalLink className="h-3 w-3 text-text-tertiary" />
          </a>

          {/* Outlook */}
          <a
            href="https://outlook.live.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border-default bg-white p-2.5 shadow-xs hover:border-border-strong hover:bg-surface-sunken/40 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">📬</span>
              <span className="text-xs font-bold text-slate-900">Outlook</span>
            </div>
            <ExternalLink className="h-3 w-3 text-text-tertiary" />
          </a>

          {/* Yahoo Mail */}
          <a
            href="https://mail.yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border-default bg-white p-2.5 shadow-xs hover:border-border-strong hover:bg-surface-sunken/40 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">✉️</span>
              <span className="text-xs font-bold text-slate-900">Yahoo Mail</span>
            </div>
            <ExternalLink className="h-3 w-3 text-text-tertiary" />
          </a>
        </div>
      </div>

      {/* Need Help Card */}
      <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/50 p-3 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <HelpCircle className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Need help?</h4>
            <p className="text-[10px] text-text-secondary">
              View our troubleshooting guide for common issues.
            </p>
          </div>
        </div>

        <a
          href="/#"
          className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 hover:underline"
        >
          <span>View Guide</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Primary Action Button (Manual continue if needed) */}
      <button
        type="button"
        disabled={digits.some((d) => d === "")}
        onClick={onContinue}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span>Continue</span>
        <ArrowRight className="h-4 w-4" />
      </button>

      {/* Footer Info */}
      <p className="text-center text-[10.5px] text-text-tertiary">
        You can close this window. We&apos;ll keep checking your verification status.
      </p>
    </div>
  );
}
