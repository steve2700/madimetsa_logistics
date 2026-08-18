import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Madimetsa Logistics | Freight & Logistics Quote',
  description:
    'Contact Madimetsa Logistics for freight transport, warehousing and logistics across South Africa. Call 072 308 9983 or request a free quote online.',
  keywords: [
    'contact logistics company Gauteng',
    'freight transport quote Johannesburg',
    'logistics quote South Africa',
    'transport company phone number Gauteng',
    'logistics WhatsApp Gauteng',
    'free freight quote South Africa',
  ],
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/contact',
  },
  openGraph: {
    title: 'Contact Madimetsa Logistics | Freight & Logistics Quote',
    description: 'Call 072 308 9983 or request a free quote online. Freight, warehousing and logistics across South Africa.',
    url: 'https://www.madimetsalogistics.co.za/contact',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.madimetsalogistics.co.za/contact',
  name: 'Contact Madimetsa Logistics',
  url: 'https://www.madimetsalogistics.co.za/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.madimetsalogistics.co.za/#business',
    name: 'Madimetsa Logistics',
    telephone: '+27723089983',
    email: 'info@madimetsalogistics.co.za',
    url: 'https://www.madimetsalogistics.co.za',
    areaServed: { '@type': 'State', name: 'Gauteng' },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
    ],
  },
}

const services = [
  'Freight Transport',
  'Warehousing & Distribution',
  'Fleet Management',
  'Supply Chain Solutions',
  'Cross Border Logistics',
  'Express Delivery',
  'Contract Logistics',
  'Freight Forwarding',
  'Other',
]

