'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const PLACES: { name: string; coords: [number, number]; kind: 'city' | 'volcano' | 'lake' }[] = [
  { name: 'Managua', coords: [-86.2504, 12.1364], kind: 'city' },
  { name: 'León', coords: [-86.8780, 12.4340], kind: 'city' },
  { name: 'Granada', coords: [-85.9560, 11.9300], kind: 'city' },
  { name: 'Matagalpa', coords: [-85.9170, 12.9270], kind: 'city' },
  { name: 'Estelí', coords: [-86.3540, 13.0920], kind: 'city' },
  { name: 'Bluefields', coords: [-83.7670, 11.9950], kind: 'city' },
  { name: 'Bilwi (Puerto Cabezas)', coords: [-83.3860, 14.0330], kind: 'city' },
  { name: 'Momotombo', coords: [-86.5400, 12.4220], kind: 'volcano' },
  { name: 'Concepción y Maderas (Ometepe)', coords: [-85.6220, 11.5380], kind: 'volcano' },
  { name: 'Masaya', coords: [-86.1610, 11.9840], kind: 'volcano' },
  { name: 'San Cristóbal', coords: [-87.0039, 12.7019], kind: 'volcano' },
  { name: 'Cerro Negro', coords: [-86.7019, 12.5061], kind: 'volcano' },
  { name: 'Cosigüina', coords: [-87.5667, 12.9833], kind: 'volcano' },
];

export default function NicaraguaMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current || !MAPBOX_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-85.3, 12.6],
      zoom: 5.9,
      minZoom: 5,
      maxZoom: 8,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: false,
      scrollZoom: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

    map.current.on('load', () => {
      const m = map.current!;

      m.addLayer({
        id: 'nic-fill',
        type: 'fill',
        source: { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1' },
        'source-layer': 'country_boundaries',
        filter: ['==', ['get', 'iso_3166_1'], 'NI'],
        paint: { 'fill-color': 'rgba(0, 87, 184, 0.14)' },
      });

      m.addLayer({
        id: 'nic-border',
        type: 'line',
        source: { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1' },
        'source-layer': 'country_boundaries',
        filter: ['==', ['get', 'iso_3166_1'], 'NI'],
        paint: { 'line-color': 'rgba(0, 87, 184, 0.9)', 'line-width': 1.5 },
      });

      PLACES.forEach((place) => {
        const el = document.createElement('div');
        el.className = `nic-place-pin nic-place-${place.kind}`;

        const dot = document.createElement('span');
        dot.className = 'nic-place-dot';
        el.appendChild(dot);

        const label = document.createElement('span');
        label.className = 'nic-place-label';
        label.textContent = place.name;
        el.appendChild(label);

        new mapboxgl.Marker({ element: el, anchor: 'left' }).setLngLat(place.coords).addTo(m);
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="flex items-center justify-center h-full text-atlas-muted text-sm font-body px-6 text-center">
        Mapa no disponible: falta el token de Mapbox.
      </div>
    );
  }

  return <div ref={mapContainer} className="w-full h-full" role="img" aria-label="Mapa de Nicaragua con ciudades, volcanes y lagos principales" />;
}
