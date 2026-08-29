"use client";

import {
  logoLandscape,
  logoLandscapeDarkMode,
  signinIllustration,
} from "../../public/assets";
import { InclusaaiThemeBackground } from "../../components/ui/theme-background";
import { authenticateDummyUser, getAppRedirectUrl } from "../../lib/dummy-auth";
import { useTheme } from "../../lib/theme-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  AudioLines,
  ChevronDown,
  Eye,
  EyeOff,
  Hand,
  Loader2,
  Lock as LockIcon,
  Mail,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  UserRound,
  Users,
  X,
} from "lucide-react";

const features = [
  { icon: AudioLines, label: "Live Transcription", description: "Accurate real-time speech to text." },
  { icon: Hand, label: "AI Sign Language", description: "Real-time sign language through AI avatars." },
  { icon: UserRound, label: "AI Avatar", description: "Expressive sign language avatars for all." },
  { icon: Users, label: "Inclusive for All", description: "Accessible experiences for every audience." },
];

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function InclusaLogo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoLandscapeDarkMode : logoLandscape;

  return (
    <Image
      src={logo}
      alt="InclusaAI"
      width={logo.width}
      height={logo.height}
      className={`h-16 w-auto object-contain object-left ${className ?? ""}`}
      priority
    />
  );
}

