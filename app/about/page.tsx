import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'About Us | Madimetsa Logistics South Africa',
  description:
    "South Africa's trusted logistics partner. Tracked fleet, transparent pricing, nationwide dispatch from our Gauteng hubs and cross-border routes into the wider SADC region.",
  keywords: [
    'about Madimetsa Logistics',
    'logistics company South Africa',
    'freight transport company Gauteng',
    'trusted logistics partner South Africa',
    'freight company Johannesburg',
  ],
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/about',
  },
  openGraph: {
    title: 'About Madimetsa Logistics | South Africa\'s Trusted Logistics Partner',
    description: 'Tracked fleet, transparent pricing and nationwide dispatch. Call 072 308 9983.',
    url: 'https://www.madimetsalogistics.co.za/about',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.madimetsalogistics.co.za/about',
  name: 'About Madimetsa Logistics',
  url: 'https://www.madimetsalogistics.co.za/about',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.madimetsalogistics.co.za/#business',
    name: 'Madimetsa Logistics',
    description: 'Freight transport, warehousing, fleet management and cross-border logistics, serving businesses across South Africa.',
    telephone: '+27723089983',
    email: 'info@madimetsalogistics.co.za',
    url: 'https://www.madimetsalogistics.co.za',
    areaServed: { '@type': 'Country', name: 'South Africa' },
  },
}

const stats = [
  { value: '18', label: 'Gauteng Hubs' },
  { value: 'Nationwide', label: 'Dispatch Network' },
  { value: 'GPS', label: 'Fleet Tracking' },
  { value: '100%', label: 'Insured Loads' },
]

