import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Logistics Services | Freight, Warehousing, Fleet & More | Madimetsa Logistics',
  description:
    'Full range of logistics services across South Africa. Freight transport, warehousing, fleet management, supply chain solutions, cross-border logistics & more. Call 072 308 9983.',
  keywords: [
    'logistics services South Africa',
    'freight transport Gauteng',
    'warehousing Johannesburg',
    'fleet management South Africa',
    'supply chain solutions Gauteng',
    'cross-border logistics South Africa',
    'express delivery South Africa',
    'contract logistics Gauteng',
    'freight forwarding South Africa',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/services',
  },
  openGraph: {
    title: 'Logistics Services | Madimetsa Logistics',
    description:
      'Freight transport, warehousing, fleet management and cross-border logistics, dispatched nationwide from our Gauteng hubs. Call 072 308 9983.',
    url: 'https://www.madimetsalogistics.co.za/services',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Madimetsa Logistics services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics Services | Madimetsa Logistics',
    description: 'Freight transport, warehousing, fleet management and cross-border logistics, dispatched nationwide. Call 072 308 9983.',
    images: ['/og-image.jpg'],
  },
}

// ── Structured Data ────────────────────────────────────────────────────────────

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Logistics Services — Madimetsa Logistics',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Freight Transport',           url: 'https://www.madimetsalogistics.co.za/freight-transport' },
    { '@type': 'ListItem', position: 2, name: 'Warehousing & Distribution',  url: 'https://www.madimetsalogistics.co.za/warehousing' },
    { '@type': 'ListItem', position: 3, name: 'Fleet Management',           url: 'https://www.madimetsalogistics.co.za/fleet-management' },
    { '@type': 'ListItem', position: 4, name: 'Supply Chain Solutions',     url: 'https://www.madimetsalogistics.co.za/supply-chain-solutions' },
    { '@type': 'ListItem', position: 5, name: 'Cross-Border Logistics',     url: 'https://www.madimetsalogistics.co.za/cross-border-logistics' },
    { '@type': 'ListItem', position: 6, name: 'Express Delivery',           url: 'https://www.madimetsalogistics.co.za/express-delivery' },
    { '@type': 'ListItem', position: 7, name: 'Contract Logistics',         url: 'https://www.madimetsalogistics.co.za/contract-logistics' },
    { '@type': 'ListItem', position: 8, name: 'Freight Forwarding',         url: 'https://www.madimetsalogistics.co.za/freight-forwarding' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.madimetsalogistics.co.za' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.madimetsalogistics.co.za/services' },
  ],
}

// Per-service Service schema node
const serviceNodes = [
  { name: 'Freight Transport',          url: '/freight-transport' },
  { name: 'Warehousing & Distribution', url: '/warehousing' },
  { name: 'Fleet Management',           url: '/fleet-management' },
  { name: 'Supply Chain Solutions',     url: '/supply-chain-solutions' },
  { name: 'Cross-Border Logistics',     url: '/cross-border-logistics' },
  { name: 'Express Delivery',           url: '/express-delivery' },
  { name: 'Contract Logistics',         url: '/contract-logistics' },
  { name: 'Freight Forwarding',         url: '/freight-forwarding' },
].map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  url: `https://www.madimetsalogistics.co.za${s.url}`,
  provider: { '@id': 'https://www.madimetsalogistics.co.za/#business' },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  serviceType: 'Freight and Logistics',
}))

// ── Page data ──────────────────────────────────────────────────────────────────

