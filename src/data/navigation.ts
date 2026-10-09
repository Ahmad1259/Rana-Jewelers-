export interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

export const navigationData = {
  announcement: {
    enabled: true,
    message: 'Welcome to Rana Jewellers — DHA Main Boulevard, Lahore',
    highlightText: 'Book Private Bridal Viewing',
    phonePrompt: 'Direct Showroom Line',
  },
  menuItems: [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Categories', href: '#categories' },
    { label: 'Bridal', href: '#bridal' },
    { label: 'About', href: '#about' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Visit Us', href: '#visit' },
  ],
  cta: {
    label: 'Book Appointment',
    href: '#appointment',
  },
};
