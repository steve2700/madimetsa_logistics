import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/breadcrumbs'

const BASE_URL = 'https://www.madimetsalogistics.co.za'
const PAGE_URL = `${BASE_URL}/warehousing`

export const metadata: Metadata = {
  title: 'Warehousing & Distribution South Africa | Madimetsa Logistics',
  description:
    'Secure storage and efficient distribution across South Africa. Receiving, storage, pick-and-pack and onward distribution, integrated with our dispatch network. Call 072 308 9983.',
  keywords: [
    'warehousing South Africa',
    'warehousing Gauteng',
    'distribution services South Africa',
    'pick and pack fulfilment',
    'storage facility Gauteng',
    'stock management logistics',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Warehousing & Distribution South Africa | Madimetsa Logistics',
    description: 'Secure storage and efficient distribution, integrated with our nationwide dispatch network. Call 072 308 9983.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Warehousing & Distribution',
  description: 'Secure storage, pick-and-pack and onward distribution, integrated with nationwide dispatch across South Africa.',
  url: PAGE_URL,
  provider: { '@type': 'LocalBusiness', '@id': `${BASE_URL}/#business`, name: 'Madimetsa Logistics', telephone: '+27723089983' },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  serviceType: 'Warehousing and Distribution',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Warehousing & Distribution', item: PAGE_URL },
  ],
}

const included = [
  { title: 'Secure Storage', body: 'Monitored storage facilities for stock of any volume, held safely until it is needed.' },
  { title: 'Receiving & Check-In', body: 'Incoming stock logged and checked against orders as it arrives, so your records stay accurate.' },
  { title: 'Pick-and-Pack', body: 'Orders picked, packed and prepared for dispatch as soon as they come in, not batched and delayed.' },
  { title: 'Stock Handling', body: 'Careful handling and storage practices that keep your goods in the condition they arrived in.' },
  { title: 'Onward Distribution', body: 'Stock moves straight from storage into our dispatch network, no third-party handoffs.' },
  { title: 'Flexible Terms', body: 'Short-term or ongoing storage arrangements, sized to what your business actually needs.' },
]

const reasons = [
  { heading: 'Secure, Monitored Facilities', body: 'Your stock is held in monitored storage, safe until it needs to move.' },
  { heading: 'One Connected Service', body: 'Storage and distribution run as one process, not separate handoffs between providers.' },
  { heading: 'Flexible Arrangements', body: 'Storage terms that flex with your business, whether it is a short-term need or an ongoing arrangement.' },
  { heading: 'Dependable Handling', body: 'Stock handled carefully at every stage, from check-in through to dispatch.' },
]

const process = [
  { step: '01', title: 'Stock Arrives', body: 'Incoming goods are received, checked and logged into secure storage.' },
  { step: '02', title: 'Stored Securely', body: 'Your stock is held in monitored storage for as long as you need.' },
  { step: '03', title: 'Orders Picked & Packed', body: 'As orders come in, we pick, pack and prepare them for dispatch.' },
  { step: '04', title: 'Distributed Nationwide', body: 'Orders move directly into our dispatch network for delivery.' },
]

const relatedServices = [
  { href: '/freight-transport', label: 'Freight Transport' },
  { href: '/fleet-management', label: 'Fleet Management' },
  { href: '/supply-chain-solutions', label: 'Supply Chain Solutions' },
  { href: '/contract-logistics', label: 'Contract Logistics' },
]

export default function WarehousingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Warehousing & Distribution' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/warehouse-distribution.webp"
            alt="Warehousing and distribution storage facility used by Madimetsa Logistics"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Storage & Fulfilment
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Warehousing & Distribution
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Secure storage and efficient distribution, so your stock is exactly where
            it needs to be when an order comes in. Receiving, storage, pick-and-pack
            and onward distribution, handled as one connected service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0723089983"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 072 308 9983
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#e8a33d]/50 text-[#e8a33d] font-semibold text-base hover:bg-[#e8a33d] hover:text-[#0a0a0a] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="included-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">What&apos;s Included</p>
          <h2 id="included-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight max-w-2xl">
            Storage and Fulfilment, Handled as One
          </h2>
          <div className="w-10 h-0.5 bg-[#e8a33d] mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/8">
            {included.map((item) => (
              <div key={item.title} className="bg-white p-6 flex flex-col gap-2">
                <p className="font-bold text-sm text-[#1a1a1a] leading-snug">{item.title}</p>
                <p className="text-[13px] text-[#1a1a1a]/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Why Choose Us</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-xl leading-tight">
            Storage You Can Trust With Your Stock
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

      {/* ── How it works ── */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">How It Works</p>
          <h2 id="process-heading" className="text-3xl md:text-4xl font-black text-white mb-12 max-w-xl leading-tight">
            From Storage to Delivery
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <span className="text-[#e8a33d]/30 font-black text-3xl leading-none block mb-4">{p.step}</span>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="py-14 bg-white border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-xl font-bold text-[#1a1a1a] mb-6">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-[#f5f4f0] border border-[#1a1a1a]/8 hover:border-[#e8a33d]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#e8a33d] transition-colors">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Contact Madimetsa Logistics">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Need Somewhere to Store and Distribute Your Stock?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Contact us for a free quote. Secure storage integrated with our
                nationwide dispatch network.
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
