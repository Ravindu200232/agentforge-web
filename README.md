# AgentForge — website

The marketing site for **AgentForge**, the self-optimizing AI-agentic
development system.

Describe an app, and AgentForge interviews you, turns the answers into a
traceable specification, writes the application, drives a real browser over
every journey, repairs what fails, and ships it to the cloud.

- **Product source:** https://github.com/Ravindu200232/RP-SE-009
- **Windows installer:** `AgentForgeSetup.exe`, the newest release of https://github.com/Ravindu200232/agentforge-releases
- **Mac (Apple Silicon) DMG:** https://github.com/Ravindu200232/agentforge-releases/releases/download/v1.0.3-mac/AgentForge-1.0.3-mac-arm64.dmg

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
| Download | The Windows installer and Mac (Apple Silicon) DMG, plus the tools the Windows installer sets up |
| Guide | Step by step: install, sign in, describe the app, choose a stack, connect Supabase and MongoDB, build and deploy, each with the screen it shows |

Every animation is CSS and every one of them stops under
`prefers-reduced-motion: reduce`. Nothing on the page plays sound.

## Layout

```
app/layout.js            fonts, metadata, the shell
app/page.js              the section order
app/globals.css          the theme tokens and every keyframe
components/site.js       all of the page's copy and figures, in one place
components/Hero.jsx      the headline and the pipeline animation
components/Steps.jsx     the six stages
components/Gallery.jsx   the tabbed screenshot browser
components/Guide.jsx     the step-by-step guide and the stack table
public/screenshots/      captured from the running system
public/guide/            the guide's screens, captured from AgentForge 1.0.0
```

## The guide's screenshots

`public/guide/` was captured from AgentForge 1.0.0 on 11 October 2026, with a clean settings folder. Names and
emails that the signed-in command line tools on that computer showed are replaced with placeholders
(`you@example.com`, `your-github-name`), and the installer's folder shows `you` as the Windows user name.
