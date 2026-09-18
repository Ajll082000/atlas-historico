'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import countriesData from '@/data/countries.json';
import { AMERICA_FLAG_COLORS, hexToRgba, flagUrl } from '@/data/americaFlags';

interface Country {
  id: string;
  iso2?: string;
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

interface MapViewProps {
  onCountrySelect: (country: Country | null) => void;
  selectedCountry: Country | null;
  year?: number;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const AMERICA_ISO_CODES = Object.keys(AMERICA_FLAG_COLORS);

const isAmerica = ['in', ['get', 'iso_3166_1'], ['literal', AMERICA_ISO_CODES]] as unknown[];

// Países que integraron la República Federal de Centroamérica (1823–1841).
// Usa las fronteras actuales de cada país como aproximación: no tenemos
// geometría histórica real, así que esto es solo una demostración.
const FEDERATION_ISO_CODES = ['GT', 'SV', 'HN', 'NI', 'CR'];
const FEDERATION_START = 1823;
const FEDERATION_END = 1841;
const FEDERATION_NAME = 'República Federal de Centroamérica';
const FEDERATION_COLOR = '#0057B8';

const isFederation = ['in', ['get', 'iso_3166_1'], ['literal', FEDERATION_ISO_CODES]] as unknown[];

function isFederationYear(year: number) {
  return year >= FEDERATION_START && year <= FEDERATION_END;
}

// Builds a Mapbox `match` expression that maps each country's ISO code to a
// color derived from its flag, falling back to `fallback` for the rest of the world.
function buildFlagColorExpression(alpha: number, fallback: string): unknown[] {
  const expr: unknown[] = ['match', ['get', 'iso_3166_1']];
  Object.entries(AMERICA_FLAG_COLORS).forEach(([iso, hex]) => {
    expr.push(iso, hexToRgba(hex, alpha));
  });
  expr.push(fallback);
  return expr;
}

// Colorea únicamente el bloque de la Federación; todo lo demás queda apagado.
function buildFederationColorExpression(alpha: number, fallback: string): unknown[] {
  return ['case', isFederation, hexToRgba(FEDERATION_COLOR, alpha), fallback];
}

// Active countries map for quick lookup
const activeCountries = new Map<string, Country>();
countriesData.countries.forEach((c) => {
  if (c.active) activeCountries.set(c.id, c as Country);
});

export default function MapView({ onCountrySelect, selectedCountry, year = 2026 }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const router = useRouter();
  const [mapLoaded, setMapLoaded] = useState(false);
  const hoveredCountryId = useRef<string | null>(null);
  const nicMarkerEl = useRef<HTMLDivElement | null>(null);
  const nicMarker = useRef<mapboxgl.Marker | null>(null);
  // Los listeners del mapa se registran una sola vez al montar, así que usamos
  // un ref para que siempre lean el año más reciente (evita closures obsoletos).
  const yearRef = useRef(year);
  useEffect(() => {
    yearRef.current = year;
  }, [year]);

  const flyToCountry = useCallback((country: Country) => {
    if (!map.current || !country.coordinates) return;
    map.current.flyTo({
      center: country.coordinates,
      zoom: country.zoom || 6,
      speed: 0.8,
      curve: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  }, []);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    if (!MAPBOX_TOKEN) {
      console.warn('Mapbox token not set. Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local');
      return;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-30, 20],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 10,
      projection: { name: 'globe' } as mapboxgl.ProjectionSpecification,
      attributionControl: false,
    });

    // Zoom controls (keyboard-accessible)
    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      'bottom-right'
    );

