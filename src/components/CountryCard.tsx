'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Country {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  colors?: {
    primary: string;
    secondary: string;
    highlight: string;
    glow: string;
  };
  flag?: string;
  tagline?: string;
  periodsCount?: number;
}

interface CountryCardProps {
  country: Country;
  onClose: () => void;
}

export default function CountryCard({ country, onClose }: CountryCardProps) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the card for keyboard accessibility
    if (cardRef.current) {
      cardRef.current.focus();
    }
  }, [country]);

  const handleEnter = () => {
    if (country.active) {
      router.push(`/country/${country.slug}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'Enter' && country.active) handleEnter();
  };

  const accentColor = country.colors?.primary || '#C9A84C';

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="dialog"
      aria-label={`Información de ${country.name}`}
      aria-modal="true"
      onKeyDown={handleKeyDown}
      className="country-card animate-card-in"
      style={{
        '--accent': accentColor,
        '--accent-glow': country.colors?.glow || 'rgba(201,168,76,0.3)',
      } as React.CSSProperties}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar panel"
        className="absolute top-4 right-4 text-atlas-muted hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-atlas-gold/50 rounded"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Flag + header */}
      <div className="flex items-center gap-3 mb-5">
        {country.flag ? (
          <div
            className="relative w-10 h-7 rounded overflow-hidden flex-shrink-0 shadow-lg"
            style={{ boxShadow: `0 0 12px ${country.colors?.glow || 'rgba(255,255,255,0.1)'}` }}
          >
            <Image
              src={country.flag}
              alt={`Bandera de ${country.name}`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="w-10 h-7 rounded flex-shrink-0 opacity-30 border border-white/20"
            style={{ background: accentColor }}
          />
        )}

        <div>
          <p className="text-atlas-muted text-xs uppercase tracking-widest font-body mb-0.5">
            {country.active ? 'Disponible' : 'Próximamente'}
          </p>
          <h2
            className="font-display text-xl font-semibold leading-tight"
            style={{ color: country.active ? 'var(--accent)' : '#8895A7' }}
          >
            {country.name}
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full mb-5 opacity-30"
        style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
        aria-hidden="true"
      />

      {country.active ? (
        <>
          {/* Tagline */}
          {country.tagline && (
            <p className="text-atlas-soft font-body text-sm leading-relaxed mb-4">
              {country.tagline}
            </p>
          )}

          {/* Stats */}
          {country.periodsCount !== undefined && (
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: accentColor }}
                aria-hidden="true"
              />
              <span className="text-atlas-muted text-xs font-body">
                {country.periodsCount}{' '}
                {country.periodsCount === 1 ? 'época histórica' : 'épocas históricas'}
              </span>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleEnter}
            className="country-card-cta w-full"
            style={{
              '--btn-color': accentColor,
              '--btn-glow': country.colors?.glow || 'rgba(201,168,76,0.3)',
            } as React.CSSProperties}
          >
            <span>Entrar</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      ) : (
        <>
          {/* Coming soon */}
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 text-atlas-muted text-sm font-body mb-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              Historia en preparación
            </div>
            <p className="text-atlas-muted/60 text-xs font-body leading-relaxed">
              Estamos documentando la historia de este país. Próximamente disponible.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 px-4 py-2.5 text-sm font-body text-atlas-muted border border-white/10 rounded-lg hover:border-white/20 hover:text-atlas-soft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Volver al mapa
          </button>
        </>
      )}
    </div>
  );
}
