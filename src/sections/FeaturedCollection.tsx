import React, { useState } from 'react';
import { productsData } from '../data/products';
import { siteConfig } from '../data/site';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GoldButton } from '../components/ui/GoldButton';
import { CleanPlaceholderSlot } from '../components/ui/CleanPlaceholderSlot';
import { MessageCircle, Sparkles, Eye } from 'lucide-react';
import { formatWhatsAppUrl } from '../lib/utils';
import { Product } from '../types';

interface FeaturedCollectionProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ onOpenAppointmentModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  const filterOptions = [
    { label: 'All Highlights', value: 'all' },
    { label: 'Bridal Masterworks', value: 'bridal' },
    { label: 'Certified Diamonds', value: 'diamond' },
    { label: '21K & 22K Gold', value: 'gold' },
    { label: 'Rings & Bands', value: 'rings' },
  ];

  const filteredProducts = selectedFilter === 'all'
    ? productsData
    : productsData.filter((p) => p.category === selectedFilter || (selectedFilter === 'bridal' && p.isBridal));

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#000000] border-t border-white/5 relative" aria-label="Featured Collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Haute Joaillerie"
          title="Featured Creations"
          subtitle="A preview of signature masterworks sculpted at our atelier. Each creation is handcrafted with certified purity and tailored custom proportions."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 min-h-[44px] ${
                selectedFilter === opt.value
                  ? 'bg-[#BF953F] text-black font-semibold shadow-gold-sm'
                  : 'bg-[#121212] text-[#A0A0A0] hover:text-white hover:bg-[#1A1A1A] border border-white/5'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid or Clean Dedicated Slot */}
        {filteredProducts.length === 0 ? (
          <CleanPlaceholderSlot
            title="Collection Being Updated From Atelier"
            subtitle="High-resolution photography, weight certifications, and bespoke pieces are being loaded from the Google Drive catalogue."
            onActionClick={() => onOpenAppointmentModal('Catalogue Inquiry')}
            actionText="Request Private Catalogue"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const productInquiryMsg = `Salam Rana Jewellers, I am interested in inquiring about "${product.name}" (${product.purity || 'Bespoke piece'}) seen on your website.`;
              const productWhatsAppUrl = formatWhatsAppUrl(siteConfig.contact.whatsappNumber, productInquiryMsg);

              return (
                <div
                  key={product.id}
                  className="group relative bg-[#0D0D0D] border border-white/10 hover:border-[#BF953F]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#141414]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {product.isNewArrival && (
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#BF953F] text-black font-semibold">
                          New Masterwork
                        </span>
                      )}
                      {product.purity && (
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-black/80 backdrop-blur-sm border border-[#BF953F]/40 text-[#FCF6BA]">
                          {product.purity}
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Desktop */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <button
                        type="button"
                        onClick={() => setActiveProductModal(product)}
                        className="px-4 py-2 bg-black/90 border border-[#BF953F] text-[#FCF6BA] text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#BF953F] hover:text-black transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#BF953F] font-medium block mb-1">
                        {product.category.toUpperCase()} COLLECTION
                      </span>
                      <h3 className="font-serif text-xl text-white group-hover:text-gold-metallic transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#999999] font-light mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Action Row */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-[#777777]">
                          Pricing &amp; Specs
                        </span>
                        <span className="text-xs font-medium text-[#FCF6BA] tracking-wide">
                          Available on Request
                        </span>
                      </div>

                      <a
                        href={productWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-medium tracking-wider uppercase transition-colors"
                        title="Inquire directly on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Dedicated Reserved Slot for Upcoming Drive Data */}
        <div className="mt-12">
          <CleanPlaceholderSlot
            title="Private Drive Catalogue Integration"
            badge="Drive Sync Reserved"
            subtitle="New bridal collections, gold rate adjustments, and verified photos added to the Google Drive folder will appear here automatically."
            minHeight="min-h-[160px]"
            onActionClick={() => onOpenAppointmentModal('Custom Design Commission')}
            actionText="Consult Atelier Goldsmith"
          />
        </div>

        {/* Bottom Bespoke Callout */}
        <div className="mt-12 p-8 bg-[#0A0A0A] border border-[#BF953F]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-full border border-[#BF953F] items-center justify-center text-[#BF953F] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-white">Seeking a Custom Heirloom Design?</h4>
              <p className="text-xs text-[#A0A0A0] mt-1 font-light">
                Our master artisans create custom bridal sets according to your exact gold weight, budget, and gem preferences.
              </p>
            </div>
          </div>
          <GoldButton
            variant="primary"
            size="md"
            onClick={() => onOpenAppointmentModal('Custom Design Commission')}
            className="shrink-0 text-xs"
          >
            Commission Custom Design
          </GoldButton>
        </div>
      </div>

      {/* Product Quick View Modal */}
      {activeProductModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#0F0F0F] border border-[#BF953F]/50 p-6 sm:p-8 overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveProductModal(null)}
              className="absolute top-4 right-4 text-[#A0A0A0] hover:text-white p-2"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-[4/5] bg-black overflow-hidden border border-white/10">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#BF953F]">
                    {activeProductModal.purity || 'Bespoke Joaillerie'}
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    {activeProductModal.name}
                  </h3>
                  <p className="text-xs text-[#C0C0C0] font-light mt-3 leading-relaxed">
                    {activeProductModal.description}
                  </p>
                  
                  <div className="mt-4 p-3 bg-black/60 border border-white/5 space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#888]">
                      <span>Gold Purity:</span>
                      <span className="text-white font-medium">{activeProductModal.purity || '21K / 22K Hallmarked'}</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Availability:</span>
                      <span className="text-[#FCF6BA] font-medium">Bespoke Atelier Order</span>
                    </div>
                    <div className="flex justify-between text-[#888]">
                      <span>Showroom:</span>
                      <span className="text-white">DHA Main Boulevard, Lahore</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <GoldButton
                    variant="primary"
                    size="md"
                    asLink
                    href={formatWhatsAppUrl(
                      siteConfig.contact.whatsappNumber,
                      `Salam Rana Jewellers, I would like to inquire about pricing and ordering "${activeProductModal.name}".`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gap-2 text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </GoldButton>
                  <GoldButton
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setActiveProductModal(null);
                      onOpenAppointmentModal(activeProductModal.name);
                    }}
                    className="w-full text-xs"
                  >
                    Book Showroom Viewing
                  </GoldButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
