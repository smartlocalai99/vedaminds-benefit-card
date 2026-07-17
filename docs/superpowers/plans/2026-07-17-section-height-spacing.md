# Section Height and Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase and clearly separate the two homepage sections while keeping responsive layouts safe.

**Architecture:** Only the outer layout classes in `BentoHighlights.jsx` and `WhatIsSection.jsx` change. Tailwind responsive utilities provide content-driven mobile sizing and 700px desktop minimum heights.

**Tech Stack:** Next.js Pages Router, React, Tailwind CSS v4

## Global Constraints

- Preserve existing copy, colors, links, and component order.
- Use automatic content height on mobile.
- Use a 700px minimum height on large screens.
- Do not modify unrelated dirty-worktree files.

---

### Task 1: Increase both homepage section heights

**Files:**
- Modify: `components/BentoHighlights.jsx`
- Modify: `components/WhatIsSection.jsx`

**Interfaces:**
- Consumes: Existing Tailwind utility classes and component markup.
- Produces: Responsive section wrappers with `lg:min-h-[700px]`.

- [x] **Step 1: Run the failing source assertion**

```bash
node -e "const fs=require('fs'); const b=fs.readFileSync('components/BentoHighlights.jsx','utf8'); const w=fs.readFileSync('components/WhatIsSection.jsx','utf8'); if(!b.includes('lg:min-h-[700px]') || (w.match(/lg:min-h-\[700px\]/g)||[]).length < 2) process.exit(1)"
```

Expected: exits with status 1 before the height classes are added.

- [x] **Step 2: Add responsive height and padding utilities**

Update `BentoHighlights` to use `flex min-h-[620px] items-center py-20 md:py-28 lg:min-h-[700px]`, then update both `WhatIsSection` columns from their 560px desktop height to `lg:min-h-[700px]`.

- [x] **Step 3: Run the source assertion again**

Run the Step 1 command again. Expected: exits with status 0.

- [x] **Step 4: Verify lint and production compilation**

```bash
npx eslint components/BentoHighlights.jsx components/WhatIsSection.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0.
