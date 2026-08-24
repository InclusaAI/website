"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Users,
  Mic,
  Globe,
  MessageSquare,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";

export type SignupRole = "audience" | "presenter";

export function SignupRoleSelection() {
  const [selectedRole, setSelectedRole] = useState<SignupRole>("audience");

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto">
      {/* Header Info */}
      <div className="space-y-1 text-left">
        <span className="text-[11px] font-bold text-brand-intelligence uppercase tracking-wider">
          Get Started with InclusaAI
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
          How would you like to use InclusaAI?
        </h2>
        <p className="text-xs text-text-secondary">
          Choose how you&apos;d like to get started. You can expand how you use InclusaAI later.
        </p>
      </div>

      {/* 2 Role Choice Cards Grid */}
      <div className="mt-3.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Card 1: Join as an Audience Member */}
        <div
          onClick={() => setSelectedRole("audience")}
          className={`group relative flex flex-col justify-between rounded-2xl border-2 p-4 cursor-pointer transition-all bg-white ${
            selectedRole === "audience"
              ? "border-brand-intelligence shadow-md ring-2 ring-brand-intelligence/15"
              : "border-border-default hover:border-border-strong hover:shadow-xs"
          }`}
        >
          {/* Active Checkmark Badge */}
          {selectedRole === "audience" && (
            <div className="absolute top-3.5 right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-intelligence text-white shadow-xs">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
          )}

          <div>
            {/* Card Icon */}
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100/80 text-brand-intelligence">
                <Users className="h-5 w-5" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mt-2 text-center">
              <p className="text-[11px] text-text-tertiary font-medium">Join as an</p>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Audience Member</h3>
              <p className="mt-0.5 text-[10.5px] text-text-secondary leading-snug">
                Experience presentations and conversations with accessibility tools designed around you.
              </p>
            </div>

            {/* Divider */}
            <div className="my-2.5 border-t border-border-default/60" />

            {/* 3 Features List */}
            <div className="space-y-2 text-left">
              {/* Feature 1 */}
              <div className="flex items-start gap-2">
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-purple-100 text-purple-600 font-bold text-[8.5px] mt-0.5">
                  CC
                </span>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Live accessibility</h4>
                  <p className="text-[10px] text-text-secondary leading-tight">
                    Follow conversations with real-time captions and transcription.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2">
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-teal-100 text-teal-600 mt-0.5">
                  <Globe className="h-2.5 w-2.5" />
                </span>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Language support</h4>
                  <p className="text-[10px] text-text-secondary leading-tight">
                    Use translation and available sign-language experiences.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2">
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-indigo-100 text-indigo-600 mt-0.5">
                  <MessageSquare className="h-2.5 w-2.5" />
                </span>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Participate your way</h4>
                  <p className="text-[10px] text-text-secondary leading-tight">
                    Join Q&A, polls, chat, and other interactive experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom "Best for" Box */}
          <div className="mt-3 rounded-xl bg-[#F8FAFD] p-2.5 text-left border border-border-default/60">
            <span className="text-[9px] font-bold text-text-tertiary uppercase tracking-wider">
              Best for
            </span>
            <p className="text-[10px] text-text-secondary leading-tight mt-0.5">
              Attendees, students, learners, event participants, and anyone consuming accessible content.
            </p>
          </div>
        </div>

        {/* Card 2: Join as a Presenter */}
        <div
          onClick={() => setSelectedRole("presenter")}
          className={`group relative flex flex-col justify-between rounded-2xl border-2 p-4 cursor-pointer transition-all bg-white ${
            selectedRole === "presenter"
              ? "border-success shadow-md ring-2 ring-success/15"
              : "border-border-default hover:border-border-strong hover:shadow-xs"
          }`}
        >
          {/* Active Checkmark Badge */}
          {selectedRole === "presenter" && (
            <div className="absolute top-3.5 right-3.5 flex h-5 w-5 items-center justify-center rounded-full bg-success text-white shadow-xs">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
          )}

          <div>
            {/* Card Icon */}
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/80 text-success">
                <Mic className="h-5 w-5" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mt-2 text-center">
              <p className="text-[11px] text-text-tertiary font-medium">Join as a</p>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Presenter</h3>
              <p className="mt-0.5 text-[10.5px] text-text-secondary leading-snug">
                Share your knowledge and create presentations that everyone can understand and engage with.
              </p>
            </div>

            {/* Divider */}
            <div className="my-2.5 border-t border-border-default/60" />

            {/* 3 Features List */}
            <div className="space-y-2 text-left">
              {/* Feature 1 */}
              <div className="flex items-start gap-2">
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-emerald-100 text-success font-bold text-[8.5px] mt-0.5">
                  CC
                </span>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Present accessibly</h4>
                  <p className="text-[10px] text-text-secondary leading-tight">
                    Deliver with captions, translation, and sign-language support.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2">
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-teal-100 text-teal-600 mt-0.5">
                  <Users className="h-2.5 w-2.5" />
                </span>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Engage everyone</h4>
                  <p className="text-[10px] text-text-secondary leading-tight">
                    Use Q&A, polls, chat, and inclusive audience experiences.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2">
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-emerald-100 text-success mt-0.5">
                  <BarChart3 className="h-2.5 w-2.5" />
                </span>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Manage your content</h4>
                  <p className="text-[10px] text-text-secondary leading-tight">
                    Create presentations, access recordings, and view analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom "Best for" Box */}
          <div className="mt-3 rounded-xl bg-emerald-50/50 p-2.5 text-left border border-emerald-100/60">
            <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-wider">
              Best for
            </span>
            <p className="text-[10px] text-text-secondary leading-tight mt-0.5">
              Speakers, educators, trainers, creators, professionals, teams, institutions, and organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Action Button & Sign In Link */}
      <div className="mt-4 space-y-2">
        <Link
          href={selectedRole === "audience" ? "/signup/audience" : "/signup/presenter"}
          className="flex h-10 sm:h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
        >
          <span>
            Continue as {selectedRole === "audience" ? "Audience" : "Presenter"}
          </span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <p className="text-center text-[11px] text-text-secondary">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold text-brand-intelligence hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
