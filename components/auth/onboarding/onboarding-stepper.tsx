"use client";

import { Check } from "lucide-react";

export interface OnboardingStepperProps {
  currentStep: number; // 1 to 5
}

export const ONBOARDING_STEPS = [
  { step: 1, label: "Choose Workspace" },
  { step: 2, label: "Create Account" },
  { step: 3, label: "Verify Email" },
  { step: 4, label: "Complete Profile" },
  { step: 5, label: "Workspace Setup" },
];

export function OnboardingStepper({ currentStep }: OnboardingStepperProps) {
  return (
    <div className="w-full max-w-xl mx-auto py-2">
      <p className="text-center text-xs font-semibold text-brand-intelligence">
        Step {currentStep} of {ONBOARDING_STEPS.length}
      </p>

      {/* Stepper Nodes & Track */}
      <div className="relative mt-3 flex items-center justify-between">
        {/* Continuous Connecting Line */}
        <div className="absolute left-6 right-6 top-3.5 -z-10 h-0.5 bg-border-default">
          <div
            className="h-full bg-brand-intelligence transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (ONBOARDING_STEPS.length - 1)) * 100}%`,
            }}
          />
        </div>

        {ONBOARDING_STEPS.map((s) => {
          const isCompleted = s.step < currentStep;
          const isCurrent = s.step === currentStep;

          return (
            <div key={s.step} className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                  isCompleted
                    ? "border-brand-intelligence bg-brand-intelligence text-white"
                    : isCurrent
                    ? "border-brand-intelligence bg-white text-brand-intelligence shadow-xs ring-4 ring-brand-intelligence/15"
                    : "border-border-strong bg-white text-text-tertiary"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                ) : isCurrent ? (
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-intelligence" />
                ) : (
                  <span>{s.step}</span>
                )}
              </div>

              {/* Step Label */}
              <span
                className={`mt-1.5 text-center text-[10.5px] font-medium leading-tight max-w-[70px] ${
                  isCurrent
                    ? "font-bold text-brand-intelligence"
                    : isCompleted
                    ? "text-slate-900"
                    : "text-text-tertiary"
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
