"use client";

import { useState } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { AuthTopBar } from "../auth-top-bar";
import { OnboardingStepper } from "./onboarding-stepper";
import { Step1ChooseWorkspace, WorkspaceType } from "./step-1-choose-workspace";
import { Step2CreateAccount } from "./step-2-create-account";
import { Step3VerifyEmail } from "./step-3-verify-email";
import { Step4PersonalizeExperience } from "./step-4-personalize-experience";

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [workspaceType, setWorkspaceType] = useState<WorkspaceType>("individual");
  const [accountData, setAccountData] = useState<{
    fullName: string;
    email: string;
    password: string;
  }>({
    fullName: "Ahmed Mahmud",
    email: "ahmed.mahmud@example.com",
    password: "",
  });
  const [userPreferences, setUserPreferences] = useState<any>(null);

  function handleStep1Continue(type: WorkspaceType) {
    setWorkspaceType(type);
    setCurrentStep(2);
  }

  function handleStep2Continue(data: {
    fullName: string;
    email: string;
    password: string;
  }) {
    setAccountData(data);
    setCurrentStep(3);
  }

  function handleStep3Continue() {
    setCurrentStep(4);
  }

  function handleStep4Continue(prefs: any) {
    setUserPreferences(prefs);
    setCurrentStep(5);
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden">
      {/* Top Header Row with Back Button, Stepper, & Controls */}
      <div className="shrink-0 space-y-1">
        <div className="flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-brand-intelligence transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border-default text-text-tertiary hover:bg-surface-sunken"
              aria-label="Help"
            >
              <HelpCircle className="h-4 w-4" />
            </button>
            <AuthTopBar />
          </div>
        </div>
        <OnboardingStepper currentStep={currentStep} />
      </div>

      {/* Center Dynamic Step Content */}
      <div className="my-auto flex w-full flex-1 flex-col items-center justify-center py-1">
        {currentStep === 1 && (
          <Step1ChooseWorkspace
            onContinue={handleStep1Continue}
            defaultType={workspaceType}
          />
        )}
        {currentStep === 2 && (
          <Step2CreateAccount
            workspaceType={workspaceType}
            onBack={() => setCurrentStep(1)}
            onContinue={handleStep2Continue}
          />
        )}
        {currentStep === 3 && (
          <Step3VerifyEmail
            email={accountData.email}
            onBack={() => setCurrentStep(2)}
            onContinue={handleStep3Continue}
            onEditEmail={() => setCurrentStep(2)}
          />
        )}
        {currentStep === 4 && (
          <Step4PersonalizeExperience
            displayName={accountData.fullName || "Ahmed Mahmud"}
            onBack={() => setCurrentStep(3)}
            onContinue={handleStep4Continue}
            onSkip={() => setCurrentStep(5)}
          />
        )}
        {currentStep > 4 && (
          <div className="w-full max-w-lg text-center space-y-4 py-8">
            <h3 className="text-xl font-bold text-slate-900">
              Step 5: Workspace Setup
            </h3>
            <p className="text-xs text-text-secondary">
              Personalization complete for <span className="font-bold text-brand-intelligence">{accountData.fullName}</span>
            </p>
            <button
              type="button"
              onClick={() => setCurrentStep(4)}
              className="rounded-xl border border-border-default px-4 py-2 text-xs font-semibold text-text-primary hover:bg-surface-sunken"
            >
              Back to Step 4
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
