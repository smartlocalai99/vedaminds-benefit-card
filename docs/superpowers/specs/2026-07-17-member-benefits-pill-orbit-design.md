# Member Benefits Pill Orbit Design

## Goal

Redesign “Benefits for Members and Families” around the supplied transparent hand-held card image, with all 10 benefit titles presented as pill callouts.

## Desktop Layout

- Use a three-column composition: five benefit pills, centered image, five benefit pills.
- Place the transparent `/handholding.webp` image over a soft copper glow.
- Keep pills wide enough for readable titles and align them toward the center visual.

## Mobile Layout

- Display the image first.
- Follow with all benefits in a two-column grid, falling back to one column on narrow screens.
- Remove absolute positioning so pills never overlap the image or each other.

## Pill Design

- Each pill contains the existing benefit icon and title.
- Use warm-white backgrounds, copper borders and icons, charcoal text, and subtle hover elevation.
- Retain each existing description in an accessible label even though the visual pill stays compact.

## Palette

- Section background: warm neutral `#F3EEE9`.
- Primary charcoal: `#171717`.
- Copper: `#B86F4B` and `#DFA080`.
- Soft copper: `#F7E9E1`.

## Verification

- Source assertions verify the image, 5/5 split, pill treatment, mobile ordering, and all 10 benefits.
- ESLint verifies `MemberBenefits.jsx`.
- The Next.js production build verifies image and component compilation.

