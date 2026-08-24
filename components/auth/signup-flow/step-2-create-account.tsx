"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  User,
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { WorkspaceType } from "./step-1-choose-workspace";

export interface Step2CreateAccountProps {
  role?: "audience" | "presenter";
  workspaceType?: WorkspaceType;
  onBack: () => void;
  onContinue: (formData: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
}

export function Step2CreateAccount({
  role = "presenter",
  workspaceType = "individual",
  onBack,
  onContinue,
}: Step2CreateAccountProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

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
    if (passed <= 1) return { score: 1, label: "Weak", color: "bg-error", text: "text-error" };
    if (passed <= 3) return { score: 2, label: "Fair", color: "bg-warning", text: "text-warning" };
    if (passed === 4) return { score: 3, label: "Good", color: "bg-brand-intelligence", text: "text-brand-intelligence" };
    return { score: 4, label: "Strong", color: "bg-success", text: "text-success" };
  }, [rules]);

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  const isFormValid =
    fullName.trim().length > 0 &&
    isEmailValid &&
    password.length >= 8 &&
    password === confirmPassword &&
    agreedToTerms;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) return;
    onContinue({ fullName, email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full max-w-2xl mx-auto py-1">
      {/* Header Info */}
      <div className="space-y-0.5 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
          Create your account ✨
        </h2>
        <p className="text-xs text-text-secondary">
          Create your InclusaAI account to continue.
        </p>
      </div>

      {/* Selected Workspace Confirmation Banner (Presenter only) */}
      {role === "presenter" && (
        <div className="mt-3.5 flex items-center justify-between rounded-xl border border-blue-100 bg-surface-sunken/60 p-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                workspaceType === "organization"
                  ? "bg-emerald-100/80 text-success"
                  : "bg-blue-100/80 text-brand-intelligence"
              }`}
            >
              {workspaceType === "organization" ? (
                <Building2 className="h-5 w-5" />
              ) : (
                <User className="h-5 w-5" />
              )}
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-text-tertiary">Workspace</p>
              <p className="text-xs font-bold text-text-primary">
                {workspaceType === "organization"
                  ? "Organization Workspace"
                  : "Individual Workspace"}
              </p>
              <p className="text-[10.5px] text-text-secondary">
                {workspaceType === "organization"
                  ? "Organization workspace for teams"
                  : "Personal workspace for presenters"}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[10.5px] text-text-tertiary">Need to change this?</p>
            <button
              type="button"
              onClick={onBack}
              className="text-[11px] font-bold text-brand-intelligence hover:underline cursor-pointer"
            >
              Go back to choose
            </button>
          </div>
        </div>
      )}

      {/* Form Fields Grid */}
      <div className="mt-3.5 space-y-3">
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-text-primary">Full Name</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-text-tertiary">
                <User className="h-4 w-4" />
              </span>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="h-10 w-full rounded-xl border border-border-default bg-surface-default pl-9 pr-3 text-xs text-text-primary placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-text-primary">Email Address</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-text-tertiary">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-10 w-full rounded-xl border border-border-default bg-surface-default pl-9 pr-3 text-xs text-text-primary placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Password & Confirm Password */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Password */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-text-primary">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-text-tertiary">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                className="h-10 w-full rounded-xl border border-border-default bg-surface-default pl-9 pr-10 text-xs text-text-primary placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20"
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

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-text-primary">Confirm Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-text-tertiary">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="h-10 w-full rounded-xl border border-border-default bg-surface-default pl-9 pr-10 text-xs text-text-primary placeholder:text-text-tertiary focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-text-tertiary hover:text-text-primary"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Strength Indicator & Criteria Grid */}
      <div className="mt-3 space-y-2 rounded-xl bg-surface-sunken/50 p-3 border border-border-default/50">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-medium text-text-secondary">Password strength:</span>
          <span className={`font-bold ${strengthScore.text}`}>{strengthScore.label}</span>
        </div>

        {/* 4-Segment Strength Bar */}
        <div className="grid grid-cols-4 gap-1.5 h-1.5">
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`rounded-full transition-colors ${
                strengthScore.score >= bar ? strengthScore.color : "bg-surface-sunken border border-border-default"
              }`}
            />
          ))}
        </div>

        {/* Live Criteria Checklist in 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 text-[10.5px]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2
              className={`h-3.5 w-3.5 ${
                rules.minLength ? "text-success" : "text-border-strong"
              }`}
            />
            <span className={rules.minLength ? "text-text-primary font-medium" : "text-text-tertiary"}>
              At least 8 characters
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2
              className={`h-3.5 w-3.5 ${
                rules.hasNumber ? "text-success" : "text-border-strong"
              }`}
            />
            <span className={rules.hasNumber ? "text-text-primary font-medium" : "text-text-tertiary"}>
              One number (0–9)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2
              className={`h-3.5 w-3.5 ${
                rules.hasUpper ? "text-success" : "text-border-strong"
              }`}
            />
            <span className={rules.hasUpper ? "text-text-primary font-medium" : "text-text-tertiary"}>
              One uppercase letter (A–Z)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2
              className={`h-3.5 w-3.5 ${
                rules.hasSpecial ? "text-success" : "text-border-strong"
              }`}
            />
            <span className={rules.hasSpecial ? "text-text-primary font-medium" : "text-text-tertiary"}>
              One special character (!@#$%^&*)
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2
              className={`h-3.5 w-3.5 ${
                rules.hasLower ? "text-success" : "text-border-strong"
              }`}
            />
            <span className={rules.hasLower ? "text-text-primary font-medium" : "text-text-tertiary"}>
              One lowercase letter (a–z)
            </span>
          </div>
        </div>
      </div>

      {/* Terms Agreement Checkbox */}
      <div className="mt-3 flex items-start gap-2 text-[11px] text-text-secondary">
        <input
          id="terms"
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 rounded border-border-strong text-brand-intelligence focus:ring-1 focus:ring-brand-intelligence cursor-pointer"
        />
        <label htmlFor="terms" className="cursor-pointer">
          I agree to the{" "}
          <Link href="/#" className="font-semibold text-brand-intelligence hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/#" className="font-semibold text-brand-intelligence hover:underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {/* Primary Action Button */}
      <div className="mt-4">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all ${
            isFormValid
              ? "bg-brand-intelligence shadow-md hover:bg-primary-hover hover:shadow-lg cursor-pointer"
              : "bg-surface-sunken text-text-tertiary border border-border-default opacity-70 cursor-not-allowed"
          }`}
        >
          <span>Create Account</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Divider with 'or' */}
      <div className="relative my-2.5">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border-default/60" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-surface-default px-2.5 text-[10.5px] text-text-tertiary">or</span>
        </div>
      </div>

      {/* Sign In Link */}
      <div className="text-center text-[11px] text-text-secondary">
        Already have an account?{" "}
        <Link href="/signin" className="font-bold text-brand-intelligence hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  );
}
