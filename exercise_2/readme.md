# IEEE Envision Portfolio (exercise_2)

## Project overview
Personal portfolio site built using static HTML and Tailwind CSS.

- Designed for responsive desktop/mobile navigation and hero + about + projects + contact sections.
- Theme: dark mode with glassy gradient overlays and modern card UI.

## Features
- Responsive header with mobile hamburger drawer (CSS peer-based toggle)
- Hero section with photo + intro + call-to-action buttons
- Skills grid with icons (C/C++, Python, HTML, CSS, Tailwind, Git, GitHub)
- Education timeline cards
- Project cards with tech stack + links
- Contact form UI with textarea, buttons, icon toolbar (UI-only form)
- Social callout section (LinkedIn, Instagram, Email, Threads)
- Footer with “back to top” icon and Tailwind note

## File structure
- index.html — main static page
- style.css — compiled styles (Tailwind + custom)
- input.css — source Tailwind input
- tailwind.config.js — Tailwind config
- package.json — dev dependencies / build scripts

## Tech stack
- HTML5
- Tailwind CSS
- (Icon images in `assets/icons`)
- Light JS-free mobile menu toggle via `<input type="checkbox">` + `peer` classes

## Customization
- Edit hero text, project entries, contact links directly in `index.html`
- Swap or add icons inside `assets/icons/`
- Use Tailwind config for color palette + spacing adjustments
