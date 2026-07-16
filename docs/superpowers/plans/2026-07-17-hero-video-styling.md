# Hero and Video Styling Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the landing-page hero and navbar white and remove the hero video's shadow without changing layout or behavior.

**Architecture:** Keep the existing component structure and Tailwind utility styling. Make three localized class-name substitutions in `Hero.jsx` and `Navbar.jsx`, then verify the source invariants, lint/build output, and rendered desktop/mobile presentation.

**Tech Stack:** Next.js 16 Pages Router, React 19, Tailwind CSS 4, ESLint 9

## Global Constraints

- Keep the navbar's subtle `shadow-sm` state after scrolling.
- Keep the video wrapper's rounded corners, dimensions, overflow clipping, and dark loading background.
- Keep all hero layout, animation, scroll-scrubbing, controls, and responsive behavior unchanged.
- Do not modify unrelated user changes already present in the working tree.

---

### Task 1: Update Hero and Navbar Surface Styling

**Files:**
- Modify: `components/Hero.jsx:89`
- Modify: `components/Hero.jsx:145`
- Modify: `components/Navbar.jsx:29`
- Modify: `components/Navbar.jsx:95`

**Interfaces:**
- Consumes: Existing Tailwind utility class strings in `Hero` and `Navbar`.
- Produces: A white hero/navbar surface and a shadow-free hero video wrapper; no JavaScript interface changes.

- [ ] **Step 1: Run source assertions to verify the requested state is absent**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const assert = require('assert');
const hero = fs.readFileSync('components/Hero.jsx', 'utf8');
const navbar = fs.readFileSync('components/Navbar.jsx', 'utf8');
assert(hero.includes('className="bg-white min-h-screen'), 'hero background is not white');
assert(!hero.includes('overflow-hidden shadow-2xl bg-[#0E1420]'), 'video shadow is still present');
assert(navbar.includes('z-50 bg-white/95 backdrop-blur-md'), 'navbar background is not white');
assert(navbar.includes('xl:hidden bg-white border-t'), 'mobile menu background is not white');
NODE
```

Expected: FAIL with `AssertionError: hero background is not white`.

- [ ] **Step 2: Apply the minimal utility-class changes**

In `components/Hero.jsx`, use these exact class strings:

```jsx
<div className="bg-white min-h-screen flex items-center pt-24 pb-14 md:pt-28">
```

```jsx
<div className="relative w-full max-w-[560px] md:max-w-[680px] aspect-[1139/720] rounded-[28px] overflow-hidden bg-[#0E1420]">
```

In `components/Navbar.jsx`, use these exact background fragments while retaining the surrounding classes and scroll-shadow conditional:

```jsx
z-50 bg-white/95 backdrop-blur-md
```

```jsx
xl:hidden bg-white border-t border-black/5
```

- [ ] **Step 3: Re-run source assertions**

Run the Step 1 Node command again.

Expected: exit code 0 with no output.

- [ ] **Step 4: Run focused lint and production build**

Run:

```bash
npx eslint components/Hero.jsx components/Navbar.jsx
npm run build
```

Expected: both commands exit with code 0.

- [ ] **Step 5: Verify the rendered page**

Run `npm run dev`, open the landing page, and inspect desktop and mobile widths.

Expected:

- The hero background is white.
- The fixed navbar and opened mobile menu are white.
- The video has rounded corners but no drop shadow.
- Scrolling still adds the navbar's subtle shadow.
- The hero scroll-scrub and responsive stacking behave as before.

- [ ] **Step 6: Commit only the intended component changes**

```bash
git add components/Hero.jsx components/Navbar.jsx
git commit -m "style: simplify hero video presentation"
```
