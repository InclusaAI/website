"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function OnboardingRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    router.replace(`/signup/flow${query ? `?${query}` : ""}`);
  }, [router, searchParams]);

  return (
    <div className="flex h-screen w-full items-center justify-center text-xs text-text-tertiary">
      Redirecting to sign up...
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center text-xs text-text-tertiary">
          Loading...
        </div>
      }
    >
      <OnboardingRedirect />
    </Suspense>
  );
}
