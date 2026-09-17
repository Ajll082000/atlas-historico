'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import countriesData from '@/data/countries.json';

interface Country {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  comingSoon?: boolean;
  colors?: { primary: string };
  flag?: string;
  tagline?: string;
}

export default function CountryGrid() {
  const router = useRouter();
  const countries = countriesData.countries as Country[];
  const activeCountries = countries.filter((c) => c.active);
  const comingSoonCountries = countries.filter((c) => !c.active && c.comingSoon);
  const inactiveCountries = countries.filter((c) => !c.active && !c.comingSoon);

  return (
    <section aria-label="Lista de países" className="w-full max-w-4xl mx-auto px-5 py-10 md:px-8">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-7">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />
        <h2 className="font-body text-atlas-muted text-[11px] uppercase tracking-[0.28em] flex-shrink-0">
          Países del Atlas
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />
      </div>

      {/* Active countries — featured */}
      {activeCountries.length > 0 && (
        <div className="mb-5" role="list" aria-label="Países disponibles">
          {activeCountries.map((country) => (
            <div key={country.id} role="listitem" className="mb-3">
              <button
                onClick={() => router.push(`/country/${country.slug}`)}
                aria-label={`Explorar la historia de ${country.name}`}
                className="country-card-grid-item active w-full focus-visible:ring-2"
                style={{ '--accent': country.colors?.primary || '#C9A84C' } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    (country.colors?.primary || '#C9A84C') + '55';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Flag */}
                  {country.flag ? (
                    <div
                      className="relative w-12 h-8 rounded-md overflow-hidden flex-shrink-0"
                      style={{ boxShadow: `0 0 14px ${(country.colors?.primary || '#0057B8')}44` }}
                    >
                      <Image src={country.flag} alt="" fill className="object-cover" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="w-12 h-8 rounded-md flex-shrink-0 bg-white/10" aria-hidden="true" />
                  )}

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-body text-sm font-medium text-white">{country.name}</p>
                      <span
                        className="font-body text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full border"
                        style={{
                          color: country.colors?.primary || '#C9A84C',
                          borderColor: (country.colors?.primary || '#C9A84C') + '50',
                          background: (country.colors?.primary || '#C9A84C') + '10',
                        }}
                      >
                        Disponible
                      </span>
                    </div>
                    {country.tagline && (
                      <p className="font-body text-[11px] text-atlas-muted truncate">{country.tagline}</p>
                    )}
                  </div>

                  {/* Arrow */}
                  <svg
                    width="14" height="14" viewBox="0 0 16 16" fill="none"
                    className="text-atlas-muted flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Coming soon — próximas adiciones destacadas */}
      {comingSoonCountries.length > 0 && (
        <>
          <div className="flex items-center gap-4 mb-4 mt-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />
            <h3 className="font-body text-atlas-muted text-[10px] uppercase tracking-[0.28em] flex-shrink-0">
              Próximas adiciones
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/8 to-transparent" aria-hidden="true" />
          </div>
          <div role="list" aria-label="Próximas adiciones" className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
            {comingSoonCountries.map((country) => (
              <div key={country.id} role="listitem">
                <div
                  className="country-card-grid-item opacity-70"
                  style={{ borderColor: (country.colors?.primary || '#fff') + '25' }}
                  aria-label={`${country.name} — próximamente`}
                >
                  <div className="flex items-center gap-3">
                    {country.flag ? (
                      <div className="relative w-10 h-7 rounded overflow-hidden flex-shrink-0 grayscale">
                        <Image src={country.flag} alt="" fill className="object-cover" aria-hidden="true" />
                      </div>
                    ) : (
                      <div className="w-10 h-7 rounded flex-shrink-0 bg-white/10" aria-hidden="true" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm text-white/70 font-medium">{country.name}</p>
                      {country.tagline && (
                        <p className="font-body text-[10px] text-atlas-muted truncate">{country.tagline}</p>
                      )}
                    </div>
                    <span
                      className="font-body text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full border border-white/10 text-white/30 flex-shrink-0"
                    >
                      Pronto
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Rest of inactive countries — compact grid */}
      <div
        role="list"
        aria-label="Países próximamente disponibles"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
      >
        {inactiveCountries.map((country) => (
          <div key={country.id} role="listitem">
            <div
              className="country-card-grid-item opacity-40"
              aria-label={`${country.name} — próximamente`}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" aria-hidden="true" />
                <p className="font-body text-xs text-atlas-muted truncate">{country.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming soon note */}
      <p className="font-body text-atlas-muted/50 text-[11px] text-center mt-6 tracking-wide">
        Más países en preparación
      </p>
    </section>
  );
}
