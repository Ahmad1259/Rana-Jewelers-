import { FaqItem, BenefitItem } from '../types';

export const benefitsData: BenefitItem[] = [
  {
    id: 'hallmark-purity',
    title: 'Certified Gold Purity',
    description: 'Every 21K and 22K gold creation undergoes rigorous hallmark verification, guaranteeing authentic purity down to the finest milligram.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'master-craftsmanship',
    title: 'Master Goldsmithing',
    description: 'Each creation is sculpted by master karigars with generations of heritage in polki, filigree, and precision diamond micro-pave setting.',
    iconName: 'Sparkles',
  },
  {
    id: 'bespoke-commissions',
    title: 'Bespoke Atelier Service',
    description: 'Work directly with our design consultants to create one-of-a-kind bridal suites and custom heirlooms tailored to your unique vision.',
    iconName: 'Gem',
  },
  {
    id: 'private-consultations',
    title: 'Private DHA Showroom',
    description: 'Enjoy a confidential, luxury viewing experience with dedicated consultants at our boutique on DHA Main Boulevard, Lahore.',
    iconName: 'Crown',
  },
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-bridal-consultation',
    question: 'How do I schedule a private bridal viewing?',
    answer: 'You can book an appointment directly through our website booking form or contact our showroom concierge on WhatsApp (+92 300 1234567). We arrange dedicated viewings to help you select or design your bridal jewellery in privacy.',
  },
  {
    id: 'faq-custom-design',
    question: 'Can I bring my own design for custom creation?',
    answer: 'Yes. Our bespoke atelier specializes in custom-made bridal sets, engagement rings, and gold jewellery. You can bring references, sketches, or family heirlooms for remodelling, and our master craftsmen will create a 3D preview and estimate.',
  },
  {
    id: 'faq-gold-certification',
    question: 'Are your gold and diamonds certified?',
    answer: 'Every piece from Rana Jewellers is accompanied by a transparent purity certification verifying the exact karat (21K or 22K) and diamond quality parameters.',
  },
  {
    id: 'faq-showroom-location',
    question: 'Where is your showroom located in Lahore?',
    answer: 'Our flagship boutique is located on Main Boulevard, DHA, Lahore. We are open Monday through Saturday from 12:00 PM to 9:30 PM. Valet parking and private consultation suites are available.',
  },
];
