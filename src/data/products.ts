import { Product } from '../types';

/**
 * FEATURED SHOWCASE CATALOG
 * All real prices, karat weights, and certified certificates are to be confirmed by the owner.
 * Items default to 'priceOnRequest: true' to avoid fabricating arbitrary pricing.
 */
export const productsData: Product[] = [
  {
    id: 'rj-bridal-01',
    name: 'The Noor-ul-Ain Bridal Choker Set',
    category: 'bridal',
    description: 'An opulent royal wedding set crafted in 22K gold, accented with uncut polki gemstones and cascading freshwater pearls.',
    purity: '22K Gold',
    priceOnRequest: true,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isBridal: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'rj-diamond-02',
    name: 'Celestial Solitaire Diamond Ring',
    category: 'diamond',
    description: 'Precision brilliant-cut solitaire diamond held in a six-prong platinum crown atop an 18K gold band.',
    purity: 'Certified Diamond',
    priceOnRequest: true,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'rj-gold-03',
    name: 'Shahzadi Filigree Gold Haar',
    category: 'gold',
    description: 'A traditional multi-tier ceremonial necklace sculpted with delicate hand-carved floral openwork.',
    purity: '22K Gold',
    priceOnRequest: true,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'rj-bangles-04',
    name: 'Heritage Royal Kangans (Pair)',
    category: 'bangles',
    description: 'Pair of solid 21K gold ceremonial bangles detailed with antique nakshi engraving and screw clasp.',
    purity: '21K Gold',
    priceOnRequest: true,
    image: 'https://images.unsplash.com/photo-1611591475879-11f8e1785501?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'rj-earrings-05',
    name: 'Darbar Diamond & Pearl Chandbalis',
    category: 'earrings',
    description: 'Crescent-shaped earrings adorned with brilliant diamonds, emerald cabochons, and micro-pearl droplets.',
    purity: 'Certified Diamond',
    priceOnRequest: true,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'rj-rings-06',
    name: 'Bespoke Emerald Cut Cocktail Ring',
    category: 'rings',
    description: 'Statement cocktail ring featuring a certified central emerald-cut gemstone embraced by pavé diamonds.',
    purity: 'Certified Diamond',
    priceOnRequest: true,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop',
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
  },
];
