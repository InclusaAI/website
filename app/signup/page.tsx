"use client";

import { AuthLeftBrandPanel } from "../../components/auth/auth-left-brand-panel";
import { AuthTopBar } from "../../components/auth/auth-top-bar";
import { SignupRoleSelection } from "../../components/auth/signup-role-selection";

export default function SignUpPage() {
  return (
    <div className="relative isolate flex h-screen w-full overflow-hidden bg-white">
      {/* Left 1/3 Side (Illustration & Brand Value) */}
      <aside className="relative hidden h-screen w-1/3 shrink-0 overflow-y-auto border-r border-border-default/70 bg-[#F8FAFD]/70 p-6 sm:p-8 lg:flex lg:flex-col lg:justify-between">
        <AuthLeftBrandPanel />
      </aside>

      {/* Right 2/3 Side (Options & Roles Selector) */}
      <main className="relative flex h-screen w-full flex-col justify-between overflow-y-auto bg-white p-6 sm:p-10 lg:w-2/3">
        {/* Top Controls Bar */}
        <AuthTopBar />

        {/* Center Role Selection Flow */}
        <div className="my-auto flex w-full flex-1 flex-col items-center justify-center py-4">
          <SignupRoleSelection />
        </div>
      </main>
    </div>
  );
}
