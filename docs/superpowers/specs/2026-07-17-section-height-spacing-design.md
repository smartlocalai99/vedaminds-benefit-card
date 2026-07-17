# Section Height and Spacing Design

## Goal

Give the “Smarter Savings Start Here” section and the following “What Is the Veda Benefits Card?” section enough vertical space to display cleanly without appearing mixed or cropped.

## Design

- Keep mobile layouts content-driven with generous vertical padding.
- Give `BentoHighlights` a desktop minimum height of 700px and vertically center its content.
- Give both columns in `WhatIsSection` a desktop minimum height of 700px so the text and image halves stay aligned.
- Preserve all existing content, colors, responsive stacking, and image treatment.

## Verification

- Assert the intended responsive height classes exist before and after implementation.
- Run ESLint on both changed components.
- Run the Next.js production build.

