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

# Your Site, Built by Astro Knots

> **[Astro Knots](https://lossless-group.github.io/astro-knots/)** is The Lossless Group's set of systems, context, patterns, and conventions for building blazing fast, modern, elegant, responsive, content-rich, kick-ass websites.
>
> Astro Knots sites default to [Astro](https://astro.build), the most loved framework for building such kick-ass sites. Any dynamic interactivity is either pure vanilla JS, [HTMX](https://htmx.org), or [Svelte](https://svelte.dev) (the most loved framework for building interactive interfaces). Rich markdown content is supported through our own markdown parser, [Lossless Flavored Markdown (LFM)](https://github.com/lossless-group/lossless-flavored-markdown-package/).

***

# For You

## Three versions of your page

Same words, same facts, three different ways of displaying them. Open each, see
which one sounds like you, and tell us. The other two get deleted and nothing
else changes.

| Open this | It's the version where… |
|---|---|
| **`/`** | The chooser. Start here. |
| **`/card`** | It's a calling card. One screen, a lot of air, your name big and your email right under it. |
| **`/sheet`** | It's a document — the thing someone would actually keep in a folder. Numbered sections, your two real figures set at size. |
| **`/aperture`** | It's a sky with your name on it. A horizon line, very few words, your photo treated like an instrument reading. |
| **`/brand-kit`** | Colour and type, and where they came from. |
| **`/design-system`** | The parts catalogue, for whoever builds on this next. |

**Two things worth trying while you look:**

1. **Open `/aperture` and hit the mode toggle, top right.** Dark is night at
   ground level looking up. Light is daylight at altitude looking down — the
   gradient runs the other way, the horizon blows out white instead of glowing,
   and the drifting cloud layer becomes a *shadow on the land* instead of a lit
   cloud. Two designs, not one flipped.
2. **Find the "primarily vibes" line on each of the three.** One sentence on your
   whole site sounds like a person rather than an entity, and it's that one. Card
   sets it two and a half times bigger than its neighbours in brass. Sheet lets it
   break the grid with a hand-drawn underline. Aperture gives it the only warm
   wash on the page. Three different answers to *protect the human sentence*.

## Why this is different from being handed a design

A design comp is a picture. You still have to hire someone to turn it into a
website, and the outcome is often different from the original design... diverging
somewhere along the way.

These designs are well-coded websites. You can choose a direction, change your mind, change a
colour, update a number, and push live.

That works because the agent that built it wasn't improvising. **Astro Knots is a
conceptual map we hand a coding agent before it writes anything** — the stack,
the conventions, the constraints, the things we've learned not to do. So instead
of getting creative *and* unpredictable, it gets creative *within rails*: real
design range on top of good code, a current stack, and practices a professional
team would recognise.

The test of that is the handoff. Give your favourite of these three to a
marketing team, an engineering team, or a different coding agent, and they can
keep going the same afternoon. They'll find your copy in plain markdown, data in JSON, the
colors in one file, a parts catalogue at `/design-system`, and written
explanations of why things are the way they are sitting next to the code.

Two years ago, this was two jobs: pay for designs, then pay engineers to build
them. Skip ture rails like Astro Knots and you get the modern version of the same trap — a real,
working site that becomes a time sink the first time you want to change
something. Here, choosing, iterating and going live are one continuous motion,
and maintenance stops being the thing anyone needs to dread.

## Two things your current site is doing to itself

- **It loads about forty font families**, in a single request, for a page with
  nine headings. That's the page-builder theme shipping its entire type menu to
  every visitor. None of these three uses more than three faces.
- **It has no colours of its own.** Every colour on the live page is the stock
  editor swatch set — defaults nobody picked. So rather than honour a palette
  that was never chosen, each version *proposes* one, drawn from the only
  deliberate image on the site: your headshot. Navy jacket, warm grey backdrop,
  white shirt.

One fix that carried across all three: the headshot isn't actually transparent —
it's a circle composited onto opaque white. That looks fine on a white page and
shows as a white box the moment it lands on anything dark. It now has a real
alpha circle cut into it, at half the file size.

## Why it stays easy to change

- **One content layer.** All three versions read the same files. Editing means
  markdown and a few labelled fields — never a component.
- **Re-brand in one line.** A colour change is one new value plus one
  re-pointing. Components don't change.
- **Retiring a direction is a delete.** The three never share code.
- **The catalogue can't drift**, because `/design-system` is built from the same
  components the live pages use.

---

Everything below is for whoever builds on this next — you don't need it.

# For the Handoff (to whoever builds on this next)

Hi! Welcome to the handoff. This is a quick overview of the project and some context about why things are the way they are. It's built on about two years of experience **vibe coding** then **context engineering** then **agentic engineering** then **loop engineering** then **graph engineering**,  then **harness engineering** and now **orchestration engineering**. By the time you see this, we will have another three buzz words that we will have lived through.

## Under the hood

### What Astro Knots is

**[Astro Knots](https://lossless-group.github.io/astro-knots/)** is The Lossless
Group's *pseudomonorepo*: a lattice of independent Astro sites — client work,
personal sites, published packages — developed side by side so patterns, context, and "the harness" (used loosely)
can be compared and shared deliberately.

It is **not** a true monorepo. Every site is its own git repository with its own
lockfile and deploys on its own. Nothing here requires anyone to adopt our
infrastructure or our umbrella project. What the sites share is not runtime code
— it is a set of conventions:

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

### Stack

Astro 7 · Tailwind 4 (via `@tailwindcss/vite`) · pnpm. No React, no JSX, no MDX.
The substrate — layouts, mode switcher, `Plate`, token architecture — is lifted
from its sibling spike rather than re-derived.

```bash
pnpm install --ignore-workspace
pnpm dev
pnpm build
pnpm exec astro check
```

Not a member of the astro-knots pnpm workspace; installs standalone with its own
lockfile so it can deploy independently.

### Architecture

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

Two-tier tokens and the three-mode contract work as they do across the estate;
the contract is documented at the top of `src/styles/themes/card.css`.
`WORD_BUDGET` is a real exported constant, not a note — each direction's built
HTML is counted against it.

One detail worth knowing if you touch the investment areas: the line that gets
the special treatment is marked `feature: true` in its content file. All three
directions read that flag. They originally each inferred it a different fragile
way — a regex on the word "vibes", a filename check — which would have silently
removed the design the first time someone edited that sentence.

### Known gaps

- **No contact form.** The contact method is the email address already on the site.
- **The portrait is the client's own**, taken from the live site. Any other
  imagery is generated and clearly non-photographic.

### Provenance

Every fact, name, figure, address and entity name is transcribed from the public
live site. Nothing about the office, its holdings or its principals is invented.
