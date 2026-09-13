---
title: "Three Directions for a Single-Family-Office One-Pager"
lede: "Three hundred words is the whole site. The design problem is restraint — make brevity read as confidence rather than as absence."
publish: true
date_created: 2026-09-11
date_modified: 2026-09-11
date_authored_initial_draft: 2026-09-11
date_authored_current_draft: 2026-09-11
date_authored_final_draft: "[]"
authors:
  - Michael Staton
augmented_with:
  - Claude Code on Claude Opus 5
at_semantic_version: 0.1.0.0
status: Draft
category: Specs
site_uuid: 98da268c-ae49-499f-9057-b21f6b30f9aa
hex_code: vgqnz1
tags:
  - Astro-Knots
  - Design-Directions
  - Restraint
  - Personal-Site
  - Information-Hierarchy
---

# Three Directions for a Single-Family-Office One-Pager

**Codename: Meridian.** Client is the principal of a single-family office in a
US metro, previously co-founder of a defense-adjacent space technology company.
Real name, domain and entity names stay out of this document and out of the
changelog; they live only in the site repo, which is private.

## Why Care?

This is the opposite brief to [[Three-Directions-for-a-Practitioner-Led-Testing-and-Content-Site]],
and worth recording precisely because it inverts it.

There, a content-heavy site buried the reader in vocabulary and the fix was to
orient first. Here the live site is **300 words total, on one page**, and the
client has explicitly asked that it stay simple. There is nothing to cut. The
design problem is the harder one: **make brevity read as confidence rather than
as an unfinished site.**

A family office one-pager is not a marketing site. Nobody arrives needing to be
convinced — they arrive already knowing who he is, wanting to confirm it is real
and find the email address. The page is a **credibility object**, and the failure
mode is not "too little information," it is "looks like a placeholder."

## What is actually there

Two paragraphs about the family, one about the principal, four investment areas
at one sentence each, one paragraph on giving, and a contact block. One
photograph. Three social links. That is the entire corpus and it is not to be
padded — the word budget is a hard constraint in the content schema, not a
suggestion.

## The findings

**There is no brand to extract.** Every colour on the live page is the stock
WordPress Gutenberg swatch set — `#0693e3`, `#00d084`, `#ff6900`, `#fcb900`,
`#f78da7`. Defaults nobody chose. Unlike the previous engagement there is no
client palette to honour, so each direction *proposes* one, drawn from the only
deliberate visual the client owns: the headshot. Navy jacket, warm grey backdrop,
white shirt.

**The site loads roughly forty Google Font families in a single request.** A
page-builder theme shipping its entire type menu to every visitor. None of the
three directions uses more than three faces.

**One line carries all of the personality.** The early-stage investment blurb
ends *"part diligence, part pattern recognition, and primarily vibes."* On a page
this short, that sentence is the only thing that sounds like a person rather than
an entity. Every direction preserves it verbatim and gives it room. Losing it
would leave the page with no voice at all.

## The three directions

**A — Card (`/card`).** A calling card. One screen, almost no scroll, enormous
air, one brass rule. Bone and ink. The confidence of not explaining yourself.

**B — Sheet (`/sheet`).** A one-page document — the thing a serious allocator
would actually keep. Everything visible at once in a tight tabular grid, mono
labels, hairline rules, figures in the data face. Facts foregrounded.

**C — Aperture (`/aperture`).** Atmospheric and dark. A slow horizon, very few
words, the portrait treated with real care. The nod is to synthetic-aperture
radar — seeing through cloud and dark — which is what the principal's company
actually does.

## The constraint that governs all three

Body copy stays at or under the word budget. **No invented facts, no invented
credentials, no filler sections** — no "philosophy," no fabricated portfolio
logos, no testimonials. Where a direction wants more surface it takes it in
typography, space and structure, never in words.

## Out of scope

No blog, no portfolio detail pages, no contact form. The contact method is the
email address that is already on the site.

## References

- [[Orient-Before-You-Introduce-a-Term-of-Art]] — the sibling discipline; this brief is its inverse case
- [[Maintain-Themes-Mode-Across-CSS-Tailwind]] — two-tier tokens, three-mode contract
- [[Maintain-Design-System-and-Brandkit-Motions]] — the two required reference pages
