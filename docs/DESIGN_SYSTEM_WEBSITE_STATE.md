# Design System & Website Diagnostic State Report

**Date:** September 17, 2026  
**Scope:** `@inclusaai/ui` and `@inclusaai/design-tokens` integration between `design-system` and `website` repositories.

---

## 1. design-system — published package state

* **Package Versions (`package.json`)**:
  * `packages/ui/package.json`: `"version": "0.2.0"`
  * `packages/design-tokens/package.json`: `"version": "0.2.0"`

* **Changeset Status (`.changeset/`)**:
  * Present files: `README.md`, `config.json`, `update-ui-components.md`.
  * `update-ui-components.md` is a **PENDING** changeset (specifies a `patch` update for `@inclusaai/ui` with the description: `"Fix switch component dimensions and alignment tokens"`). It has **not** yet been consumed by a changeset version bump release.

* **GitHub Release Workflow (`.github/workflows/release.yml`)**:
  * `release.yml` **exists** and is committed on the `main` branch (`blob 69c432ef96bc317f41b7a9cabc2f51939aa0e01d`).

* **Git Branch & Commit Details**:
  * **Current active branch**: `dev_branch`
  * **Latest commit on `dev_branch`**: `c00ad3df6bfcf4b08709f187a53c0bd73c38ec65` (`fix(ui): update switch component sizing and add changeset`)
  * **Latest commit on `main`**: `78f55644c8f8ee2ebc0a4071b62c3ff978e48299` (`Merge pull request #12 from InclusaAI/dev_branch`)

---

## 2. website — actual dependency resolution state

* **Declared Version Ranges (`website/package.json`)**:
  * `"@inclusaai/design-tokens"`: `"^0.2.0"`
  * `"@inclusaai/ui"`: `"^0.2.0"`

* **Lockfile Resolved Versions (`website/pnpm-lock.yaml`)**:
  * `@inclusaai/design-tokens`: `0.2.0`
  * `@inclusaai/ui`: `0.2.0` (specifically `@inclusaai/ui@0.2.0(...)`)

* **Version Comparison vs. `design-system`**:
  * `website`'s declared specifiers (`^0.2.0`) and lockfile resolutions (`0.2.0`) **MATCH** the published package versions in `design-system` (`0.2.0`).
  * However, `design-system` contains an unreleased changeset (`update-ui-components.md`) on `dev_branch` targeting `@inclusaai/ui` that has **not** been published to GitHub Packages (the published package version remains `0.2.0`).

* **Check for `link:` Entries (`website/package.json`)**:
  * **Zero** `link:` entries exist. None were found anywhere in `dependencies` or `devDependencies`.

* **NPM Registry Configuration (`website/.npmrc`)**:
  * `website/.npmrc` **exists** at the repo root. Verbatim contents:
    ```ini
    @inclusaai:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
    ```

* **Environment File Protection (`.gitignore` & Git History)**:
  * `website/.gitignore` explicitly ignores `.env` files (lines 8–15: `.env*.local`, `.env`, `.env.local`, `.env.production`, etc.).
  * Git history check (`git -C website log --all --oneline -- .env`) returned **zero commits**, confirming that a `.env` file was **never** committed to git history at any point.

---

## 3. Is website's UI actually importing from @inclusaai/ui at all?

* **Files Importing from `@inclusaai/ui`**:
  * `website/app/layout.tsx`: Imports `ThemeProvider` from `@inclusaai/ui/theme-context`.
  * `website/app/signin/page.tsx`: Imports `InclusaaiThemeBackground` from `@inclusaai/ui/theme-background` and `useTheme` from `@inclusaai/ui/theme-context`.
  * `website/app/early-access/page.tsx`: Imports `useTheme` from `@inclusaai/ui/theme-context`.
  * `website/components/early-access-modal.tsx`: Imports `useTheme` from `@inclusaai/ui/theme-context`.
  * `website/app/globals.css`: `@import "@inclusaai/ui/css/utilities";` & `@source "node_modules/@inclusaai/ui";`.
  * `website/next.config.ts`: Configures `transpilePackages: ["@inclusaai/ui", "@inclusaai/design-tokens"]`.

* **Component Import Gap**:
  * **None** of `@inclusaai/ui`'s rendered UI components (`Button`, `Card`, `Badge`, `Modal`, `Switch`, `Dropdown`, `Tabs`, `SectionHeader`, `Avatar`, `Progress`, `Code`, `StepperHorizontal`, `TagsInput`, `Pagination`) are imported anywhere in `website`.

* **Locally-Defined Component Naming Collisions & Lookalikes**:
  * `Button` lookalikes: `website/components/header.tsx`, `footer.tsx`, `hero-section.tsx`, `early-access-modal.tsx`, `app/early-access/page.tsx`, `app/legal/page.tsx`, `app/signin/page.tsx`, `app/signup/page.tsx` construct local HTML `<button>` elements with inline Tailwind styles (`bg-brand-intelligence`, `rounded-xl`, etc.) rather than importing `Button` from `@inclusaai/ui/button`.
  * `Card` lookalikes: `website/components/features-overview.tsx`, `how-it-works.tsx`, `product-modes.tsx`, `feature-highlights.tsx`, `social-proof-cta.tsx`, `app/legal/page.tsx`, `app/early-access/page.tsx` define local `<div>` wrappers (`rounded-2xl border border-border-default bg-white p-6`) rather than importing `Card` from `@inclusaai/ui/card`.
  * `Badge` lookalikes: `website/components/hero-section.tsx`, `features-overview.tsx`, `app/legal/page.tsx`, `app/early-access/page.tsx` construct custom inline badge pills (`rounded-full bg-blue-50 px-4 py-1...`) rather than importing `Badge` from `@inclusaai/ui/badge`.
  * `Modal` lookalikes: `website/components/early-access-modal.tsx` and `website/components/footer.tsx` (subscriber modal) implement custom overlay `<div>` containers rather than importing `Modal` from `@inclusaai/ui/modal`.
  * `Tabs` lookalikes: `website/components/product-modes.tsx` and `website/app/legal/page.tsx` implement custom button-group tab bars rather than importing `Tabs` from `@inclusaai/ui/tabs`.

---

## 4. node_modules actual on-disk state

* **Installed Package Versions (`website/node_modules`)**:
  * `website/node_modules/@inclusaai/ui/package.json`: `"version": "0.2.0"`
  * `website/node_modules/@inclusaai/design-tokens/package.json`: `"version": "0.2.0"`

* **State Agreement Verification**:
  * Claimed version range (`^0.2.0`), lockfile resolution (`0.2.0`), and installed on-disk version (`0.2.0`) **all agree** with each other. No discrepancy exists between `package.json`, `pnpm-lock.yaml`, and `node_modules`.

---

## Summary

**Most likely explanation based on repo evidence:**  
The primary reason `website` displays outdated styling/components despite an up-to-date dependency version (`0.2.0`) is architectural: `website` does not actually import or consume any of `@inclusaai/ui`'s UI components (`Button`, `Card`, `Badge`, `Modal`, `Switch`, `Tabs`, etc.), relying instead on locally-defined HTML elements styled with custom inline Tailwind utility classes. Consequently, visual updates or fixes published inside `@inclusaai/ui` have no effect on `website`'s rendered UI. Furthermore, recent component fixes (such as the switch component update in `c00ad3d`) remain in a pending changeset (`update-ui-components.md`) on `dev_branch` and have not yet been released or published to GitHub Packages.