const hours = [
  { day: 'Monday – Friday', time: '07:00 – 18:00' },
  { day: 'Saturday', time: '08:00 – 14:00' },
  { day: 'Sunday', time: 'Emergency only' },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="bg-[#0a0a0a] border-b border-[#e8a33d]/15">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-2xl">
            Contact Madimetsa Logistics
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            For freight bookings, warehousing enquiries, quotes or general questions —
            we are ready to help. Most quote requests receive a response within 2 hours
            during business hours.
          </p>
        </div>
      </section>

      {/* ── Quick contact bar ── */}
      <section className="bg-[#111111] border-b border-white/[0.07]" aria-label="Quick contact options">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:0723089983"
              className="flex items-center justify-center gap-2.5 px-6 py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors flex-1 sm:flex-none"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 072 308 9983
            </a>
            <a
              href="https://wa.me/27723089983?text=Hi%2C%20I%27d%20like%20a%20freight%20or%20logistics%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white font-bold text-sm hover:border-[#e8a33d]/40 hover:text-[#e8a33d] transition-colors flex-1 sm:flex-none"
            >
              {/* WhatsApp SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="mailto:info@madimetsalogistics.co.za"
              className="flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white font-bold text-sm hover:border-[#e8a33d]/40 hover:text-[#e8a33d] transition-colors flex-1 sm:flex-none"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">

            {/* ── Left: info ── */}
            <div className="space-y-10">

              {/* Contact details */}
              <div className="bg-white border border-[#1a1a1a]/8">
                <div className="px-7 py-5 border-b border-[#1a1a1a]/8">
                  <h2 className="font-bold text-[#1a1a1a] text-lg">Contact Details</h2>
                </div>
                <div className="divide-y divide-[#1a1a1a]/8">

                  {/* Phone */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#b91c1c]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Phone</p>
                      <a href="tel:0723089983" className="text-[#1a1a1a] font-bold text-xl hover:text-[#e8a33d] transition-colors">
                        072 308 9983
                      </a>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">Available for urgent freight at any hour</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#1a1a1a]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/27723089983?text=Hi%2C%20I%27d%20like%20a%20freight%20or%20logistics%20quote."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] font-bold text-xl hover:text-[#e8a33d] transition-colors"
                      >
                        072 308 9983
                      </a>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">Quick responses via WhatsApp</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#e8a33d]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Email</p>
                      <a
                        href="mailto:info@madimetsalogistics.co.za"
                        className="text-[#1a1a1a] font-bold text-base hover:text-[#e8a33d] transition-colors break-all"
                      >
                        info@madimetsalogistics.co.za
                      </a>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Service area */}
                  <div className="px-7 py-5 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#f5f4f0] border border-[#1a1a1a]/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8a33d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-1">Service Area</p>
                      <p className="text-[#1a1a1a] font-bold text-base">Gauteng Province, South Africa</p>
                      <p className="text-[#1a1a1a]/50 text-sm mt-0.5">
                        Johannesburg, Pretoria, Sandton, Midrand, Centurion &amp; all surrounding areas
                      </p>
                      <Link href="/areas" className="text-[12px] text-[#e8a33d] hover:text-[#1a1a1a] font-semibold uppercase tracking-wider transition-colors mt-1.5 inline-block">
                        View all service areas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-white border border-[#1a1a1a]/8">
                <div className="px-7 py-5 border-b border-[#1a1a1a]/8">
                  <h2 className="font-bold text-[#1a1a1a] text-lg">Business Hours</h2>
                </div>
                <div className="px-7 py-5">
                  <dl className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between border-b border-[#1a1a1a]/6 pb-3 last:border-0 last:pb-0">
                        <dt className="text-sm font-medium text-[#1a1a1a]/70">{h.day}</dt>
                        <dd className={`text-sm font-bold ${h.time === 'Emergency only' ? 'text-[#b91c1c]' : 'text-[#1a1a1a]'}`}>
                          {h.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 flex items-start gap-3 bg-[#b91c1c]/5 border border-[#b91c1c]/15 px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] mt-1.5 shrink-0" />
                    <p className="text-[#b91c1c] text-sm font-medium leading-relaxed">
                      Urgent and after-hours freight available — call anytime to arrange a priority collection
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal links */}
              <div className="bg-white border border-[#1a1a1a]/8">
                <div className="px-7 py-5 border-b border-[#1a1a1a]/8">
                  <h2 className="font-bold text-[#1a1a1a] text-lg">What We Offer</h2>
                </div>
                <ul className="divide-y divide-[#1a1a1a]/8">
                  {[
                    { href: '/services', label: 'View all logistics services' },
                    { href: '/freight-transport', label: 'Freight transport' },
                    { href: '/warehousing', label: 'Warehousing & distribution' },
                    { href: '/areas', label: 'Full service area coverage' },
                    { href: '/faq', label: 'Frequently asked questions' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-7 py-4 text-sm text-[#1a1a1a]/65 hover:text-[#e8a33d] hover:bg-[#f5f4f0] transition-colors group"
                      >
                        {item.label}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity text-[#e8a33d]" aria-hidden="true">
                          <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="bg-white border border-[#1a1a1a]/8 sticky top-24">
              <div className="px-7 py-6 border-b border-[#1a1a1a]/8 bg-[#0a0a0a]">
                <div className="w-8 h-0.5 bg-[#e8a33d] mb-3" />
                <h2 className="text-white font-black text-xl mb-1">Request a Free Quote</h2>
                <p className="text-white/45 text-sm">
                  We respond within 2 hours during business hours.
                </p>
              </div>

              <div className="px-7 py-6">
                <form
                  method="POST"
                  action="/api/contact"
                  className="space-y-4"
                  aria-label="Freight and logistics quote request form"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Full Name <span className="text-[#b91c1c]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Phone Number <span className="text-[#b91c1c]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors"
                      placeholder="e.g. 082 123 4567"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Service needed */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Service Needed <span className="text-[#b91c1c]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Cargo details */}
                  <div>
                    <label htmlFor="cargo-details" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Cargo / Load Details
                    </label>
                    <input
                      type="text"
                      id="cargo-details"
                      name="cargo-details"
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors"
                      placeholder="e.g. 6 pallets, 2 tonnes, Johannesburg to Durban"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Location <span className="text-[#b91c1c]">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors"
                      placeholder="e.g. Sandton, Johannesburg"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/50 mb-1.5">
                      Tell Us What You Need <span className="text-[#b91c1c]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full border border-[#1a1a1a]/15 bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/35 focus:border-[#e8a33d] focus:outline-none focus:bg-white transition-colors resize-none"
                      placeholder="Tell us about your freight, collection and delivery points, and timing…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1a1a1a] text-white font-bold text-sm tracking-wide uppercase hover:bg-[#e8a33d] hover:text-[#0a0a0a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e8a33d] focus:ring-offset-2"
                  >
                    Send Enquiry
                  </button>

                  <p className="text-center text-xs text-[#1a1a1a]/40">
                    Or call us directly:{' '}
                    <a href="tel:0723089983" className="text-[#e8a33d] font-semibold hover:text-[#1a1a1a] transition-colors">
                      072 308 9983
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgent freight CTA ── */}
      <section className="bg-[#b91c1c] text-white" aria-label="Urgent freight CTA">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">Urgent Freight?</h2>
              <p className="text-white/75 text-base">
                We arrange priority and express loads across South Africa — call now to get moving.
              </p>
            </div>
            <a
              href="tel:0723089983"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-white text-[#b91c1c] font-black text-xl hover:bg-[#f5f4f0] transition-colors shrink-0"
              aria-label="Call Madimetsa Logistics: 072 308 9983"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              072 308 9983
            </a>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
