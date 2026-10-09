import { SiteConfig } from '../types';

/**
 * SINGLE SOURCE OF TRUTH FOR RANA JEWELLERS BUSINESS CONFIGURATION
 * Update business details, phone numbers, addresses, and hours here.
 */
export const siteConfig: SiteConfig = {
  brandName: 'Rana Jewellers',
  tagline: 'Timeless Elegance & Haute Joaillerie',
  taglineUrdu: 'خالص سونے اور ہیرے کے شاہکار',
  shortDescription: 'Master goldsmiths crafting bespoke 21K & 22K gold, certified diamond solitaires, and bridal heirlooms in DHA Lahore.',
  fullDescription: 'Located on DHA Main Boulevard in Lahore, Rana Jewellers represents the pinnacle of Pakistani jewellery craftsmanship. From regal bridal trousseaus to contemporary everyday diamond solitaires, every piece is sculpted to perfection with verified purity.',
  
  location: {
    street: 'Main Boulevard, DHA',
    area: 'DHA Phase 6 / Main Boulevard',
    city: 'Lahore',
    country: 'Pakistan',
    fullAddress: 'DHA Main Boulevard, Lahore, Punjab, Pakistan',
    // Verified Google Maps embed coordinates for DHA Main Boulevard Lahore
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13612.441058288544!2d74.3725!3d31.478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190666016e0939%3A0x7d02e67a57a877cf!2sMain%20Blvd%2C%20DHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Rana+Jewellers+Main+Boulevard+DHA+Lahore',
    isAddressVerified: true,
  },

  contact: {
    // Note: Replace with confirmed showroom WhatsApp when verified
    phone: '+92 42 35740000',
    phoneDisplay: '+92 (042) 3574-0000',
    whatsappNumber: '923001234567', // International format without +
    whatsappDisplay: '+92 300 1234567',
    email: 'contact@ranajewellers.com',
    defaultWhatsAppMessage: 'Hello Rana Jewellers, I would like to inquire about your jewellery collection and book a private consultation at your DHA Lahore showroom.',
  },

  openingHours: [
    {
      days: 'Monday – Saturday',
      hours: '12:00 PM – 9:30 PM',
    },
    {
      days: 'Sunday',
      hours: 'By Private Appointment Only',
    },
  ],

  socialLinks: [
    {
      platform: 'instagram',
      url: 'https://instagram.com/ranajewellers',
      label: 'Instagram',
      isVerified: false, // Update once verified
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/ranajewellers',
      label: 'Facebook',
      isVerified: false,
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/923001234567',
      label: 'WhatsApp',
      isVerified: true,
    },
  ],

  seo: {
    metaTitle: 'Rana Jewellers | Gold & Diamond Jewellery in DHA Lahore',
    metaDescription: 'Discover handcrafted 21K/22K gold bridal sets, certified solitaire diamonds, and bespoke jewellery at Rana Jewellers on DHA Main Boulevard, Lahore.',
    canonicalUrl: 'https://ranajewellers.com',
  },

  brandColors: {
    blackPure: '#000000',
    blackCharcoal: '#0A0A0A',
    goldPrimary: '#B38728',
    silverAccent: '#E8E8E8',
  },
};
