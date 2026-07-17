# How It Works Card Journey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the How It Works steps as an image-led, arrow-connected journey for both members and vendors.

**Architecture:** `ProcessStep.jsx` renders one image-led step card and its responsive connector. `HowItWorks.jsx` owns the tab state and six-step arrays, selects alternating front/back images, and lays cards out in one column below extra-large screens and six columns at extra-large screens.

**Tech Stack:** Next.js Pages Router, React, Next Image, Tailwind CSS v4, Lucide React

## Global Constraints

- Preserve both tabs and all six current steps per tab.
- Use `public/frontcard.png` and `public/backcard.png` alternately.
- Show arrows from every step to the next.
- Follow the charcoal, copper, white, and warm-neutral palette.
- Preserve unrelated worktree changes.

---

### Task 1: Build the reusable image-led step card

**Files:**
- Modify: `components/ProcessStep.jsx`

**Interfaces:**
- Consumes: `number`, `icon`, `title`, `image`, and optional `isLast = false`.
- Produces: A card with optimized image, step label, icon overlay, and responsive ArrowRight/ArrowDown connectors.

- [x] **Step 1: Run the failing card assertion**

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('components/ProcessStep.jsx','utf8');if(!s.includes('from \"next/image\"')||!s.includes('ArrowRight')||!s.includes('ArrowDown')||!s.includes('image'))process.exit(1)"
```

Expected: status 1 before the visual card and connector API exists.

- [x] **Step 2: Implement the card and connectors**

Use `next/image` in a warm-neutral image stage, place the existing icon in a copper tile, render a Step label and title below, then render ArrowRight at extra-large widths and ArrowDown below that breakpoint unless `isLast` is true.

- [x] **Step 3: Re-run the Task 1 assertion**

Expected: status 0.

### Task 2: Replace the existing step layout

**Files:**
- Modify: `components/HowItWorks.jsx`

**Interfaces:**
- Consumes: `MEMBER_STEPS`, `VENDOR_STEPS`, tab state, and `ProcessStep`.
- Produces: Alternating `/frontcard.png` and `/backcard.png` cards in `xl:grid-cols-6`.

- [x] **Step 1: Run the failing journey assertion**

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('components/HowItWorks.jsx','utf8');if(!s.includes('xl:grid-cols-6')||!s.includes('/frontcard.png')||!s.includes('/backcard.png')||!s.includes('<ProcessStep'))process.exit(1)"
```

Expected: status 1 before the new journey layout exists.

- [x] **Step 2: Implement the new journey layout**

Remove the old featured/rest split, render all six current steps through `ProcessStep`, alternate the two image paths by index, and update the section and tab colors to the approved palette.

- [x] **Step 3: Re-run the Task 2 assertion**

Expected: status 0.

- [x] **Step 4: Verify the implementation**

```bash
npx eslint components/HowItWorks.jsx components/ProcessStep.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0.
