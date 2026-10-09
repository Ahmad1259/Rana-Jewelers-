/**
 * Utility functions for Rana Jewellers website
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function formatPhoneUrl(phoneNumber: string): string {
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
  return `tel:${cleanNumber}`;
}

export const FALLBACK_JEWELRY_IMAGE = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop';
