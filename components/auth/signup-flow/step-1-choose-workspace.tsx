"use client";

import Link from "next/link";
import { useState } from "react";
import { User, Building2, Check, ArrowRight, ShieldCheck } from "lucide-react";

export type WorkspaceType = "individual" | "organization";

export interface Step1ChooseWorkspaceProps {
  onContinue: (workspaceType: WorkspaceType) => void;
  defaultType?: WorkspaceType;
}

export function Step1ChooseWorkspace({
  onContinue,
  defaultType = "individual",
}: Step1ChooseWorkspaceProps) {
  const [selectedType, setSelectedType] = useState<WorkspaceType>(defaultType);

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto py-2">
      {/* Header Info */}
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
          Let&apos;s get started 👋
        </h2>
        <p className="text-sm font-semibold text-text-primary">
          How will you use InclusaAI?
        </p>
        <p className="text-xs text-text-secondary">
          We&apos;ll tailor your experience to match your needs.
        </p>
      </div>

      {/* 2 Workspace Choice Cards Grid */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Card 1: Individual */}
        <div
          onClick={() => setSelectedType("individual")}
          className={`group relative flex flex-col justify-between rounded-2xl border-2 p-5 cursor-pointer transition-all bg-surface-default ${
            selectedType === "individual"
              ? "border-brand-intelligence shadow-md ring-2 ring-brand-intelligence/15"
              : "border-border-default hover:border-border-strong hover:shadow-xs"
          }`}
        >
          {/* Active Checkmark Badge */}
          {selectedType === "individual" && (
            <div className="absolute top-3.5 right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-intelligence text-white shadow-xs">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
          )}

          <div>
            {/* Card Icon */}
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100/80 text-brand-intelligence">
                <User className="h-7 w-7" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mt-3 text-center space-y-1.5">
              <h3 className="text-base font-bold text-text-primary">Individual</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Perfect for teachers, students, speakers, trainers and freelancers.
              </p>
            </div>
          </div>

          {/* Bottom Pill Badge */}
          <div className="mt-5 flex items-center justify-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50/70 py-2 px-3 text-center text-xs font-semibold text-brand-intelligence">
            <User className="h-3.5 w-3.5" />
            <span>Creates a Personal Workspace</span>
          </div>
        </div>

        {/* Card 2: Organization */}
        <div
          onClick={() => setSelectedType("organization")}
          className={`group relative flex flex-col justify-between rounded-2xl border-2 p-5 cursor-pointer transition-all bg-surface-default ${
            selectedType === "organization"
              ? "border-success shadow-md ring-2 ring-success/15"
              : "border-border-default hover:border-border-strong hover:shadow-xs"
          }`}
        >
          {/* Active Checkmark Badge */}
          {selectedType === "organization" && (
            <div className="absolute top-3.5 right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-success text-white shadow-xs">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
          )}

          <div>
            {/* Card Icon */}
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100/80 text-success">
                <Building2 className="h-7 w-7" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mt-3 text-center space-y-1.5">
              <h3 className="text-base font-bold text-text-primary">Organization</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Perfect for companies, schools, churches, universities and government agencies.
              </p>
            </div>
          </div>

          {/* Bottom Pill Badge */}
          <div className="mt-5 flex items-center justify-center gap-1.5 rounded-xl border border-emerald-100 bg-emerald-50/70 py-2 px-3 text-center text-xs font-semibold text-emerald-800">
            <ShieldCheck className="h-3.5 w-3.5 text-success" />
            <span>Creates an Organization Workspace</span>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-6">
        <button
          type="button"
          onClick={() => onContinue(selectedType)}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Divider with 'or' */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border-default/60" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-surface-default px-3 text-text-tertiary">or</span>
        </div>
      </div>

      {/* Back to Sign In Link */}
      <div className="text-center">
        <Link
          href="/signin"
          className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary hover:text-brand-intelligence transition-colors"
        >
          <span>← Back to Sign In</span>
        </Link>
      </div>
    </div>
  );
}
