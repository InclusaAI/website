"use client";

import { Check } from "lucide-react";

export interface OnboardingStepperProps {
  currentStep: number;
  role?: "audience" | "presenter";
}

export const PRESENTER_STEPS = [
  { step: 1, label: "Choose Workspace" },
  { step: 2, label: "Create Account" },
  { step: 3, label: "Verify Email" },
  { step: 4, label: "Complete Profile" },
  { step: 5, label: "Workspace Setup" },
];

export const AUDIENCE_STEPS = [
  { step: 1, label: "Create Account" },
  { step: 2, label: "Verify Email" },
  { step: 3, label: "Personalize Experience" },
];

export function OnboardingStepper({
  currentStep,
  role = "presenter",
}: OnboardingStepperProps) {
  const steps = role === "audience" ? AUDIENCE_STEPS : PRESENTER_STEPS;
  const edgeOffset = `${100 / (2 * steps.length)}%`;

  return (
    <div className="w-full max-w-xl mx-auto py-1">
      <p className="text-center text-xs sm:text-sm font-bold text-brand-intelligence tracking-tight">
        Step {currentStep} of {steps.length}
      </p>

      {/* Stepper Nodes & Track Container */}
      <div className="relative mt-3 flex items-center justify-between">
        {/* Continuous Connecting Track */}
        <div
          className="absolute top-[9px] h-[2px] bg-slate-200 z-0"
          style={{
            left: edgeOffset,
            right: edgeOffset,
          }}
        >
          <div
            className="h-full bg-brand-intelligence transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / Math.max(1, steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((s) => {
          const isCompleted = s.step < currentStep;
          const isCurrent = s.step === currentStep;

          return (
            <div key={s.step} className="relative z-10 flex flex-col items-center flex-1">
              {/* Step Circle Node */}
              <div
                className={`flex h-[18px] w-[18px] sm:h-5 sm:w-5 items-center justify-center rounded-full transition-all ${
                  isCompleted
                    ? "bg-brand-intelligence text-white shadow-xs"
                    : isCurrent
                    ? "bg-brand-intelligence text-white ring-4 ring-brand-intelligence/20 shadow-xs"
                    : "border-2 border-slate-300 bg-white"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-3 w-3 stroke-[3]" />
                ) : isCurrent ? (
                  <span className="h-2 w-2 rounded-full bg-white" />
                ) : null}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-center text-[10.5px] sm:text-xs leading-tight max-w-[85px] transition-colors ${
                  isCurrent
                    ? "font-bold text-brand-intelligence"
                    : isCompleted
                    ? "font-semibold text-slate-800"
                    : "font-medium text-slate-400"
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