function BrandPanel() {
  return (
    <div className="relative flex min-h-full items-center justify-center px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8">
      <div className="flex w-full max-w-screen-2xl flex-col gap-8 lg:flex-row lg:items-center relative">
        {/* Left section */}
        <div className="relative z-10 flex flex-col">
          <InclusaLogo className="mb-8" />

          <div className="max-w-[520px]">
            <h1 className="text-3xl font-black leading-[0.96] tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-[2.45rem] lg:leading-[0.95]">
              Inclusive intelligence.
              <span className="mt-2 block">
                <span className="text-brand-intelligence">Accessible</span> communication.
              </span>
            </h1>
            <p className="mt-4 max-w-md text-sm text-text-secondary sm:text-base">
              AI-powered tools that break down communication barriers for
              everyone, everywhere.
            </p>
          </div>

          <div className="mt-8 flex max-w-[520px] flex-col gap-3">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-start gap-3 "
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/20 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                  <feature.icon className="h-5 w-5 text-brand-intelligence" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">
                    {feature.label}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex w-full max-w-[520px] items-center gap-3 rounded-xl bg-brand-intelligence px-4 py-3 text-text-inverse shadow-[0_20px_50px_rgba(0,102,255,0.25)]">
            <div className="bg-white/20 rounded-lg p-2">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            </div>
            <p className="text-[11px] leading-snug sm:text-xs">
              <span className="font-semibold">Enterprise-grade security</span>
              <br/>
              Your data is protected with industry-leading security standards.
            </p>
          </div>
        </div>

        {/* Right section - illustration */}
        <div className="lg:absolute lg:max-w-[480px] lg:top-0 lg:bottom-0 lg:right-0 hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-center">
          <div className="relative w-full overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_30px_80px_rgba(80,112,255,0.14)] backdrop-blur-sm">
            <Image
              src={signinIllustration}
              alt="Inclusive communication illustration"
              width={signinIllustration.width}
              height={signinIllustration.height}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const FORM_CONTENT_WIDTH = "max-w-[440px]";

function SignInCopyright() {
  return (
    <div
      className={`mx-auto mt-3 flex w-full ${FORM_CONTENT_WIDTH} items-center justify-between px-1 text-xs text-text-tertiary`}
    >
      <span>© 2026 InclusaAI. All rights reserved.</span>
      <span className="rounded-full bg-white/60 px-2.5 py-0.5 font-mono text-[11px] backdrop-blur-sm">
        v1.0.0
      </span>
    </div>
  );
}

function SignInFormCard({
  isLoading,
  showPassword,
  setShowPassword,
  theme,
  setTheme,
  onSubmit,
}: {
  isLoading: boolean;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const inputClassName =
    "block h-11 w-full rounded-md border border-border-default bg-surface-default py-2 pl-10 pr-10 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-border-focus/20 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-surface-default shadow-xl ring-1 ring-black/5">
      <div className="flex shrink-0 items-center justify-between px-5 pt-5 sm:px-6">
        <div className="lg:hidden">
          <InclusaLogo />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border-default text-text-secondary transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
            aria-label={
              theme === "light" ? "Switch to dark theme" : "Switch to light theme"
            }
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            className="flex h-10 items-center gap-1 rounded-md border border-border-default px-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
            aria-label="Select language"
          >
            EN
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border-default text-text-secondary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={`mx-auto w-full ${FORM_CONTENT_WIDTH} px-5 py-5 sm:px-6 sm:py-6`}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
            Welcome back 👋
          </h2>
          <p className="mt-1.5 text-sm text-text-secondary">
            Sign in to continue to your InclusaAI workspace.
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-text-primary"
            >
              Email address
            </label>
            <div className="relative">
              <Mail
                className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-text-tertiary"
                aria-hidden="true"
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={isLoading}
                className={inputClassName}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-text-primary"
            >
              Password
            </label>
            <div className="relative">
              <LockIcon
                className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-text-tertiary"
                aria-hidden="true"
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                disabled={isLoading}
                className={inputClassName}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex h-11 w-11 items-center justify-center rounded-r-md text-text-tertiary transition-colors hover:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                disabled={isLoading}
                className="h-4 w-4 rounded border-border-strong text-brand-intelligence focus:ring-2 focus:ring-border-focus focus:ring-offset-2"
              />
              <label htmlFor="remember-me" className="text-sm text-text-primary">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="rounded-sm text-sm font-medium text-text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-brand-intelligence text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </>
            )}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border-default" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-surface-default px-3 text-text-tertiary">or</span>
          </div>
        </div>

        <button
          type="button"
          disabled={isLoading}
          className="flex h-11 w-full items-center justify-center gap-3 rounded-md border border-border-default bg-surface-default text-sm font-medium text-text-primary shadow-sm transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <GoogleIcon />
          Sign in with Google
        </button>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="rounded-sm font-medium text-text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
          >
            Create Account
          </Link>
        </p>
      </div>

      <footer className="shrink-0 border-t border-border-default px-5 py-4 sm:px-6">
        <nav
          className={`mx-auto flex w-full ${FORM_CONTENT_WIDTH} flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-text-tertiary`}
          aria-label="Legal"
        >
          <LockIcon className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
          <Link
            href="/privacy"
            className="rounded-sm hover:text-text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          >
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/terms"
            className="rounded-sm hover:text-text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          >
            Terms of Service
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/contact"
            className="rounded-sm hover:text-text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorToast, setErrorToast] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    setIsLoading(true);
    setErrorToast(null);

    window.setTimeout(() => {
      const role = authenticateDummyUser(email, password);
      if (role) {
        window.location.href = getAppRedirectUrl(role);
        return;
      }

      setErrorToast("Incorrect email or password.");
      setIsLoading(false);
    }, 800);
  }

  return (
    <InclusaaiThemeBackground
      layout="cover"
      themeMode={theme}
      showArtwork={true}
      className="flex h-screen w-full"
    >
      <aside className="relative hidden h-screen w-2/3 shrink-0 overflow-y-auto lg:flex lg:flex-col lg:justify-center">
        <div className="min-h-full">
          <BrandPanel />
        </div>
      </aside>

      <div className="relative h-screen w-full shrink-0 overflow-y-auto lg:w-1/3">
        <div className="flex min-h-full flex-col items-center justify-center p-3 sm:p-4">
          <div className="flex w-full max-w-[440px] flex-col">
            <SignInFormCard
              isLoading={isLoading}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              theme={theme === "dark" ? "dark" : "light"}
              setTheme={(t) => setTheme(t)}
              onSubmit={handleSubmit}
            />
            <SignInCopyright />
          </div>
        </div>
      </div>

      {errorToast && (
        <div
          role="alert"
          className="absolute right-4 bottom-4 left-4 z-20 mx-auto flex max-w-md items-center gap-3 rounded-lg bg-brand-navy px-4 py-3 text-sm text-text-inverse shadow-md sm:right-8 sm:left-auto lg:left-[calc(66.666%+1rem)]"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-error text-xs font-bold">
            !
          </span>
          <span className="flex-1">{errorToast}</span>
          <button
            type="button"
            onClick={() => setErrorToast(null)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Dismiss error"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </InclusaaiThemeBackground>
  );
}
