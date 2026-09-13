/* Wiring, not content. Everything here is verbatim from the live site. */

export const PRINCIPAL = {
  name: 'Gabe Dominocielo',
  surname: 'Dominocielo',
  role: 'Principal',
  venture: 'Umbra Lab, Inc.',
  portrait: '/img/portrait-gabe-dominocielo.png',
  portrait_alt: 'Gabe Dominocielo, in a navy jacket against a plain grey ground.',
} as const;

export const OFFICE = {
  name: 'Dominocielo',
  kind: 'Single-family office',
  city: 'Austin, TX',
  address_line: '3736 Bee Caves Rd. STE 1, #104',
  address_city: 'Austin, TX 78746',
  email: 'inquire@dominocielo.com',
  phone: '+1.805.455.1656',
  phone_href: 'tel:+18054551656',
} as const;

export const GIVING = {
  fund: 'The Dominocielo Fund',
  principal: 'Anita Dominocielo',
  url: 'https://dominocielo.org',
  label: 'dominocielo.org',
  email: 'giving@dominocielo.org',
} as const;

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dominocielo' },
  { label: 'X', href: 'https://x.com/dominocielo' },
  { label: 'Instagram', href: 'https://www.instagram.com/dominocielo/' },
] as const;

/* The whole site, counted. Kept here because the number IS the brief: the
 * live site is 300 words and the redesign is not permitted to pad it. */
export const WORD_BUDGET = 320;

export const DIRECTIONS = [
  { slug: 'card', name: 'Card', mode: 'light' },
  { slug: 'sheet', name: 'Sheet', mode: 'light' },
  { slug: 'aperture', name: 'Aperture', mode: 'dark' },
] as const;
