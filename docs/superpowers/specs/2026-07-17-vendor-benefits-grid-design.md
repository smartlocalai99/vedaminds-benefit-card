# Vendor Benefits Grid Design

## Goal

Restyle “Benefits for Partner Vendors” as a compact two-row benefit-card grid inspired by the supplied reference while retaining all 10 existing benefits.

## Layout

- Use five columns on wide desktop screens, four on smaller desktop screens, two on tablets, and one on mobile.
- Keep all 10 benefits so wide desktop displays exactly two rows.
- Use compact cards with consistent height, icon, title, description, and “Learn more” action.
- Keep the section heading left aligned with the application gutter.

## Palette

- Section background: warm neutral `#F3EEE9`.
- Featured first card: charcoal `#171717` with white text and copper accents.
- Standard cards: white with subtle warm borders and shadows.
- Standard accents: copper `#B86F4B` and soft copper `#F7E9E1`.

## Responsive Behavior

- Cards stack to one column on mobile and two columns from the small breakpoint.
- The grid expands to four columns at large and five at extra-large widths.
- Existing CTA remains below the card grid.

## Verification

- Source assertions verify the responsive grid, featured card, palette, and Learn More links.
- ESLint verifies both changed components.
- The Next.js production build verifies compilation.

