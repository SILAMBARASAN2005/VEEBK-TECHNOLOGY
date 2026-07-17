# Vee.BK Technologies — Website

A multi-page React site (Home, About Us, Services, Contact Us) with an
animated version of the Vee.BK logo, client-side page routing, and a
working contact form — split into separate files per page/component.

## Project structure

```
veebk-site/
├── index.html                 ← Vite entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                ← React bootstrap
    ├── App.jsx                 ← Top-level layout + page switcher
    ├── theme.js                ← Shared colour tokens
    ├── components/
    │   ├── Logo.jsx             ← <Mark /> and <Wordmark /> (the logo)
    │   ├── Nav.jsx               ← Sticky top navigation bar
    │   ├── Footer.jsx            ← Site footer
    │   ├── UI.jsx                ← Button, Eyebrow, Reveal, Swoosh, PixelField
    │   └── Assistant.jsx         ← Floating "Vee.BK Assistant" FAQ chat widget
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        └── Contact.jsx
```

Each page is a self-contained component. `App.jsx` just decides which one
to render based on the current `page` state — no router library needed.

---

## How to run it

Requires [Node.js](https://nodejs.org) 18+.

```bash
# 1. Move into the project folder
cd veebk-site

# 2. Install dependencies (React + lucide-react icons + Vite)
npm install

# 3. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

---

## Building for production / deploying

```bash
npm run build
```

This creates a static `dist/` folder. Drop it onto any static host —
Netlify, Vercel, GitHub Pages, or your own server. On Netlify/Vercel you
can just point them at this folder/repo and they'll run `npm run build`
automatically (build command: `npm run build`, output directory: `dist`).

---

## Editing things

| Want to change...          | Edit this file                          |
|-----------------------------|------------------------------------------|
| Brand colors                | `src/theme.js`                          |
| The logo shape/animation    | `src/components/Logo.jsx`               |
| Nav links / mobile menu     | `src/components/Nav.jsx`                |
| Footer content              | `src/components/Footer.jsx`             |
| Buttons, cards, section tags| `src/components/UI.jsx`                 |
| Home page copy/sections     | `src/pages/Home.jsx`                    |
| About page copy/timeline    | `src/pages/About.jsx`                   |
| Services list / process     | `src/pages/Services.jsx`                |
| Contact form / details      | `src/pages/Contact.jsx`                 |
| Assistant's answers          | `src/components/Assistant.jsx` (`KB` array) |
| Photos used across the site  | `src/components/UI.jsx` (`Photo` component) |

---

## Photography

The site uses real stock photography (team/office/coding/security/data
shots) via the `<Photo />` component in `src/components/UI.jsx`, which
hotlinks images from Unsplash's CDN and resizes them on the fly with URL
parameters (`?w=...&q=...&auto=format&fit=crop`). Every photo used is
published under the free [Unsplash License](https://unsplash.com/license)
(free for commercial use, no attribution required).

To swap a photo, change the `id` prop passed to `<Photo id="photo-..." />`
in `Home.jsx`, `About.jsx`, `Services.jsx`, or `Contact.jsx` — the ID is the
part of the Unsplash image URL after `images.unsplash.com/`. To use your
own photos of the real team/office instead of stock imagery, drop image
files into a `src/assets/` folder and swap `<Photo id="..." />` for a plain
`<img src={yourImage} />`.

---

## The company assistant

A floating chat button (bottom-right, on every page) opens a small panel
that answers common doubts about Vee.BK Technologies — services, process,
pricing, location, mission, team size, how to start a project, etc.

It works as a **keyword-matched FAQ bot**, not a live AI model: each entry
in the `KB` array in `src/components/Assistant.jsx` lists a set of trigger
keywords and a canned answer. When a visitor's message matches, that answer
is shown; if nothing matches, the bot replies with a fallback message and a
button that jumps straight to the Contact Us page.

```js
// src/components/Assistant.jsx
const KB = [
  {
    keys: ["service", "offer", "what do you do"],
    answer: "We work across six areas: ...",
  },
  // add more entries here
];
```

**To add or edit an answer:** add a new object to `KB` with `keys` (words
or phrases someone might type) and `answer` (the reply text). Keep this
file in sync whenever you change the copy on Home/About/Services/Contact,
since the assistant's answers are meant to mirror the site content exactly.

**Upgrading to a real AI model:** if you'd rather have live, open-ended
answers instead of keyword matching, swap the `findAnswer()` function in
`Assistant.jsx` for a call to an LLM API (e.g. the Anthropic API) — send
the visitor's message plus a short system prompt describing the company,
and stream back the reply instead of looking it up in `KB`. That requires
a backend or serverless function to hold the API key securely; it should
never be called directly from the browser.

Fonts (**Sora** for headings, **Inter** for body) are loaded via Google
Fonts in `App.jsx` — no local font files needed, just an internet
connection the first time the page loads.

### Wiring up the contact form

Right now `Contact.jsx` shows a success message on submit but doesn't send
anywhere. To actually deliver messages, connect the `submit` function to a
service like [Formspree](https://formspree.io) or
[EmailJS](https://www.emailjs.com), or POST to your own backend endpoint.
