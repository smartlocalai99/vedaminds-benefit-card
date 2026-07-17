# Vendor Benefits Grid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the vendor-benefits section as a responsive two-row card grid using the approved charcoal-and-copper palette.

**Architecture:** `VendorBenefits.jsx` owns benefit data, section layout, and the responsive grid. `VendorBenefitCard.jsx` renders either the featured charcoal card or a standard warm-white card through a `featured` boolean.

**Tech Stack:** Next.js Pages Router, React, Tailwind CSS v4, Lucide React

## Global Constraints

- Preserve all 10 existing vendor benefits and their copy.
- Display five columns at extra-large desktop width.
- Use charcoal, copper, warm-white, and warm-neutral colors.
- Preserve the existing registration CTA and unrelated worktree changes.

---

### Task 1: Rebuild the vendor benefit card

**Files:**
- Modify: `components/VendorBenefitCard.jsx`

**Interfaces:**
- Consumes: `icon`, `title`, `description`, and optional `featured = false`.
- Produces: A responsive benefit card with a `/\#contact` Learn More link.

- [x] **Step 1: Run the failing card assertion**

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('components/VendorBenefitCard.jsx','utf8');if(!s.includes('featured = false')||!s.includes('Learn More')||!s.includes('bg-[#171717]'))process.exit(1)"
```

Expected: status 1 before the new card API exists.

- [x] **Step 2: Implement featured and standard cards**

Replace the old tone map with a `featured` conditional. Use a charcoal featured card, white standard cards, copper icon tiles, compact spacing, and a Learn More action linked to `/#contact`.

- [x] **Step 3: Re-run the card assertion**

Expected: status 0.

### Task 2: Build the responsive two-row grid

**Files:**
- Modify: `components/VendorBenefits.jsx`

**Interfaces:**
- Consumes: The existing 10-item `BENEFITS` array and `VendorBenefitCard`.
- Produces: A `sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5` layout with the first item featured.

- [x] **Step 1: Run the failing section assertion**

```bash
node -e "const fs=require('fs');const s=fs.readFileSync('components/VendorBenefits.jsx','utf8');if(!s.includes('xl:grid-cols-5')||!s.includes('featured={index === 0}')||!s.includes('bg-[#F3EEE9]'))process.exit(1)"
```

Expected: status 1 before the screenshot-inspired layout exists.

- [x] **Step 2: Implement the grid and palette**

Change the section to warm neutral, left-align its heading, use the five-column responsive grid, and feature the first benefit card without removing any benefit data.

- [x] **Step 3: Re-run the section assertion**

Expected: status 0.

- [x] **Step 4: Verify the implementation**

```bash
npx eslint components/VendorBenefits.jsx components/VendorBenefitCard.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0.
