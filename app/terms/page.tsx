import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Madimetsa Logistics',
  description:
    'Terms and conditions for Madimetsa Logistics. Read our service terms, payment conditions, liability policy and cancellation terms for freight and logistics services.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/terms',
  },
}

const sections = [
  {
    heading: '1. About These Terms',
    body: `These terms and conditions govern the relationship between Madimetsa Logistics ("we", "us", "our") and any person or business ("you", "the client") who requests or receives services from us.

By requesting a quote, booking a collection, or handing goods to us for transport or storage, you agree to these terms. If you do not agree, please do not use our services.`,
  },
  {
    heading: '2. Our Services',
    body: `We provide freight transport, warehousing and distribution, fleet management, supply chain solutions, cross border logistics, express delivery, contract logistics, and freight forwarding across South Africa.

All services are carried out by trained drivers and logistics staff. We reserve the right to decline any consignment we deem unsafe, unlawful, improperly packaged, or outside the scope of the agreed service.`,
  },
  {
    heading: '3. Quotes and Pricing',
    body: `All quotes are provided in South African Rand (ZAR) and are valid for 14 days from the date of issue unless stated otherwise.

Quotes are based on the information available at the time, including the weight, volume, nature and destination of the goods. If the actual consignment differs from what was quoted, we will inform you before proceeding and adjust the rate accordingly. We will not incur additional chargeable work without your consent.

Fuel levies, toll fees, cross border charges, waiting time and additional handling are charged separately where applicable. These are communicated upfront before a vehicle is dispatched.`,
  },
  {
    heading: '4. Payment Terms',
    body: `Payment is due upon completion of the work unless a credit account or alternative arrangement has been agreed in writing in advance.

We accept EFT bank transfer and cash. Invoices not paid within 30 days of the due date may attract interest at the prime lending rate plus 2% per annum.

For large jobs or parts orders, we may require a deposit of up to 50% before work commences. This will be communicated in your quote.`,
  },
  {
    heading: '5. Service Standards',
    body: `We commit to handling and transporting your goods with reasonable care and to delivering within the timeframes agreed at the time of booking.

Delivery and collection times are estimates given in good faith. While we make every effort to meet them, they are not guaranteed and may be affected by:

— Traffic, road closures, weather, or border delays
— Incorrect or incomplete address and consignment information
— Customs, inspection, or regulatory hold-ups on cross border loads
— Circumstances beyond our reasonable control`,
  },
  {
    heading: '6. Goods, Packaging and Insurance',
    body: `You are responsible for ensuring goods are correctly packaged, labelled, and declared for transport. We are not liable for damage arising from inadequate packaging or misdeclared contents.

Standard carriage is provided subject to the liability limits set out below. Goods-in-transit cover for the full value of high-value consignments is available on request and must be arranged in writing before collection.

We do not transport hazardous, illegal, perishable, or prohibited goods unless expressly agreed in writing in advance.`,
  },
  {
    heading: '7. Client Responsibilities',
    body: `You agree to:

— Provide accurate information about the goods, their weight, dimensions, value and destination
— Ensure safe and adequate access for our vehicles at the collection and delivery points at the agreed times
— Ensure goods are properly packaged, secured and ready for loading at the agreed time
— Provide all documentation required for transport, including cross border paperwork where applicable
— Inform us of any known hazards at the collection or delivery site before our drivers arrive

Failure to provide adequate access, correct documentation, or goods ready for collection may result in the job being rescheduled and a waiting or abortive-trip fee being charged.`,
  },
  {
    heading: '8. Liability',
    body: `Unless goods-in-transit cover for the full declared value has been arranged in writing, our liability for loss of or damage to goods in our care is limited to the carriage charges for the affected consignment. We are not liable for:

— Indirect or consequential losses (including loss of profit, revenue, or contracts)
— Loss or damage caused by inadequate packaging, labelling, or misdeclared contents
— Delays caused by circumstances beyond our reasonable control
— Loss or damage arising from your failure to follow our handling recommendations

Nothing in these terms limits our liability for personal injury or death caused by our negligence.`,
  },
  {
    heading: '9. Cancellations and Rescheduling',
    body: `You may cancel or reschedule a booking by giving us at least 4 hours' notice before the scheduled collection. Cancellations with less than 4 hours' notice, or where a vehicle has already been dispatched, may incur a waiting or abortive-trip fee.

We reserve the right to reschedule collections due to unforeseen circumstances. We will notify you as early as possible and find the next available slot that suits you.`,
  },
  {
    heading: '10. Contract Logistics Agreements',
    body: `Ongoing contract logistics, dedicated fleet and warehousing arrangements are governed by a separate written agreement. In the absence of a specific agreement, these general terms apply.

Contract agreements may be cancelled by either party with 30 days' written notice. Services already performed and storage already provided are payable in full regardless of cancellation.`,
  },
  {
    heading: '11. Governing Law',
    body: `These terms are governed by the laws of the Republic of South Africa. Any disputes arising from these terms or our services will be subject to the jurisdiction of the South Gauteng High Court or the applicable Magistrate's Court, depending on the value of the claim.

We encourage resolution of any disputes informally in the first instance. Please contact us directly so we can address your concern.`,
  },
  {
    heading: '12. Changes to These Terms',
    body: `We may update these terms from time to time. The current version will always be published on this page with the date it was last updated. Continued use of our services after changes are published constitutes acceptance of the updated terms.`,
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: June 2026 · Applicable to all services provided by Madimetsa Logistics
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#1a1a1a]/70 text-base leading-relaxed mb-10 pb-10 border-b border-[#1a1a1a]/10">
            Please read these terms carefully before using our services. They set out your rights and
            obligations as a client, our responsibilities to you, and the conditions under which we
            carry out freight transport, warehousing, and logistics services across South Africa.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">{section.heading}</h2>
                <div className="w-8 h-0.5 bg-[#e8a33d] mb-4" />
                <p className="text-[#1a1a1a]/65 text-sm leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-14 p-6 bg-white border border-[#1a1a1a]/8">
            <h2 className="font-bold text-[#1a1a1a] mb-2">Questions about these terms?</h2>
            <p className="text-sm text-[#1a1a1a]/60 mb-4">
              Get in touch and we'll clarify anything you're unsure about before work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0723089983"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white font-semibold text-sm hover:bg-red-800 transition-colors"
              >
                Call 072 308 9983
              </a>
              <a
                href="mailto:info@madimetsalogistics.co.za"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1a1a1a]/15 text-[#1a1a1a] font-semibold text-sm hover:border-[#e8a33d] hover:text-[#e8a33d] transition-colors"
              >
                info@madimetsalogistics.co.za
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer links ── */}
      <section className="py-10 bg-white border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row gap-4 text-sm">
          <Link href="/privacy-policy" className="text-[#1a1a1a]/50 hover:text-[#e8a33d] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-[#1a1a1a]/50 hover:text-[#e8a33d] transition-colors">
            Contact Us
          </Link>
          <Link href="/" className="text-[#1a1a1a]/50 hover:text-[#e8a33d] transition-colors">
            Back to Home
          </Link>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
