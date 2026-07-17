# Member Benefits Asymmetric Cloud Design

## Goal

Redesign the **Benefits for Members and Families** section so it no longer uses two rigid pill columns. The section should feel distinctive and energetic while keeping every benefit readable. The hand-held Veda Benefits Card image must finish flush with the section's bottom edge so the fingers visibly touch the bottom of the screen/section.

## Layout

- Keep the existing section heading and supporting copy above the visual composition.
- Use one responsive composition area beneath the heading.
- On large screens, position all ten benefit pills in an intentionally irregular cloud around the central image. Vary their horizontal offsets, widths, vertical spacing, and subtle rotation so they do not read as rows or columns.
- Keep the center around the card and hand visually open. Pills must not cover the card, fingers, or one another.
- Anchor the transparent `handholding.webp` image at `bottom: 0` in the composition area. The section and composition must have no bottom padding below the image.
- Add a restrained copper glow behind the image and optional subtle decorative lines or dots. Decoration must stay behind the content and must not reduce readability.

## Visual Treatment

- Continue the established warm neutral, charcoal, and copper palette.
- Most pills use warm white with a copper border.
- A small number of feature pills may use charcoal or copper fills to create rhythm.
- Pill widths should fit their titles rather than all being identical.
- Hover movement remains subtle and should not change the resting layout.
- The image remains the visual focus and retains a soft shadow.

## Responsive Behaviour

- Desktop and large tablet: use the deliberately scattered, absolute-positioned cloud.
- Mobile and small tablet: switch to a stable staggered grid so text never overlaps or leaves the viewport. Preserve varied pill widths/offsets where practical.
- On every viewport, render the image after the pills and keep its bottom edge flush with the section bottom.
- Respect the application's existing responsive horizontal gutters.

## Accessibility and Content

- Preserve all ten existing benefit titles and descriptions.
- Preserve the existing section anchor `member-benefits`.
- Keep each benefit as a semantic article with an accessible label containing its description.
- Decorative elements remain hidden from assistive technology.
- Icons remain decorative because the title provides the accessible name.

## Verification

- Confirm all ten benefit titles render exactly once.
- Confirm desktop positions are deliberately asymmetric and non-overlapping.
- Confirm the image wrapper is bottom anchored and the section has no bottom padding.
- Confirm the mobile layout uses normal document flow before the bottom image.
- Run targeted ESLint, the production build, and `git diff --check`.
