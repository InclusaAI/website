# InclusaAI — Public Website (`@inclusaai/website`)

The official public-facing marketing and documentation website for **InclusaAI** — the inclusive-by-default assistive communication and real-time AI sign language interpretation platform.

## Features

- **Inclusive Experience**: Built with WCAG 2.2 AAA accessibility standards, high-contrast theming, font-scale controls, and screen-reader optimizations.
- **Product Showcase**: Detailed overview of live sign language avatars, multi-modal transcription, low-latency fanout, and verified compliance tools.
- **Interactive Tour & Demos**: Step-by-step interactive previews of Presenter Workspace and Audience Portal.
- **Self-Serve Access**: Direct sign-in, onboarding, and invitation redemption.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + `@inclusaai/design-tokens` (CSS custom properties)
- **UI Primitives**: `@inclusaai/ui` (Shared inclusive component library)
- **Icons**: Lucide React
- **Versioning**: Changesets

## Project Structure

```
website/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx               # UI-001: Landing Page
│   │   ├── features/page.tsx      # UI-002: Features
│   │   ├── how-it-works/page.tsx  # UI-003: How It Works
│   │   ├── accessibility/page.tsx # UI-004: Accessibility
│   │   ├── pricing/page.tsx       # UI-005: Pricing
│   │   ├── contact/page.tsx       # UI-006: Contact
│   │   ├── about/page.tsx         # UI-007: About
│   │   ├── docs/page.tsx          # UI-008: Documentation
│   │   ├── privacy/page.tsx       # UI-009: Privacy Policy
│   │   └── terms/page.tsx         # UI-010: Terms of Service
│   ├── signin/page.tsx            # Auth Sign-In / Sign-Up
│   ├── layout.tsx                 # Root layout with Accessibility Bar & Navigation
│   └── globals.css                # Global token imports and theme styling
├── components/
│   ├── navbar.tsx                 # Global responsive navigation header
│   ├── footer.tsx                 # Accessible global footer
│   └── accessibility-bar.tsx      # Quick contrast, font size & audio accessibility bar
├── package.json
└── architecture.md                # Detailed screen & component architecture
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run local development server
pnpm dev

# Build for production
pnpm build
```
