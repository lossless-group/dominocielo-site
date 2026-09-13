# Dominocielo — Single-Family-Office One-Pager

<p align="center">
  <span style="font-size: 18px; font-weight: 500; color: #374151;">A design spike built with</span>
  <span style="font-size: 20px; color: #ef4444; margin: 0 4px;">❤️</span>
  <span style="font-size: 18px; font-weight: 500; color: #374151;">by</span>
  <br/>
  <a href="https://lossless.group" target="_blank" rel="noopener" style="text-decoration: none; display: inline-flex; align-items: center; margin: 8px 0;">
    <img src="https://ik.imagekit.io/xvpgfijuw/uploads/lossless/trademarks/trademark__The-Lossless-Group.svg?updatedAt=1758016855404" alt="The Lossless Group" height="24" style="margin-right: 8px;" />
    <span style="font-size: 22px; font-weight: 600; color: #1f2937;">The Lossless Group</span>
  </a>
  <br/>
  <span style="font-size: 14px; color: #6b7280; margin-top: 12px; display: block;">
    Part of
    <a href="https://lossless-group.github.io/astro-knots/" style="color: #7c3aed; text-decoration: none; font-weight: 500;">Astro Knots</a>
    · built with
    <a href="https://astro.build" style="color: #7c3aed; text-decoration: none; font-weight: 500;">Astro</a>
    and
    <a href="https://tailwindcss.com" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">Tailwind CSS v4</a>
  </span>
</p>

***

## First — what is Astro Knots?

