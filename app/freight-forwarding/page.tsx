import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'

const BASE_URL = 'https://www.madimetsalogistics.co.za'
const PAGE_URL = `${BASE_URL}/freight-forwarding`

export const metadata: Metadata = {
  title: 'Freight Forwarding | Madimetsa Logistics South Africa',
  description:
    'Import and export freight forwarding for businesses across South Africa, with nationwide dispatch from our Gauteng hubs and cross-border routes into the wider SADC region. Call 072 308 9983.',
  keywords: [
    'freight forwarding South Africa',
    'import export logistics Gauteng',
    'freight forwarder Johannesburg',
    'cross-border freight forwarding',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Freight Forwarding | Madimetsa Logistics',
    description: 'Import and export freight forwarding, dispatched nationwide. Call 072 308 9983.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Freight Forwarding',
  description: 'Import and export freight forwarding for businesses across South Africa.',
  serviceType: 'Logistics Service',
  url: PAGE_URL,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Madimetsa Logistics',
    telephone: '+27723089983',
    email: 'info@madimetsalogistics.co.za',
    url: BASE_URL,
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
}

const features = [
  {
    heading: 'Import & Export Handling',
    body: 'We manage freight moving into and out of South Africa, coordinating the route, timeline and paperwork on your behalf.',
  },
  {
    heading: 'Cross-Border Routes',
    body: 'Regular routes into the wider SADC region, connected to our Gauteng hubs and nationwide dispatch network.',
  },
  {
    heading: 'Tracked, Maintained Fleet',
    body: 'Every vehicle is regularly serviced and tracked, so you always know where your freight is.',
  },
  {
    heading: 'Written Quote Before Any Work',
    body: 'A clear written quote for the route, load and timeline before we move anything. No hidden fees, no surprises.',
  },
]

const relatedServices = [
  { href: '/cross-border-logistics', label: 'Cross-Border Logistics' },
  { href: '/freight-transport', label: 'Freight Transport' },
  { href: '/supply-chain-solutions', label: 'Supply Chain Solutions' },
  { href: '/warehousing', label: 'Warehousing & Distribution' },
]

export default function FreightForwardingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Freight Forwarding' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/area-crossborder.webp"
            alt="Madimetsa Logistics freight forwarding services"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Import & Export
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Freight Forwarding
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            We coordinate import and export freight for businesses across South Africa,
            dispatched nationwide from our Gauteng hubs with cross-border routes into
            the wider SADC region.
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

      {/* ── Features ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">What You Get</p>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-xl leading-tight">
            How Our Freight Forwarding Works
          </h2>
          <dl className="grid sm:grid-cols-2 gap-px bg-[#1a1a1a]/8">
            {features.map((f) => (
              <div key={f.heading} className="bg-white p-7 md:p-8 border border-[#1a1a1a]/8">
                <div className="w-8 h-[2px] bg-[#e8a33d] mb-5" />
                <dt className="font-bold text-[#1a1a1a] text-base mb-3">{f.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-2xl font-bold text-[#1a1a1a] mb-3">
            Related Services
          </h2>
          <p className="text-[#1a1a1a]/60 text-base mb-8 max-w-2xl">
            Freight forwarding pairs well with these other services.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
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
                Ready to Ship Your Freight?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Contact us for a free quote on your import or export shipment.
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
