# Global Gutters and Palette Design

## Goal

Align the application sections to one responsive horizontal gutter and carry the charcoal-and-copper palette from the “What Is the Veda Benefits Card?” section into the hero and “Smarter Savings Start Here” section.

## Layout

- Shared content uses 20px horizontal padding on mobile, 32px on tablet, and 80px on desktop.
- The hero uses the same left padding but no right padding so its video remains flush with the right edge.
- Full-width visual regions such as the logo marquee and the split card image remain edge-to-edge.
- Existing component-specific inner padding remains unchanged.

## Color Treatment

- Charcoal: `#171717` for primary actions and strong text.
- Copper: `#DFA080` on dark backgrounds and `#B86F4B` on white backgrounds for readable accents.
- Soft copper: `#F7E9E1` for icon tiles.
- Existing content and section structure remain unchanged.

## Verification

- Source assertions cover the shared gutters, hero exception, and palette replacements.
- ESLint covers all changed React files.
- The Next.js production build confirms compilation.

