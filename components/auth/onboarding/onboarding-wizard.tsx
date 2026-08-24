"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { AuthTopBar } from "../auth-top-bar";
import { OnboardingStepper } from "./onboarding-stepper";
import { Step1ChooseWorkspace, WorkspaceType } from "./step-1-choose-workspace";
import { Step2CreateAccount } from "./step-2-create-account";
import { Step3VerifyEmail } from "./step-3-verify-email";

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [workspaceType, setWorkspaceType] = useState<WorkspaceType>("individual");
  const [accountData, setAccountData] = useState<{
    fullName: string;
    email: string;
    password: string;
  }>({
    fullName: "John Doe",
    email: "john.doe@example.com",
    password: "",
  });

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
          <AuthTopBar />
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
        {currentStep > 3 && (
          <div className="w-full max-w-lg text-center space-y-4 py-8">
            <h3 className="text-xl font-bold text-slate-900">
              Step {currentStep} under construction
            </h3>
            <p className="text-xs text-text-secondary">
              Verified email: <span className="font-bold text-brand-intelligence">{accountData.email}</span>
            </p>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="rounded-xl border border-border-default px-4 py-2 text-xs font-semibold text-text-primary hover:bg-surface-sunken"
            >
              Back to Step 3
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
