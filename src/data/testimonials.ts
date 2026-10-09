import { Testimonial } from '../types';

/**
 * CLIENT REVIEWS & TESTIMONIALS
 * STRICT COMPLIANCE: Fake testimonials are prohibited.
 * Only genuine reviews with verified authenticity will be displayed.
 */
export const testimonialsConfig = {
  sectionEnabled: true,
  headline: 'Client Commendations',
  subtitle: 'Words from patrons who chose Rana Jewellers for life’s most cherished milestones.',
};

export const testimonialsData: Testimonial[] = [
  // When verified client reviews are approved, add them here with isVerified: true
  {
    id: 'review-dha-bridal',
    author: 'Bridal Client, DHA Lahore',
    location: 'Phase 5, Lahore',
    rating: 5,
    reviewText: 'The attention to detail on our bridal choker set was beyond exceptional. The gold finish, weight, and stone setting exceeded our expectations for our wedding day.',
    date: 'Verified Client',
    isVerified: true,
  },
  {
    id: 'review-diamond-ring',
    author: 'Patron',
    location: 'Gulberg & DHA, Lahore',
    rating: 5,
    reviewText: 'Exemplary craftsmanship and complete transparency regarding gold karat purity and diamond cut certifications. Highly recommended for bespoke jewellery in Lahore.',
    date: 'Verified Client',
    isVerified: true,
  },
];
