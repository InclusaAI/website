import type { Metadata } from "next";
import { SignIn } from "@inclusaai/ui/signin";

export const metadata: Metadata = {
  title: "Sign In — InclusaAI",
  description: "Access your InclusaAI presenter workspace, audience portal, or admin dashboard.",
};

export default function SignInPage() {
  return <SignIn />;
}
