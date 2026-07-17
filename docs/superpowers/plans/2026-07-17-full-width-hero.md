# Full-Width Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the hero's inherited `1200px` maximum width while retaining its existing horizontal padding.

**Architecture:** Reuse the existing `Container` component's `maxWidth` prop and override it only at the Hero call site. No shared layout defaults or other page sections change.

**Tech Stack:** Next.js 16 Pages Router, React 19, Tailwind CSS 4

## Global Constraints

- Keep `Container`'s shared default `maxWidth="1200px"` unchanged.
- Preserve the hero's `px-5` horizontal padding through the existing `Container`.
- Preserve hero layout, responsive behavior, video positioning, and scroll behavior.
- Do not commit the already-modified `components/Hero.jsx`, because that would bundle unrelated user edits.

---

### Task 1: Override the Hero Container Width

**Files:**
- Modify: `components/Hero.jsx:107`

**Interfaces:**
- Consumes: `Container({ children, className, maxWidth })`, where `maxWidth` is applied to the wrapper's inline `maxWidth` style.
- Produces: A hero-only `maxWidth="none"` override; no JavaScript API changes.

- [ ] **Step 1: Verify the requested source state is absent**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const assert = require('assert');
const hero = fs.readFileSync('components/Hero.jsx', 'utf8');
assert(hero.includes('<Container className="relative w-full lg:h-full" maxWidth="none">'), 'hero Container does not disable max-width');
NODE
```

Expected: FAIL with `AssertionError: hero Container does not disable max-width`.

- [ ] **Step 2: Apply the hero-only width override**

Change the Hero wrapper to:

```jsx
<Container className="relative w-full lg:h-full" maxWidth="none">
```

- [ ] **Step 3: Re-run the source assertion**

Run the Step 1 Node command again.

Expected: exit code 0 with no output.

- [ ] **Step 4: Verify shared layout behavior remains intact**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const assert = require('assert');
const container = fs.readFileSync('components/Container.jsx', 'utf8');
assert(container.includes('maxWidth = "1200px"'), 'shared Container default changed');
assert(container.includes('mx-auto px-5'), 'shared Container padding changed');
NODE
npx eslint components/Hero.jsx
npm run build
git diff --check -- components/Hero.jsx
```

Expected: all commands exit with code 0, and the build reports `Compiled successfully`.

- [ ] **Step 5: Leave the component change uncommitted**

Do not stage or commit `components/Hero.jsx`; it contained substantial user changes before this task.
