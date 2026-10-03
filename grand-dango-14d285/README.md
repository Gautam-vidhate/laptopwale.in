# Murmur — waitlist landing page

Marketing and waitlist site for **Murmur**, an async standup tool for remote teams. Instead of a daily call, each person records a two-minute voice check-in and the team reads a short written digest.

The page has a hero with a product preview, an interactive "standup cost" calculator, a how-it-works section, features, an FAQ, and two waitlist signup forms (hero and footer).

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing) on Vite 7
- Tailwind CSS 4, with design tokens in `src/styles.css`
- [Netlify Forms](https://docs.netlify.com/forms/setup/) stores waitlist signups, so no backend code is needed
- Deployed on Netlify

## Run locally

```bash
pnpm install
netlify dev        # serves the app with Netlify Forms emulation
# or: pnpm dev     # plain Vite dev server on :3000
```

## Waitlist signups

Signups show up in the Netlify UI under **Forms → waitlist**. Each one records the email, the team size, and which form it came from (`hero` or `footer`). You can export them as CSV or set up email and webhook notifications there.
