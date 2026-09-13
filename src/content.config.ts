import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Permissive by house rule — document shape, don't gatekeep.
 *
 * The entire live site is 300 words. That is not a deficiency to be padded
 * out; it is the thing being preserved. These collections are deliberately
 * small, and nothing here invites an author to write more than the client
 * actually wrote. */

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z
    .object({
      order: z.number(),
      name: z.string(),
      /* One sentence. If a second one shows up, the brief has been broken. */
      line: z.string(),
      /* The named entity a reader can go look up, where one exists. */
      entity: z.string().optional(),
      /* The single number or fact worth setting in the data face, if any. */
      figure: z.string().optional(),
      figure_label: z.string().optional(),
      /* Marks the one line on the site that sounds like a person rather than
       * an entity. All three directions give this row a different and larger
       * treatment, so which row it is must be a CONTENT decision, not a
       * heuristic in a template. The directions originally inferred it three
       * different fragile ways — a regex on the word "vibes", and a filename
       * check — both of which break silently the moment the client edits a
       * sentence or renames a file. */
      feature: z.boolean().optional(),
    })
    .passthrough(),
});

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z
    .object({
      order: z.number(),
      slug_id: z.string(),
      eyebrow: z.string().optional(),
      title: z.string(),
      /* The one line that has to land if the reader reads nothing else. */
      lead: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { areas, sections };
