import Link from 'next/link'
import Image from 'next/image'

const services = [
  { href: '/freight-transport', label: 'Freight Transport' },
  { href: '/warehousing', label: 'Warehousing & Distribution' },
  { href: '/fleet-management', label: 'Fleet Management' },
  { href: '/supply-chain-solutions', label: 'Supply Chain Solutions' },
  { href: '/cross-border-logistics', label: 'Cross-Border Logistics' },
  { href: '/express-delivery', label: 'Express Delivery' },
]

const areas = [
  { href: '/logistics-johannesburg', label: 'Johannesburg' },
  { href: '/logistics-pretoria', label: 'Pretoria' },
  { href: '/logistics-sandton', label: 'Sandton' },
  { href: '/logistics-midrand', label: 'Midrand' },
  { href: '/logistics-centurion', label: 'Centurion' },
  { href: '/logistics-randburg', label: 'Randburg' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* ── Top bar ── */}
      <div className="border-b border-[#e8a33d]/15">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/35 text-[11px] tracking-[0.12em]">
            Serving all of Gauteng &middot; Johannesburg &middot; Pretoria &middot; Sandton &middot; Centurion &amp; more
          </p>
          <div className="hidden sm:flex items-center gap-1.5 border border-[#e8a33d]/20 bg-[#e8a33d]/[0.08] px-2.5 py-1">
            <span className="text-[#e8a33d] text-[8px]">✦</span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#e8a33d]">
              Gauteng&apos;s Logistics Partner
            </span>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            {/* Logo, on a light plate so the wordmark stays readable on the dark footer */}
            <div className="inline-flex bg-white px-4 py-2.5 mb-5">
              <Image
                src="/logo-wordmark.png"
                alt="Madimetsa Logistics"
                width={200}
                height={100}
                className="object-contain h-9 w-auto"
              />
            </div>

            <p className="text-white/45 text-[12.5px] leading-[1.75] mb-5 max-w-[240px]">
              Freight transport, warehousing and fleet management across Gauteng.
              We move your goods, on time, every time.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-2.5">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#e8a33d]/10 border border-[#e8a33d]/20 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#e8a33d" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </div>
                <a
                  href="tel:0723089983"
                  className="text-[#e8a33d] hover:text-white transition-colors font-mono font-semibold text-[13px]"
                >
                  072 308 9983
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#e8a33d]/10 border border-[#e8a33d]/20 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#e8a33d" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@madimetsalogistics.co.za"
                  className="text-white/55 hover:text-[#e8a33d] transition-colors text-[12px]"
                >
                  info@madimetsalogistics.co.za
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="text-white/35 text-[12px]">Serving all of Gauteng, South Africa</p>
              </div>
            </div>

            {/* Dispatch banner */}
            <div className="mt-6 flex items-center gap-3 bg-[#e8a33d]/10 border border-[#e8a33d]/25 px-4 py-3.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8a33d] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8a33d]" />
              </span>
              <div>
                <p className="text-[#e8a33d] text-[12px] font-bold tracking-wide">24/7 Dispatch Support</p>
                <p className="text-white/40 text-[11px] mt-0.5">Same-day collection across Gauteng</p>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
              Our Services
              <span className="flex-1 h-px bg-[#e8a33d]/20" />
            </h3>
            <ul className="flex flex-col">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 py-[7px] border-b border-white/[0.04] transition-colors hover:text-white text-white/50 text-[12.5px]"
                  >
                    <span className="w-1 h-1 bg-[#e8a33d]/30 group-hover:bg-[#e8a33d] transition-colors shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="flex items-center gap-1.5 mt-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#e8a33d] hover:text-white transition-colors"
            >
              All Services <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
              Areas We Serve
              <span className="flex-1 h-px bg-[#e8a33d]/20" />
            </h3>
            <ul className="flex flex-col">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="group flex items-center gap-2 py-[7px] border-b border-white/[0.04] transition-colors hover:text-white text-white/50 text-[12.5px]"
                  >
                    <span className="w-1 h-1 bg-[#e8a33d]/30 group-hover:bg-[#e8a33d] transition-colors shrink-0" />
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/areas"
              className="flex items-center gap-1.5 mt-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#e8a33d] hover:text-white transition-colors"
            >
              View All Areas <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Gold divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#e8a33d]/25 to-transparent" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[11px] text-white/25">
          &copy; {new Date().getFullYear()} Madimetsa Logistics. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="text-[11px] text-white/30 hover:text-[#e8a33d] tracking-wide transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[11px] text-white/30 hover:text-[#e8a33d] tracking-wide transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  )
}
