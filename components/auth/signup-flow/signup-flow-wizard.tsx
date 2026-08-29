"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, HelpCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { AuthTopBar } from "../auth-top-bar";
import { SignupFlowStepper } from "./signup-flow-stepper";
import { Step1ChooseWorkspace, WorkspaceType } from "./step-1-choose-workspace";
import { Step2CreateAccount } from "./step-2-create-account";
import { Step3VerifyEmail } from "./step-3-verify-email";
import { Step4PersonalizeExperience } from "./step-4-personalize-experience";
import { Step5WorkspaceSetup } from "./step-5-workspace-setup";

export interface SignupFlowWizardProps {
  onStepChange?: (step: number) => void;
}

export function SignupFlowWizard({ onStepChange }: SignupFlowWizardProps = {}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawRole = searchParams.get("role");
  const role: "audience" | "presenter" = rawRole === "audience" ? "audience" : "presenter";

  const stepParam = parseInt(searchParams.get("step") || "1", 10);
  const totalSteps = role === "audience" ? 3 : 5;
  const currentStep = isNaN(stepParam) || stepParam < 1 ? 1 : Math.min(stepParam, totalSteps);

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
  const [isCompleted, setIsCompleted] = useState(false);

  function goToStep(targetStep: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("role", role);
    params.set("step", targetStep.toString());
    router.push(`/signup/flow?${params.toString()}`);
    onStepChange?.(targetStep);
  }

  // Audience Flow Handlers (3 steps: 1. Create Account, 2. Verify Email, 3. Personalize)
  function handleAudienceStep1Continue(data: {
    fullName: string;
    email: string;
    password: string;
  }) {
    setAccountData(data);
    goToStep(2);
  }

  function handleAudienceStep2Continue() {
    goToStep(3);
  }

  function handleAudienceStep3Complete() {
    setIsCompleted(true);
  }

  // Presenter Flow Handlers (5 steps: 1. Choose Workspace, 2. Create Account, 3. Verify Email, 4. Personalize, 5. Setup)
  function handlePresenterStep1Continue(type: WorkspaceType) {
    setWorkspaceType(type);
    goToStep(2);
  }

  function handlePresenterStep2Continue(data: {
    fullName: string;
    email: string;
    password: string;
  }) {
    setAccountData(data);
    goToStep(3);
  }

  function handlePresenterStep3Continue() {
    goToStep(4);
  }

  function handlePresenterStep4Continue() {
    goToStep(5);
  }

  function handlePresenterStep5Complete() {
    setIsCompleted(true);
  }

  function handleBack() {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    } else {
      router.push("/signup");
    }
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden">
      {/* Top Header Row with Back Button, Stepper, & Controls */}
      <div className="shrink-0 space-y-1">
        <div className="flex items-center justify-between">
          {!isCompleted ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-brand-intelligence transition-colors cursor-pointer"
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
        <SignupFlowStepper
          currentStep={isCompleted ? (role === "audience" ? 3 : 5) : currentStep}
          role={role}
        />
      </div>

      {/* Center Dynamic Step Content */}
      <div className="my-auto flex w-full flex-1 flex-col items-center justify-center py-1">
        {!isCompleted ? (
          role === "audience" ? (
            /* AUDIENCE MEMBER FLOW (3 Steps) */
            <>
              {currentStep === 1 && (
                <Step2CreateAccount
                  role="audience"
                  workspaceType="individual"
                  onBack={() => router.push("/signup")}
                  onContinue={handleAudienceStep1Continue}
                />
              )}
              {currentStep === 2 && (
                <Step3VerifyEmail
                  email={accountData.email}
                  onBack={() => goToStep(1)}
                  onContinue={handleAudienceStep2Continue}
                  onEditEmail={() => goToStep(1)}
                />
              )}
              {currentStep === 3 && (
                <Step4PersonalizeExperience
                  displayName={accountData.fullName || "Ahmed Mahmud"}
                  onBack={() => goToStep(2)}
                  onContinue={handleAudienceStep3Complete}
                  onSkip={() => setIsCompleted(true)}
                />
              )}
            </>
          ) : (
            /* PRESENTER FLOW (5 Steps) */
            <>
              {currentStep === 1 && (
                <Step1ChooseWorkspace
                  onContinue={handlePresenterStep1Continue}
                  defaultType={workspaceType}
                />
              )}
              {currentStep === 2 && (
                <Step2CreateAccount
                  role="presenter"
                  workspaceType={workspaceType}
                  onBack={() => goToStep(1)}
                  onContinue={handlePresenterStep2Continue}
                />
              )}
              {currentStep === 3 && (
                <Step3VerifyEmail
                  email={accountData.email}
                  onBack={() => goToStep(2)}
                  onContinue={handlePresenterStep3Continue}
                  onEditEmail={() => goToStep(2)}
                />
              )}
              {currentStep === 4 && (
                <Step4PersonalizeExperience
                  displayName={accountData.fullName || "Ahmed Mahmud"}
                  onBack={() => goToStep(3)}
                  onContinue={handlePresenterStep4Continue}
                  onSkip={() => goToStep(5)}
                />
              )}
              {currentStep === 5 && (
                <Step5WorkspaceSetup
                  workspaceType={workspaceType}
                  userName={accountData.fullName}
                  onBack={() => goToStep(4)}
                  onComplete={handlePresenterStep5Complete}
                  onSkip={() => setIsCompleted(true)}
                />
              )}
            </>
          )
        ) : (
          /* Completion Success Modal Card */
          <div className="w-full max-w-md text-center space-y-4 rounded-3xl border border-blue-100 bg-surface-sunken/60 p-8 shadow-xl">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-success shadow-sm">
                <CheckCircle2 className="h-8 w-8" />
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-brand-intelligence">
                <Sparkles className="h-3.5 w-3.5" /> {role === "audience" ? "Profile Ready" : "Workspace Ready"}
              </span>
              <h3 className="text-2xl font-extrabold text-text-primary">
                Welcome to InclusaAI!
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {role === "audience"
                  ? "Your audience account and accessibility preferences are all set up. You can now join live presentations with personalized caption and sign language settings."
                  : `Your ${workspaceType} workspace is all set up. You can now create accessible live broadcasts and collaborate with ease.`}
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/signin"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-all"
              >
                <span>{role === "audience" ? "Go to Live Sessions" : "Go to Workspace Dashboard"}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