const pillars = [
  {
    heading: 'Tracked, Maintained Fleet',
    body: 'Every vehicle in our fleet is regularly serviced and tracked, so you always know where your freight is and when it will arrive.',
  },
  {
    heading: 'Nationwide Dispatch Network',
    body: 'Our Gauteng hubs connect to every major centre in South Africa, with same-day and next-day options on most routes.',
  },
  {
    heading: 'Transparent Pricing',
    body: 'You receive a clear written quote before a single load moves. No hidden fees, no surprise charges, just honest pricing every time.',
  },
  {
    heading: 'Dependable Service Guarantee',
    body: 'If something goes wrong with a delivery we handled, we make it right. No arguments, no passing the blame to a third party.',
  },
  {
    heading: 'Experienced Logistics Team',
    body: 'Our team plans routes, manages fleet maintenance and handles cargo with the care that comes from doing this work every day.',
  },
  {
    heading: 'Owned Fleet, No Subcontracting',
    body: 'Your freight stays in our hands from collection to delivery. No handoffs to third party carriers, no lost accountability.',
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

const network = [
  { name: 'Gauteng Hubs', body: 'Our home base, covering Johannesburg, Pretoria, Sandton, Midrand, Centurion and 13 other Gauteng centres.' },
  { name: 'Durban', body: 'Regular routes connecting our Gauteng hubs to Durban and the wider KwaZulu-Natal region.' },
  { name: 'Cape Town', body: 'Regular routes connecting our Gauteng hubs to Cape Town and the wider Western Cape region.' },
  { name: 'Cross-Border', body: 'Freight forwarding into the wider SADC region for businesses trading beyond South Africa.' },
]

const areas = [
  { slug: 'johannesburg', name: 'Johannesburg' },
  { slug: 'pretoria', name: 'Pretoria' },
  { slug: 'sandton', name: 'Sandton' },
  { slug: 'midrand', name: 'Midrand' },
  { slug: 'centurion', name: 'Centurion' },
  { slug: 'randburg', name: 'Randburg' },
  { slug: 'roodepoort', name: 'Roodepoort' },
  { slug: 'kempton-park', name: 'Kempton Park' },
  { slug: 'boksburg', name: 'Boksburg' },
  { slug: 'benoni', name: 'Benoni' },
  { slug: 'germiston', name: 'Germiston' },
  { slug: 'alberton', name: 'Alberton' },
  { slug: 'edenvale', name: 'Edenvale' },
  { slug: 'krugersdorp', name: 'Krugersdorp' },
  { slug: 'springs', name: 'Springs' },
  { slug: 'soweto', name: 'Soweto' },
  { slug: 'fourways', name: 'Fourways' },
  { slug: 'vereeniging', name: 'Vereeniging' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-madimetsa-logistics-truck.png"
            alt="Madimetsa Logistics fleet on the road across South Africa"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 max-w-3xl">
            South Africa&apos;s Trusted Logistics Partner
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Madimetsa Logistics moves freight for businesses across South Africa,
            dispatched nationwide from our Gauteng hubs with cross-border routes
            into the wider SADC region.
          </p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#111111] border-b border-[#e8a33d]/15" aria-label="Company statistics">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.07]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center md:px-8">
                <dt className="text-2xl md:text-3xl font-black text-[#e8a33d] mb-1">{s.value}</dt>
                <dd className="text-white/45 text-xs font-medium uppercase tracking-wider">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Our story ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Our Story</p>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Built on Trust,<br />Driven by Reliability
              </h2>
              <div className="w-10 h-0.5 bg-[#e8a33d] mb-6" />
              <div className="space-y-4 text-[#1a1a1a]/70 text-base leading-relaxed">
                <p>
                  Madimetsa Logistics was built on a straightforward mission, give South
                  African businesses a logistics partner they can genuinely rely on, not
                  one that keeps them waiting, overcharges them, or loses track of their
                  freight along the way.
                </p>
                <p>
                  Our team plans every route, maintains every vehicle and handles every
                  load with the same standard, whether it is a single pallet moving across
                  Gauteng or a full load crossing into the wider SADC region.
                </p>
                <p>
                  What matters most has not changed, arrive prepared, quote honestly, and
                  deliver it right the first time.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src="/images/hero-madimetsa-logistics-truck.png"
                alt="Madimetsa Logistics truck on route"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e8a33d]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e8a33d]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose us — 6 pillars ── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Why Choose Us</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 max-w-xl leading-tight">
            What Sets Us Apart
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/8">
            {pillars.map((p) => (
              <div key={p.heading} className="bg-white p-7 md:p-8">
                <div className="w-8 h-[2px] bg-[#e8a33d] mb-5" />
                <dt className="font-bold text-[#1a1a1a] text-base mb-3">{p.heading}</dt>
                <dd className="text-[#1a1a1a]/60 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services + national network ── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Services list */}
            <div>
              <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">What We Do</p>
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Our Services
              </h2>
              <div className="w-10 h-0.5 bg-[#e8a33d] mb-7" />
              <p className="text-[#1a1a1a]/65 text-base leading-relaxed mb-7">
                We handle every part of the logistics chain in-house, no subcontracting,
                no outsourcing critical work to third parties.
              </p>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-start gap-3 text-sm text-[#1a1a1a]/75 hover:text-[#e8a33d] transition-colors"
                    >
                      <span className="mt-0.5 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="7.5" stroke="#e8a33d" strokeWidth="1"/>
                          <path d="M5 8l2 2 4-4" stroke="#e8a33d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Network */}
            <div>
              <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Where We Operate</p>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Our Nationwide Network
              </h3>
              <div className="w-10 h-0.5 bg-[#e8a33d] mb-7" />
              <p className="text-[#1a1a1a]/65 text-sm leading-relaxed mb-7">
                We dispatch from our Gauteng hubs to every major centre in South Africa,
                with dedicated routes to Durban and Cape Town.
              </p>
              <div className="space-y-4">
                {network.map((n) => (
                  <div key={n.name} className="px-4 py-4 bg-[#f5f4f0] border border-[#1a1a1a]/8">
                    <p className="text-sm font-bold text-[#1a1a1a] mb-1">{n.name}</p>
                    <p className="text-[#1a1a1a]/55 text-xs leading-relaxed">{n.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="areas-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
            Our Gauteng Hubs
          </h2>
          <p className="text-[#1a1a1a]/55 text-base mb-8 max-w-2xl">
            We operate from hubs across Gauteng province, with nationwide dispatch to
            every major centre in South Africa, including Durban and Cape Town.
          </p>
          <nav aria-label="Service areas">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/logistics-${area.slug}`}
                    className="group flex items-center justify-between px-4 py-3 bg-white border border-[#1a1a1a]/10 hover:border-[#e8a33d] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#e8a33d] transition-colors">
                      {area.name}
                    </span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#e8a33d] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6">
            <Link href="/areas" className="text-sm font-semibold tracking-wide uppercase text-[#e8a33d] hover:text-[#1a1a1a] transition-colors">
              View full coverage information
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Contact Madimetsa Logistics">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Ready to Get Your Freight Moving?
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
