"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { logoLandscape } from "../public/assets";

const navItems = [
  { label: "Features", href: "/#", hasDropdown: false },
  { label: "How It Works", href: "/#", hasDropdown: false },
  { label: "Accessibility", href: "/#", hasDropdown: false },
  { label: "Pricing", href: "/#", hasDropdown: false },
  { label: "Docs", href: "/#", hasDropdown: false },
];

export interface HeaderProps {
  onOpenEarlyAccess?: (type?: "individual" | "partner") => void;
}

export function Header({ onOpenEarlyAccess }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-default/80 bg-white/95 backdrop-blur-md transition-all">
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

        {/* Desktop Navigation (Visible on Large Desktop screens only) */}
        <nav className="hidden items-center gap-7 lg:flex">
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

        {/* Desktop Auth & CTA Buttons (Visible on Large Desktop screens only) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/signin"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-text-primary hover:bg-surface-sunken transition-colors"
          >
            Sign In
          </Link>
          <button
            type="button"
            onClick={() => (onOpenEarlyAccess ? onOpenEarlyAccess("individual") : (window.location.href = "/early-access"))}
            className="inline-flex items-center justify-center rounded-lg bg-brand-intelligence px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-primary-hover hover:shadow-sm"
          >
            Request Early Access
          </button>
        </div>

        {/* Mobile & Tablet Navigation Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2.5 text-text-secondary hover:bg-surface-sunken hover:text-text-primary transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Right Side Slide-over Drawer (Portaled to document.body with solid bg & high z-index) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog" aria-modal="true">
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Right Drawer Panel */}
            <div className="fixed inset-y-0 right-0 z-[10000] flex w-full max-w-[320px] sm:max-w-[360px] flex-col justify-between bg-white bg-[#ffffff] p-6 shadow-2xl transition-transform border-l border-border-default">
              <div>
                {/* Drawer Top Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-border-default">
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src={logoLandscape}
                      alt="InclusaAI"
                      width={logoLandscape.width}
                      height={logoLandscape.height}
                      className="h-9 w-auto object-contain object-left"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl p-2 text-text-secondary hover:bg-surface-sunken hover:text-text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Drawer Navigation Links */}
                <nav className="py-6 flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium text-text-primary hover:bg-surface-sunken hover:text-brand-intelligence transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && <ChevronDown className="h-4 w-4 text-text-tertiary" />}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Drawer Action Buttons Footer */}
              <div className="space-y-3 pt-6 border-t border-border-default">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl border border-border-default py-3 text-sm font-semibold text-text-primary hover:bg-surface-sunken transition-colors"
                >
                  Sign In
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEarlyAccess) {
                      onOpenEarlyAccess("individual");
                    } else {
                      window.location.href = "/early-access";
                    }
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-intelligence py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
                >
                  <span>Request Early Access</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
