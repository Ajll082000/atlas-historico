import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import NicaraguaMap from '@/components/NicaraguaMap';
import {
  quickFacts,
  regions,
  geoHighlights,
  governmentStructure,
  governmentTimeline,
  economySectors,
  economyFacts,
  dailyLifeNotes,
  peoples,
  symbolsOfficial,
  foodItems,
  celebrations,
  artCards,
  historicalKeys,
  sources,
} from '@/data/nicaragua';

export const metadata: Metadata = {
  title: 'Nicaragua — Atlas Histórico',
  description:
    'Presentación de la Nicaragua actual: territorio, gobierno, economía, pueblos, símbolos, cultura y claves históricas.',
};

const NAV_LINKS = [
  { href: '#presentacion', label: 'Presentación' },
  { href: '#territorio', label: 'Territorio' },
  { href: '#gobierno', label: 'Gobierno' },
  { href: '#economia', label: 'Economía' },
  { href: '#pueblos', label: 'Pueblos' },
  { href: '#simbolos', label: 'Símbolos' },
  { href: '#arte', label: 'Arte' },
  { href: '#historia', label: 'Historia' },
  { href: '#fuentes', label: 'Fuentes' },
];

function SectionEyebrow({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-body text-atlas-gold text-xs tracking-[0.3em]">{n}</span>
      <div className="h-px flex-1 bg-atlas-gold/20" aria-hidden="true" />
    </div>
  );
}

