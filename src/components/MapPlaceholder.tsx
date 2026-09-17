'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Pure equirectangular: x% = (lon + 180) / 360,  y% = (90 − lat) / 180
// Image is now width:100%/height:auto so these coordinates are exact.
const NIC_X = 26.3;  // lon −85.2°, lat +12.9°
const NIC_Y = 42.8;
const MEX_X = 22.5;  // lon −99.1°, lat +19.4°
const MEX_Y = 39.2;
const ESP_X = 49.0;  // lon  −3.7°, lat +40.4°
const ESP_Y = 27.6;

export default function MapPlaceholder() {
  const [cardVisible, setCardVisible] = useState(false);
  const router = useRouter();

  return (
    <div className="map-placeholder-wrapper">

      {/* ── Real world map image — width 100%, height auto so coordinates are exact ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79765/dnb_land_ocean_ice.2012.3600x1800.jpg"
        alt="Mapa del mundo nocturno"
        aria-hidden="true"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          filter: 'brightness(0.55) saturate(0.7) hue-rotate(200deg)',
        }}
      />

      {/* Dark overlay to deepen the tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(10,14,26,0.45)' }}
        aria-hidden="true"
      />

      {/* Grain */}
      <div className="map-grain" aria-hidden="true" />

      {/* Vignette */}
      <div className="map-vignette" aria-hidden="true" />

      {/* Instruction label */}
      <p className="map-instruction" aria-live="polite">
        {cardVisible ? 'Nicaragua seleccionada' : 'Selecciona un país para explorar'}
      </p>

      {/* ── Nicaragua pin — positioned via % ── */}
      <button
        onClick={() => setCardVisible((v) => !v)}
        aria-label="Ver información de Nicaragua"
        aria-expanded={cardVisible}
        className="nic-map-pin"
        style={{ left: `${NIC_X}%`, top: `${NIC_Y}%` }}
      >
        {/* Pulse rings */}
        <span className="nic-ring nic-ring-1" aria-hidden="true" />
        <span className="nic-ring nic-ring-2" aria-hidden="true" />

        {/* Pin badge */}
        <span className="nic-badge">
          <span className="nic-badge-flag" aria-hidden="true">
            {/* Nicaragua flag stripes: blue / white / blue */}
            <span className="nic-stripe nic-stripe-b" />
            <span className="nic-stripe nic-stripe-w" />
            <span className="nic-stripe nic-stripe-b" />
          </span>
          <span className="nic-badge-label">Nicaragua</span>
        </span>

        {/* Connector dot */}
        <span className="nic-dot" aria-hidden="true" />
      </button>

      {/* ── México pin — próximamente ── */}
      <div
        className="country-map-pin"
        style={{ left: `${MEX_X}%`, top: `${MEX_Y}%`, '--pin-color': '#006847' } as React.CSSProperties}
        aria-label="México — próximamente"
      >
        <div className="country-pin-tooltip">
          <div style={{ position: 'relative', width: 18, height: 13, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }} aria-hidden="true">
            <Image src="/flags/mexico.svg" alt="" fill className="object-cover" />
          </div>
          <span className="country-pin-label">México</span>
        </div>
        <span className="country-pin-dot" aria-hidden="true" />
      </div>

      {/* ── España pin — próximamente ── */}
      <div
        className="country-map-pin"
        style={{ left: `${ESP_X}%`, top: `${ESP_Y}%`, '--pin-color': '#c60b1e' } as React.CSSProperties}
        aria-label="España — próximamente"
      >
        <div className="country-pin-tooltip">
          <div style={{ position: 'relative', width: 18, height: 13, borderRadius: 2, overflow: 'hidden', flexShrink: 0 }} aria-hidden="true">
            <Image src="/flags/spain.svg" alt="" fill className="object-cover" />
          </div>
          <span className="country-pin-label">España</span>
        </div>
        <span className="country-pin-dot" aria-hidden="true" />
      </div>

      {/* ── Country Card ── */}
      {cardVisible && (
        <div
          className="map-country-card animate-card-in"
          role="dialog"
          aria-label="Información de Nicaragua"
          aria-modal="true"
        >
          <button
            onClick={() => setCardVisible(false)}
            className="map-card-close"
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div
              className="relative w-10 h-7 rounded overflow-hidden flex-shrink-0"
              style={{ boxShadow: '0 0 12px rgba(0,87,184,0.5)' }}
            >
              <Image src="/flags/nicaragua.svg" alt="Bandera de Nicaragua" fill className="object-cover" />
            </div>
            <div>
              <p className="font-body text-[10px] text-atlas-gold uppercase tracking-widest mb-0.5">Disponible</p>
              <h2 className="font-display text-lg font-semibold text-[#4A9EE8] leading-tight">Nicaragua</h2>
            </div>
          </div>

          <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(to right, #0057B8, transparent)', opacity: 0.4 }} aria-hidden="true" />

          <p className="font-body text-atlas-soft text-xs leading-relaxed mb-3">
            Desde 8000 a.C. — raíces precolombinas
          </p>

          <div className="flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0057B8]" aria-hidden="true" />
            <span className="font-body text-atlas-muted text-xs">1 época histórica</span>
          </div>

          <button
            onClick={() => router.push('/country/nicaragua')}
            className="country-card-cta"
            style={{ '--btn-color': '#0057B8', '--btn-glow': 'rgba(0,87,184,0.3)' } as React.CSSProperties}
          >
            <span>Entrar</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
