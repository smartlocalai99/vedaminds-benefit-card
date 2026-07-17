# Member Benefits Asymmetric Cloud Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the rigid member-benefit columns with an asymmetric benefit cloud while anchoring the hand-held card image flush to the section bottom.

**Architecture:** Keep the change isolated to `MemberBenefits.jsx`. Add presentation metadata to the existing benefit objects, render one shared list that becomes an absolute-positioned cloud on desktop and a staggered flow layout on smaller screens, and place the transparent image in a dedicated bottom-anchored layer.

**Tech Stack:** Next.js 16 Pages Router, React 19, Next Image, Tailwind CSS v4, Lucide React

## Global Constraints

- Preserve all ten existing benefit titles and descriptions.
- Preserve the `member-benefits` section anchor and semantic benefit articles.
- Use the existing warm neutral, charcoal, and copper palette.
- Prevent pills from overlapping the card, fingers, or one another.
- The hand image must touch the section bottom at every viewport size.
- Preserve the application's existing responsive horizontal gutters.

---

### Task 1: Build and verify the asymmetric benefit cloud

**Files:**
- Modify: `components/MemberBenefits.jsx`
- Reference: `docs/superpowers/specs/2026-07-17-member-benefits-asymmetric-cloud-design.md`
- Reference: `node_modules/next/dist/docs/02-pages/01-getting-started/04-images.md`

**Interfaces:**
- Consumes: `Container({ children, className, rightGutter })` and `/public/handholding.webp`
- Produces: the existing default `MemberBenefits` React component with unchanged section ID

- [ ] **Step 1: Write and run a failing structural assertion**

```bash
node - <<'NODE'
const fs = require('fs');
const source = fs.readFileSync('components/MemberBenefits.jsx', 'utf8');
const required = [/desktopPosition/, /bottom-0/, /pb-0/, /BENEFITS\.map/];
const missing = required.filter((pattern) => !pattern.test(source));
if (!missing.length) process.exit(1);
console.log(`RED: missing ${missing.join(', ')}`);
NODE
```

Expected: prints the missing asymmetric-layout requirements.

- [ ] **Step 2: Add fixed presentation metadata to every benefit**

Add three fields to every object. Use ten unique literal position strings so Tailwind discovers every class at build time:

```jsx
desktopPosition:
  "lg:absolute lg:left-[3%] lg:top-[8%] lg:w-[300px] lg:-rotate-2",
tone: "light",
mobileOffset: "sm:translate-x-6",
```

Keep the center-bottom region clear for the image. Use left and right offsets at lower positions, vary widths and rotation, and distribute `light`, `dark`, and `copper` tones.

- [ ] **Step 3: Replace the split-column pill component**

Remove `LEFT_BENEFITS`, `RIGHT_BENEFITS`, and the `align` prop. Use this tone-aware interface:

```jsx
function BenefitPill({ item }) {
  const toneClasses = {
    light: "border-[#DEC5B7] bg-white/92 text-[#171717]",
    dark: "border-[#171717] bg-[#171717] text-white",
    copper: "border-[#B86F4B] bg-[#B86F4B] text-white",
  };

  return (
    <article
      aria-label={`${item.title}: ${item.description}`}
      className={`group relative z-20 flex min-h-[64px] items-center gap-3 rounded-full border px-3 py-2.5 shadow-[0_10px_28px_rgba(23,23,23,0.09)] transition-transform duration-300 hover:-translate-y-1 ${toneClasses[item.tone]} ${item.mobileOffset} ${item.desktopPosition}`}
    >
      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7E9E1] text-[#B86F4B]">
        {item.icon}
      </span>
      <h3 className="pr-3 text-[13.5px] font-bold leading-[1.25]">{item.title}</h3>
    </article>
  );
}
```

- [ ] **Step 4: Build the responsive cloud and image layer**

Use `pt-20 pb-0 md:pt-28` on the section. Under the existing heading, create a `relative` composition with a normal two-column mobile grid and `lg:block` desktop cloud. Render the single list as:

```jsx
{BENEFITS.map((item) => (
  <BenefitPill key={item.title} item={item} />
))}
```

Place the image after the list in a wrapper with these required positioning classes:

```jsx
<div className="absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2 items-end justify-center leading-none">
  <Image
    src="/handholding.webp"
    alt="A hand holding the Veda Minds Benefits Card"
    width={2048}
    height={1294}
    sizes="(max-width: 1023px) 100vw, 46vw"
    className="block h-auto w-full max-w-[720px] object-contain drop-shadow-[0_24px_32px_rgba(23,23,23,0.22)]"
  />
</div>
```

Reserve sufficient mobile space above the absolute image, but do not add padding beneath it. Add only restrained decorative glow behind the content.

- [ ] **Step 5: Run the structural and content checks**

```bash
node - <<'NODE'
const fs = require('fs');
const source = fs.readFileSync('components/MemberBenefits.jsx', 'utf8');
for (const pattern of [/desktopPosition/, /bottom-0/, /pb-0/, /BENEFITS\.map/]) {
  if (!pattern.test(source)) throw new Error(`Missing ${pattern}`);
}
const titles = [
  'Guaranteed Discounts', 'Family Savings', 'One Card, Multiple Benefits',
  'Exclusive Offers', 'Reward Programs', 'Priority Event Access',
  'Educational Opportunities', 'Community Networking',
  'Trusted Vendor Access', 'Community Membership'
];
for (const title of titles) {
  if (!source.includes(`title: "${title}"`)) throw new Error(`Missing ${title}`);
}
console.log('PASS: asymmetric cloud structure and all ten benefits are present');
NODE
```

Expected: `PASS: asymmetric cloud structure and all ten benefits are present`.

- [ ] **Step 6: Run project verification**

```bash
npx eslint components/MemberBenefits.jsx
npm run build
git diff --check
```

Expected: all commands exit with status 0. Existing unrelated worktree edits remain untouched.

- [ ] **Step 7: Commit only the component implementation**

```bash
git add components/MemberBenefits.jsx
git commit -m "feat: redesign member benefits as asymmetric cloud" -- components/MemberBenefits.jsx
```