export default function NicaraguaPage() {
  return (
    <main className="min-h-screen bg-atlas-base text-white">
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-30 bg-atlas-base/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-5 py-3 flex items-center gap-4">
          <Link
            href="/"
            className="flex-shrink-0 inline-flex items-center gap-2 font-body text-atlas-muted text-sm hover:text-atlas-soft transition-colors duration-200 focus:outline-none focus:underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Atlas
          </Link>
          <nav
            className="nic-nav flex-1 flex items-center gap-2 overflow-x-auto"
            aria-label="Navegación de secciones de Nicaragua"
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nic-nav-link">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5">
        {/* ── 1. PRESENTACIÓN ── */}
        <section id="presentacion" className="scroll-mt-20 pt-12 pb-16">
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <div
              className="relative w-16 h-11 rounded-md overflow-hidden shadow-lg flex-shrink-0"
              style={{ boxShadow: '0 0 24px rgba(0,87,184,0.35)' }}
            >
              <Image src="/flags/nicaragua.svg" alt="Bandera de Nicaragua" fill className="object-cover" />
            </div>
            <div>
              <span className="font-body text-atlas-gold text-xs uppercase tracking-[0.3em]">Atlas Histórico</span>
              <h1 className="font-display text-4xl md:text-5xl leading-none">
                <span className="text-white">Nica</span>
                <span className="text-atlas-gold italic">ragua</span>
              </h1>
            </div>
          </div>

          <p className="font-body text-atlas-soft text-base md:text-lg leading-relaxed mb-4 animate-fade-in">
            Nicaragua es el país más extenso de Centroamérica: un territorio de volcanes activos,
            dos grandes lagos de agua dulce y una costa Caribe cuya historia y cultura siguieron,
            durante siglos, un camino distinto al del resto del país.
          </p>
          <p className="font-body text-atlas-muted text-sm md:text-base leading-relaxed mb-10 animate-fade-in">
            Entre el Pacífico hispanohablante y de raíz mesoamericana, el centro montañoso y
            cafetalero, y el Caribe multiétnico y multilingüe, Nicaragua reúne una diversidad
            territorial y cultural que rara vez cabe en una sola narrativa. Esta página presenta
            un primer panorama de esa Nicaragua actual y de las raíces históricas que ayudan a
            comprenderla.
          </p>

          {/* Ficha técnica */}
          <div className="rounded-2xl border border-white/8 bg-atlas-card p-5 md:p-6">
            <p className="font-body text-atlas-muted text-[11px] uppercase tracking-[0.2em] mb-4">
              Ficha del país
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {quickFacts.map((f) => (
                <div key={f.label}>
                  <dt className="font-body text-atlas-muted text-xs uppercase tracking-wider mb-1">
                    {f.label}
                    {f.year && <span className="text-atlas-gold/70 normal-case tracking-normal"> · {f.year}</span>}
                  </dt>
                  <dd className="font-body text-atlas-soft text-sm leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 2. TERRITORIO Y REGIONES ── */}
        <section id="territorio" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="02" title="Territorio y regiones" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Territorio y regiones</h2>

          <div className="rounded-2xl overflow-hidden border border-white/8 h-[360px] md:h-[440px] mb-3 bg-atlas-surface">
            <NicaraguaMap />
          </div>
          <p className="font-body text-atlas-muted text-xs mb-8">
            Mapa esquemático con las principales ciudades, volcanes y lagos. Arrastra para explorar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {regions.map((r) => (
              <div key={r.name} className="rounded-xl border border-white/8 bg-atlas-card p-5">
                <h3 className="font-display text-xl text-atlas-gold mb-2">{r.name}</h3>
                <p className="font-body text-atlas-soft text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/8 bg-atlas-surface p-5">
            <p className="font-body text-atlas-muted text-[11px] uppercase tracking-[0.2em] mb-4">
              Lugares para ubicarse
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {geoHighlights.map((g) => (
                <div key={g.label} className="flex flex-col">
                  <dt className="font-body text-atlas-gold text-xs mb-0.5">{g.label}</dt>
                  <dd className="font-body text-atlas-soft text-sm leading-relaxed">{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 3. GOBIERNO Y SOCIEDAD ── */}
        <section id="gobierno" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="03" title="Gobierno y sociedad" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Gobierno y sociedad</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-body text-atlas-soft text-sm font-medium uppercase tracking-wider mb-4">
                Cómo está diseñado el Estado
              </h3>
              <p className="font-body text-atlas-muted text-sm leading-relaxed mb-4">
                La Constitución de Nicaragua organiza el Estado en cuatro poderes:
              </p>
              <ul className="space-y-2">
                {governmentStructure.map((g) => (
                  <li key={g} className="flex items-start gap-2 font-body text-atlas-soft text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-atlas-gold flex-shrink-0" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-body text-atlas-soft text-sm font-medium uppercase tracking-wider mb-4">
                Cómo ha funcionado en la práctica <span className="text-atlas-muted normal-case">(hechos documentados)</span>
              </h3>
              <div className="nic-timeline">
                {governmentTimeline.map((t) => (
                  <div key={t.year} className="nic-timeline-item">
                    <span className="nic-timeline-dot" aria-hidden="true" />
                    <p className="font-body text-atlas-gold text-xs mb-1">{t.year}</p>
                    <p className="font-body text-atlas-soft text-sm leading-relaxed">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="font-body text-atlas-muted text-xs leading-relaxed mt-8 border-t border-white/5 pt-5">
            Esta sección distingue el diseño legal del Estado (columna izquierda) de hechos
            concretos, con fecha, documentados por organismos como la ONU, la CIDH, Freedom House
            o el Departamento de Estado de EE. UU. (columna derecha). Las fuentes completas están
            al final de la página.
          </p>
        </section>

        {/* ── 4. ECONOMÍA Y VIDA COTIDIANA ── */}
        <section id="economia" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="04" title="Economía y vida cotidiana" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Economía y vida cotidiana</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {economySectors.map((s) => (
              <div key={s.label} className="flex-1 rounded-xl border border-white/8 bg-atlas-card p-4 text-center">
                <p className="font-display text-2xl text-atlas-gold mb-1">{s.value}</p>
                <p className="font-body text-atlas-soft text-sm">{s.label}</p>
                <p className="font-body text-atlas-muted text-[11px] mt-1">dato de {s.year}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-body text-atlas-soft text-sm font-medium uppercase tracking-wider mb-4">
                ¿De qué vive el país?
              </h3>
              <ul className="space-y-3">
                {economyFacts.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-atlas-muted text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-atlas-gold flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-body text-atlas-soft text-sm font-medium uppercase tracking-wider mb-4">
                Vida cotidiana
              </h3>
              <ul className="space-y-3">
                {dailyLifeNotes.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-atlas-muted text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-atlas-gold flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. PUEBLOS, LENGUAS Y CULTURAS ── */}
        <section id="pueblos" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="05" title="Pueblos, lenguas y culturas" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Pueblos, lenguas y culturas</h2>
          <p className="font-body text-atlas-muted text-sm leading-relaxed mb-8 max-w-2xl">
            Nicaragua es un país multiétnico y multilingüe. Desde 1987, la Costa Caribe se
            organiza en dos regiones autónomas (RAAN y RAAS) que reconocen oficialmente las
            lenguas y la autogestión de sus pueblos — comunidades que son parte activa del país
            de hoy, no solo de su pasado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {peoples.map((p) => (
              <div key={p.name} className="rounded-xl border border-white/8 bg-atlas-card p-5">
                <h3 className="font-display text-lg text-atlas-gold mb-2">{p.name}</h3>
                <p className="font-body text-atlas-soft text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. SÍMBOLOS E IDENTIDAD ── */}
        <section id="simbolos" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="06" title="Símbolos e identidad" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">Símbolos e identidad</h2>

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 mb-10">
            <div className="rounded-xl border border-white/8 bg-atlas-card p-5 flex flex-col items-center justify-center text-center gap-3">
              <div className="relative w-28 h-28">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Coat_of_arms_of_Nicaragua.svg"
                  alt="Escudo de Nicaragua"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-body text-atlas-muted text-[11px] leading-relaxed">
                Escudo de Nicaragua. Imagen: Wikimedia Commons.
              </p>
            </div>

            <div className="space-y-5">
              {symbolsOfficial.map((s) => (
                <div key={s.name}>
                  <h3 className="font-display text-lg text-atlas-gold mb-1">{s.name}</h3>
                  <p className="font-body text-atlas-soft text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
              <p className="font-body text-atlas-muted text-xs leading-relaxed pt-2 border-t border-white/5">
                Además de los símbolos oficiales, la marimba se considera popularmente el
                instrumento más representativo de la música nicaragüense, aunque —a diferencia
                de la bandera, el escudo, el himno y los tres símbolos naturales— no tiene ese
                estatus formal establecido por ley.
              </p>
            </div>
          </div>

          <h3 className="font-body text-atlas-soft text-sm font-medium uppercase tracking-wider mb-4">
            Gastronomía
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {foodItems.map((f) => (
              <div key={f.name} className="rounded-lg border border-white/8 bg-atlas-surface p-4">
                <p className="font-body text-atlas-gold text-sm font-medium mb-1">{f.name}</p>
                <p className="font-body text-atlas-muted text-xs leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          <h3 className="font-body text-atlas-soft text-sm font-medium uppercase tracking-wider mb-4">
            Celebraciones y tradiciones
          </h3>
          <div className="space-y-4">
            {celebrations.map((c) => (
              <div key={c.name} className="rounded-lg border border-white/8 bg-atlas-card p-4">
                <div className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
                  <p className="font-body text-atlas-soft text-sm font-medium">{c.name}</p>
                  <p className="font-body text-atlas-gold text-xs">{c.dates}</p>
                </div>
                <p className="font-body text-atlas-muted text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. ARTE, LITERATURA Y PATRIMONIO ── */}
        <section id="arte" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="07" title="Arte, literatura y patrimonio" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">Arte, literatura y patrimonio</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {artCards.map((a) => (
              <div key={a.title} className="rounded-xl border border-white/8 bg-atlas-card p-5">
                <h3 className="font-display text-lg text-atlas-gold mb-2">{a.title}</h3>
                <p className="font-body text-atlas-soft text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. CLAVES HISTÓRICAS ── */}
        <section id="historia" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="08" title="Claves históricas para entender Nicaragua" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
            Claves históricas para entender Nicaragua
          </h2>
          <p className="font-body text-atlas-muted text-sm leading-relaxed mb-8 max-w-2xl">
            Ocho procesos —no toda la historia del país— que ayudan a explicar la Nicaragua de
            hoy: qué ocurrió, por qué importó y qué huella dejó.
          </p>

          <div className="nic-timeline">
            {historicalKeys.map((h) => (
              <div key={h.period} className="nic-timeline-item">
                <span className="nic-timeline-dot" aria-hidden="true" />
                <p className="font-display text-lg text-atlas-gold mb-1">{h.period}</p>
                <p className="font-body text-atlas-soft text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. FUENTES ── */}
        <section id="fuentes" className="scroll-mt-20 py-14 border-t border-white/5">
          <SectionEyebrow n="09" title="Fuentes" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Fuentes</h2>
          <p className="font-body text-atlas-muted text-sm leading-relaxed mb-6 max-w-2xl">
            Esta primera versión se apoya principalmente en Wikipedia (en español e inglés) como
            fuente tertiaria de consulta rápida, contrastada puntualmente con prensa y organismos
            internacionales para los hechos políticos más recientes. Para un trabajo de referencia
            definitivo recomendamos verificar cada dato contra fuentes primarias (INIDE, Banco
            Central de Nicaragua, UNESCO, Asamblea Nacional).
          </p>
          <ul className="space-y-2">
            {sources.map((s) => (
              <li key={s.url} className="font-body text-sm">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-atlas-soft hover:text-atlas-gold transition-colors duration-150 underline decoration-white/20 hover:decoration-atlas-gold underline-offset-4"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Footer ── */}
        <footer className="py-12 border-t border-white/5 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-atlas-muted text-sm hover:text-atlas-soft transition-colors duration-200 focus:outline-none focus:underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al Atlas
          </Link>
        </footer>
      </div>
    </main>
  );
}
