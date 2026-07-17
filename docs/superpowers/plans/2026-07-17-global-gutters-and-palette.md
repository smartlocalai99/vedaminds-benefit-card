# Global Gutters and Palette Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize application gutters and apply the established charcoal-and-copper palette to the hero and savings section.

**Architecture:** `Container.jsx` owns the responsive gutter and exposes a `rightGutter` boolean for the hero exception. `Hero.jsx` and `BentoHighlights.jsx` consume the shared spacing and use direct Tailwind color utilities from the approved palette.

**Tech Stack:** Next.js Pages Router, React, Tailwind CSS v4

## Global Constraints

- Shared gutters are 20px mobile, 32px tablet, and 80px desktop.
- Hero has the shared left gutter and zero right gutter.
- Marquee and split card image stay full-width.
- Preserve content, component order, and unrelated worktree changes.

---

### Task 1: Add shared responsive gutters

**Files:**
- Modify: `components/Container.jsx`
- Modify: `components/Hero.jsx`

**Interfaces:**
- Consumes: `children`, optional `className`, and optional `rightGutter` boolean.
- Produces: `Container({ children, className, rightGutter = true })`.

- [x] **Step 1: Run a failing source assertion**

```bash
node -e "const fs=require('fs');const c=fs.readFileSync('components/Container.jsx','utf8');const h=fs.readFileSync('components/Hero.jsx','utf8');if(!c.includes('rightGutter = true')||!c.includes('sm:px-8 lg:px-20')||!h.includes('rightGutter={false}'))process.exit(1)"
```

Expected: status 1 because the responsive gutter API does not exist.

- [x] **Step 2: Implement the shared gutter and hero exception**

Use `px-5 sm:px-8 lg:px-20` for normal containers and `pl-5 pr-0 sm:pl-8 lg:pl-20` when `rightGutter` is false. Pass `rightGutter={false}` from `Hero.jsx` and remove its old `ps-20` class.

- [x] **Step 3: Re-run the Task 1 assertion**

Expected: status 0.

### Task 2: Apply the charcoal-and-copper palette

**Files:**
- Modify: `components/Hero.jsx`
- Modify: `components/BentoHighlights.jsx`

**Interfaces:**
- Consumes: Existing JSX content and Tailwind utilities.
- Produces: Copper heading accents, charcoal buttons, and soft-copper feature icons.

- [x] **Step 1: Run a failing palette assertion**

```bash
node -e "const fs=require('fs');const h=fs.readFileSync('components/Hero.jsx','utf8');const b=fs.readFileSync('components/BentoHighlights.jsx','utf8');if(!h.includes('text-[#DFA080]')||!b.includes('text-[#B86F4B]')||!b.includes('bg-[#F7E9E1]'))process.exit(1)"
```

Expected: status 1 because the approved palette is not fully applied.

- [x] **Step 2: Apply palette utilities**

Wrap the hero’s second heading line in copper, retain charcoal primary text and actions, and replace green accents in `BentoHighlights` with readable copper, charcoal, and soft-copper utilities.

- [x] **Step 3: Re-run the palette assertion**

Expected: status 0.

- [x] **Step 4: Verify the implementation**

```bash
npx eslint components/Container.jsx components/Hero.jsx components/BentoHighlights.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0.
