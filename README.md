# Profile Card

A small, accessible, responsive Profile Card component built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.

![Profile Card Preview](avatar.png)

## Features

- **Semantic HTML** — Uses `<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`, proper headings.
- **Accessible** — WCAG AA contrast, meaningful `alt` text, `aria-live` for dynamic time, keyboard-navigable links with visible focus styles.
- **Responsive** — Mobile-first layout that stacks vertically on small screens and arranges side-by-side on tablet/desktop.
- **Live Epoch Time** — Displays `Date.now()` in milliseconds, refreshing every 500ms with `aria-live="polite"`.
- **Testable** — Every required element has a `data-testid` attribute for automated testing.

## Required `data-testid` Attributes

| Element             | `data-testid`                    |
|---------------------|----------------------------------|
| Card root           | `test-profile-card`              |
| Name                | `test-user-name`                 |
| Bio                 | `test-user-bio`                  |
| Epoch time          | `test-user-time`                 |
| Avatar image        | `test-user-avatar`               |
| Social links list   | `test-user-social-links`         |
| Twitter link        | `test-user-social-twitter`       |
| GitHub link         | `test-user-social-github`        |
| LinkedIn link       | `test-user-social-linkedin`      |
| Dribbble link       | `test-user-social-dribbble`      |
| Hobbies list        | `test-user-hobbies`              |
| Dislikes list       | `test-user-dislikes`             |

## Run Locally

No build step required. Open `index.html` directly in a browser:

```bash
# Option 1: Just open the file
open index.html        # macOS
start index.html       # Windows

# Option 2: Use a local server (recommended for best results)
npx serve .
```

## Project Structure

```
Profile card/
├── index.html      # Semantic HTML with data-testid attributes
├── styles.css      # Dark-themed responsive CSS (Flexbox/Grid)
├── script.js       # Epoch time updater
├── avatar.png      # Profile photo
└── README.md       # This file
```

## Accessibility Notes

- Avatar `<img>` has descriptive `alt` text.
- Time element uses `aria-live="polite"` and `aria-atomic="true"` so screen readers are notified of updates.
- All social links have `aria-label` attributes and open in new tabs with `rel="noopener noreferrer"`.
- Color contrast exceeds WCAG AA requirements (light text on dark background).
- Focus indicators are visible on all interactive elements.
- Keyboard navigation works for all links; they are standard `<a>` elements.

## Deployment

This is a static site. Deploy to any static hosting:

- **GitHub Pages** — Push to a repo and enable Pages.
- **Netlify** — Drag-and-drop the folder or connect a repo.
- **Vercel** — `npx vercel` in the project directory.

## License

MIT
