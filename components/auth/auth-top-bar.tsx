"use client";

import { useState } from "react";
import { Sun, Moon, Monitor, Globe, ChevronDown } from "lucide-react";

export function AuthTopBar() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [language, setLanguage] = useState("EN");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <div className="flex shrink-0 items-center justify-end gap-3 pb-1">
      {/* Theme Toggle Group */}
      <div className="flex items-center rounded-full border border-border-default/80 bg-surface-sunken/50 p-1 gap-0.5">
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
            theme === "light"
              ? "bg-white text-brand-intelligence shadow-xs border border-brand-intelligence/20"
              : "text-text-tertiary hover:text-text-primary"
          }`}
          aria-label="Light theme"
        >
          <Sun className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
            theme === "dark"
              ? "bg-white text-brand-intelligence shadow-xs border border-brand-intelligence/20"
              : "text-text-tertiary hover:text-text-primary"
          }`}
          aria-label="Dark theme"
        >
          <Moon className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("system")}
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
            theme === "system"
              ? "bg-white text-brand-intelligence shadow-xs border border-brand-intelligence/20"
              : "text-text-tertiary hover:text-text-primary"
          }`}
          aria-label="System theme"
        >
          <Monitor className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Language Picker Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          className="flex items-center gap-1.5 rounded-full border border-border-default bg-white px-3 py-1 text-xs font-semibold text-text-primary shadow-xs hover:bg-surface-sunken transition-colors"
        >
          <Globe className="h-3.5 w-3.5 text-text-tertiary" />
          <span>{language}</span>
          <ChevronDown className="h-3 w-3 text-text-tertiary" />
        </button>

        {langMenuOpen && (
          <div className="absolute right-0 mt-1 z-30 w-28 rounded-lg border border-border-default bg-white p-1 shadow-lg">
            {["EN", "ES", "FR", "DE", "AR", "ZH"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setLangMenuOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-md px-2 py-1 text-xs font-medium ${
                  language === lang
                    ? "bg-brand-intelligence/10 text-brand-intelligence font-bold"
                    : "text-text-primary hover:bg-surface-sunken"
                }`}
              >
                <span>{lang}</span>
                {language === lang && <span>✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
