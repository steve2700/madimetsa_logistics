import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'

const CITY = 'Cape Town'
const PROVINCE = 'Western Cape'
const BASE_URL = 'https://www.madimetsalogistics.co.za'
const PAGE_URL = `${BASE_URL}/logistics-capetown`

export const metadata: Metadata = {
  title: `Freight & Logistics in Cape Town | Madimetsa Logistics`,
  description:
    `Freight transport, warehousing and fleet management serving Cape Town and the wider Western Cape region, dispatched nationwide from Madimetsa Logistics. Call 072 308 9983.`,
  keywords: [
    'freight transport Cape Town',
    'logistics company Cape Town',
    'warehousing Cape Town',
    'fleet management Western Cape',
    'freight forwarding Cape Town',
    'express delivery Cape Town',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `Freight & Logistics in Cape Town | Madimetsa Logistics`,
    description: `Freight transport, warehousing and fleet management serving Cape Town, dispatched nationwide. Call 072 308 9983.`,
    url: PAGE_URL,
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const areaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: `Freight and Logistics Services in ${CITY}`,
  description: `Freight transport, warehousing and fleet management serving ${CITY} and the wider ${PROVINCE} region.`,
  url: PAGE_URL,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Madimetsa Logistics',
    telephone: '+27723089983',
    email: 'info@madimetsalogistics.co.za',
    url: BASE_URL,
  },
  areaServed: {
    '@type': 'City',
    name: CITY,
    containedInPlace: {
      '@type': 'State',
      name: PROVINCE,
      containedInPlace: { '@type': 'Country', name: 'South Africa' },
    },
  },
}

const services = [
  { href: '/freight-transport', label: 'Freight Transport', desc: 'Full & part-load haulage' },
  { href: '/warehousing', label: 'Warehousing & Distribution', desc: 'Storage & pick-and-pack' },
  { href: '/fleet-management', label: 'Fleet Management', desc: 'Tracked, maintained fleet' },
  { href: '/supply-chain-solutions', label: 'Supply Chain Solutions', desc: 'End-to-end logistics' },
  { href: '/cross-border-logistics', label: 'Cross-Border Logistics', desc: 'SADC region transport' },
  { href: '/express-delivery', label: 'Express Delivery', desc: 'Same-day & next-day' },
  { href: '/contract-logistics', label: 'Contract Logistics', desc: 'Dedicated fleet contracts' },
  { href: '/freight-forwarding', label: 'Freight Forwarding', desc: 'Import & export handling' },
]

const reasons = [
  {
    heading: 'Tracked, Maintained Fleet',
    body: `Every vehicle running routes to and from ${CITY} is regularly serviced and tracked, so you always know where your freight is.`,
  },
  {
    heading: 'Nationwide Network',
    body: `Our Gauteng hubs connect to ${CITY} and every major centre in South Africa, with cross-border routes into the wider SADC region.`,
  },
  {
    heading: 'Written Quote Before Any Work',
    body: 'A clear written quote for the route, load and timeline before we move anything. No hidden fees, no surprises on the invoice.',
  },
  {
    heading: 'Dependable, Professional Service',
    body: 'Honest communication and a team that treats your cargo like it matters, because to your business, it does.',
  },
]

export default function CapeTownLogisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas', href: '/areas' }, { label: CITY }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/area-crossborder.webp"
            alt={`Madimetsa Logistics truck on route to ${CITY}`}
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Serving {CITY}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Freight & Logistics in {CITY}
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Madimetsa Logistics dispatches nationwide from our Gauteng hubs, with regular
            routes serving {CITY} and the wider {PROVINCE} region. Freight transport,
            warehousing and fleet management, handled by one dependable partner.
          </p>
          <div className="mt-8">
            <a
              href="tel:0723089983"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 072 308 9983
            </a>
          </div>
        </div>
      </section>

      {/* ── Services in this city ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">What We Do</p>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            Logistics Services Available in {CITY}
          </h2>
          <div className="w-10 h-0.5 bg-[#e8a33d] mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white hover:bg-[#0a0a0a] transition-colors duration-300 p-6 flex flex-col gap-2"
              >
                <p className="font-bold text-sm text-[#1a1a1a] group-hover:text-white transition-colors leading-snug">
                  {service.label}
                </p>
                <p className="text-[11px] text-[#1a1a1a]/40 group-hover:text-white/40 transition-colors leading-snug">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Why Choose Us</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-xl leading-tight">
            Why Businesses in {CITY} Choose Madimetsa Logistics
          </h2>
          <dl className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]/8">
            {reasons.map((r) => (
              <div key={r.heading} className="bg-white p-7 md:p-8">
                <div className="w-8 h-[2px] bg-[#e8a33d] mb-5" />
                <dt className="font-bold text-[#1a1a1a] text-base mb-3">{r.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{r.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Contact Madimetsa Logistics">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Ready to Move Freight To or From {CITY}?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Contact us for a free quote. Nationwide dispatch, with the fastest
                turnaround on collections from our Gauteng hubs.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
