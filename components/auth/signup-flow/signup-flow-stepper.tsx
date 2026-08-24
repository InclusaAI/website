"use client";

import { Check } from "lucide-react";

export interface SignupFlowStepperProps {
  currentStep: number;
  role?: "audience" | "presenter";
}

export const PRESENTER_STEPS = [
  { id: "workspace", label: "Choose Workspace" },
  { id: "account", label: "Create Account" },
  { id: "verify", label: "Verify Email" },
  { id: "profile", label: "Complete Profile" },
  { id: "setup", label: "Workspace Setup" },
];

export const AUDIENCE_STEPS = [
  { id: "account", label: "Create Account" },
  { id: "verify", label: "Verify Email" },
  { id: "profile", label: "Personalize Experience" },
];

export function SignupFlowStepper({
  currentStep,
  role = "presenter",
}: SignupFlowStepperProps) {
  const steps = role === "audience" ? AUDIENCE_STEPS : PRESENTER_STEPS;
  const currentIndex = currentStep - 1;

  return (
    <div className="w-full max-w-2xl mx-auto py-1">
      <ol
        className="flex items-center justify-between gap-1 sm:gap-0"
        aria-label="Signup Progress"
      >
        {steps.map((step, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step.id}
              className={`flex items-center ${isLast ? "" : "flex-1"}`}
              aria-current={isCurrent ? "step" : undefined}
            >
              <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    isComplete
                      ? "bg-success text-white shadow-sm"
                      : isCurrent
                        ? "bg-brand-intelligence text-white shadow-sm ring-4 ring-brand-intelligence/15"
                        : "bg-surface-sunken text-text-tertiary border border-border-default"
                  }`}
                >
                  {isComplete ? (
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                  ) : (
                    index + 1
                  )}
                </span>
                <div className="hidden min-w-0 flex-col md:flex">
                  <span
                    className={`truncate text-xs lg:text-[13px] ${
                      isCurrent
                        ? "font-bold text-brand-intelligence"
                        : isComplete
                          ? "font-medium text-text-primary"
                          : "font-medium text-text-tertiary"
                    }`}
                  >
                    {step.label}
                  </span>
                  {isComplete && (
                    <span className="text-[9.5px] font-semibold text-success leading-tight">
                      Completed
                    </span>
                  )}
                  {isCurrent && (
                    <span className="text-[9.5px] font-semibold text-brand-intelligence leading-tight">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
              {!isLast && (
                <div
                  className={`mx-2 lg:mx-3 hidden h-0.5 flex-1 sm:block transition-colors ${
                    isComplete ? "bg-success/60" : "bg-border-default"
                  }`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