    map.current.on('load', () => {
      const m = map.current!;

      // Add globe atmosphere
      m.setFog({
        color: 'rgb(10, 14, 26)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(4, 6, 16)',
        'star-intensity': 0.6,
      });

      // Country fills layer
      m.addLayer({
        id: 'country-fills',
        type: 'fill',
        source: { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1' },
        'source-layer': 'country_boundaries',
        paint: {
          'fill-color': buildFlagColorExpression(0.16, 'rgba(255,255,255,0.03)') as never,
          'fill-opacity': 1,
        },
      });

      // Country borders layer
      m.addLayer({
        id: 'country-borders',
        type: 'line',
        source: { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1' },
        'source-layer': 'country_boundaries',
        paint: {
          'line-color': buildFlagColorExpression(0.9, 'rgba(255,255,255,0.12)') as never,
          'line-width': [
            'case',
            isAmerica,
            1.5,
            0.5,
          ],
        },
      });

      // Hover state layer
      m.addLayer({
        id: 'country-hover',
        type: 'fill',
        source: { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1' },
        'source-layer': 'country_boundaries',
        paint: {
          'fill-color': buildFlagColorExpression(0.45, 'rgba(201, 168, 76, 0.18)') as never,
          'fill-opacity': 0,
        },
      });

      // Nicaragua permanent pin marker
      const markerEl = document.createElement('div');
      markerEl.className = 'nic-pin';
      markerEl.innerHTML = `
        <div class="pin-pulse"></div>
        <div class="pin-inner">
          <img src="/flags/nicaragua.svg" alt="Nicaragua" width="24" height="16" />
        </div>
      `;
      nicMarkerEl.current = markerEl;

      nicMarker.current = new mapboxgl.Marker({ element: markerEl, anchor: 'bottom' })
        .setLngLat([-85.2072, 12.8654])
        .addTo(m);

      markerEl.addEventListener('click', () => {
        const nic = countriesData.countries.find((c) => c.id === 'NIC') as Country;
        onCountrySelect(nic);
        flyToCountry(nic);
      });

      // Tooltip
      const tooltip = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        className: 'country-tooltip',
        offset: 8,
      });

      // Mouse move — hover effect + tooltip
      m.on('mousemove', 'country-fills', (e) => {
        if (!e.features || e.features.length === 0) return;
        const feature = e.features[0];
        const iso = feature.properties?.iso_3166_1 as string;
        const countryName = feature.properties?.name_en as string;

        if (hoveredCountryId.current !== iso) {
          // Reset previous
          if (hoveredCountryId.current) {
            m.setPaintProperty('country-hover', 'fill-opacity', 0);
          }
          hoveredCountryId.current = iso;

          // Apply hover
          m.setFilter('country-hover', ['==', ['get', 'iso_3166_1'], iso]);
          m.setPaintProperty('country-hover', 'fill-opacity', 1);
        }

        m.getCanvas().style.cursor = 'pointer';

        const federationActive = isFederationYear(yearRef.current) && FEDERATION_ISO_CODES.includes(iso);
        const displayName = federationActive ? FEDERATION_NAME : countryName || iso;
        const showActiveBadge = !federationActive && iso === 'NI';

        tooltip
          .setLngLat(e.lngLat)
          .setHTML(
            `<div class="tooltip-inner">
              ${!federationActive && iso ? `<img class="tooltip-flag" src="${flagUrl(iso, 24)}" alt="" />` : ''}
              ${showActiveBadge ? '<span class="tooltip-active-dot"></span>' : ''}
              <span class="tooltip-name">${displayName}</span>
              ${showActiveBadge ? '<span class="tooltip-active-badge">Activo</span>' : ''}
            </div>`
          )
          .addTo(m);
      });

      m.on('mouseleave', 'country-fills', () => {
        hoveredCountryId.current = null;
        m.setFilter('country-hover', ['==', ['get', 'iso_3166_1'], '']);
        m.setPaintProperty('country-hover', 'fill-opacity', 0);
        m.getCanvas().style.cursor = '';
        tooltip.remove();
      });

      // Click on country
      m.on('click', 'country-fills', (e) => {
        if (!e.features || e.features.length === 0) return;
        const iso = e.features[0].properties?.iso_3166_1 as string;

        if (isFederationYear(yearRef.current) && FEDERATION_ISO_CODES.includes(iso)) {
          onCountrySelect({
            id: 'RFCA',
            iso2: iso,
            name: FEDERATION_NAME,
            slug: 'republica-federal-centroamerica',
            active: false,
            tagline: 'Unión de Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica entre 1823 y 1841.',
            colors: {
              primary: FEDERATION_COLOR,
              secondary: '#FFFFFF',
              highlight: hexToRgba(FEDERATION_COLOR, 0.35),
              glow: hexToRgba(FEDERATION_COLOR, 0.5),
            },
          });
          return;
        }

        const flagHex = AMERICA_FLAG_COLORS[iso];

        const known = countriesData.countries.find((c) => c.iso2 === iso);

        const country: Country = known
          ? {
              ...(known as Country),
              flag: known.flag || (iso ? flagUrl(iso, 80) : undefined),
              colors:
                known.colors ||
                (flagHex
                  ? {
                      primary: flagHex,
                      secondary: '#FFFFFF',
                      highlight: hexToRgba(flagHex, 0.35),
                      glow: hexToRgba(flagHex, 0.5),
                    }
                  : undefined),
            }
          : {
              // Country not in our list — still show "coming soon"
              id: iso,
              iso2: iso,
              name: e.features[0].properties?.name_en || iso,
              slug: iso.toLowerCase(),
              active: false,
              flag: iso ? flagUrl(iso, 80) : undefined,
              colors: flagHex
                ? {
                    primary: flagHex,
                    secondary: '#FFFFFF',
                    highlight: hexToRgba(flagHex, 0.35),
                    glow: hexToRgba(flagHex, 0.5),
                  }
                : undefined,
            };

        onCountrySelect(country);
        if (country.active && country.coordinates) flyToCountry(country);
      });

      setMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recolorea el mapa según el año seleccionado: dentro de 1823-1841 solo se
  // resalta el bloque de la Federación Centroamericana; el resto del tiempo,
  // vuelve al color por bandera de cada país.
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    const m = map.current;

    if (isFederationYear(year)) {
      m.setPaintProperty('country-fills', 'fill-color', buildFederationColorExpression(0.3, 'rgba(255,255,255,0.03)') as never);
      m.setPaintProperty('country-borders', 'line-color', buildFederationColorExpression(0.9, 'rgba(255,255,255,0.12)') as never);
      m.setPaintProperty('country-borders', 'line-width', ['case', isFederation, 1.5, 0.5] as never);
      m.setPaintProperty('country-hover', 'fill-color', buildFederationColorExpression(0.45, 'rgba(201, 168, 76, 0.18)') as never);
    } else {
      m.setPaintProperty('country-fills', 'fill-color', buildFlagColorExpression(0.16, 'rgba(255,255,255,0.03)') as never);
      m.setPaintProperty('country-borders', 'line-color', buildFlagColorExpression(0.9, 'rgba(255,255,255,0.12)') as never);
      m.setPaintProperty('country-borders', 'line-width', ['case', isAmerica, 1.5, 0.5] as never);
      m.setPaintProperty('country-hover', 'fill-color', buildFlagColorExpression(0.45, 'rgba(201, 168, 76, 0.18)') as never);
    }
  }, [year, mapLoaded]);

  // Highlight selected country on map
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    if (selectedCountry?.id === 'NIC') {
      map.current.setPaintProperty('country-fills', 'fill-color', [
        'case',
        ['==', ['get', 'iso_3166_1'], 'NI'],
        'rgba(0, 87, 184, 0.3)',
        'rgba(255,255,255,0.03)',
      ]);
    }
  }, [selectedCountry, mapLoaded]);

  // Double click to navigate
  const handleNavigate = useCallback(() => {
    if (selectedCountry?.active) {
      router.push(`/country/${selectedCountry.slug}`);
    }
  }, [selectedCountry, router]);

  return (
    <div className="relative w-full h-full" aria-label="Mapa interactivo del mundo">
      <div ref={mapContainer} className="w-full h-full" />

      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(10,14,26,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
        aria-hidden="true"
      />

      {!MAPBOX_TOKEN && (
        <div className="absolute inset-0 flex items-center justify-center bg-atlas-base">
          <div className="text-center space-y-3 max-w-sm px-6">
            <p className="text-atlas-gold font-display text-xl">Token de Mapbox requerido</p>
            <p className="text-atlas-muted text-sm font-body leading-relaxed">
              Añade tu token en{' '}
              <code className="text-atlas-gold bg-white/5 px-2 py-0.5 rounded text-xs">
                .env.local
              </code>
              :
            </p>
            <code className="block text-xs text-atlas-soft bg-white/5 px-4 py-3 rounded-lg border border-white/10">
              NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1...
            </code>
            <p className="text-atlas-muted text-xs">
              Consigue tu token gratuito en{' '}
              <span className="text-atlas-gold">mapbox.com</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
