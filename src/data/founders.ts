import { Founder } from '../types';

/**
 * FOUNDERS & MASTER ARTISANS DATA
 * IMPORTANT: To protect brand integrity, unverified founder identities are never fabricated.
 * Set `isPublished: true` only when genuine, approved founder names and portraits are provided.
 */
export const foundersConfig = {
  sectionEnabled: true, // If true and isPublished is false, renders an elegant bespoke atelier craftsmanship statement
  showPlaceholderNotice: false, // If true, displays gentle admin helper in dev mode
};

export const foundersData: Founder[] = [
  {
    id: 'founder-01',
    name: 'ADD_VERIFIED_FOUNDER_NAME',
    title: 'Master Craftsman & Co-Founder',
    bio: 'ADD_APPROVED_FOUNDER_BIO',
    quote: 'True luxury lies in the unseen details — the weight of pure gold, the symmetry of a stone, and the soul poured into every setting.',
    image: '', // To be updated with confirmed portrait
    isPublished: false, // SAFEGUARD: Kept false until verified details are provided
  },
];
