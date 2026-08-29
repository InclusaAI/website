"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SignupFlowLeftPanel } from "../../../components/auth/signup-flow/signup-flow-left-panel";
import { SignupFlowWizard } from "../../../components/auth/signup-flow/signup-flow-wizard";

function SignupFlowContent() {
  const searchParams = useSearchParams();
  const rawRole = searchParams.get("role");
  const role: "audience" | "presenter" = rawRole === "audience" ? "audience" : "presenter";
  const stepParam = parseInt(searchParams.get("step") || "1", 10);
  const currentStep = isNaN(stepParam) || stepParam < 1 ? 1 : stepParam;

  // Provision for step-specific left panel images
  const stepImages: Record<number, string> = {
    1: "/assets/images/website_sign_up_illustration_v2.png",
    2: "/assets/images/website_sign_up_illustration_v2.png",
    3: "/assets/images/website_sign_up_illustration_v2.png",
    4: "/assets/images/website_sign_up_illustration_v2.png",
    5: "/assets/images/website_sign_up_illustration_v2.png",
  };

  const imageSrc = stepImages[currentStep] || "/assets/images/website_sign_up_illustration_v2.png";

  return (
    <div className="relative isolate flex h-screen w-full overflow-hidden bg-surface-default">
      {/* Left 1/3 Side (Illustration Background & Brand Panel) */}
      <aside className="relative hidden h-full w-1/3 shrink-0 lg:flex lg:flex-col lg:justify-between border-r border-border-default/70 overflow-hidden">
        <SignupFlowLeftPanel step={currentStep} role={role} imageSrc={imageSrc} />
      </aside>

      {/* Right 2/3 Side (Flow Wizard Form Steps) */}
      <main className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-surface-default px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 lg:w-2/3">
        <SignupFlowWizard />
      </main>
    </div>
  );
}

export default function SignupFlowPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center text-xs text-text-tertiary">
          Loading sign up...
        </div>
      }
    >
      <SignupFlowContent />
    </Suspense>
  );
}
