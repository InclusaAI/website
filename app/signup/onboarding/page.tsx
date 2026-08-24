"use client";

import { Suspense } from "react";
import { OnboardingLeftBrandPanel } from "../../../components/auth/onboarding/onboarding-left-panel";
import { OnboardingWizard } from "../../../components/auth/onboarding/onboarding-wizard";

export default function OnboardingPage() {
  return (
    <div className="relative isolate flex h-screen w-full overflow-hidden bg-white">
      {/* Left 1/3 Side */}
      <aside className="relative hidden h-full w-1/3 shrink-0 lg:flex lg:flex-col lg:justify-between border-r border-border-default/70 overflow-hidden">
        <OnboardingLeftBrandPanel />
      </aside>

      {/* Right 2/3 Side */}
      <main className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-white px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 lg:w-2/3">
        <Suspense fallback={<div className="flex h-full items-center justify-center text-xs text-text-tertiary">Loading onboarding...</div>}>
          <OnboardingWizard />
        </Suspense>
      </main>
    </div>
  );
}
