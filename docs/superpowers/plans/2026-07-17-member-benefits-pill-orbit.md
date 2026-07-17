# Member Benefits Pill Orbit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the member-benefit card grid with a responsive 5/image/5 pill composition.

**Architecture:** `MemberBenefits.jsx` retains the existing data, splits it into left and right groups, and renders pill callouts through a local `BenefitPill` helper. Next Image renders the transparent center asset with mobile-first ordering controlled by Tailwind utilities.

**Tech Stack:** Next.js Pages Router, React, Next Image, Tailwind CSS v4, Lucide React

## Global Constraints

- Preserve all 10 benefit titles, descriptions, and icons.
- Use `/handholding.webp` as the center visual.
- Use five pills on each side at large widths.
- Show the image before the pills on mobile.
- Follow the charcoal, copper, warm-white, and warm-neutral palette.
- Preserve unrelated worktree changes.

---

### Task 1: Build the pill-orbit member benefits section

**Files:**
- Modify: `components/MemberBenefits.jsx`

**Interfaces:**
- Consumes: Existing `BENEFITS` entries and `/handholding.webp`.
- Produces: A local `BenefitPill({ item, align })` helper and responsive three-column section.

- [x] **Step 1: Run the failing source assertion**

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('components/MemberBenefits.jsx','utf8');if(!s.includes('from \"next/image\"')||!s.includes('/handholding.webp')||!s.includes('BenefitPill')||!s.includes('lg:grid-cols-[minmax'))process.exit(1)"
```

Expected: status 1 before the redesigned section exists.

- [x] **Step 2: Implement the responsive composition**

Import Next Image, remove the old `MemberBenefitCard` grid, split `BENEFITS` at index 5, render five pills on each side of the image, and apply order utilities so the image renders first below the large breakpoint.

- [x] **Step 3: Preserve descriptions accessibly**

Give each pill an `aria-label` combining its title and description while displaying only the icon and title.

- [x] **Step 4: Re-run the source assertion**

Expected: status 0.

- [x] **Step 5: Verify the implementation**

```bash
npx eslint components/MemberBenefits.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0.
