# How It Works Image Mapping Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Map the new public images to the matching member journey cards without changing the image used by **Receive a physical**.

**Architecture:** Store an explicit `image` path on every member step and read that path when the member tab is active. Preserve the current alternating card-image fallback for vendor steps.

**Tech Stack:** Next.js 16 Pages Router, React 19, Tailwind CSS v4

## Global Constraints

- **Receive a physical** must continue using `/backcard.png`.
- Member titles, icons, order, arrows, card styles, and tab behaviour remain unchanged.
- Vendor steps continue alternating `/frontcard.png` and `/backcard.png`.

---

### Task 1: Map member journey images

**Files:**
- Modify: `components/HowItWorks.jsx`
- Reference: `docs/superpowers/specs/2026-07-17-how-it-works-image-mapping-design.md`

**Interfaces:**
- Consumes: member step objects and existing `ProcessStep({ image })`
- Produces: member step objects with an explicit `image: string`

- [ ] **Step 1: Run a failing source assertion**

```bash
node - <<'NODE'
const fs = require('fs');
const source = fs.readFileSync('components/HowItWorks.jsx', 'utf8');
for (const image of ['/registerwithvedaminds.webp', '/explore.webp', '/showcard.webp']) {
  if (!source.includes(image)) console.log(`RED: missing ${image}`);
}
NODE
```

Expected: prints all three missing image paths.

- [ ] **Step 2: Add explicit member image paths**

```jsx
const MEMBER_STEPS = [
  { icon: <UserPlus size={20} />, title: "Register with Veda Minds", image: "/registerwithvedaminds.webp" },
  { icon: <CreditCard size={20} />, title: "Receive a physical", image: "/backcard.png" },
  { icon: <Search size={20} />, title: "Explore participating businesses", image: "/explore.webp" },
  { icon: <ScanLine size={20} />, title: "Show card at the partner location", image: "/showcard.webp" },
  { icon: <BadgePercent size={20} />, title: "Receive the  discount ", image: "/showcard.webp" },
];
```

- [ ] **Step 3: Select explicit images only for the member tab**

```jsx
image={
  tab === "members"
    ? step.image
    : CARD_IMAGES[index % CARD_IMAGES.length]
}
```

- [ ] **Step 4: Verify the mapping and project**

```bash
node - <<'NODE'
const fs = require('fs');
const source = fs.readFileSync('components/HowItWorks.jsx', 'utf8');
const expected = ['/registerwithvedaminds.webp', '/backcard.png', '/explore.webp', '/showcard.webp'];
for (const image of expected) if (!source.includes(image)) throw new Error(`Missing ${image}`);
if (!/tab === "members"\s*\? step\.image/.test(source)) throw new Error('Member image selection missing');
console.log('PASS: member images are explicitly mapped and vendor fallback remains');
NODE
npx eslint components/HowItWorks.jsx
npm run build
git diff --check
```

Expected: the assertion prints `PASS`, ESLint is clean, and the build succeeds.
