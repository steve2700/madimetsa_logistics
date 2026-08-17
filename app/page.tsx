import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Madimetsa Logistics | Freight Transport, Warehousing & Fleet Management South Africa',
  description:
    "South Africa's trusted logistics partner. Freight transport, warehousing, fleet management and cross-border logistics, dispatched nationwide from our Gauteng hubs. Call 072 308 9983.",
  keywords: [
    'logistics company South Africa',
    'nationwide freight transport',
    'freight transport Johannesburg',
    'warehousing Pretoria',
    'fleet management South Africa',
    'cross-border logistics South Africa',
    'freight forwarding South Africa',
    'supply chain solutions Johannesburg',
    'express delivery nationwide',
    'contract logistics Gauteng',
  ],
  alternates: { canonical: 'https://www.madimetsalogistics.co.za' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.madimetsalogistics.co.za',
    siteName: 'Madimetsa Logistics',
    title: 'Madimetsa Logistics | Freight, Warehousing & Fleet Management South Africa',
    description: "South Africa's trusted logistics partner. Freight transport, warehousing, fleet management and cross-border logistics, dispatched nationwide. Call 072 308 9983.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Madimetsa Logistics South Africa', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madimetsa Logistics | Freight, Warehousing & Fleet Management South Africa',
    description: 'Freight transport, warehousing and fleet management, dispatched nationwide from our Gauteng hubs. Call 072 308 9983.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
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

const areas = [
  { name: 'Johannesburg', slug: 'johannesburg' },
  { name: 'Pretoria', slug: 'pretoria' },
  { name: 'Sandton', slug: 'sandton' },
  { name: 'Centurion', slug: 'centurion' },
  { name: 'Midrand', slug: 'midrand' },
  { name: 'Randburg', slug: 'randburg' },
  { name: 'Roodepoort', slug: 'roodepoort' },
  { name: 'Kempton Park', slug: 'kempton-park' },
  { name: 'Boksburg', slug: 'boksburg' },
  { name: 'Benoni', slug: 'benoni' },
  { name: 'Germiston', slug: 'germiston' },
  { name: 'Alberton', slug: 'alberton' },
  { name: 'Edenvale', slug: 'edenvale' },
  { name: 'Krugersdorp', slug: 'krugersdorp' },
  { name: 'Springs', slug: 'springs' },
  { name: 'Soweto', slug: 'soweto' },
  { name: 'Fourways', slug: 'fourways' },
  { name: 'Vereeniging', slug: 'vereeniging' },
]

const trustPillars = [
  {
    heading: 'Reliable Fleet',
    body: 'Maintained. Tracked. Ready.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 3L5 8.5V18C5 25.18 10.74 31.9 18 33C25.26 31.9 31 25.18 31 18V8.5L18 3Z" stroke="#e8a33d" strokeWidth="1.8" fill="none"/>
        <path d="M12 18L16 22L24 14" stroke="#e8a33d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    heading: 'Fast Turnaround',
    body: 'We get your freight moving.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="18" cy="18" r="5" stroke="#e8a33d" strokeWidth="1.8" fill="none"/>
        <path d="M15 4.5h6v3l2 1 2.6-1.5 4.24 4.24-1.5 2.6 1 2h3v6h-3l-1 2 1.5 2.6-4.24 4.24-2.6-1.5-2 1v3h-6v-3l-2-1-2.6 1.5L4.16 21.34l1.5-2.6-1-2h-3v-6h3l1-2-1.5-2.6L8.4 5.9l2.6 1.5 2-1V4.5Z" stroke="#e8a33d" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    heading: 'Nationwide Coverage',
    body: 'Nationwide & cross-border routes',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 4L9 20H18L15 32L27 16H18L21 4Z" stroke="#e8a33d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    heading: 'Safe Handling',
    body: 'Careful. Secure. On time.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23 5C20.24 5 18 7.24 18 10C18 10.9 18.24 11.74 18.66 12.46L5 26.12L9.88 31L23.54 17.34C24.26 17.76 25.1 18 26 18C28.76 18 31 15.76 31 13C31 12.1 30.76 11.26 30.34 10.54L26.88 14L22 13.12L21.12 8.24L24.58 4.78C24 4.6 23.5 5 23 5Z" stroke="#e8a33d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M8 28L14 22" stroke="#e8a33d" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    heading: 'Trusted Service',
    body: 'Honest. Professional. Dependable.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 14H10L14 10H20L24 14H26" stroke="#e8a33d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M32 14H26L20 20L16 18L12 22L16 26L20 24L26 28H32" stroke="#e8a33d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M4 14V24H10V14H4Z" stroke="#e8a33d" strokeWidth="1.8" fill="none"/>
        <path d="M26 14V28H32V14H26Z" stroke="#e8a33d" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
]

const homepageFAQs = [
  {
    question: 'How quickly can you arrange a pickup or delivery?',
    answer: 'We offer same-day and next-day dispatch nationwide, depending on load size and route, with the fastest turnaround on collections from our Gauteng hubs. For businesses with recurring freight needs, we can set up scheduled collection times so your goods move on a predictable timetable.',
  },
  {
    question: 'What types of freight and cargo do you handle?',
    answer: 'We handle full and part loads across general freight, palletised goods, and contract cargo for businesses of all sizes. Our fleet is maintained and tracked, and we can accommodate both once off moves and ongoing contract logistics.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We operate from hubs across the entire Gauteng province, including Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways and Vereeniging, and dispatch nationwide plus cross-border into the wider SADC region.',
  },
]

const whyReasons = [
  {
    num: '01',
    title: 'Tracked, Maintained Fleet',
    body: 'Every vehicle in our fleet is regularly serviced and tracked, so you always know where your freight is and when it will arrive.',
  },
  {
    num: '02',
    title: 'Same-Day & Next-Day Dispatch',
    body: 'Need something moved fast? We prioritise urgent freight nationwide, with same-day and next-day options available on most routes.',
  },
  {
    num: '03',
    title: 'End-to-End Handling',
    body: 'From collection to warehousing to final delivery, we manage the full chain, so you deal with one partner, not several.',
  },
  {
    num: '04',
    title: 'Written Quote Before Any Work',
    body: 'A clear written quote for the route, load and timeline before we move anything. No hidden fees, no scope creep, no surprises on the invoice.',
  },
  {
    num: '05',
    title: 'Dependable, Professional Service',
    body: 'Honest communication and a team that treats your cargo like it matters, because to your business, it does.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.madimetsalogistics.co.za/#business',
      name: 'Madimetsa Logistics',
      description: 'Freight transport, warehousing, fleet management and cross-border logistics, serving businesses across South Africa.',
      url: 'https://www.madimetsalogistics.co.za',
      telephone: '+27723089983',
      email: 'info@madimetsalogistics.co.za',
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, EFT',
      areaServed: {
        '@type': 'Country',
        name: 'South Africa',
        containsPlace: {
          '@type': 'State',
          name: 'Gauteng',
          containsPlace: areas.map((a) => ({ '@type': 'City', name: a.name })),
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Logistics Services',
        itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.label } })),
      },
      image: 'https://www.madimetsalogistics.co.za/og-image.jpg',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.madimetsalogistics.co.za/#website',
      url: 'https://www.madimetsalogistics.co.za',
      name: 'Madimetsa Logistics',
      publisher: { '@id': 'https://www.madimetsalogistics.co.za/#business' },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <FAQSchema faqs={homepageFAQs} />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-[#0a0a0a] min-h-[88vh] flex flex-col"
        aria-label="Madimetsa Logistics South Africa"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-madimetsa-logistics-truck.png"
            alt="Madimetsa Logistics truck on route near Kempton Park industrial hub, Gauteng"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
            <div className="max-w-2xl">
              <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-6">
                South Africa&apos;s Trusted Logistics Partner
              </p>
              <h1 className="font-black text-white leading-[1.0] mb-3" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5rem)' }}>
                Freight Moved.<br />On Time.
              </h1>
              <p className="font-black text-[#e8a33d] leading-[1.0] mb-8" style={{ fontSize: 'clamp(2.1rem, 5.5vw, 4.2rem)' }}>
                Every Load.<br />Every Route.
              </p>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Freight transport, warehousing and fleet management you can rely on,
                dispatched nationwide from our Gauteng hubs with cross-border routes
                into the wider SADC region.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0723089983"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                  aria-label="Call Madimetsa Logistics on 072 308 9983"
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
          </div>
        </div>

        {/* Trust pillars */}
        <div className="relative z-10 border-t border-[#e8a33d]/15 bg-black/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
              {trustPillars.map((pillar) => (
                <div key={pillar.heading} className="flex flex-col items-center text-center gap-2.5">
                  <div>{pillar.icon}</div>
                  <dt className="text-white font-bold text-[11px] uppercase tracking-widest leading-tight">{pillar.heading}</dt>
                  <dd className="text-white/45 text-[11px] leading-snug">{pillar.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES — tile grid + image
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-[#e8a33d] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">What We Do</p>
              <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
                Every Logistics Service,<br />Under One Roof
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]/45 hover:text-[#e8a33d] transition-colors shrink-0"
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Two-column: grid left, image right */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">

            {/* Service tile grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-px bg-[#1a1a1a]/8">
              {services.map((service, i) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white hover:bg-[#0a0a0a] transition-colors duration-300 p-5 md:p-6 flex flex-col gap-3"
                >
                  <span className="text-[#e8a33d]/25 font-black text-xl leading-none group-hover:text-[#e8a33d]/50 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-[#1a1a1a] group-hover:text-white transition-colors leading-snug mb-1">
                      {service.label}
                    </p>
                    <p className="text-[11px] text-[#1a1a1a]/40 group-hover:text-white/40 transition-colors leading-snug">
                      {service.desc}
                    </p>
                  </div>
                  <svg
                    width="12" height="12" viewBox="0 0 14 14" fill="none"
                    className="mt-auto text-[#e8a33d] opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>

            {/* Right: image + callout */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src="/images/hero-madimetsa-logistics-truck.png"
                  alt="Madimetsa Logistics truck ready for dispatch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8a33d]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e8a33d]" />
                {/* Overlay label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent px-5 py-6">
                  <p className="text-white font-black text-lg leading-tight">Nationwide Fleet.<br />We Deliver Anywhere.</p>
                  <p className="text-white/55 text-xs mt-1">Direct collection, no third-party handoffs</p>
                </div>
              </div>

              {/* Urgent freight callout card */}
              <div className="bg-[#b91c1c] p-6">
                <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Urgent Freight?</p>
                <p className="text-white font-black text-xl leading-snug mb-4">Need it moved today?<br />Call for same-day dispatch.</p>
                <a
                  href="tel:0723089983"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#b91c1c] font-black text-base hover:bg-[#f5f4f0] transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  072 308 9983
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE US — dark, numbered reasons + image
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a]" aria-labelledby="why-us-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left: image — full height */}
            <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
              <Image
                src="/images/hero-madimetsa-logistics-truck.png"
                alt="Madimetsa Logistics fleet on the road"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/60" />
              {/* Stats overlay bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '18', label: 'Gauteng Hubs' },
                    { value: '24/7', label: 'Dispatch Support' },
                    { value: 'GPS', label: 'Fleet Tracking' },
                    { value: '100%', label: 'Insured Loads' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0a0a0a]/70 backdrop-blur-sm px-4 py-3 border-l-2 border-[#e8a33d]">
                      <p className="text-[#e8a33d] font-black text-2xl leading-none">{s.value}</p>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: reasons */}
            <div className="py-16 md:py-20 px-8 md:px-12 lg:px-14">
              <p className="text-[#e8a33d] text-[11px] font-bold tracking-[0.35em] uppercase mb-4">Why Choose Us</p>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Why Businesses Across<br />South Africa Trust Us
              </h2>
              <div className="w-10 h-[3px] bg-[#e8a33d] mb-10" />

              <div className="divide-y divide-white/[0.07]">
                {whyReasons.map((item) => (
                  <div key={item.num} className="py-6 flex gap-5 group">
                    <span className="text-[#e8a33d]/25 font-black text-sm leading-none shrink-0 mt-0.5 group-hover:text-[#e8a33d]/60 transition-colors w-6">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-[#e8a33d] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/15 text-white text-sm font-semibold hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#e8a33d] text-[#0a0a0a] text-sm font-bold hover:bg-yellow-400 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          AREAS — region columns
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f4f0]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-[#e8a33d] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Where We Work</p>
              <h2 id="areas-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
                Our Gauteng Hubs,<br />Nationwide Reach
              </h2>
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]/45 hover:text-[#e8a33d] transition-colors shrink-0"
            >
              View all areas
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Region columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]/8 mb-10">
            {[
              {
                region: 'Johannesburg & CBD',
                areas: ['Johannesburg', 'Soweto', 'Randburg', 'Roodepoort', 'Krugersdorp', 'Fourways'],
                slugs: ['johannesburg', 'soweto', 'randburg', 'roodepoort', 'krugersdorp', 'fourways'],
              },
              {
                region: 'Pretoria & North',
                areas: ['Pretoria', 'Centurion', 'Midrand', 'Sandton'],
                slugs: ['pretoria', 'centurion', 'midrand', 'sandton'],
              },
              {
                region: 'East Rand',
                areas: ['Kempton Park', 'Boksburg', 'Benoni', 'Germiston', 'Alberton', 'Edenvale', 'Springs'],
                slugs: ['kempton-park', 'boksburg', 'benoni', 'germiston', 'alberton', 'edenvale', 'springs'],
              },
              {
                region: 'South Gauteng',
                areas: ['Vereeniging'],
                slugs: ['vereeniging'],
              },
            ].map((group) => (
              <div key={group.region} className="bg-white p-6 md:p-7">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#e8a33d] mb-5 pb-3 border-b border-[#1a1a1a]/8">
                  {group.region}
                </p>
                <ul className="space-y-2.5">
                  {group.areas.map((area, i) => (
                    <li key={area}>
                      <Link
                        href={`/logistics-${group.slugs[i]}`}
                        className="flex items-center justify-between text-sm font-medium text-[#1a1a1a]/65 hover:text-[#e8a33d] transition-colors group/item"
                      >
                        {area}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#e8a33d]"
                          aria-hidden="true"
                        >
                          <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[#1a1a1a]/45 text-sm max-w-2xl leading-relaxed">
            Our fleet dispatches nationwide from hubs across Gauteng, with direct
            collection and delivery and no third-party handoffs. From Sandton
            corporate parks to Vereeniging industrial zones, and every province
            beyond.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          URGENT FREIGHT CTA — full-width red impact
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#b91c1c] text-white overflow-hidden" aria-label="Urgent freight dispatch callout">
        {/* Diagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '8px 8px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-white/55 text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Urgent Freight</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Need It Moved?<br />We Dispatch Fast.
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Same-day and next-day dispatch nationwide. Tracked fleet, direct
                routes, no third-party handoffs.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <a
                href="tel:0723089983"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#b91c1c] font-black text-2xl hover:bg-[#f5f4f0] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#b91c1c]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                072 308 9983
              </a>
              <Link
                href="/express-delivery"
                className="text-white/50 text-xs hover:text-white transition-colors underline underline-offset-4"
              >
                Learn about our express delivery service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COST TEASER + STATS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="cost-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: image */}
            <div className="relative aspect-[4/3] overflow-hidden group order-2 md:order-1">
              <Image
                src="/images/hero-madimetsa-logistics-truck.png"
                alt="Madimetsa Logistics freight pricing and route planning"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8a33d]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e8a33d]" />
            </div>

            {/* Right: copy + stats grid */}
            <div className="order-1 md:order-2">
              <p className="text-[#e8a33d] text-[11px] font-bold tracking-[0.35em] uppercase mb-4">Pricing</p>
              <h2 id="cost-heading" className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-5 leading-tight">
                What Does Nationwide<br />Freight Cost?
              </h2>
              <div className="w-10 h-0.5 bg-[#e8a33d] mb-6" />
              <p className="text-base leading-relaxed text-[#1a1a1a]/65 mb-4">
                Costs vary depending on load size, distance, route and turnaround time.
                A short local delivery is a fraction of the cost of a full load
                cross-border haul or an ongoing contract logistics arrangement.
              </p>
              <p className="text-base leading-relaxed text-[#1a1a1a]/65 mb-8">
                We provide honest written quotes before any freight moves. A clear
                assessment, a clear number, then you decide, with no surprise charges
                on the invoice.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-[#e8a33d] hover:text-[#1a1a1a] transition-colors"
              >
                Request a quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ — accordion + sticky left
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f4f0]" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#e8a33d] text-[11px] font-bold tracking-[0.35em] uppercase mb-4">FAQ</p>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight mb-5">
                Common Questions,<br />Straight Answers
              </h2>
              <div className="w-10 h-0.5 bg-[#e8a33d] mb-6" />
              <p className="text-[#1a1a1a]/50 text-sm leading-relaxed mb-8 max-w-xs">
                Everything you need to know about freight, delivery timelines and
                nationwide coverage, answered by our team.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white text-sm font-bold hover:bg-[#e8a33d] hover:text-[#0a0a0a] transition-colors"
              >
                View all FAQs
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Right: accordion */}
            <div className="border-t border-[#1a1a1a]/10">
              {homepageFAQs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#1a1a1a]/10">
                  <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none select-none">
                    <h3 className="text-base font-bold text-[#1a1a1a] leading-snug group-open:text-[#e8a33d] transition-colors pr-2">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-[#1a1a1a]/20 group-open:border-[#e8a33d] group-open:bg-[#e8a33d] transition-colors">
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-open:hidden" aria-hidden="true">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="hidden group-open:block text-white" aria-hidden="true">
                        <path d="M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-5 pr-9">
                    <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a]" aria-label="Final call to action">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/[0.07]">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Ready to Get Your Freight Moving?
              </h2>
              <p className="text-white/35 text-sm">
                Once off or ongoing, reliable dispatch nationwide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0723089983"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                072 308 9983
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/15 text-white font-semibold text-base hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Quick nav */}
          <nav aria-label="Quick links" className="flex flex-wrap gap-x-6 gap-y-2 pt-8">
            {[
              { href: '/services', label: 'All Services' },
              { href: '/areas', label: 'Service Areas' },
              { href: '/express-delivery', label: 'Express Delivery' },
              { href: '/cross-border-logistics', label: 'Cross-Border Logistics' },
              { href: '/contract-logistics', label: 'Contract Logistics' },
              { href: '/faq', label: 'FAQ' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-white/25 hover:text-[#e8a33d] text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
