# Hero and Video Styling Design

## Goal

Make the top of the landing page consistently white and remove the visible shadow around the hero video.

## Changes

- Change the hero section background in `components/Hero.jsx` from off-white (`#FAF9F6`) to white.
- Remove only the `shadow-2xl` utility from the hero video wrapper.
- Change the desktop and mobile navbar backgrounds in `components/Navbar.jsx` from off-white (`#FAF9F6`) to white.

## Preserved Behavior

- Keep the navbar's subtle shadow after scrolling.
- Keep the video wrapper's rounded corners, dimensions, overflow clipping, and dark loading background.
- Keep all hero layout, animation, scroll-scrubbing, controls, and responsive behavior unchanged.

## Verification

- Confirm the project still passes its relevant static checks.
- Inspect the rendered landing page at desktop and mobile widths to verify the hero and navbar are white and the video has no shadow.
