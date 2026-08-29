"use client";

import { AuthLeftBrandPanel } from "../../components/auth/auth-left-brand-panel";
import { AuthTopBar } from "../../components/auth/auth-top-bar";
import { SignupRoleSelection } from "../../components/auth/signup-role-selection";

export default function SignUpPage() {
  return (
    <div className="relative isolate flex h-screen w-full overflow-hidden bg-surface-default">
      {/* Left 1/3 Side (Illustration Background & Brand Panel) */}
      <aside className="relative hidden h-full w-1/3 shrink-0 lg:flex lg:flex-col lg:justify-between border-r border-border-default/70 overflow-hidden">
        <AuthLeftBrandPanel />
      </aside>

      {/* Right 2/3 Side (Options & Roles Selector) */}
      <main className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-surface-default px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 lg:w-2/3">
        {/* Top Controls Bar */}
        <AuthTopBar />

        {/* Center Role Selection Flow */}
        <div className="my-auto flex w-full flex-1 flex-col items-center justify-center">
          <SignupRoleSelection />
        </div>
      </main>
    </div>
  );
}
