"use client";

import React from "react";

export interface InclusaaiThemeBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "portrait" | "landscape" | "square" | "cover" | "sidebar";
  themeMode?: "light" | "dark" | "navy" | "system" | "high-contrast";
  showArtwork?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function InclusaaiThemeBackground({
  layout = "cover",
  themeMode = "light",
  showArtwork = true,
  className = "",
  children,
  ...props
}: InclusaaiThemeBackgroundProps) {
  const isExplicitDark = themeMode === "dark" || themeMode === "navy";

  // Aspect / layout specific sizing for the artwork overlay
  const isSidebar = layout === "sidebar" || layout === "portrait";

  return (
    <div
      className={`relative isolate overflow-hidden transition-colors duration-300 ${
        isExplicitDark
          ? "bg-gradient-to-b from-[#070E29] via-[#0A153A] to-[#040817] text-text-primary"
          : "bg-gradient-to-b from-[#EFF5FF] via-[#E5F0FD] to-[#DCE8FC] text-text-primary"
      } ${className}`}
      {...props}
    >
      {/* Background Soft Glow Orbs */}
      {showArtwork && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Top-right subtle glow orb */}
          <div
            className={`absolute -top-24 -right-24 rounded-full blur-3xl transition-all duration-500 ${
              isExplicitDark ? "h-80 w-80 bg-cyan-500/15" : "h-72 w-72 bg-blue-400/20"
            }`}
          />

          {/* Bottom-left ambient glow */}
          <div
            className={`absolute -bottom-24 -left-24 rounded-full blur-3xl transition-all duration-500 ${
              isExplicitDark ? "h-96 w-96 bg-brand-intelligence/20" : "h-80 w-80 bg-indigo-300/25"
            }`}
          />

          {/* SVG Wave Mesh & Connecting Node Particles Artworks */}
          <svg
            className={`absolute bottom-0 left-0 w-full transition-opacity duration-500 ${
              isExplicitDark ? "opacity-90" : "opacity-70"
            } ${isSidebar ? "h-64 sm:h-80" : "h-48 sm:h-72 lg:h-96"}`}
            viewBox={isSidebar ? "0 0 400 600" : "0 0 1200 400"}
            fill="none"
            preserveAspectRatio={isSidebar ? "xMidYBottom meet" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2146D0" stopOpacity={isExplicitDark ? "0.6" : "0.45"} />
                <stop offset="50%" stopColor="#46C6FF" stopOpacity={isExplicitDark ? "0.55" : "0.35"} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={isExplicitDark ? "0.35" : "0.2"} />
              </linearGradient>

              <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#46C6FF" stopOpacity={isExplicitDark ? "0.5" : "0.35"} />
                <stop offset="50%" stopColor="#2146D0" stopOpacity={isExplicitDark ? "0.4" : "0.25"} />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity={isExplicitDark ? "0.2" : "0.1"} />
              </linearGradient>

              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#46C6FF" stopOpacity={isExplicitDark ? "0.9" : "0.8"} />
                <stop offset="100%" stopColor="#2146D0" stopOpacity="0" />
              </radialGradient>
            </defs>

            {isSidebar ? (
              /* Portrait / Sidebar Vertical Wave Lines & Nodes */
              <>
                <path
                  d="M-40,420 C60,380 120,490 220,440 C320,390 360,470 440,430"
                  stroke="url(#waveGrad1)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M-20,480 C80,440 140,550 260,490 C360,440 400,530 460,500"
                  stroke="url(#waveGrad2)"
                  strokeWidth="1.2"
                />
                <path
                  d="M-30,530 C50,510 130,580 230,550 C330,520 370,580 430,560"
                  stroke="url(#waveGrad1)"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />

                {/* Particle Network Nodes */}
                <circle cx="120" cy="490" r="3" fill="#46C6FF" />
                <circle cx="120" cy="490" r="8" fill="url(#nodeGlow)" />
                <circle cx="220" cy="440" r="2.5" fill="#2146D0" />
                <circle cx="260" cy="490" r="3.5" fill="#46C6FF" />
                <circle cx="260" cy="490" r="9" fill="url(#nodeGlow)" />
                <circle cx="360" cy="440" r="2" fill="#8B5CF6" />
                <circle cx="80" cy="440" r="2.5" fill="#38BDF8" />
                <circle cx="230" cy="550" r="3" fill="#46C6FF" />
              </>
            ) : (
              /* Landscape / Wide Container Wave Lines & Nodes */
              <>
                <path
                  d="M0,280 C200,180 400,340 650,220 C900,100 1050,300 1250,180"
                  stroke="url(#waveGrad1)"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <path
                  d="M0,320 C180,240 380,380 620,270 C880,160 1020,340 1250,230"
                  stroke="url(#waveGrad2)"
                  strokeWidth="1.25"
                />
                <path
                  d="M0,360 C150,300 350,420 580,330 C820,230 980,380 1250,290"
                  stroke="url(#waveGrad1)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
                <path
                  d="M0,390 C220,350 450,430 700,370 C950,310 1100,400 1250,350"
                  stroke="url(#waveGrad2)"
                  strokeWidth="0.8"
                />

                {/* Particle Network Nodes */}
                <circle cx="200" cy="180" r="3" fill="#46C6FF" />
                <circle cx="200" cy="180" r="8" fill="url(#nodeGlow)" />
                <circle cx="400" cy="340" r="3.5" fill="#2146D0" />
                <circle cx="650" cy="220" r="4" fill="#46C6FF" />
                <circle cx="650" cy="220" r="10" fill="url(#nodeGlow)" />
                <circle cx="900" cy="100" r="3" fill="#8B5CF6" />
                <circle cx="1050" cy="300" r="3.5" fill="#46C6FF" />
                <circle cx="1050" cy="300" r="9" fill="url(#nodeGlow)" />
                <circle cx="620" cy="270" r="2.5" fill="#38BDF8" />
                <circle cx="820" cy="230" r="3" fill="#46C6FF" />
              </>
            )}
          </svg>
        </div>
      )}

      {/* Direct Children */}
      {children}
    </div>
  );
}

export const ThemeBackground = InclusaaiThemeBackground;
export const inclusaai_theme_background = InclusaaiThemeBackground;
