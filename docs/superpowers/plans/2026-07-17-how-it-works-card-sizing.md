# How It Works Card Sizing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enlarge the How It Works cards and centered member journey without changing content or responsive behavior.

**Architecture:** `ProcessStep.jsx` owns visual card dimensions. `HowItWorks.jsx` owns the centered maximum width for the five-step member grid.

**Tech Stack:** Next.js Pages Router, React, Tailwind CSS v4

## Global Constraints

- Preserve all current steps, images, arrows, tabs, and mobile stacking.
- Use 390px card height, 220px image stage, 48px icon tile, and 17px title.
- Use a 1650px maximum width for the centered member journey.
- Preserve unrelated worktree changes.

---

### Task 1: Enlarge the journey cards

**Files:**
- Modify: `components/ProcessStep.jsx`
- Modify: `components/HowItWorks.jsx`

**Interfaces:**
- Consumes: Existing ProcessStep props and journey grid state.
- Produces: Larger cards with correctly positioned connectors.

- [x] **Step 1: Run the failing size assertion**

```bash
node -e "const fs=require('fs');const p=fs.readFileSync('components/ProcessStep.jsx','utf8');const h=fs.readFileSync('components/HowItWorks.jsx','utf8');if(!p.includes('min-h-[390px]')||!p.includes('h-[220px]')||!p.includes('h-12 w-12')||!p.includes('text-[17px]')||!h.includes('xl:max-w-[1650px]'))process.exit(1)"
```

Expected: status 1 before the approved sizes are applied.

- [x] **Step 2: Apply the larger dimensions**

Replace the existing card, image, icon, title, and member-row width classes with the approved values. Move the desktop arrow from `top-[154px]` to `top-[184px]`.

- [x] **Step 3: Re-run the size assertion**

Expected: status 0.

- [x] **Step 4: Verify the implementation**

```bash
npx eslint components/ProcessStep.jsx components/HowItWorks.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0.
