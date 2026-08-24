"use client";

import { useState } from "react";
import { AuthTopBar } from "../auth-top-bar";
import { OnboardingStepper } from "./onboarding-stepper";
import { Step1ChooseWorkspace, WorkspaceType } from "./step-1-choose-workspace";

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [workspaceType, setWorkspaceType] = useState<WorkspaceType>("individual");

  function handleStep1Continue(type: WorkspaceType) {
    setWorkspaceType(type);
    setCurrentStep(2);
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden">
      {/* Top Header Row with Stepper & Top Controls */}
      <div className="shrink-0 space-y-2">
        <AuthTopBar />
        <OnboardingStepper currentStep={currentStep} />
      </div>

      {/* Center Dynamic Step Content */}
      <div className="my-auto flex w-full flex-1 flex-col items-center justify-center py-2">
        {currentStep === 1 && (
          <Step1ChooseWorkspace
            onContinue={handleStep1Continue}
            defaultType={workspaceType}
          />
        )}
        {currentStep > 1 && (
          <div className="w-full max-w-lg text-center space-y-4 py-8">
            <h3 className="text-xl font-bold text-slate-900">
              Step {currentStep} under construction
            </h3>
            <p className="text-xs text-text-secondary">
              Selected workspace: <span className="font-bold text-brand-intelligence">{workspaceType}</span>
            </p>
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="rounded-xl border border-border-default px-4 py-2 text-xs font-semibold text-text-primary hover:bg-surface-sunken"
            >
              Back to Step 1
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
