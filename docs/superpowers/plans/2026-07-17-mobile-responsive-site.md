# Mobile Responsive Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the full homepage responsive and comfortable from 320px phones through desktop without changing its content or desktop visual identity.

**Architecture:** Apply mobile-first Tailwind adjustments inside each existing component and keep global CSS limited to safe media defaults. Preserve current component boundaries, anchors, and desktop grids.

**Tech Stack:** Next.js 16 Pages Router, React 19, Tailwind CSS 4, next/image, Node test runner, ESLint.

## Global Constraints

- Preserve all current copy, images, section order, colors, and desktop layouts.
- Support phone widths down to 320px without horizontal page scrolling.
- Keep primary phone actions full width and at least 44px high.
- Preserve the desktop Hero scroll-scrub behavior and reduced-motion behavior.
- Do not modify or discard unrelated dirty-worktree changes.

---

### Task 1: Responsive regression coverage

**Files:**
- Create: `tests/mobile-responsive.test.mjs`

**Interfaces:**
- Consumes: source files under `components/` and `styles/globals.css`.
- Produces: assertions for phone header sizing, natural Hero height, full-width actions, mobile-safe benefit pills, compact journey cards, and stacked footer alignment.

- [ ] Write source-level assertions for the required responsive behavior.
- [ ] Run `node --test tests/mobile-responsive.test.mjs` and confirm the new assertions fail against the current implementation.

### Task 2: Navigation and Hero

**Files:**
- Modify: `components/Navbar.jsx`
- Modify: `components/Hero.jsx`

**Interfaces:**
- Consumes: existing anchors, logo assets, Hero video, and desktop scroll-scrub state.
- Produces: a 64px mobile navigation header and a naturally sized stacked Hero below 1024px.

- [ ] Reduce phone header/logo dimensions and make the menu control 44px.
- [ ] Make the mobile drawer account for the 64px header.
- [ ] Remove mobile viewport-height forcing from Hero.
- [ ] Add a safe gutter to Hero copy, stack actions, and make the primary action full width.
- [ ] Convert partner types to a compact two-column mobile grid and keep the video full-bleed.

### Task 3: Content and benefit sections

**Files:**
- Modify: `components/BentoHighlights.jsx`
- Modify: `components/WhatIsSection.jsx`
- Modify: `components/MemberBenefits.jsx`
- Modify: `components/VendorBenefits.jsx`
- Modify: `components/VendorBenefitCard.jsx`
- Modify: `components/PartnerCategories.jsx`
- Modify: `components/BusinessCategoryCard.jsx`

**Interfaces:**
- Consumes: current section data and images.
- Produces: single-column phone layouts, compact vertical spacing, full-width phone actions, and overflow-safe member artwork.

- [ ] Reduce phone vertical spacing and fixed image/card heights.
- [ ] Make split-section actions full width on phones.
- [ ] Make benefit pills full width on phones and defer stagger transforms until `sm`.
- [ ] Preserve the desktop member-benefit orbit and bottom artwork.
- [ ] Reduce eager category-image loading to the first visible phone cards.

### Task 4: Journey, supporting sections, and footer

**Files:**
- Modify: `components/HowItWorks.jsx`
- Modify: `components/ProcessStep.jsx`
- Modify: `components/LogoMarquee.jsx`
- Modify: `components/JoinPaths.jsx`
- Modify: `components/TrustSection.jsx`
- Modify: `components/Faq.jsx`
- Modify: `components/FaqAccordion.jsx`
- Modify: `components/Footer.jsx`
- Modify: `styles/globals.css`

**Interfaces:**
- Consumes: existing tabs, arrows, links, and marquee animation.
- Produces: 320px-safe tabs, compact journey cards, touch-friendly accordions, stacked actions, and a left-aligned mobile footer.

- [ ] Make tabs fill their available phone width and reduce phone ProcessStep height.
- [ ] Reduce marquee phone gaps and icon dimensions.
- [ ] Reduce phone card padding and make join actions full width.
- [ ] Make FAQ controls compact but at least 44px high.
- [ ] Stack footer content and legal links with phone-left alignment.
- [ ] Add global safe media sizing without changing overflow scroll-container behavior.

### Task 5: Verification

**Files:**
- Verify all files modified above.

**Interfaces:**
- Produces: fresh test, lint, and production-build evidence.

- [ ] Run `node --test tests/*.test.mjs` and confirm zero failures.
- [ ] Run ESLint on all modified component and test files.
- [ ] Run `npm run build` and confirm the production build succeeds.
- [ ] Review the final diff for accidental copy, anchor, or desktop-layout changes.

