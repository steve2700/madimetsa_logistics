import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Where We Operate | Madimetsa Logistics South Africa',
  description:
    'Freight transport, warehousing and fleet management dispatched nationwide from our Gauteng hubs, with routes to Durban, Cape Town, Gqeberha, Bloemfontein and cross-border into the SADC region. Call 072 308 9983.',
  keywords: [
    'logistics company Gauteng',
    'nationwide freight transport South Africa',
    'freight transport Johannesburg',
    'freight transport Pretoria',
    'freight transport Durban',
    'freight transport Cape Town',
    'logistics service areas South Africa',
  ],
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/areas',
  },
  openGraph: {
    title: 'Where We Operate | Madimetsa Logistics South Africa',
    description: 'Nationwide freight dispatch from our Gauteng hubs. Call 072 308 9983.',
    url: 'https://www.madimetsalogistics.co.za/areas',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Madimetsa Logistics service areas' }],
  },
}

const areaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.madimetsalogistics.co.za/#business',
  name: 'Madimetsa Logistics',
  telephone: '+27723089983',
  url: 'https://www.madimetsalogistics.co.za',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
    containsPlace: [
      {
        '@type': 'State',
        name: 'Gauteng',
        containsPlace: [
          'Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'Centurion',
          'Randburg', 'Roodepoort', 'Kempton Park', 'Boksburg', 'Benoni',
          'Germiston', 'Alberton', 'Edenvale', 'Krugersdorp', 'Springs',
          'Soweto', 'Fourways', 'Vereeniging',
        ].map((name) => ({ '@type': 'City', name })),
      },
      { '@type': 'City', name: 'Durban', containedInPlace: { '@type': 'State', name: 'KwaZulu-Natal' } },
      { '@type': 'City', name: 'Cape Town', containedInPlace: { '@type': 'State', name: 'Western Cape' } },
      { '@type': 'City', name: 'Gqeberha', containedInPlace: { '@type': 'State', name: 'Eastern Cape' } },
      { '@type': 'City', name: 'Bloemfontein', containedInPlace: { '@type': 'State', name: 'Free State' } },
    ],
  },
}

/**
 * hasPage: true  -> area has a dedicated route, renders as a Link
 * hasPage: false -> no route built yet, renders as a plain label (no href, no 404 risk)
 * When a new page goes live, just flip this to true and add its slug.
 */

// Gauteng areas grouped by region for UX and semantic SEO
const regions = [
  {
    name: 'Johannesburg & CBD',
    description: 'The economic heart of South Africa. We serve all Johannesburg suburbs, business districts and industrial zones.',
    areas: [
      { slug: 'johannesburg', name: 'Johannesburg', hasPage: true },
      { slug: 'soweto', name: 'Soweto', hasPage: false },
      { slug: 'randburg', name: 'Randburg', hasPage: false },
      { slug: 'roodepoort', name: 'Roodepoort', hasPage: false },
      { slug: 'krugersdorp', name: 'Krugersdorp', hasPage: false },
      { slug: 'fourways', name: 'Fourways', hasPage: false },
    ],
  },
  {
    name: 'Pretoria & North',
    description: 'Full coverage across Pretoria and the northern Gauteng corridor, from Centurion to Midrand.',
    areas: [
      { slug: 'pretoria', name: 'Pretoria', hasPage: true },
      { slug: 'centurion', name: 'Centurion', hasPage: true },
      { slug: 'midrand', name: 'Midrand', hasPage: false },
      { slug: 'sandton', name: 'Sandton', hasPage: true },
    ],
  },
  {
    name: 'East Rand',
    description: 'Serving the industrial and business areas of the East Rand, from Kempton Park through to Springs.',
    areas: [
      { slug: 'kempton-park', name: 'Kempton Park', hasPage: false },
      { slug: 'boksburg', name: 'Boksburg', hasPage: false },
      { slug: 'benoni', name: 'Benoni', hasPage: false },
      { slug: 'germiston', name: 'Germiston', hasPage: false },
      { slug: 'alberton', name: 'Alberton', hasPage: false },
      { slug: 'edenvale', name: 'Edenvale', hasPage: false },
      { slug: 'springs', name: 'Springs', hasPage: false },
    ],
  },
  {
    name: 'South Gauteng',
    description: 'Coverage across the Vaal Triangle and southern Gauteng industrial corridor.',
    areas: [
      { slug: 'vereeniging', name: 'Vereeniging', hasPage: false },
    ],
  },
]

