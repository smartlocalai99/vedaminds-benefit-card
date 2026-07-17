# How It Works Image Mapping Design

## Goal

Use the newly added member-journey images in the **How It Works** cards while preserving the existing image for **Receive a physical**.

## Member Image Mapping

- **Register with Veda Minds** uses `/registerwithvedaminds.webp`.
- **Receive a physical** keeps its current `/backcard.png` image.
- **Explore participating businesses** uses `/explore.webp`.
- **Show card at the partner location** uses `/showcard.webp`.
- **Receive the discount** uses `/showcard.webp`, because the same partner-location interaction leads directly to the discount.

## Scope

- Replace the cyclic member image assignment with an explicit image on each member step.
- Keep every member title, icon, order, arrow, card style, and tab behaviour unchanged.
- Keep the vendor-step image behaviour unchanged.
- Preserve `ProcessStep` and its existing image rendering.

## Verification

- Confirm each member card receives the approved image path.
- Confirm **Receive a physical** still uses `/backcard.png`.
- Confirm vendor steps still alternate `/frontcard.png` and `/backcard.png`.
- Run targeted ESLint, the production build, and `git diff --check`.
