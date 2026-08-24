"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Users,
  Mic,
  Subtitles,
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
    <div className="flex flex-col justify-between h-full max-w-3xl mx-auto w-full">
      {/* Header Info */}
      <div>
        <div className="space-y-1.5 text-left">
          <span className="text-xs font-bold text-brand-intelligence">
            Get Started with InclusaAI
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            How would you like to use InclusaAI?
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary">
            Choose how you&apos;d like to get started. You can expand how you use InclusaAI later.
          </p>
        </div>

        {/* 2 Role Choice Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Card 1: Join as an Audience Member */}
          <div
            onClick={() => setSelectedRole("audience")}
            className={`group relative flex flex-col justify-between rounded-3xl border-2 p-6 cursor-pointer transition-all ${
              selectedRole === "audience"
                ? "border-brand-intelligence bg-white shadow-lg ring-2 ring-brand-intelligence/20"
                : "border-border-default bg-white hover:border-border-strong hover:shadow-sm"
            }`}
          >
            {/* Active Checkmark Badge */}
            {selectedRole === "audience" && (
              <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-intelligence text-white shadow-xs">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
            )}

            <div>
              {/* Card Icon */}
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100/70 text-brand-intelligence">
                  <Users className="h-6 w-6" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-4 text-center">
                <p className="text-xs text-text-tertiary font-medium">Join as an</p>
                <h3 className="text-lg font-bold text-slate-900">Audience Member</h3>
                <p className="mt-1 text-[11px] text-text-secondary leading-normal">
                  Experience presentations and conversations with accessibility tools designed around you.
                </p>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-border-default/60" />

              {/* 3 Features List */}
              <div className="space-y-3 text-left">
                {/* Feature 1 */}
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 font-bold text-[10px] mt-0.5">
                    CC
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Live accessibility</h4>
                    <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                      Follow conversations with real-time captions and transcription.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600 mt-0.5">
                    <Globe className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Language support</h4>
                    <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                      Use translation and available sign-language experiences.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mt-0.5">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Participate your way</h4>
                    <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                      Join Q&A, polls, chat, and other interactive experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom "Best for" Box */}
            <div className="mt-6 rounded-2xl bg-[#F8FAFD] p-3.5 text-left border border-border-default/50">
              <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider">
                Best for
              </span>
              <p className="mt-0.5 text-[11px] text-text-secondary leading-snug">
                Attendees, students, learners, event participants, and anyone consuming accessible content.
              </p>
            </div>
          </div>

          {/* Card 2: Join as a Presenter */}
          <div
            onClick={() => setSelectedRole("presenter")}
            className={`group relative flex flex-col justify-between rounded-3xl border-2 p-6 cursor-pointer transition-all ${
              selectedRole === "presenter"
                ? "border-brand-intelligence bg-white shadow-lg ring-2 ring-brand-intelligence/20"
                : "border-border-default bg-white hover:border-border-strong hover:shadow-sm"
            }`}
          >
            {/* Active Checkmark Badge */}
            {selectedRole === "presenter" && (
              <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-intelligence text-white shadow-xs">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
            )}

            <div>
              {/* Card Icon */}
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100/70 text-emerald-600">
                  <Mic className="h-6 w-6" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-4 text-center">
                <p className="text-xs text-text-tertiary font-medium">Join as a</p>
                <h3 className="text-lg font-bold text-slate-900">Presenter</h3>
                <p className="mt-1 text-[11px] text-text-secondary leading-normal">
                  Share your knowledge and create presentations that everyone can understand and engage with.
                </p>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-border-default/60" />

              {/* 3 Features List */}
              <div className="space-y-3 text-left">
                {/* Feature 1 */}
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-bold text-[10px] mt-0.5">
                    CC
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Present accessibly</h4>
                    <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                      Deliver with captions, translation, and sign-language support.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600 mt-0.5">
                    <Users className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Engage everyone</h4>
                    <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                      Use Q&A, polls, chat, and inclusive audience experiences.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 mt-0.5">
                    <BarChart3 className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Manage your content</h4>
                    <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                      Create presentations, access recordings, and view analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom "Best for" Box */}
            <div className="mt-6 rounded-2xl bg-emerald-50/50 p-3.5 text-left border border-emerald-100/50">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                Best for
              </span>
              <p className="mt-0.5 text-[11px] text-text-secondary leading-snug">
                Speakers, educators, trainers, creators, professionals, teams, institutions, and organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Button & Sign In Link */}
      <div className="mt-8 space-y-3 pt-2">
        <Link
          href={selectedRole === "audience" ? "/signup/audience" : "/signup/presenter"}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
        >
          <span>
            Continue as {selectedRole === "audience" ? "Audience" : "Presenter"}
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="text-center text-xs text-text-secondary">
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
