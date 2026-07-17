# Full-Width Hero Design

## Goal

Remove the shared `1200px` maximum width from the hero while preserving its existing horizontal padding.

## Change

- Pass `maxWidth="none"` to the `Container` used by `components/Hero.jsx`.
- Keep the shared `Container` default unchanged so all other sections retain their current width.
- Preserve the hero layout, padding, responsive behavior, video positioning, and scroll behavior.

## Verification

- Confirm the hero passes `maxWidth="none"` to `Container`.
- Run focused lint and the production build.
