"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Camera,
  Check,
  Globe,
  Hand,
  Info,
  Sun,
  Moon,
  Monitor,
  Type,
  Subtitles,
  ArrowRight,
} from "lucide-react";

export interface Step4PersonalizeExperienceProps {
  displayName: string;
  onBack: () => void;
  onContinue: (preferences: any) => void;
  onSkip: () => void;
}

export function Step4PersonalizeExperience({
  displayName = "Ahmed Mahmud",
  onBack,
  onContinue,
  onSkip,
}: Step4PersonalizeExperienceProps) {
  const [name, setName] = useState(displayName);
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [country, setCountry] = useState("Nigeria");
  const [timeZone, setTimeZone] = useState("(GMT+01:00) Africa/Lagos");
  const [spokenLanguage, setSpokenLanguage] = useState("English (English)");
  const [signLanguage, setSignLanguage] = useState("Nigerian Sign Language (NSL)");
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large" | "extra-large">("medium");
  const [captionSize, setCaptionSize] = useState<"small" | "medium" | "large" | "extra-large">("large");
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  function handleContinue() {
    onContinue({
      name,
      jobTitle,
      country,
      timeZone,
      spokenLanguage,
      signLanguage,
      theme,
      fontSize,
      captionSize,
      highContrast,
      reducedMotion,
    });
  }

  return (
    <div className="flex flex-col justify-center w-full max-w-3xl mx-auto py-1 space-y-3">
      {/* Header Info */}
      <div className="space-y-0.5 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
          Personalize Your Experience
        </h2>
        <p className="text-xs text-text-secondary">
          Configure your profile and accessibility preferences.
        </p>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 items-start">
        {/* Left Column (Profile & Language) */}
        <div className="lg:col-span-6 space-y-3">
          {/* Profile Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">Profile</h3>

            {/* Avatar & Display Name Row */}
            <div className="flex items-start gap-3">
              {/* Profile Photo */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-surface-sunken border border-border-default overflow-hidden text-text-secondary font-bold text-lg">
                  <span>{name ? name.charAt(0).toUpperCase() : "U"}</span>
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-intelligence text-white shadow-xs hover:bg-primary-hover"
                  >
                    <Camera className="h-3 w-3" />
                  </button>
                </div>
                <span className="mt-1 text-[9px] text-text-tertiary">Upload photo</span>
              </div>

              {/* Inputs Column */}
              <div className="flex-1 space-y-2">
                {/* Display Name */}
                <div className="space-y-0.5">
                  <label className="block text-[11px] font-bold text-text-primary">
                    Display Name <span className="text-error">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="h-8 w-full rounded-lg border border-border-default bg-surface-default px-2.5 text-xs text-text-primary focus:border-brand-intelligence focus:outline-none"
                    />
                    {name.trim() && <Check className="absolute right-2.5 h-3.5 w-3.5 text-success" />}
                  </div>
                  <p className="text-[9.5px] text-text-tertiary">This is how your name will appear.</p>
                </div>

                {/* Job Title */}
                <div className="space-y-0.5">
                  <label className="block text-[11px] font-bold text-text-primary">Job Title (optional)</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Software Engineer"
                    className="h-8 w-full rounded-lg border border-border-default bg-surface-default px-2.5 text-xs text-text-primary focus:border-brand-intelligence focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Country & Time Zone Row */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="space-y-0.5">
                <label className="block text-[10.5px] font-bold text-text-primary">Country (optional)</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="h-8 w-full rounded-lg border border-border-default bg-surface-default px-2 text-xs text-text-primary focus:border-brand-intelligence focus:outline-none"
                >
                  <option value="Nigeria">🇳🇬 Nigeria</option>
                  <option value="United States">🇺🇸 United States</option>
                  <option value="United Kingdom">🇬🇧 United Kingdom</option>
                  <option value="Canada">🇨🇦 Canada</option>
                </select>
              </div>

              <div className="space-y-0.5">
                <label className="block text-[10.5px] font-bold text-text-primary">Time Zone ⓘ</label>
                <select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="h-8 w-full rounded-lg border border-border-default bg-surface-default px-2 text-xs text-text-primary focus:border-brand-intelligence focus:outline-none"
                >
                  <option value="(GMT+01:00) Africa/Lagos">(GMT+01:00) Africa/Lagos</option>
                  <option value="(GMT+00:00) UTC / London">(GMT+00:00) UTC / London</option>
                  <option value="(GMT-05:00) Eastern Time">(GMT-05:00) Eastern Time</option>
                  <option value="(GMT-08:00) Pacific Time">(GMT-08:00) Pacific Time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Language Section */}
          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">Language</h3>

            {/* Preferred Spoken Language */}
            <div className="space-y-0.5">
              <label className="block text-[10.5px] font-bold text-text-primary">
                Preferred Spoken Language <span className="text-error">*</span>
              </label>
              <div className="relative flex items-center">
                <Globe className="absolute left-2.5 h-3.5 w-3.5 text-text-tertiary" />
                <select
                  value={spokenLanguage}
                  onChange={(e) => setSpokenLanguage(e.target.value)}
                  className="h-8 w-full rounded-lg border border-border-default bg-surface-default pl-8 pr-2 text-xs text-text-primary focus:border-brand-intelligence focus:outline-none"
                >
                  <option value="English (English)">English (English)</option>
                  <option value="Spanish (Español)">Spanish (Español)</option>
                  <option value="French (Français)">French (Français)</option>
                  <option value="German (Deutsch)">German (Deutsch)</option>
                </select>
              </div>
            </div>

            {/* Preferred Sign Language */}
            <div className="space-y-0.5">
              <label className="block text-[10.5px] font-bold text-text-primary">
                Preferred Sign Language (optional)
              </label>
              <div className="relative flex items-center">
                <Hand className="absolute left-2.5 h-3.5 w-3.5 text-text-tertiary" />
                <select
                  value={signLanguage}
                  onChange={(e) => setSignLanguage(e.target.value)}
                  className="h-8 w-full rounded-lg border border-border-default bg-surface-default pl-8 pr-2 text-xs text-text-primary focus:border-brand-intelligence focus:outline-none"
                >
                  <option value="Nigerian Sign Language (NSL)">Nigerian Sign Language (NSL)</option>
                  <option value="American Sign Language (ASL)">American Sign Language (ASL)</option>
                  <option value="British Sign Language (BSL)">British Sign Language (BSL)</option>
                  <option value="Auslan">Australian Sign Language (Auslan)</option>
                </select>
              </div>
            </div>

            {/* Language Note */}
            <div className="flex items-start gap-1.5 rounded-lg border border-blue-100 bg-blue-50/60 p-2 text-[10px] text-brand-intelligence">
              <Info className="h-3 w-3 shrink-0 mt-0.5" />
              <span>These preferences help us deliver the best captions, transcriptions, and sign language experience.</span>
            </div>
          </div>
        </div>

        {/* Right Column (Appearance & Accessibility) */}
        <div className="lg:col-span-6 space-y-3">
          {/* Appearance Section */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">Appearance</h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex items-center justify-center gap-1.5 rounded-lg border py-1.5 text-xs font-semibold transition-all ${
                  theme === "light"
                    ? "border-brand-intelligence bg-brand-intelligence/5 text-brand-intelligence ring-1 ring-brand-intelligence/30"
                    : "border-border-default bg-surface-default text-text-secondary hover:border-border-strong"
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
                <span>Light</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex items-center justify-center gap-1.5 rounded-lg border py-1.5 text-xs font-semibold transition-all ${
                  theme === "dark"
                    ? "border-brand-intelligence bg-brand-intelligence/5 text-brand-intelligence ring-1 ring-brand-intelligence/30"
                    : "border-border-default bg-surface-default text-text-secondary hover:border-border-strong"
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
                <span>Dark</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme("system")}
                className={`flex items-center justify-center gap-1.5 rounded-lg border py-1.5 text-xs font-semibold transition-all ${
                  theme === "system"
                    ? "border-brand-intelligence bg-brand-intelligence/5 text-brand-intelligence ring-1 ring-brand-intelligence/30"
                    : "border-border-default bg-surface-default text-text-secondary hover:border-border-strong"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
                <span>System</span>
              </button>
            </div>
            <p className="text-[9.5px] text-text-tertiary">Match your device settings.</p>
          </div>

          {/* Accessibility Section */}
          <div className="space-y-2 rounded-xl border border-border-default bg-surface-sunken/40 p-3 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">Accessibility</h3>

            {/* Font Size Sizer */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                <Type className="h-3.5 w-3.5 text-text-tertiary" />
                <span>Font Size</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {(["small", "medium", "large", "extra-large"] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setFontSize(sz)}
                    className={`rounded-md border py-1 text-[10.5px] font-medium capitalize transition-all ${
                      fontSize === sz
                        ? "border-brand-intelligence bg-surface-default text-brand-intelligence font-bold shadow-xs ring-1 ring-brand-intelligence/30"
                        : "border-border-default bg-surface-default/80 text-text-secondary hover:border-border-strong"
                    }`}
                  >
                    {sz.replace("-", " ")}
                  </button>
                ))}
              </div>
              <p className="text-[9.5px] text-text-tertiary">Adjust the size of text across the interface.</p>
            </div>

            {/* Caption Size Sizer */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                <Subtitles className="h-3.5 w-3.5 text-text-tertiary" />
                <span>Caption Size</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {(["small", "medium", "large", "extra-large"] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setCaptionSize(sz)}
                    className={`rounded-md border py-1 text-[10.5px] font-medium capitalize transition-all ${
                      captionSize === sz
                        ? "border-brand-intelligence bg-surface-default text-brand-intelligence font-bold shadow-xs ring-1 ring-brand-intelligence/30"
                        : "border-border-default bg-surface-default/80 text-text-secondary hover:border-border-strong"
                    }`}
                  >
                    {sz.replace("-", " ")}
                  </button>
                ))}
              </div>
              <p className="text-[9.5px] text-text-tertiary">Adjust the default size of captions in presentations.</p>
            </div>

            {/* High Contrast & Reduced Motion Toggles */}
            <div className="space-y-2 pt-1 border-t border-border-default/60">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-text-primary">High Contrast</p>
                  <p className="text-[9.5px] text-text-tertiary">Increase contrast for better visibility</p>
                </div>
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="h-4 w-4 rounded border-border-strong text-brand-intelligence focus:ring-1 focus:ring-brand-intelligence cursor-pointer"
                />
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-text-primary">Reduced Motion</p>
                  <p className="text-[9.5px] text-text-tertiary">Reduce animations and motion effects</p>
                </div>
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={(e) => setReducedMotion(e.target.checked)}
                  className="h-4 w-4 rounded border-border-strong text-brand-intelligence focus:ring-1 focus:ring-brand-intelligence cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions Row */}
      <div className="flex items-center justify-between pt-2 border-t border-border-default/50">
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-bold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        >
          Skip for Now
        </button>

        <button
          type="button"
          disabled={!name.trim()}
          onClick={handleContinue}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all ${
            name.trim()
              ? "bg-brand-intelligence shadow-md hover:bg-primary-hover hover:shadow-lg cursor-pointer"
              : "bg-surface-sunken text-text-tertiary border border-border-default opacity-70 cursor-not-allowed"
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Security Statement */}
      <p className="text-center text-[10px] text-text-tertiary">
        🔒 Your data is encrypted and protected. Read our{" "}
        <Link href="/#" className="font-semibold text-brand-intelligence hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
