# Mobile Responsive Site Design

## Goal

Make the complete Veda Benefits Card website comfortable to use from 320px phones through tablets while preserving the existing desktop composition from 1024px upward.

## Responsive approach

Use component-level mobile-first Tailwind classes instead of broad global overrides. Each section keeps its existing content, imagery, palette, and desktop arrangement, but fixed heights, wide controls, oversized spacing, and overlapping decorative layouts are relaxed below their desktop breakpoints.

## Layout rules

- Use 20px page gutters on phones and 32px gutters from the small breakpoint.
- Keep all interactive controls at least 44px high and make primary actions full width on narrow phones.
- Scale primary headings to 34-36px on phones and retain the current tablet and desktop sizes.
- Remove viewport-height and large minimum-height requirements on phones.
- Stack split layouts and card grids into one column on phones, two columns on tablets where content remains readable, and preserve existing desktop grids.
- Keep the How It Works journey vertical below the desktop breakpoint, including downward direction arrows.
- Render member-benefit pills as full-width rows on phones; asymmetric placement begins at the small breakpoint and the desktop orbit remains unchanged.
- Keep the hand/card artwork touching the bottom edge without creating horizontal overflow.
- Keep the Hero video full-bleed on the right while giving its text a safe mobile right gutter.
- Stack footer content and legal links with left alignment on phones.

## Component changes

- `Navbar`: 64px phone header, smaller responsive logo container, 44px menu control, viewport-safe mobile drawer.
- `Hero`: natural phone height, 36px heading, stacked full-width actions, compact partner grid, full-bleed video.
- `BentoHighlights`, `WhatIsSection`, `VendorBenefits`, `PartnerCategories`, `JoinPaths`, `TrustSection`, `Faq`: reduce phone padding and fixed heights, stack content, make actions and cards fit narrow screens.
- `MemberBenefits`: remove mobile stagger/overlap, use full-width pills, preserve bottom-anchored image.
- `HowItWorks` and `ProcessStep`: make tabs fit at 320px and reduce phone card/image height while retaining clear vertical arrows.
- `LogoMarquee`: reduce phone icon and gap sizes while preserving seamless motion.
- `Footer`: stack and left-align columns and legal content on phones.
- `globals.css`: enforce safe media sizing and mobile text rendering without introducing a new scroll container.

## Verification

- Source-level regression tests lock the critical responsive classes and full-width mobile actions.
- ESLint checks every modified component.
- `next build` verifies compilation and static rendering.
- Target widths are 320px, 375px, 390px, 430px, 768px, 1024px, and desktop.

