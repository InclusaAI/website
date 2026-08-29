"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { logoLandscapeDarkMode, synapgridLogo } from "@repo/assets";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#" },
    { label: "How It Works", href: "/#" },
    { label: "Live Captions", href: "/#" },
    { label: "Translation", href: "/#" },
    { label: "Pricing", href: "/#" },
  ],
  Resources: [
    { label: "Blog", href: "/#" },
    { label: "Help Center", href: "/#" },
    { label: "Guides", href: "/#" },
    { label: "Webinars", href: "/#" },
    { label: "Status", href: "/#" },
  ],
  Company: [
    { label: "About Us", href: "/#" },
    { label: "Careers", href: "/#" },
    { label: "Partners", href: "/#" },
    { label: "Press", href: "/#" },
    { label: "Contact", href: "/#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/#" },
    { label: "Terms of Service", href: "/#" },
    { label: "Cookie Policy", href: "/#" },
    { label: "Data Processing", href: "/#" },
    { label: "Accessibility", href: "/#" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    const targetEmail = email.trim();
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: targetEmail }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setSubscribedEmail(targetEmail);
        setShowSuccessModal(true);
        setStatusMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setIsSuccess(false);
        setStatusMessage(data.message || "Unable to subscribe right now.");
      }
    } catch {
      setIsSuccess(false);
      setStatusMessage("Unable to connect. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#081325] text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/#" className="inline-block">
              <Image
                src={logoLandscapeDarkMode}
                alt="InclusaAI"
                width={logoLandscapeDarkMode.width}
                height={logoLandscapeDarkMode.height}
                className="h-10 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              AI-powered communication platform for inclusive presentations and events.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </Link>
              <Link
                href="/#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <span className="text-xs font-bold">▶</span>
              </Link>
              <Link
                href="/#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                aria-label="X Twitter"
              >
                <span className="text-xs font-bold">𝕏</span>
              </Link>
              <Link
                href="/#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/90">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscribe Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90">
              Stay in the loop
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Subscribe to get product updates and accessibility tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="h-10 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 text-xs text-white placeholder:text-white/40 focus:border-brand-intelligence focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-10 rounded-lg bg-brand-intelligence px-4 text-xs font-semibold text-white hover:bg-primary-hover transition-colors disabled:opacity-50 min-w-[100px] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" aria-hidden="true" />
                      <span>Subscribing</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
              {statusMessage && !showSuccessModal && (
                <p className={`text-xs mt-1 ${isSuccess ? "text-emerald-400 font-medium" : "text-rose-400"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-white/50">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:flex-wrap lg:flex-nowrap">
            <p className="text-center md:text-left">© 2026 InclusaAI. All rights reserved.</p>

            <div className="flex items-center gap-2 text-white/70">
              <span className="text-[11px] uppercase tracking-wider text-white/40">
                A product by
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-white/90">
                <Image
                  src={synapgridLogo}
                  alt="SynapGrid Technologies"
                  width={synapgridLogo.width}
                  height={synapgridLogo.height}
                  className="h-4 w-auto object-contain"
                />
                <Link href="https://www.synapgrid.net/" target="_blank" className="hover:text-white transition-colors">
                  SynapGrid Technologies
                </Link>
              </span>
            </div>

            <p className="w-full text-center md:w-full lg:w-auto md:pt-2 lg:pt-0">
              Made with ❤️ for accessibility and inclusion.
            </p>
          </div>
        </div>
      </div>

      {/* Success Subscriber Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscriber-modal-title"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#0a1628] border border-white/15 p-6 sm:p-8 shadow-2xl text-center">
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-intelligence"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 id="subscriber-modal-title" className="text-xl font-bold text-white mb-2">
              You&apos;re on the list! 🎉
            </h3>

            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Thank you for subscribing! We&apos;ve added <span className="font-semibold text-cyan-300">{subscribedEmail}</span> to our priority waitlist. You&apos;ll be among the first to receive product updates and accessibility tips.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-lg bg-brand-intelligence py-3 text-xs font-semibold text-white hover:bg-primary-hover transition-colors shadow-lg shadow-brand-intelligence/30"
            >
              Awesome, thanks!
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
