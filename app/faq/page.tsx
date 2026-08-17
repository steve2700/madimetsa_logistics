import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Freight & Logistics FAQ | Madimetsa Logistics South Africa',
  description:
    'Answers to common questions about freight transport, dispatch times, cross-border shipments and coverage from Madimetsa Logistics. Call 072 308 9983.',
  keywords: [
    'freight transport FAQ South Africa',
    'logistics company questions',
    'freight cost South Africa',
    'cross-border freight questions',
    'same-day freight dispatch',
    'nationwide delivery South Africa',
  ],
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/faq',
  },
  openGraph: {
    title: 'Freight & Logistics FAQ | Madimetsa Logistics',
    description: 'Common questions about freight transport, dispatch and coverage, answered by our team.',
    url: 'https://www.madimetsalogistics.co.za/faq',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: 'How much does freight transport cost?',
    answer:
      'Cost depends on load size, distance, route and turnaround time. A short local delivery is a fraction of the cost of a full load cross-border haul or an ongoing contract logistics arrangement. We give a clear written quote before any freight moves, so you know the number before you decide.',
    category: 'Costs & Pricing',
  },
  {
    question: 'Do you charge extra for urgent or same-day dispatch?',
    answer:
      'Urgent freight is priced on the route and load, not a flat surcharge. Get in touch with the details and we will give you a straightforward quote for the fastest option available.',
    category: 'Costs & Pricing',
  },
  {
    question: 'How quickly can you arrange a pickup?',
    answer:
      'We offer same-day and next-day dispatch nationwide, depending on load size and route, with the fastest turnaround on collections from our Gauteng hubs. For recurring freight, we can set up scheduled collection times so your goods move on a predictable timetable.',
    category: 'Dispatch & Delivery',
  },
  {
    question: 'How long does delivery typically take?',
    answer:
      'It depends on distance and route. Local Gauteng deliveries are usually same-day or next-day. Routes to other provinces and cross-border deliveries take longer, and we will give you a realistic estimate before the freight moves.',
    category: 'Dispatch & Delivery',
  },
  {
    question: 'What size loads can you handle?',
    answer:
      'We handle full and part loads across general freight, palletised goods and contract cargo for businesses of all sizes. Whether it is a single pallet or a full trailer, our fleet is sized to fit the job.',
    category: 'Cargo & Fleet',
  },
  {
    question: 'Can you handle oversized or irregular freight?',
    answer:
      'Tell us about the dimensions, weight and nature of the load and we will confirm whether it fits our standard fleet or needs special arrangements. It is always best to check with us before booking anything unusual.',
    category: 'Cargo & Fleet',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We operate from hubs across the entire Gauteng province, including Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways and Vereeniging.',
    category: 'Service Areas',
  },
  {
    question: 'Do you deliver outside Gauteng?',
    answer:
      'Yes. We dispatch nationwide from our Gauteng hubs, with regular routes to Durban, Cape Town and every major centre in between, plus cross-border into the wider SADC region.',
    category: 'Service Areas',
  },
  {
    question: 'Do you handle cross-border freight?',
    answer:
      'Yes. We offer cross-border logistics into the wider SADC region. Get in touch with your destination and cargo details and we will talk you through the route, timeline and requirements.',
    category: 'Cross-Border',
  },
  {
    question: 'What documentation do I need for cross-border shipments?',
    answer:
      'Requirements vary by destination and cargo type. Contact us before booking a cross-border shipment and we will let you know exactly what paperwork is needed on your side.',
    category: 'Cross-Border',
  },
  {
    question: 'Can I track my delivery?',
    answer:
      'Our fleet is GPS tracked, so our team can give you an update on where your freight is at any point in the journey. Reach out and we will keep you informed.',
    category: 'Guarantee & Tracking',
  },
  {
    question: 'What happens if something goes wrong with my delivery?',
    answer:
      'Tell us straight away and we will work to resolve it. Honest communication is part of how we operate, if there is a delay or an issue, you will hear it from us directly, not find out on your own.',
    category: 'Guarantee & Tracking',
  },
]

// Group faqs by category for the sidebar nav
const categories = [...new Set(faqs.map((f) => f.category))]

