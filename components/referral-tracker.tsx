"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ReferralTrackerContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref") || searchParams.get("referral") || searchParams.get("source");
    if (ref) {
      try {
        localStorage.setItem("inclusaai_referral", ref);
        sessionStorage.setItem("inclusaai_referral", ref);
      } catch (err) {
        console.error("Failed to store referral code", err);
      }
    }
  }, [searchParams]);

  return null;
}

export function ReferralTracker() {
  return (
    <Suspense fallback={null}>
      <ReferralTrackerContent />
    </Suspense>
  );
}
