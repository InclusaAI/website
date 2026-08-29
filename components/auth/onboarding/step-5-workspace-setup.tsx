"use client";

import { useState } from "react";
import {
  Upload,
  Globe,
  Sun,
  Moon,
  Monitor,
  Briefcase,
  Users,
  Palette,
  X,
  ArrowRight,
  FolderKanban,
} from "lucide-react";
import { WorkspaceType } from "./step-1-choose-workspace";

export interface Step5WorkspaceSetupProps {
  workspaceType: WorkspaceType;
  userName?: string;
  onBack: () => void;
  onComplete: (data: any) => void;
  onSkip: () => void;
}

export function Step5WorkspaceSetup({
  workspaceType = "individual",
  userName = "Ahmed Mahmud",
  onBack,
  onComplete,
  onSkip,
}: Step5WorkspaceSetupProps) {
  const isOrg = workspaceType === "organization";

  // Individual Form State
  const [workspaceName, setWorkspaceName] = useState(
    isOrg ? "SynapGrid Technologies" : `${userName}'s Workspace`
  );
  const [presentationLanguage, setPresentationLanguage] = useState("English (English)");
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  // Organization Form State
  const [industry, setIndustry] = useState("Technology");
  const [orgSize, setOrgSize] = useState("51 - 200 employees");
  const [brandColor, setBrandColor] = useState("#00B2A9");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onComplete({
      workspaceType,
      workspaceName,
      presentationLanguage,
      theme,
      ...(isOrg ? { industry, orgSize, brandColor } : {}),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full max-w-2xl mx-auto py-1 space-y-3.5">
      {/* Header Info */}
      <div className="space-y-0.5 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
          {isOrg ? "Set Up Your Organization" : "Set Up Your Workspace"}
        </h2>
        <p className="text-xs text-text-secondary">
          {isOrg
            ? "Establish your organization's InclusaAI workspace."
            : "Create your personal InclusaAI workspace."}
        </p>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pt-1">
        <FolderKanban className="h-4 w-4 text-brand-intelligence" />
        <span>{isOrg ? "Organization Details" : "Workspace Details"}</span>
      </div>

      {/* Main Grid: Name & Logo Upload */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 items-start">
        {/* Name Input (Left) */}
        <div className="sm:col-span-7 space-y-1">
          <div className="flex items-center justify-between">
            <label className="block text-[11px] font-bold text-slate-900">
              {isOrg ? "Organization Name" : "Workspace Name"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <span className="text-[10px] text-text-tertiary">
              {workspaceName.length}/{isOrg ? 150 : 100}
            </span>
          </div>
          <input
            type="text"
            required
            maxLength={isOrg ? 150 : 100}
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder={isOrg ? "e.g. Acme Corp" : "e.g. My Workspace"}
            className="h-9 w-full rounded-xl border border-border-default bg-white px-3 text-xs text-slate-900 focus:border-brand-intelligence focus:outline-none focus:ring-1 focus:ring-brand-intelligence/20"
          />
          <p className="text-[9.5px] text-text-tertiary">
            {isOrg
              ? "This will be the official name of your organization."
              : "This will be the name of your personal workspace."}
          </p>
        </div>

        {/* Logo Upload Box (Right) */}
        <div className="sm:col-span-5 space-y-1">
          <label className="block text-[11px] font-bold text-slate-900">
            {isOrg ? "Organization Logo" : "Workspace Logo"}{" "}
            <span className="text-text-tertiary font-normal">(optional)</span>
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-border-strong bg-surface-sunken/40 px-3 py-2 text-center cursor-pointer hover:border-brand-intelligence transition-colors">
              <Upload className="h-3.5 w-3.5 text-text-tertiary" />
              <div className="text-left">
                <p className="text-[10.5px] font-bold text-brand-intelligence">Upload Logo</p>
                <p className="text-[8.5px] text-text-tertiary">PNG, JPG, SVG max 5MB</p>
              </div>
            </div>

            {/* Logo Preview Badge */}
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100/70 border border-blue-200 text-brand-intelligence font-bold text-xs">
              <span>{workspaceName ? workspaceName.charAt(0).toUpperCase() : "W"}</span>
              <button
                type="button"
                className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-500 text-white hover:bg-slate-700"
              >
                <X className="h-2 w-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Specific Fields: Industry, Size, Brand Color */}
      {isOrg && (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 pt-1">
          {/* Industry */}
          <div className="space-y-0.5">
            <label className="block text-[10.5px] font-bold text-slate-900">Industry (optional)</label>
            <div className="relative flex items-center">
              <Briefcase className="absolute left-2.5 h-3 w-3 text-text-tertiary" />
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="h-8 w-full rounded-lg border border-border-default bg-white pl-7 pr-2 text-[11px] text-slate-900 focus:border-brand-intelligence focus:outline-none"
              >
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Government">Government</option>
                <option value="Non-profit">Non-profit</option>
              </select>
            </div>
          </div>

          {/* Org Size */}
          <div className="space-y-0.5">
            <label className="block text-[10.5px] font-bold text-slate-900">Organization Size (optional)</label>
            <div className="relative flex items-center">
              <Users className="absolute left-2.5 h-3 w-3 text-text-tertiary" />
              <select
                value={orgSize}
                onChange={(e) => setOrgSize(e.target.value)}
                className="h-8 w-full rounded-lg border border-border-default bg-white pl-7 pr-2 text-[11px] text-slate-900 focus:border-brand-intelligence focus:outline-none"
              >
                <option value="1 - 10 employees">1 - 10 employees</option>
                <option value="11 - 50 employees">11 - 50 employees</option>
                <option value="51 - 200 employees">51 - 200 employees</option>
                <option value="201 - 1000 employees">201 - 1000 employees</option>
                <option value="1000+ employees">1000+ employees</option>
              </select>
            </div>
          </div>

          {/* Brand Color */}
          <div className="space-y-0.5">
            <label className="block text-[10.5px] font-bold text-slate-900">Brand Color (optional)</label>
            <div className="flex items-center gap-1.5 rounded-lg border border-border-default bg-white px-2 py-1">
              <span
                className="h-4 w-4 rounded-md shadow-xs"
                style={{ backgroundColor: brandColor }}
              />
              <input
                type="text"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="h-6 w-full text-[11px] font-mono text-slate-900 focus:outline-none"
              />
              <Palette className="h-3 w-3 text-text-tertiary" />
            </div>
          </div>
        </div>
      )}

      {/* Language & Theme Controls */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
        {/* Default Presentation Language */}
        <div className="space-y-0.5">
          <label className="block text-[10.5px] font-bold text-slate-900">
            Default Presentation Language <span className="text-red-500">*</span>
          </label>
          <div className="relative flex items-center">
            <Globe className="absolute left-2.5 h-3.5 w-3.5 text-text-tertiary" />
            <select
              value={presentationLanguage}
              onChange={(e) => setPresentationLanguage(e.target.value)}
              className="h-8 w-full rounded-lg border border-border-default bg-white pl-8 pr-2 text-xs text-slate-900 focus:border-brand-intelligence focus:outline-none"
            >
              <option value="English (English)">English (English)</option>
              <option value="Spanish (Español)">Spanish (Español)</option>
              <option value="French (Français)">French (Français)</option>
              <option value="German (Deutsch)">German (Deutsch)</option>
            </select>
          </div>
          <p className="text-[9.5px] text-text-tertiary">You can change this anytime in settings.</p>
        </div>

        {/* Theme Settings (Individual) */}
        {!isOrg && (
          <div className="space-y-0.5">
            <label className="block text-[10.5px] font-bold text-slate-900">Theme (from your profile)</label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex items-center justify-center gap-1 rounded-md border py-1 text-[10.5px] font-semibold transition-all ${
                  theme === "light"
                    ? "border-brand-intelligence bg-white text-brand-intelligence font-bold shadow-xs ring-1 ring-brand-intelligence/30"
                    : "border-border-default bg-white/80 text-text-secondary"
                }`}
              >
                <Sun className="h-3 w-3" />
                <span>Light</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex items-center justify-center gap-1 rounded-md border py-1 text-[10.5px] font-semibold transition-all ${
                  theme === "dark"
                    ? "border-brand-intelligence bg-white text-brand-intelligence font-bold shadow-xs ring-1 ring-brand-intelligence/30"
                    : "border-border-default bg-white/80 text-text-secondary"
                }`}
              >
                <Moon className="h-3 w-3" />
                <span>Dark</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme("system")}
                className={`flex items-center justify-center gap-1 rounded-md border py-1 text-[10.5px] font-semibold transition-all ${
                  theme === "system"
                    ? "border-brand-intelligence bg-white text-brand-intelligence font-bold shadow-xs ring-1 ring-brand-intelligence/30"
                    : "border-border-default bg-white/80 text-text-secondary"
                }`}
              >
                <Monitor className="h-3 w-3" />
                <span>System</span>
              </button>
            </div>
            <p className="text-[9.5px] text-text-tertiary">We&apos;ll use your selected theme across the workspace.</p>
          </div>
        )}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex items-center justify-between pt-2 border-t border-border-default/50">
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-bold text-text-secondary hover:text-text-primary transition-colors"
        >
          Skip for Now
        </button>

        <button
          type="submit"
          disabled={!workspaceName.trim()}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all ${
            workspaceName.trim()
              ? "bg-brand-intelligence shadow-md hover:bg-primary-hover hover:shadow-lg cursor-pointer"
              : "bg-slate-300 opacity-60 cursor-not-allowed"
          }`}
        >
          <span>Create Workspace</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
