"use client";

import Link from "next/link";
import Image from "next/image";
import { logoLandscape } from "@repo/assets";

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
  return (
    <footer className="bg-[#081325] text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/#" className="inline-block">
              <div className="rounded-lg bg-white/95 p-1.5 inline-block">
                <Image
                  src={logoLandscape}
                  alt="InclusaAI"
                  width={logoLandscape.width}
                  height={logoLandscape.height}
                  className="h-8 w-auto object-contain object-left"
                />
              </div>
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
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 text-xs text-white placeholder:text-white/40 focus:border-brand-intelligence focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 rounded-lg bg-brand-intelligence px-4 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© 2026 InclusaAI, Inc. All rights reserved.</p>
          <p>Made with ❤️ for accessibility and inclusion.</p>
        </div>
      </div>
    </footer>
  );
}