// Beyond Gauteng, our national dispatch network
const nationalReach = [
  {
    slug: 'durban',
    name: 'Durban',
    province: 'KwaZulu-Natal',
    description: 'Regular routes connecting our Gauteng hubs to Durban and the wider KwaZulu-Natal region.',
    hasPage: true,
  },
  {
    slug: 'capetown',
    name: 'Cape Town',
    province: 'Western Cape',
    description: 'Regular routes connecting our Gauteng hubs to Cape Town and the wider Western Cape region.',
    hasPage: true,
  },
  {
    slug: 'gqeberha',
    name: 'Gqeberha',
    province: 'Eastern Cape',
    description: 'Regular routes connecting our Gauteng hubs to Gqeberha (Port Elizabeth) and the wider Eastern Cape region.',
    hasPage: true,
  },
  {
    slug: 'bloemfontein',
    name: 'Bloemfontein',
    province: 'Free State',
    description: 'Regular routes connecting our Gauteng hubs to Bloemfontein and the wider Free State region.',
    hasPage: true,
  },
]

// Flat list for the full directory: Gauteng plus national reach
const allAreas = [
  { slug: 'alberton', name: 'Alberton', hasPage: false },
  { slug: 'benoni', name: 'Benoni', hasPage: false },
  { slug: 'boksburg', name: 'Boksburg', hasPage: false },
  { slug: 'centurion', name: 'Centurion', hasPage: true },
  { slug: 'edenvale', name: 'Edenvale', hasPage: false },
  { slug: 'fourways', name: 'Fourways', hasPage: false },
  { slug: 'germiston', name: 'Germiston', hasPage: false },
  { slug: 'johannesburg', name: 'Johannesburg', hasPage: true },
  { slug: 'kempton-park', name: 'Kempton Park', hasPage: false },
  { slug: 'krugersdorp', name: 'Krugersdorp', hasPage: false },
  { slug: 'midrand', name: 'Midrand', hasPage: false },
  { slug: 'pretoria', name: 'Pretoria', hasPage: true },
  { slug: 'randburg', name: 'Randburg', hasPage: false },
  { slug: 'roodepoort', name: 'Roodepoort', hasPage: false },
  { slug: 'sandton', name: 'Sandton', hasPage: true },
  { slug: 'soweto', name: 'Soweto', hasPage: false },
  { slug: 'springs', name: 'Springs', hasPage: false },
  { slug: 'vereeniging', name: 'Vereeniging', hasPage: false },
  { slug: 'durban', name: 'Durban', hasPage: true },
  { slug: 'capetown', name: 'Cape Town', hasPage: true },
  { slug: 'gqeberha', name: 'Gqeberha', hasPage: true },
  { slug: 'bloemfontein', name: 'Bloemfontein', hasPage: true },
]

const whyPoints = [
  {
    heading: 'Tracked Fleet, Direct Delivery',
    body: 'Our vehicles are GPS tracked and maintained on a regular schedule, so you always know where your freight is.',
  },
  {
    heading: 'Same-Day & Next-Day Dispatch',
    body: 'When freight needs to move fast, we prioritise it. Most Gauteng collections receive same-day or next-day dispatch.',
  },
  {
    heading: 'Nationwide From Gauteng Hubs',
    body: 'From Sandton office parks to Vereeniging industrial zones and every major centre beyond, if you are in South Africa, we can reach you.',
  },
  {
    heading: 'Full & Part Load Capacity',
    body: 'General freight, palletised goods and contract cargo, sized to fit whatever your business needs moved.',
  },
]

