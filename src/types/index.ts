export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'whatsapp' | 'youtube' | 'tiktok';
  url: string;
  label: string;
  isVerified: boolean;
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  taglineUrdu?: string;
  shortDescription: string;
  fullDescription: string;
  location: {
    street: string;
    area: string;
    city: string;
    country: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    isAddressVerified: boolean;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string; // international digits only, e.g. "923000000000"
    whatsappDisplay: string;
    email: string;
    defaultWhatsAppMessage: string;
  };
  openingHours: OpeningHour[];
  socialLinks: SocialLink[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
  };
  brandColors: {
    blackPure: string;
    blackCharcoal: string;
    goldPrimary: string;
    silverAccent: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  isAvailable: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string; // slug matching Category
  description: string;
  purity?: '21K Gold' | '22K Gold' | '18K White Gold' | 'Certified Diamond';
  weightEstimate?: string; // e.g. "14.2g" or hidden
  price?: number;
  priceDisplay?: string;
  priceOnRequest: boolean;
  image: string;
  additionalImages?: string[];
  isNewArrival?: boolean;
  isBridal?: boolean;
  isFeatured?: boolean;
  inStock?: boolean;
}

export interface Founder {
  id: string;
  name: string;
  title: string;
  bio: string;
  quote?: string;
  image?: string;
  isPublished: boolean; // Set to true only once approved name/bio provided
}

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number; // 1 to 5
  reviewText: string;
  date?: string;
  sourceUrl?: string;
  isVerified: boolean; // Verified genuine reviews only
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
