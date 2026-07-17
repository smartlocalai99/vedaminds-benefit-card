# How It Works Card Journey Design

## Goal

Transform the steps below “A simple journey, every time.” into a screenshot-inspired visual card journey using the supplied front and back card images with clear directional connectors.

## Layout

- Preserve the Members and Vendors tabs and all six steps in each journey.
- Display six equal cards in a continuous desktop row.
- Stack cards vertically below the desktop breakpoint.
- Show right arrows between desktop cards and down arrows between stacked cards.

## Card Design

- Alternate `/frontcard.png` and `/backcard.png` across the six cards.
- Use a warm-neutral image stage, white card surface, charcoal title, and copper step label.
- Retain each step’s existing icon as a small overlay on the image stage.
- Keep card sizes consistent even when step titles have different lengths.

## Palette

- Charcoal: `#171717`.
- Copper: `#B86F4B` and light copper `#DFA080`.
- Warm neutral: `#F3EEE9` and `#F7E9E1`.
- White card surfaces with subtle warm borders.

## Verification

- Source assertions verify both images, six-column desktop layout, tab preservation, and arrow connectors.
- ESLint verifies both changed components.
- The Next.js production build verifies image and component compilation.

