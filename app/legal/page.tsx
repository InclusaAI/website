"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Lock,
  Cookie,
  Database,
  Accessibility,
  Search,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Printer,
  Mail,
  Scale,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { EarlyAccessModal } from "../../components/early-access-modal";

const legalLinksList = [
  { label: "Privacy Policy", href: "#", id: "privacy-policy", icon: Lock },
  { label: "Terms of Service", href: "#", id: "terms-of-service", icon: FileText },
  { label: "Cookie Policy", href: "#", id: "cookie-policy", icon: Cookie },
  { label: "Data Processing", href: "#", id: "data-processing", icon: Database },
  { label: "Accessibility", href: "#", id: "accessibility", icon: Accessibility },
];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [earlyAccessType, setEarlyAccessType] = useState<"individual" | "partner">("individual");

  const handleOpenEarlyAccess = (type: "individual" | "partner" = "individual") => {
    setEarlyAccessType(type);
    setIsEarlyAccessOpen(true);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const filterMatches = (title: string, content: string) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return title.toLowerCase().includes(q) || content.toLowerCase().includes(q);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFD] text-slate-900 antialiased selection:bg-brand-intelligence selection:text-white">
      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        initialType={earlyAccessType}
        onClose={() => setIsEarlyAccessOpen(false)}
      />

      {/* Main Header */}
      <Header onOpenEarlyAccess={handleOpenEarlyAccess} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] pt-16 pb-20 text-white">
        {/* Ambient Glow Effects */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-intelligence/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 -z-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              <Scale className="h-4 w-4 text-cyan-400" />
              <span>Legal & Transparency Center</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              InclusaAI Legal Documentation
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Clear, transparent governance for our AI-powered sign language interpretation, live captioning, and multi-modal accessibility platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-400" />
                <span>Last Updated: September 17, 2026</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Compliance Version 2.4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar / Quick Links Navigation Card (3 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Links Block */}
            <div className="rounded-2xl border border-border-default bg-white p-6 shadow-sm sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-border-default mb-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <ShieldCheck className="h-5 w-5 text-brand-intelligence" />
                  <span>Legal Links</span>
                </div>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-brand-intelligence transition-colors"
                  title="Print legal documentation"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print</span>
                </button>
              </div>

              <p className="text-xs text-text-secondary mb-4">
                Select a document below to navigate directly or click the external links:
              </p>

              {/* Legal Dead Links Section as requested */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pt-1">
                  Legal
                </h3>
                <ul className="space-y-1">
                  {legalLinksList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-intelligence border border-transparent hover:border-slate-200 transition-all"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="h-4 w-4 text-slate-400 group-hover:text-brand-intelligence transition-colors" />
                            <span>{item.label}</span>
                          </div>
                          <ExternalLink className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand-intelligence opacity-70 group-hover:opacity-100 transition-all" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Document Filter Tabs */}
              <div className="mt-6 pt-4 border-t border-border-default">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  View Mode
                </label>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "all"
                        ? "bg-brand-intelligence text-white shadow-xs"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    View All Policy Sections
                  </button>
                  {legalLinksList.map((item) => (
                    <button
                      key={`tab-${item.id}`}
                      onClick={() => setActiveTab(item.id)}
                      className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        activeTab === item.id
                          ? "bg-brand-intelligence text-white shadow-xs"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Legal Inquiry Card */}
              <div className="mt-6 rounded-xl bg-blue-50/80 border border-blue-100 p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Mail className="h-4 w-4 text-brand-intelligence" />
                  <span>Have Legal Questions?</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  For legal inquiries, DPA requests, or compliance audits, contact our compliance team at:
                </p>
                <a
                  href="mailto:legal@inclusa.ai"
                  className="inline-block font-semibold text-brand-intelligence hover:underline"
                >
                  legal@inclusa.ai
                </a>
              </div>
            </div>
          </aside>

          {/* Detailed Content Columns (8 cols) */}
          <section className="lg:col-span-8 space-y-8">
            {/* Search Filter Bar */}
            <div className="rounded-2xl border border-border-default bg-white p-4 shadow-sm flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal terms (e.g. data retention, cookies, WCAG, privacy)..."
                  className="w-full h-10 rounded-xl border border-border-default bg-slate-50 pl-10 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-brand-intelligence focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-intelligence/20 transition-all"
                />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-500 hover:text-slate-900 underline px-2"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Section 1: Privacy Policy */}
            {(activeTab === "all" || activeTab === "privacy-policy") &&
              filterMatches(
                "Privacy Policy",
                "real-time sign language live captioning data collection encryption telemetry biometrics"
              ) && (
                <article
                  id="privacy-policy"
                  className="rounded-2xl border border-border-default bg-white p-6 sm:p-8 shadow-sm space-y-5"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-border-default">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-intelligence border border-blue-100">
                        <Lock className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
                        <p className="text-xs text-slate-500">Effective Date: September 17, 2026</p>
                      </div>
                    </div>
                    <a
                      href="http://localhost:3000/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-intelligence transition-colors"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                    <p>
                      At <strong>InclusaAI</strong> (a product by SynapGrid Technologies), accessibility and privacy are co-equal priorities. This Privacy Policy governs how we collect, process, and protect your information across our web applications, live sign language avatars, and captioning services.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">1. Information We Process</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Real-time Audio & Video Feeds:</strong> Processed ephemerally in-memory for live captioning and sign language translation. Video frames are analyzed solely for pose keypoint detection and are discarded immediately after rendering.</li>
                      <li><strong>Account Information:</strong> Name, work email address, organization affiliation, and authentication metadata when creating an account.</li>
                      <li><strong>Usage Telemetry:</strong> Session duration, feature engagement, performance metrics, and browser/device diagnostics.</li>
                    </ul>

                    <h4 className="text-sm font-bold text-slate-900">2. Zero Biometric Storage Standard</h4>
                    <p>
                      InclusaAI does <strong>NOT</strong> build face recognition profiles, store raw webcam recordings, or monetize user biometric data. Camera frames processed during live sign language translation sessions exist in volatile RAM only for the duration of inference computation.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">3. Data Protection & Encryption</h4>
                    <p>
                      All data in transit is protected using TLS 1.3 encryption protocols. Data stored at rest (such as saved transcript summaries or presenter settings) is encrypted with AES-256 standards in enterprise-grade database instances.
                    </p>

                    <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-emerald-900 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-xs">Your Data Rights</p>
                        <p className="text-xs text-emerald-800 mt-0.5">
                          You have the right to inspect, export, or permanently delete your account and associated session transcripts at any time from your settings panel.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              )}

            {/* Section 2: Terms of Service */}
            {(activeTab === "all" || activeTab === "terms-of-service") &&
              filterMatches(
                "Terms of Service",
                "acceptable use terms platform licensing SLA presenter participant subscription obligations"
              ) && (
                <article
                  id="terms-of-service"
                  className="rounded-2xl border border-border-default bg-white p-6 sm:p-8 shadow-sm space-y-5"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-border-default">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Terms of Service</h2>
                        <p className="text-xs text-slate-500">Effective Date: September 17, 2026</p>
                      </div>
                    </div>
                    <a
                      href="http://localhost:3000/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-intelligence transition-colors"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                    <p>
                      By accessing or using the InclusaAI platform, website, API, or assistive modules, you agree to be bound by these Terms of Service. Please read them carefully.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">1. License & Permitted Use</h4>
                    <p>
                      InclusaAI grants you a limited, non-exclusive, non-transferable license to utilize our multi-modal presentation tools, live sign language avatars, and transcription features for personal, educational, corporate, or public broadcast purposes.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">2. Acceptable Use Policy</h4>
                    <p>Users are strictly prohibited from:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Attempting to reverse engineer, decompile, or extract AI model weights or pose tracking pipeline algorithms.</li>
                      <li>Using the platform to generate or transmit hate speech, illegal content, or deceptive sign language translations.</li>
                      <li>Overriding rate limits or disrupting live broadcast streaming channels for non-authorized events.</li>
                    </ul>

                    <h4 className="text-sm font-bold text-slate-900">3. Service Availability & SLAs</h4>
                    <p>
                      We strive to maintain 99.9% uptime for enterprise live session translation channels. Planned maintenance schedules are posted in advance via our system status portal.
                    </p>
                  </div>
                </article>
              )}

            {/* Section 3: Cookie Policy */}
            {(activeTab === "all" || activeTab === "cookie-policy") &&
              filterMatches(
                "Cookie Policy",
                "essential operational analytics preferences referral localstorage tracking cookies"
              ) && (
                <article
                  id="cookie-policy"
                  className="rounded-2xl border border-border-default bg-white p-6 sm:p-8 shadow-sm space-y-5"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-border-default">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                        <Cookie className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Cookie Policy</h2>
                        <p className="text-xs text-slate-500">Effective Date: September 17, 2026</p>
                      </div>
                    </div>
                    <a
                      href="http://localhost:3000/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-intelligence transition-colors"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                    <p>
                      This Cookie Policy explains how InclusaAI uses cookies and browser storage technologies to provide a seamless, secure, and personalized user experience.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">1. Categories of Cookies We Use</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
                        <p className="font-bold text-slate-900 text-xs">Essential Cookies</p>
                        <p className="text-xs text-slate-500 mt-1">Required for authentication, session integrity, and theme preferences.</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
                        <p className="font-bold text-slate-900 text-xs">Functional Storage</p>
                        <p className="text-xs text-slate-500 mt-1">Stores local session state, referral attribution, and language options.</p>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900">2. Managing Cookie Preferences</h4>
                    <p>
                      You can adjust your browser settings at any time to block third-party cookies or alert you when cookies are sent. Disabling essential cookies may impact platform features like live avatar preferences or presenter login sessions.
                    </p>
                  </div>
                </article>
              )}

            {/* Section 4: Data Processing */}
            {(activeTab === "all" || activeTab === "data-processing") &&
              filterMatches(
                "Data Processing",
                "GDPR CCPA data processor controller subprocessors compliance DPA cross-border security"
              ) && (
                <article
                  id="data-processing"
                  className="rounded-2xl border border-border-default bg-white p-6 sm:p-8 shadow-sm space-y-5"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-border-default">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                        <Database className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Data Processing Addendum (DPA)</h2>
                        <p className="text-xs text-slate-500">Effective Date: September 17, 2026</p>
                      </div>
                    </div>
                    <a
                      href="http://localhost:3000/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-intelligence transition-colors"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                    <p>
                      Our Data Processing Addendum outlines our data protection commitments under GDPR, CCPA, and global privacy standards for corporate customers, educational institutions, and conference hosts using InclusaAI.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">1. Roles of Parties</h4>
                    <p>
                      The customer acts as the <strong>Data Controller</strong> determining the context of presentation streams. InclusaAI acts as the <strong>Data Processor</strong> processing real-time caption streams strictly under documented customer instructions.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">2. Sub-processors & Infrastructure</h4>
                    <p>
                      We utilize vetted tier-1 cloud infrastructure providers (such as Neon PostgreSQL and cloud compute nodes) located in isolated regional data centers with SOC2 Type II certifications.
                    </p>
                  </div>
                </article>
              )}

            {/* Section 5: Accessibility */}
            {(activeTab === "all" || activeTab === "accessibility") &&
              filterMatches(
                "Accessibility",
                "WCAG 2.1 AA AAA sign language avatar captions screen reader keyboard contrast inclusion"
              ) && (
                <article
                  id="accessibility"
                  className="rounded-2xl border border-border-default bg-white p-6 sm:p-8 shadow-sm space-y-5"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-border-default">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <Accessibility className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Accessibility Statement & Policy</h2>
                        <p className="text-xs text-slate-500">Effective Date: September 17, 2026</p>
                      </div>
                    </div>
                    <a
                      href="http://localhost:3000/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-intelligence transition-colors"
                    >
                      <span>Direct Link</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                    <p>
                      InclusaAI was built from day one around <strong>Inclusive by Default</strong> principles. We believe digital communication must be universally accessible to Deaf, Hard of Hearing, visually impaired, and neurodivergent individuals worldwide.
                    </p>

                    <h4 className="text-sm font-bold text-slate-900">1. WCAG 2.1 AA & AAA Standards Compliance</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Keyboard Accessibility:</strong> Complete navigation flow without requiring a mouse or touch inputs.</li>
                      <li><strong>Screen Reader Optimization:</strong> Comprehensive ARIA labels, live region announcements for real-time captions, and logical DOM structures.</li>
                      <li><strong>High Contrast & Typography:</strong> Adjustable font scaling, dynamic color contrast standards exceeding 4.5:1 ratio, and reduced motion options.</li>
                      <li><strong>Sign Language Avatars:</strong> Real-time 3D avatar rendering with customizable playback speeds and spatial positioning.</li>
                    </ul>

                    <h4 className="text-sm font-bold text-slate-900">2. Feedback & Continuous Improvement</h4>
                    <p>
                      We regularly conduct user testing with Deaf and accessibility advocates. If you encounter any accessibility barriers on our platform, please reach out directly to our accessibility advocate team at:
                    </p>
                    <p className="font-semibold text-brand-intelligence">
                      accessibility@inclusa.ai
                    </p>
                  </div>
                </article>
              )}

            {/* Bottom Callout Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Ready to transform your events?</span>
                </div>
                <h3 className="text-xl font-bold text-white">Experience InclusaAI Assistive Platform</h3>
                <p className="text-xs text-slate-300 max-w-md">
                  Join leading organizations making every presentation accessible with real-time AI sign language and captions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleOpenEarlyAccess("individual")}
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-intelligence px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-all"
              >
                <span>Request Early Access</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
