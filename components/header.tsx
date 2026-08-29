"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { logoLandscape } from "@repo/assets";

const navItems = [
  { label: "Features", href: "/#", hasDropdown: false },
  { label: "How It Works", href: "/#", hasDropdown: false },
  { label: "Accessibility", href: "/#", hasDropdown: false },
  { label: "Pricing", href: "/#", hasDropdown: false },
  { label: "Docs", href: "/#", hasDropdown: false },
  // { label: "Company", href: "/#", hasDropdown: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-default/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/signup" className="flex items-center gap-2">
          <Image
            src={logoLandscape}
            alt="InclusaAI"
            width={logoLandscape.width}
            height={logoLandscape.height}
            priority
            className="h-11 w-auto object-contain object-left"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-brand-intelligence"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 text-text-tertiary transition-transform group-hover:rotate-180 group-hover:text-brand-intelligence" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth & CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/signin"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-text-primary hover:bg-surface-sunken transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-brand-intelligence px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-primary-hover hover:shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-sunken"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border-default bg-white px-4 py-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1 text-base font-medium text-text-primary"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4 text-text-tertiary" />}
              </Link>
            ))}
            <div className="border-t border-border-default pt-4 flex flex-col gap-3">
              <Link
                href="/signin"
                className="w-full rounded-lg border border-border-default py-2.5 text-center text-sm font-semibold text-text-primary"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="w-full rounded-lg bg-brand-intelligence py-2.5 text-center text-sm font-semibold text-white shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
