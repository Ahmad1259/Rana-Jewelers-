import React, { useState, useEffect, useRef } from 'react';
import { X, Clock, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { GoldButton } from '../ui/GoldButton';
import { formatWhatsAppUrl } from '../../lib/utils';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Bridal Consultation',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingSummary = `Salam Rana Jewellers,\n\nI would like to confirm a private appointment at your DHA Lahore showroom:\n• Name: ${fullName || 'Patron'}\n• Phone: ${phone || 'Provided via WhatsApp'}\n• Service: ${service}\n• Preferred Date: ${preferredDate || 'Earliest available slot'}\n${notes ? `• Special Notes: ${notes}\n` : ''}\nPlease let me know available slots. Thank you.`;

    const targetUrl = formatWhatsAppUrl(siteConfig.contact.whatsappNumber, bookingSummary);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md transition-opacity overflow-y-auto safe-bottom"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#0E0E0E] border border-[#BF953F]/40 shadow-2xl p-5 sm:p-8 rounded-none overflow-hidden my-auto"
      >
        {/* Subtle Gold Corner Accents */}
        <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-[#BF953F]" />
        <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-[#BF953F]" />
        <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-[#BF953F]" />
        <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-[#BF953F]" />

        {/* Close Button with generous touch target */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#A0A0A0] hover:text-white transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6 pt-1">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-[#BF953F] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Atelier Consultation</span>
          </div>
          <h3 id="modal-title" className="text-xl sm:text-3xl font-serif text-white">
            Schedule a Private Viewing
          </h3>
          <p className="text-[11px] sm:text-xs text-[#A0A0A0] mt-1 font-light">
            DHA Main Boulevard Showroom, Lahore
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C0C0C0] mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Fatima Ali"
              className="w-full bg-[#161616] border border-white/10 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BF953F] min-h-[44px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C0C0C0] mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0300 0000000"
                className="w-full bg-[#161616] border border-white/10 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BF953F] min-h-[44px]"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C0C0C0] mb-1">
                Consultation Type
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#161616] border border-white/10 px-3.5 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#BF953F] min-h-[44px]"
              >
                <option value="Bridal Consultation">Bridal Trousseau Viewing</option>
                <option value="Custom Design Commission">Bespoke Custom Commission</option>
                <option value="Certified Diamond Solitaires">Certified Diamond Solitaires</option>
                <option value="21K/22K Gold Collections">21K/22K Gold Collections</option>
                <option value="Jewellery Valuation & Purity">Valuation & Consultation</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C0C0C0] mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#161616] border border-white/10 px-3.5 py-2.5 text-base sm:text-sm text-white focus:outline-none focus:border-[#BF953F] min-h-[44px]"
              />
            </div>

            <div className="flex flex-col justify-end text-[11px] text-[#A0A0A0]">
              <span className="flex items-center gap-1 text-[#FCF6BA] mb-0.5">
                <Clock className="w-3.5 h-3.5 text-[#BF953F]" />
                Showroom Hours
              </span>
              <span>12:00 PM – 9:30 PM (Mon–Sat)</span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#C0C0C0] mb-1">
              Preferences (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Interested in polki bridal choker sets..."
              className="w-full bg-[#161616] border border-white/10 px-3.5 py-2 text-base sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BF953F] resize-none"
            />
          </div>

          <div className="pt-2">
            <GoldButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full gap-2 text-xs min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              Confirm Appointment via WhatsApp
            </GoldButton>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#808080] pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#BF953F]" />
            <span>Complete client confidentiality guaranteed at Rana Jewellers</span>
          </div>
        </form>
      </div>
    </div>
  );
};
