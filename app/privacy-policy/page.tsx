import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy | Madimetsa Logistics',
  description:
    'Privacy policy for Madimetsa Logistics. Learn how we collect, use and protect your personal information under POPIA.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.madimetsalogistics.co.za/privacy-policy',
  },
}

const sections = [
  {
    heading: '1. Who We Are',
    body: `Madimetsa Logistics ("we", "us", "our") is a freight transport, warehousing and logistics business based in Gauteng and operating across South Africa. Our contact details are:

Phone: 072 308 9983
Email: info@madimetsalogistics.co.za
Website: www.madimetsalogistics.co.za`,
  },
  {
    heading: '2. Information We Collect',
    body: `We collect personal information only when you voluntarily provide it to us. This includes:

— Name and surname, when you submit a contact or quote request form
— Phone number and email address, for the purpose of responding to your enquiry
— Business name and address, when arranging a callout or service visit
— General location information, to determine whether we service your area

We do not collect sensitive personal information such as identity numbers, financial account details, or health information.`,
  },
  {
    heading: '3. How We Use Your Information',
    body: `We use the information you provide solely for the following purposes:

— To respond to your service enquiry or quote request
— To schedule and carry out freight transport, warehousing or logistics services
— To send you service reminders if you are on a maintenance plan (only with your consent)
— To improve the quality of our services

We do not sell, rent or share your personal information with third parties for marketing purposes.`,
  },
  {
    heading: '4. Legal Basis for Processing (POPIA)',
    body: `We process your personal information in accordance with the Protection of Personal Information Act, 4 of 2013 (POPIA). Our lawful grounds for processing are:

— Contractual necessity: to perform services you have requested
— Legitimate interest: to respond to enquiries and manage our business operations
— Consent: where you have opted in to service reminders or communications

You have the right to withdraw consent at any time by contacting us.`,
  },
  {
    heading: '5. How We Store and Protect Your Information',
    body: `Your information is stored securely and accessed only by authorised staff who need it to carry out their duties. We take reasonable technical and organisational measures to protect your data against loss, unauthorised access, alteration or disclosure.

We retain your personal information for as long as is necessary to provide our services and meet our legal obligations, after which it is securely deleted.`,
  },
  {
    heading: '6. Cookies and Website Analytics',
    body: `Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use the site. This data is aggregated and anonymised — it does not identify you personally.

You can disable cookies in your browser settings at any time. Doing so will not affect your ability to use our website.`,
  },
  {
    heading: '7. Third-Party Links',
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies before providing any personal information.`,
  },
  {
    heading: '8. Your Rights Under POPIA',
    body: `You have the right to:

— Request access to the personal information we hold about you
— Request correction of inaccurate or incomplete information
— Request deletion of your personal information (subject to legal retention obligations)
— Object to the processing of your personal information
— Lodge a complaint with the Information Regulator of South Africa

To exercise any of these rights, contact us at info@madimetsalogistics.co.za or call 072 308 9983.`,
  },
  {
    heading: '9. Contact the Information Regulator',
    body: `If you believe we have handled your personal information unlawfully, you may contact the Information Regulator of South Africa:

Website: www.inforegulator.org.za
Email: inforeg@justice.gov.za`,
  },
  {
    heading: '10. Changes to This Policy',
    body: `We may update this privacy policy from time to time. The most current version will always be available on this page with the date it was last updated. Continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[#e8a33d] text-xs font-bold tracking-[0.35em] uppercase mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: June 2026 · Compliant with POPIA (Protection of Personal Information Act)
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 bg-[#f5f4f0]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#1a1a1a]/70 text-base leading-relaxed mb-10 pb-10 border-b border-[#1a1a1a]/10">
            At Madimetsa Logistics, we respect your privacy and are committed to
            protecting the personal information you share with us. This policy explains what
            information we collect, how we use it, and what rights you have under South African law.
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
            <h2 className="font-bold text-[#1a1a1a] mb-2">Questions about this policy?</h2>
            <p className="text-sm text-[#1a1a1a]/60 mb-4">
              Contact us directly and we'll respond within 2 business days.
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
          <Link href="/terms" className="text-[#1a1a1a]/50 hover:text-[#e8a33d] transition-colors">
            Terms &amp; Conditions
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
