"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Lock, Eye, EyeOff, CheckCircle2, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { AuthTopBar } from "./auth-top-bar";

export function ResetPasswordCard() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Live password validation rules
  const rules = useMemo(() => {
    return {
      minLength: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
  }, [password]);

  // Strength score
  const strengthScore = useMemo(() => {
    const passed = Object.values(rules).filter(Boolean).length;
    if (passed <= 1) return { score: 1, label: "Weak", color: "bg-red-500", text: "text-red-600" };
    if (passed <= 3) return { score: 2, label: "Fair", color: "bg-amber-500", text: "text-amber-600" };
    if (passed === 4) return { score: 3, label: "Good", color: "bg-blue-500", text: "text-blue-600" };
    return { score: 4, label: "Strong", color: "bg-emerald-500", text: "text-emerald-600" };
  }, [rules]);

  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const isFormValid = rules.minLength && passwordsMatch;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSuccess(true);
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden">
      {/* Top Header Row with Top Controls */}
      <div className="shrink-0 flex justify-end">
        <AuthTopBar />
      </div>

      {/* Main Center Content */}
      <div className="my-auto flex w-full max-w-lg mx-auto flex-col justify-center py-2 space-y-3.5">
        <div className="space-y-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Create a new password
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Choose a strong password for your InclusaAI account. Make sure it&apos;s something you can remember.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 pt-1">
          {/* New Password */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-900">New password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-10 w-full rounded-xl border border-border-default bg-white pl-3.5 pr-10 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20 shadow-xs"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-text-tertiary hover:text-text-primary"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Password Strength Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-text-secondary font-medium">Password strength:</span>
              <span className={`font-bold ${strengthScore.text}`}>{strengthScore.label}</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 h-1.5">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`rounded-full transition-colors ${
                    strengthScore.score >= bar ? strengthScore.color : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Requirements Checklist Box */}
          <div className="space-y-1.5 rounded-xl bg-surface-sunken/40 p-3 border border-border-default/60 text-[10.5px]">
            <p className="font-bold text-slate-900">Your password must contain:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-0.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  className={`h-3.5 w-3.5 ${
                    rules.minLength ? "text-emerald-600" : "text-slate-300"
                  }`}
                />
                <span className={rules.minLength ? "text-slate-900 font-medium" : "text-text-tertiary"}>
                  At least 8 characters
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  className={`h-3.5 w-3.5 ${
                    rules.hasNumber ? "text-emerald-600" : "text-slate-300"
                  }`}
                />
                <span className={rules.hasNumber ? "text-slate-900 font-medium" : "text-text-tertiary"}>
                  One number (0–9)
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  className={`h-3.5 w-3.5 ${
                    rules.hasUpper ? "text-emerald-600" : "text-slate-300"
                  }`}
                />
                <span className={rules.hasUpper ? "text-slate-900 font-medium" : "text-text-tertiary"}>
                  One uppercase letter (A–Z)
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  className={`h-3.5 w-3.5 ${
                    rules.hasSpecial ? "text-emerald-600" : "text-slate-300"
                  }`}
                />
                <span className={rules.hasSpecial ? "text-slate-900 font-medium" : "text-text-tertiary"}>
                  One special character (!@#$%^&*)
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  className={`h-3.5 w-3.5 ${
                    rules.hasLower ? "text-emerald-600" : "text-slate-300"
                  }`}
                />
                <span className={rules.hasLower ? "text-slate-900 font-medium" : "text-text-tertiary"}>
                  One lowercase letter (a–z)
                </span>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-900">Confirm password</label>
            <div className="relative flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-10 w-full rounded-xl border border-border-default bg-white pl-3.5 pr-10 text-xs text-slate-900 placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20 shadow-xs"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-text-tertiary hover:text-text-primary"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {passwordsMatch && (
              <p className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 pt-0.5">
                <Check className="h-3 w-3" />
                <span>Passwords match</span>
              </p>
            )}
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Reset Password</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Back to Sign In */}
        <div className="flex items-center justify-between pt-1">
          <Link
            href="/signin"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-brand-intelligence transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Sign In</span>
          </Link>
        </div>

        <p className="text-[10px] text-text-tertiary leading-tight pt-1">
          🔒 If you didn&apos;t request a password reset, you can safely ignore this page or{" "}
          <Link href="/#" className="font-semibold text-brand-intelligence hover:underline">
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
