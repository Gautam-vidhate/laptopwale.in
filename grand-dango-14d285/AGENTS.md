# AGENTS.md

## Project overview

Single-page marketing and waitlist site for **Murmur**, a fictional async standup SaaS. Built with TanStack Start (React 19, Vite 7) and Tailwind CSS 4, and deployed on Netlify.

## Structure

```
public/
  __forms.html           # Hidden static form skeleton so Netlify Forms detects "waitlist" at build time
src/
  components/
    WaitlistForm.tsx     # Waitlist form (email + team size), AJAX-posts to /__forms.html
  routes/
    __root.tsx           # HTML shell, SEO meta, Google Fonts links
    index.tsx            # The whole landing page: Nav, Hero, ProductMock, TheMath, HowItWorks, Features, Faq, FinalCta, Footer
  router.tsx
  styles.css             # Tailwind import, @theme tokens (paper/ink/ember/moss, fonts), keyframes
```

## Conventions and decisions

- **Netlify Forms for persistence.** The waitlist form is named `waitlist`. Its fields (`email`, `team-size`, `source`, honeypot `bot-field`) must stay in sync with `public/__forms.html`. Submissions POST to `/__forms.html`, not `/`, because the SSR catch-all would otherwise swallow them. Forms were enabled with the netlify-forms skill's `scripts/enable.cjs`.
- `source` is a hidden field (`hero` or `footer`) that records which form a signup used.
- **Design tokens** live in `@theme` in `styles.css`: `paper`, `paper-deep`, `ink`, `ink-soft`, `ember` (accent), and `moss`. Fonts are `font-display` (Instrument Serif), `font-sans` (Manrope), and `font-mono` (JetBrains Mono). Use these instead of raw hex values.
- Section content (check-ins, steps, features, FAQs) is kept in const arrays at the top of each section in `index.tsx`, so copy can be edited easily.
- Animations (`.rise`, `.wave-bar`) respect `prefers-reduced-motion`.