**[Astro Knots](https://lossless-group.github.io/astro-knots/)** is The Lossless
Group's *pseudomonorepo*: a small lattice of independent Astro sites — client
work, personal sites, and one published package — developed side by side in a
single workspace so patterns can be compared and shared deliberately.

It is **not** a true monorepo. Every site is its own git repository with its own
lockfile, and deploys on its own from its own repo. Nothing here requires a
client to adopt our infrastructure, our build server, or our umbrella project.
What the sites share is not runtime code — it is a set of **conventions**:

| Shared convention | What it buys |
|---|---|
| **Two-tier design tokens** | Re-brand by adding one named token and re-pointing one semantic token. Components never change. |
| **Three-mode contract** (light · dark · vibrant) | Every surface is verified in all three modes, every time. |
| **`context-v/`** | Specs, blueprints, reminders and prompts live next to the code that implements them. |
| **`@lossless-group/lfm`** | Lossless Flavored Markdown — the one genuinely shared, published package. |
| **`/brand-kit` + `/design-system`** | Every site ships its own living catalogue. No Storybook, no drift. |

The workspace-level story — what worked, what didn't, and why we stopped
pretending everything should be a shared package — is on the
[Astro Knots splash page](https://lossless-group.github.io/astro-knots/).

## Why this repo exists

This is a **speculative pitch**, not commissioned work. It was built for a
prospective client to demonstrate something specific:

> Give a coding agent good rails, and it will get genuinely *creative* — while
> still handing you something a team can maintain and iterate on afterward.

The rails are our agent skills — **`pseudomonorepos`**, **`context-vigilance`**,
and **`astro-knots`** — loaded into Claude Code at the start of the session.
They encode the token architecture, the three-mode contract, the documentation
conventions, and the hard prohibitions (no React, no JSX, no MDX, no UI
libraries, pnpm only).

What that combination produces is the interesting part. Rather than one design
and a round of revisions, the agent built **three complete, genuinely different
designs of the same one-pager**, each internally coherent, each fully themed in
all three modes, each documented — and all three sharing one content layer, so
comparing them is honest. Same words, same facts, three arguments about how to
present them.

You pick one. The other two are deleted. Nothing else changes.

## The brief, in one line

**The live site is 300 words on one page, and it stays that way.**

This is the inverse of the sibling spike ([`gth-site`](https://github.com/lossless-group/gth-site)), where a
content-heavy site buried the reader in vocabulary. Here there is nothing to cut
and the client has explicitly asked for simple. The design problem is the harder
one: **make brevity read as confidence rather than as an unfinished page.**

A family-office one-pager is a *credibility object*, not a marketing site. The
reader arrives already knowing who he is; they want to confirm it is real and
find the email address. The failure mode is not "too little information" — it is
"looks like a placeholder."

## The three directions

| Route | Direction | Premise |
|---|---|---|
| `/` | — | The chooser. Start here. |
| `/card` | **Card** | A calling card. One screen, enormous air, one brass rule. |
| `/sheet` | **Sheet** | A one-page document an allocator would keep. Structure, not air. |
| `/aperture` | **Aperture** | Dark, atmospheric, a slow horizon and very few words. |
| `/brand-kit` | — | The proposed palette and where it came from. |
| `/design-system` | — | Live catalogue; direction *and* mode switchable. |

## The constraints the build enforces

This is what separates "an agent made three pretty pages" from "an agent did the
job." The discipline is in the code, not in a document nobody opens:

- **Word budget.** `WORD_BUDGET` in `src/lib/site.ts` is 320. Each direction's
  built HTML is checked against it. Over budget means copy was invented.
- **Invent nothing.** No philosophy section, no fabricated portfolio logos, no
  testimonials, no statistics that are not in `src/content/`. Where a direction
  wants more surface it takes it in typography, space and structure — never words.
- **One sentence per investment area**, enforced by the shape of the schema.
- **The voice line survives verbatim.** One sentence on the whole site sounds
  like a person rather than an entity; all three directions preserve it and give
  it room.

## Findings from the current site

- **~40 Google Font families in a single request.** A page-builder theme shipping
  its entire type menu to every visitor, for a page with nine headings. None of
  these three directions uses more than three faces.
- **No brand exists.** Every colour on the live page is the stock WordPress
  Gutenberg swatch set (`#0693e3`, `#00d084`, `#ff6900`, `#fcb900`, `#f78da7`) —
  defaults nobody chose. Each direction therefore *proposes* a palette, drawn
  from the only deliberate visual on the site: the headshot.

## Why it stays maintainable after the pitch

- **One content layer.** All three directions read the same seven markdown files
  in `src/content/`. The client edits YAML frontmatter and prose — never a component.
- **Re-brand in one line.** Two-tier tokens mean a colour change is a new named
  token plus one re-pointed semantic token.
- **Retiring a direction is a delete.** Per-direction components never
  cross-import, so removing two folders and two routes removes two directions.
- **The catalogue ships with the site.** `/design-system` is generated from the
  same components the site uses, so it cannot drift.

## Stack

Astro 7 · Tailwind 4 (via `@tailwindcss/vite`) · pnpm. No React, no JSX, no MDX.
Substrate (layouts, mode switcher, `Plate`, token architecture) is lifted from
[`gth-site`](https://github.com/lossless-group/gth-site) rather than re-derived — same patterns, per the
pseudomonorepos discipline.

```bash
pnpm install --ignore-workspace
pnpm dev
pnpm build
pnpm exec astro check
```

Not a member of the astro-knots pnpm workspace; installs standalone with its own
lockfile so it can deploy independently.

To run this alongside the two sibling spikes on auto-assigned ports — from an
[astro-knots](https://github.com/lossless-group/astro-knots) workspace checkout,
where all three are present:

```bash
../../scripts/dev-sites.sh
```

## Architecture

```
src/
  content/{areas,sections}/   # the whole corpus — 4 + 3 files
  lib/site.ts                 # principal, office, giving, social, WORD_BUDGET
  styles/
    global.css                # Tier 1 named tokens + resets
    themes/{card,sheet,aperture}.css   # Tier 2, one file per direction
  components/{basics,ui}/     # shared
  components/{card,sheet,aperture}/    # per-direction, no cross-imports
  pages/
```

Two-tier tokens and the three-mode contract work exactly as in
[`gth-site`](https://github.com/lossless-group/gth-site); the contract is documented at the top of
`src/styles/themes/card.css`.

## Known gaps

- No contact form. The contact method is the email address already on the site.
- The portrait is the client's own, taken from the live site. Any other imagery
  is generated and clearly non-photographic.
- `astro.config.mjs` still carries a placeholder `site:` URL. It feeds canonical
  and OpenGraph tags and must be set to the real domain before any deploy.

## Status

Speculative. Not commissioned, not deployed, not endorsed by the subject. Client
details in `src/lib/site.ts` are transcribed verbatim from the public live site.
