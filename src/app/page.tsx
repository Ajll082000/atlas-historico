'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CountryGrid from '@/components/CountryGrid';
import MapView from '@/components/MapView';

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
  coordinates?: [number, number];
  zoom?: number;
}

export default function HomePage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <main className="min-h-screen bg-atlas-base text-white flex flex-col relative overflow-x-hidden">

      {/* ── HERO ── */}
      <header className="relative z-10 flex flex-col items-center text-center px-6 pt-14 pb-10 md:pt-24 md:pb-14">
        {/* Frase + autor */}
        <div
          className="flex flex-col items-center gap-2 mb-5 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <p className="font-display italic text-atlas-soft text-base md:text-lg tracking-wide leading-snug">
            "El proyecto nace, porque todos somos uno mismo"
          </p>
          <span className="font-body text-atlas-gold text-[11px] uppercase tracking-[0.3em]">
            — Alejandro López
          </span>
        </div>

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-5 animate-fade-in"
          style={{ animationDelay: '50ms' }}
        >
          <div className="h-px w-10 bg-atlas-gold/40" aria-hidden="true" />
          <span className="font-body text-atlas-gold text-[11px] uppercase tracking-[0.3em]">
            Proyecto Histórico
          </span>
          <div className="h-px w-10 bg-atlas-gold/40" aria-hidden="true" />
        </div>

        {/* Main title */}
        <h1
          className="font-display font-normal leading-none mb-3 animate-fade-in"
          style={{
            animationDelay: '100ms',
            fontSize: 'clamp(3rem, 12vw, 6rem)',
          }}
        >
          <span className="text-white">Atlas</span>{' '}
          <span className="text-atlas-gold italic">Histórico</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-atlas-soft text-sm md:text-base max-w-xs md:max-w-md leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Explora países. Entra a su época. Vive su identidad.
        </p>

        {/* CTA */}
        <button
          onClick={() => router.push('/country/nicaragua')}
          className="hero-cta animate-fade-in"
          style={{ animationDelay: '300ms' }}
          aria-label="Explorar la historia de Nicaragua"
        >
          <div className="hero-cta-inner">
            <img
              src="/flags/nicaragua.svg"
              alt="Bandera de Nicaragua"
              width="20"
              height="14"
              className="rounded-sm flex-shrink-0"
            />
            <span>Enter</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </header>

      {/* ── MAPA ── */}
      <section
        aria-label="Mapa interactivo del mundo con fronteras"
        className="relative w-full h-[500px] md:h-[650px]"
      >
        <MapView onCountrySelect={setSelectedCountry} selectedCountry={selectedCountry} />
      </section>

      {/* ── PAÍS GRID ── */}
      <CountryGrid />

      {/* ── FOOTER ── */}
      <footer className="text-center pb-10 pt-2">
        <div className="h-px w-24 bg-white/5 mx-auto mb-6" aria-hidden="true" />
        <p className="font-body text-atlas-muted text-xs tracking-wide">
          © 2025 Atlas Histórico · Proyecto en construcción
        </p>
      </footer>
    </main>
  );
}