const services = [
  {
    href: '/freight-transport',
    title: 'Freight Transport',
    shortTitle: 'Freight',
    image: '/images/hero-truck.webp',
    alt: 'Madimetsa Logistics truck loaded for a freight transport route',
    badge: 'Most Requested',
    description:
      'Full and part-load haulage across South Africa, handled by a tracked, maintained fleet. Whether it is a single pallet or a full trailer, we move general freight, palletised goods and contract cargo on routes dispatched daily from our Gauteng hubs.',
    points: [
      'Full and part loads for businesses of all sizes',
      'GPS-tracked fleet with real-time visibility',
      'Same-day and next-day dispatch on most routes',
      'Written quote before any freight moves',
    ],
  },
  {
    href: '/warehousing',
    title: 'Warehousing & Distribution',
    shortTitle: 'Warehousing',
    image: '/images/warehouse-distribution.webp',
    alt: 'Warehousing and distribution storage facility used by Madimetsa Logistics',
    badge: null,
    description:
      'Secure storage and efficient distribution, so your stock is exactly where it needs to be when an order comes in. We handle receiving, storage, pick-and-pack, and onward distribution as one connected service, not separate handoffs.',
    points: [
      'Secure, monitored storage facilities',
      'Pick-and-pack fulfilment for outgoing orders',
      'Stock handling integrated with our dispatch network',
      'Flexible short-term or ongoing storage arrangements',
    ],
  },
  {
    href: '/fleet-management',
    title: 'Fleet Management',
    shortTitle: 'Fleet',
    image: '/images/fleet-lineup.webp',
    alt: 'Madimetsa Logistics fleet management and vehicle tracking',
    badge: 'Popular for Business',
    description:
      'A tracked, regularly maintained fleet is the backbone of dependable dispatch. We manage vehicle scheduling, servicing and tracking so freight moves on time, every time, without the guesswork of relying on ad hoc transport.',
    points: [
      'Regular vehicle servicing and maintenance schedules',
      'Live GPS tracking across the entire fleet',
      'Route planning for efficient, on-time delivery',
      'Fleet sized to fit loads of any size',
    ],
  },
  {
    href: '/supply-chain-solutions',
    title: 'Supply Chain Solutions',
    shortTitle: 'Supply Chain',
    image: '/images/warehouse-distribution.webp',
    alt: 'End-to-end supply chain solutions managed by Madimetsa Logistics',
    badge: null,
    description:
      'From collection to warehousing to final delivery, we manage the full chain as one dependable partner. Businesses with ongoing logistics needs get a single point of contact instead of juggling multiple service providers.',
    points: [
      'End-to-end management from collection to delivery',
      'Single point of contact across the full chain',
      'Scalable for growing or seasonal business needs',
      'Regular reporting on shipments and stock movement',
    ],
  },
  {
    href: '/cross-border-logistics',
    title: 'Cross-Border Logistics',
    shortTitle: 'Cross-Border',
    image: '/images/area-crossborder.webp',
    alt: 'Cross-border freight logistics into the wider SADC region',
    badge: null,
    description:
      'We offer cross-border logistics into the wider SADC region, handling the route, timeline and requirements so your freight clears borders without unnecessary delay. Contact us with your destination and cargo details for a straightforward plan.',
    points: [
      'Routes into the wider SADC region',
      'Guidance on required documentation per destination',
      'Coordinated timelines for cross-border cargo',
      'Same tracked fleet and communication standards as local routes',
    ],
  },
  {
    href: '/express-delivery',
    title: 'Express Delivery',
    shortTitle: 'Express',
    image: '/images/route-planning.webp',
    alt: 'Express same-day delivery dispatch from Madimetsa Logistics',
    badge: '2-4 Hour Response',
    description:
      'When freight needs to move fast, we prioritise it. Same-day and next-day dispatch nationwide, with the fastest turnaround on collections from our Gauteng hubs, for the moments when waiting is not an option.',
    points: [
      'Same-day dispatch available on most routes',
      'Priority handling for urgent freight',
      'Fastest turnaround from our Gauteng hubs',
      'Straightforward quote for the fastest available option',
    ],
  },
  {
    href: '/contract-logistics',
    title: 'Contract Logistics',
    shortTitle: 'Contract',
    image: '/images/fleet-lineup.webp',
    alt: 'Dedicated contract logistics fleet arrangement for ongoing business freight',
    badge: 'Workshop Service',
    description:
      'For businesses with recurring freight needs, a contract arrangement removes the guesswork entirely. We set up scheduled collection times and a dedicated fleet allocation, so your goods move on a predictable timetable every time.',
    points: [
      'Scheduled, recurring collection times',
      'Dedicated fleet allocation for ongoing contracts',
      'Predictable, transparent contract pricing',
      'Single dependable partner for all contracted freight',
    ],
  },
  {
    href: '/freight-forwarding',
    title: 'Freight Forwarding',
    shortTitle: 'Forwarding',
    image: '/images/area-crossborder.webp',
    alt: 'Import and export freight forwarding handled by Madimetsa Logistics',
    badge: null,
    description:
      'Import and export freight handled with the same reliability as our domestic routes. We coordinate the movement of goods across the full journey, keeping you informed at every stage rather than leaving you to chase updates.',
    points: [
      'Import and export freight coordination',
      'Clear communication at every stage of the journey',
      'Coordinated handoffs to minimise delays',
      'Suited to once-off shipments and ongoing trade',
    ],
  },
]

