# InclusaAI Website — Architecture & Screen Map

## 1. Overview & Objectives

The InclusaAI website is the public-facing gateway for the InclusaAI platform. It communicates product capabilities, demonstrates inclusive technology (sign language avatars, real-time captions, multi-language speech), and provides friction-free access to sign-in and session joining.

---

## 2. Screen Specifications (UI-001 to UI-010)

| UI ID | Screen | Route | Key Components & Sections | Primary CTA |
| :--- | :--- | :--- | :--- | :--- |
| **UI-001** | **Landing Page** | `/` | Hero section with interactive live avatar demo, Quick Action chips, Value proposition tiles, Real-time transcription ticker, Live stats counter, Customer testimonials, FAQ accordion, Footer. | "Get Started Free" / "Join Live Demo" |
| **UI-002** | **Features** | `/features` | Interactive feature matrix (Sign Language Avatars, Speech-to-Text, Multi-language AI translation, External Display pairing, Meeting security, Latency SLAs). | "Try Interactive Demo" |
| **UI-003** | **How It Works** | `/how-it-works` | 3-step animated workflow for Presenters, Audiences, and Organizations. Technical architecture diagram of WebRTC / MediaPipe / WebSocket fanout. | "Create a Session" |
| **UI-004** | **Accessibility** | `/accessibility` | Accessibility statement, WCAG 2.2 AAA conformance report, Keyboard shortcut guide, Screen-reader compatibility matrix, High-contrast mode demo. | "Download Accessibility VPAT" |
| **UI-005** | **Pricing** | `/pricing` | Transparent tier comparison (Free Community, Professional Presenter, Enterprise & Education, Public Sector). Feature checklist & volume calculator. | "Start 14-Day Trial" |
| **UI-006** | **Contact** | `/contact` | Sales & partnership inquiry form, Accessibility advisory request, Support ticket submission, Office locations & direct email. | "Submit Inquiry" |
| **UI-007** | **About** | `/about` | Mission & Vision ("Inclusive by Default"), Founder story, Advisory board (Deaf community advocates, AI researchers), Security & Trust pillars. | "Meet the Team" |
| **UI-008** | **Documentation** | `/docs` | API reference, SDK quickstart, Webhook guides, Integration tutorials (Zoom, Teams, Google Meet, OBS Studio, RTMP). | "Explore SDKs" |
| **UI-009** | **Privacy Policy** | `/privacy` | Data protection notice, GDPR / CCPA compliance, Zero-retention biometric policy for webcam landmark processing. | "Review Data Safeguards" |
| **UI-010** | **Terms of Service**| `/terms` | Platform service terms, Acceptable use policy, SLA guarantees, Enterprise licensing clauses. | "Accept Terms" |

---

## 3. Component Hierarchy & Shared Layout

```
website/
├── app/
│   ├── layout.tsx                # Global HTML wrapper + ThemeProvider + SkipToContent
│   ├── (marketing)/
│   │   ├── layout.tsx            # Navigation Header + Sub-nav + Accessibility QuickBar + Footer
│   │   ├── page.tsx              # UI-001 Landing Page
│   │   ├── features/page.tsx     # UI-002 Features
│   │   ├── how-it-works/page.tsx # UI-003 How It Works
│   │   ├── accessibility/page.tsx# UI-004 Accessibility
│   │   ├── pricing/page.tsx      # UI-005 Pricing
│   │   ├── contact/page.tsx      # UI-006 Contact
│   │   ├── about/page.tsx        # UI-007 About
│   │   ├── docs/page.tsx         # UI-008 Documentation
│   │   ├── privacy/page.tsx      # UI-009 Privacy Policy
│   │   └── terms/page.tsx        # UI-010 Terms of Service
│   └── signin/
│       └── page.tsx              # Auth Portal (Sign In / Sign Up)
```

---

## 4. Integration with Shared Design System

The website directly consumes:
1. `@inclusaai/design-tokens`: CSS custom variables for consistent colors, spacing, radius, and WCAG-compliant high-contrast theme dimensions.
2. `@inclusaai/ui`: Shared buttons, cards, modals, dropdowns, and tags input for uniform UX across the marketing website and workspace applications.