const relatedLinks = [
  { href: '/services', label: 'All Logistics Services' },
  { href: '/express-delivery', label: 'Express Delivery' },
  { href: '/cross-border-logistics', label: 'Cross-Border Logistics' },
  { href: '/contract-logistics', label: 'Contract Logistics' },
  { href: '/areas', label: 'Where We Operate' },
  { href: '/contact', label: 'Get a Free Quote' },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="bg-[#0a0a0a] border-b border-[#e8a33d]/15">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Got Questions?
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            Answers to common questions about freight transport, dispatch times,
            cross-border shipments and coverage across South Africa.
          </p>
        </div>
      </section>

      {/* ── Category chips ── */}
      <section className="bg-white border-b border-[#1a1a1a]/8 overflow-x-auto" aria-label="FAQ categories">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-1.5 py-3 min-w-max">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                  className="inline-block px-3.5 py-1.5 text-[12px] font-medium text-[#1a1a1a]/65 hover:text-[#e8a33d] hover:bg-[#f5f4f0] border border-transparent hover:border-[#e8a33d]/25 transition-colors whitespace-nowrap"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Main content: FAQs + sidebar ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

          {/* FAQ list */}
          <div>
            {/* Group by category */}
            {categories.map((cat) => {
              const catFaqs = faqs.filter((f) => f.category === cat)
              const anchorId = cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
              return (
                <div key={cat} id={anchorId} className="mb-12 scroll-mt-24">
                  {/* Category label */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block w-3 h-3 bg-[#e8a33d]" aria-hidden="true" />
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#e8a33d]">
                      {cat}
                    </h2>
                  </div>

                  <div className="space-y-0 border-t border-[#1a1a1a]/10">
                    {catFaqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group border-b border-[#1a1a1a]/10"
                      >
                        <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none select-none">
                          <h3 className="text-base font-bold text-[#1a1a1a] leading-snug group-open:text-[#e8a33d] transition-colors pr-2">
                            {faq.question}
                          </h3>
                          {/* Plus / minus toggle */}
                          <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-[#1a1a1a]/20 group-open:border-[#e8a33d] group-open:bg-[#e8a33d] transition-colors">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="group-open:hidden">
                              <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="hidden group-open:block text-white">
                              <path d="M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                            </svg>
                          </span>
                        </summary>
                        <div className="pb-5 pr-9">
                          <p className="text-[#1a1a1a]/65 text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Still have questions */}
            <div className="mt-4 p-7 bg-[#0a0a0a] border border-[#e8a33d]/20">
              <div className="w-8 h-0.5 bg-[#e8a33d] mb-4" />
              <h2 className="text-xl font-black text-white mb-2">
                Still Have Questions?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Our team is happy to answer any question about your specific freight,
                call us or send a message and we will get back to you promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0723089983"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call 072 308 9983
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold text-sm hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block space-y-6 sticky top-24" aria-label="Related resources">

            {/* Quick call card */}
            <div className="bg-[#b91c1c] p-6">
              <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                Urgent Freight?
              </p>
              <p className="text-white font-black text-lg leading-snug mb-4">
                Need it moved today?<br />We dispatch fast.
              </p>
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

            {/* Related links */}
            <div className="border border-[#1a1a1a]/10 bg-[#f5f4f0]">
              <div className="px-5 py-4 border-b border-[#1a1a1a]/10">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">
                  Helpful Links
                </p>
              </div>
              <ul className="divide-y divide-[#1a1a1a]/8">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-5 py-3.5 text-sm text-[#1a1a1a]/70 hover:text-[#e8a33d] hover:bg-white transition-colors group"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity text-[#e8a33d]" aria-hidden="true">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories nav */}
            <div className="border border-[#1a1a1a]/10">
              <div className="px-5 py-4 border-b border-[#1a1a1a]/10 bg-[#f5f4f0]">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">
                  Jump to Category
                </p>
              </div>
              <ul className="divide-y divide-[#1a1a1a]/8">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                      className="flex items-center gap-2.5 px-5 py-3 text-sm text-[#1a1a1a]/65 hover:text-[#e8a33d] hover:bg-[#f5f4f0] transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8a33d]/40 group-hover:bg-[#e8a33d] transition-colors shrink-0" />
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0a0a0a] text-white border-t border-[#e8a33d]/10" aria-label="Contact CTA">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black mb-2">
                Need Freight Moved Nationwide?
              </h2>
              <p className="text-white/45 text-sm">
                Same-day dispatch &middot; Full & part loads &middot; Nationwide coverage
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0723089983"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                072 308 9983
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold text-base hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
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
