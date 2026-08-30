# AgentForge — website

The marketing site for **AgentForge**, the self-optimizing AI-agentic
development system built as research project RP-SE-009 at SLIIT.

Describe an app, and AgentForge interviews you, turns the answers into a
traceable specification, writes the application, drives a real browser over
every journey, repairs what fails, and ships it to the cloud.

- **Product source:** https://github.com/Ravindu200232/RP-SE-009
- **Installer:** the newest release of this repository

## Running it

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `out/`. There is no server: the whole
page is prerendered, so it can be hosted from any bucket, from GitHub Pages,
or from Vercel.

## What is on the page

| Section | Comes from |
| --- | --- |
| Hero | A CSS-only pipeline animation — the token crosses the rail once every six seconds and each stage lights as it arrives |
| Stats | The figures in the PP2 evidence pack, read from the repository rather than estimated |
| How it works | The six stages, each with a screenshot of that stage running |
| Screens | Six screenshots captured from the running system on 30 August 2026 |
| Download | The Windows installer, and the toolchain it sets up on first run |
| Team | The four people on RP-SE-009 |

Every animation is CSS and every one of them stops under
`prefers-reduced-motion: reduce`. Nothing on the page plays sound.

## Replacing the team photos

Drop new headshots into `incoming-photos/` — any format, named so each one
contains the person's first name — then:

```bash
npm run team:photos
```

Each photo is centre-cropped to a square, resized to 640×640 and written into
`public/team/` under the filename the page already points at.

## Layout

```
app/layout.js            fonts, metadata, the shell
app/page.js              the section order
app/globals.css          the theme tokens and every keyframe
components/site.js       all of the page's copy and figures, in one place
components/Hero.jsx      the headline and the pipeline animation
components/Steps.jsx     the six stages
components/Gallery.jsx   the tabbed screenshot browser
components/Team.jsx      the four round portraits
public/screenshots/      captured from the running system
```