const services = [
  { href: '/freight-transport', label: 'Freight Transport' },
  { href: '/warehousing', label: 'Warehousing & Distribution' },
  { href: '/fleet-management', label: 'Fleet Management' },
  { href: '/supply-chain-solutions', label: 'Supply Chain Solutions' },
  { href: '/cross-border-logistics', label: 'Cross-Border Logistics' },
  { href: '/express-delivery', label: 'Express Delivery' },
  { href: '/contract-logistics', label: 'Contract Logistics' },
  { href: '/freight-forwarding', label: 'Freight Forwarding' },
]

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-madimetsa-logistics-truck.png"
            alt="Madimetsa Logistics fleet dispatching nationwide across South Africa"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Where We Work
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Nationwide Dispatch From Our Gauteng Hubs
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Our fleet covers every part of Gauteng province, with regular routes to
            Durban, Cape Town, Gqeberha, Bloemfontein and cross-border into the
            wider SADC region.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0723089983"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#b91c1c] text-white font-bold text-base hover:bg-red-800 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 072 308 9983
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#e8a33d]/50 text-[#e8a33d] font-semibold text-base hover:bg-[#e8a33d] hover:text-[#0a0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose our network — 4 pillars ── */}
      <section className="bg-white border-b border-[#1a1a1a]/8" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">
            Why Choose Our Dispatch Network?
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((p) => (
              <div key={p.heading} className="border-l-2 border-[#e8a33d] pl-4">
                <dt className="font-bold text-[#1a1a1a] text-sm mb-2">{p.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── National reach ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="national-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="national-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            Beyond Gauteng
          </h2>
          <p className="text-[#1a1a1a]/60 text-lg mb-12 max-w-2xl">
            Our Gauteng hubs connect to major centres nationwide, with dedicated
            pages for our busiest routes.
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]/8">
            {nationalReach.map((city) =>
              city.hasPage ? (
                <Link
                  key={city.slug}
                  href={`/logistics-${city.slug}`}
                  className="group bg-[#f5f4f0] hover:bg-[#0a0a0a] transition-colors duration-300 p-7 md:p-8"
                >
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#e8a33d] mb-3">{city.province}</p>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-white transition-colors mb-3">
                    {city.name}
                  </h3>
                  <p className="text-[#1a1a1a]/60 group-hover:text-white/50 text-sm leading-relaxed transition-colors">
                    {city.description}
                  </p>
                </Link>
              ) : (
                <div key={city.slug} className="bg-[#f5f4f0] p-7 md:p-8">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/35 mb-3">{city.province}</p>
                  <h3 className="text-2xl font-bold text-[#1a1a1a]/50 mb-3">{city.name}</h3>
                  <p className="text-[#1a1a1a]/45 text-sm leading-relaxed">{city.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Gauteng regions ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="regions-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="regions-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            Our Gauteng Hubs
          </h2>
          <p className="text-[#1a1a1a]/60 text-lg mb-12 max-w-2xl">
            We group our Gauteng coverage into four regions. Areas with a
            dedicated page link through to more detail.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]/8">
            {regions.map((region) => (
              <div key={region.name} className="bg-white p-7 md:p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{region.name}</h3>
                <div className="w-8 h-0.5 bg-[#e8a33d] mb-4" />
                <p className="text-[#1a1a1a]/65 text-sm leading-relaxed mb-6">
                  {region.description}
                </p>
                <nav aria-label={`Areas in ${region.name}`}>
                  <ul className="flex flex-wrap gap-2">
                    {region.areas.map((area) =>
                      area.hasPage ? (
                        <li key={area.slug}>
                          <Link
                            href={`/logistics-${area.slug}`}
                            className="inline-block px-3 py-1.5 bg-[#f5f4f0] border border-[#1a1a1a]/10 text-[#1a1a1a] text-xs font-medium hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ) : (
                        <li key={area.slug}>
                          <span className="inline-block px-3 py-1.5 bg-[#f5f4f0] border border-[#1a1a1a]/10 text-[#1a1a1a]/45 text-xs font-medium cursor-default">
                            {area.name}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full directory ── */}
      <section className="py-14 md:py-18 bg-white" aria-labelledby="directory-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="directory-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
            Full Coverage Directory
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8">
            Freight and logistics services available in all the following locations.
          </p>
          <nav aria-label="Full list of service areas">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allAreas.map((area) =>
                area.hasPage ? (
                  <li key={area.slug}>
                    <Link
                      href={`/logistics-${area.slug}`}
                      className="group flex items-center justify-between px-4 py-3 border border-[#1a1a1a]/10 bg-[#f5f4f0] hover:border-[#e8a33d] hover:bg-white transition-colors"
                    >
                      <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#e8a33d] transition-colors">
                        {area.name}
                      </span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#e8a33d] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </li>
                ) : (
                  <li key={area.slug}>
                    <span className="flex items-center justify-between px-4 py-3 border border-[#1a1a1a]/10 bg-[#f5f4f0] cursor-default">
                      <span className="text-sm font-medium text-[#1a1a1a]/45">
                        {area.name}
                      </span>
                    </span>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── Services available everywhere ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="services-all-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="services-all-heading" className="text-2xl font-bold text-[#1a1a1a] mb-3">
            Services Available Across Our Network
          </h2>
          <p className="text-[#1a1a1a]/60 text-base mb-8 max-w-2xl">
            Wherever you are in South Africa, all of the following services are
            available to you.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block px-4 py-3 bg-white border border-[#1a1a1a]/10 text-sm font-medium text-[#1a1a1a] hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Contact Madimetsa Logistics">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Need Freight Moved Nationwide?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Once off or ongoing, we cover all of Gauteng and dispatch nationwide.
                Call now for a quote or to schedule a collection.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0723089983"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                072 308 9983
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
