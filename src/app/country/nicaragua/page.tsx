import Link from 'next/link';
import Image from 'next/image';

export default function NicaraguaPage() {
  return (
    <main className="min-h-screen bg-atlas-base text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-xl animate-fade-in">
        {/* Flag */}
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-14 rounded-lg overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 40px rgba(0,87,184,0.4)' }}>
            <Image src="/flags/nicaragua.svg" alt="Bandera de Nicaragua" fill className="object-cover" />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-atlas-gold/40" />
          <span className="font-body text-atlas-gold text-xs uppercase tracking-[0.3em]">
            Atlas Histórico
          </span>
          <div className="h-px w-8 bg-atlas-gold/40" />
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl md:text-7xl font-normal leading-none mb-4">
          <span className="text-white">Nica</span>
          <span className="text-atlas-gold italic">ragua</span>
        </h1>

        <p className="font-body text-atlas-soft text-lg leading-relaxed mb-10">
          La página histórica de Nicaragua está en construcción.<br />
          Pronto podrás explorar desde sus raíces precolombinas (8000 a.C.) hasta la era contemporánea.
        </p>

        {/* Periods preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-left">
          {[
            { era: 'Precolombino', date: '8000 a.C. – 1502', icon: '🏛️' },
            { era: 'Colonia', date: '1502 – 1821', icon: '⛵' },
            { era: 'Independencia', date: '1821 – Presente', icon: '🌿' },
          ].map((period) => (
            <div
              key={period.era}
              className="px-4 py-3 rounded-xl border border-white/8 bg-atlas-card"
            >
              <div className="text-lg mb-1" aria-hidden="true">{period.icon}</div>
              <p className="font-body text-atlas-soft text-sm font-medium">{period.era}</p>
              <p className="font-body text-atlas-muted text-xs">{period.date}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-atlas-muted text-sm hover:text-atlas-soft transition-colors duration-200 focus:outline-none focus:underline"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver al Atlas
        </Link>
      </div>
    </main>
  );
}