const faqs = [
  {
    q: 'How much does freight transport cost?',
    a: 'Cost depends on load size, distance, route and turnaround time. We give a clear written quote before any freight moves, so you know the number before you decide.',
  },
  {
    q: 'How quickly can you arrange a pickup?',
    a: 'We offer same-day and next-day dispatch nationwide, depending on load size and route, with the fastest turnaround on collections from our Gauteng hubs.',
  },
  {
    q: 'Do you handle cross-border freight?',
    a: 'Yes. We offer cross-border logistics into the wider SADC region. Get in touch with your destination and cargo details and we will talk you through the route and requirements.',
  },
  {
    q: 'Can you handle ongoing, recurring freight needs?',
    a: 'Yes. Our contract logistics service sets up scheduled collection times and a dedicated fleet allocation, so your goods move on a predictable timetable.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── Structured data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {serviceNodes.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-truck.webp"
            alt="Madimetsa Logistics truck ready for dispatch across South Africa"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            Every Logistics Service, Under One Roof
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Freight transport, warehousing, fleet management and cross-border logistics,
            dispatched nationwide from our Gauteng hubs. One dependable partner for the
            full chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
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
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick-nav chips ── */}
      <nav className="bg-white border-b border-[#1a1a1a]/8 overflow-x-auto" aria-label="Jump to service section">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-1 py-3 min-w-max">
            {services.map((s) => (
              <li key={s.href}>
                <a
                  href={`#${s.href.replace('/', '')}`}
                  className="inline-block px-3.5 py-1.5 text-[12px] font-medium text-[#1a1a1a]/70 hover:text-[#e8a33d] hover:bg-[#f5f4f0] transition-colors whitespace-nowrap border border-transparent hover:border-[#e8a33d]/20"
                >
                  {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Service entries ── */}
      <main>
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <section
              key={service.href}
              id={service.href.replace('/', '')}
              className={`py-16 md:py-20 ${isEven ? 'bg-[#f5f4f0]' : 'bg-white'}`}
              aria-labelledby={`service-heading-${index}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8a33d]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e8a33d]" />
                    {service.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 text-[11px] font-bold tracking-wider uppercase bg-[#e8a33d] text-[#0a0a0a]">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h2 id={`service-heading-${index}`} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                      <Link href={service.href} className="hover:text-[#e8a33d] transition-colors">
                        {service.title}
                      </Link>
                    </h2>
                    <div className="w-10 h-0.5 bg-[#e8a33d] mb-5" />
                    <p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-[#1a1a1a]/75">
                          <span className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <circle cx="7" cy="7" r="6.5" stroke="#e8a33d" strokeWidth="1"/>
                              <path d="M4 7l2 2 4-4" stroke="#e8a33d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a1a] text-white font-semibold text-sm hover:bg-[#e8a33d] hover:text-[#0a0a0a] transition-colors"
                      >
                        Learn more
                      </Link>
                      <a
                        href="tel:0723089983"
                        className="inline-flex items-center justify-center px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold text-sm hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
                      >
                        Get a quote
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )
        })}
      </main>

      {/* ── FAQ section ── */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-3">Common Questions</p>
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-white/8 p-6">
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/30 text-sm">
            More questions?{' '}
            <Link href="/faq" className="text-[#e8a33d] hover:underline">
              Visit our full FAQ page
            </Link>{' '}
            or{' '}
            <a href="tel:0723089983" className="text-[#e8a33d] hover:underline">
              call us directly
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Internal linking ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-xl font-bold text-[#1a1a1a] mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/areas',   label: 'Service Areas', sub: 'Where we operate' },
              { href: '/faq',     label: 'FAQ',            sub: 'Common questions answered' },
              { href: '/about',   label: 'About Us',       sub: 'Who we are' },
              { href: '/contact', label: 'Get a Quote',    sub: 'Free assessment' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-white border border-[#1a1a1a]/8 hover:border-[#e8a33d]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#e8a33d] transition-colors mb-1">{item.label}</p>
                <p className="text-xs text-[#1a1a1a]/50">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Contact Madimetsa Logistics">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Freight Moved Nationwide?</h2>
              <p className="text-white/60 text-base leading-relaxed">
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
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-base hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
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
