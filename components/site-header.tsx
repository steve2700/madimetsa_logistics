'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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

const areaRegions = [
  {
    region: 'Gauteng',
    areas: [
      { slug: 'johannesburg', name: 'Johannesburg' },
      { slug: 'pretoria', name: 'Pretoria' },
      { slug: 'sandton', name: 'Sandton' },
      { slug: 'centurion', name: 'Centurion' },
    ],
  },
  {
    region: 'KwaZulu-Natal',
    areas: [{ slug: 'durban', name: 'Durban' }],
  },
  {
    region: 'Western Cape',
    areas: [{ slug: 'capetown', name: 'Cape Town' }],
  },
  {
    region: 'Eastern Cape',
    areas: [{ slug: 'gqeberha', name: 'Gqeberha' }],
  },
  {
    region: 'Free State',
    areas: [{ slug: 'bloemfontein', name: 'Bloemfontein' }],
  },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', dropdown: 'services' },
  { href: '/areas', label: 'Areas', dropdown: 'areas' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

type DropdownKey = 'services' | 'areas' | null

const GOLD = '#e8a33d'
const GOLD_SOFT = '#f0b95e'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
    setMobileServicesOpen(false)
    setMobileAreasOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isServiceActive = (path: string) =>
    path.includes('freight') || path.includes('warehous') || path.includes('fleet') ||
    path.includes('supply-chain') || path.includes('cross-border') || path.includes('express') ||
    path.includes('contract-logistics') || path === '/services'

  const isAreaActive = (path: string) => path === '/areas' || path.includes('logistics-')

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]' : ''
      }`}
      style={{ background: '#0a0a0a' }}
    >
      {/* thin gold progress line at very top */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_SOFT} 50%, ${GOLD} 100%)` }} />

      {/* ── Top bar ── */}
      <div className="hidden md:block border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/45 text-xs tracking-wide flex items-center gap-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z" stroke={GOLD} strokeWidth="1.6" />
              <circle cx="12" cy="10" r="2.4" stroke={GOLD} strokeWidth="1.6" />
            </svg>
            Serving South Africa nationwide
            <span className="text-white/25">·</span>
            Gauteng
            <span className="text-white/25">·</span>
            KZN
            <span className="text-white/25">·</span>
            Western &amp; Eastern Cape
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@madimetsalogistics.co.za"
              className="text-white/45 hover:text-white transition-colors text-xs tracking-wide"
            >
              info@madimetsalogistics.co.za
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <a
              href="tel:0723089983"
              style={{ color: GOLD }}
              className="hover:brightness-110 transition-all text-xs font-semibold tracking-widest"
            >
              072 308 9983
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-[74px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="Madimetsa Logistics, home">
            <Image
              src="/logo-horizontal-light.png"
              alt="Madimetsa Logistics"
              width={520}
              height={130}
              className="object-contain h-10 md:h-[52px] w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown
              const isActive =
                link.dropdown === 'services' ? isServiceActive(pathname) :
                link.dropdown === 'areas' ? isAreaActive(pathname) :
                pathname === link.href
              const isOpen = openDropdown === link.dropdown

              if (hasDropdown) {
                return (
                  <div key={link.href} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(link.dropdown as DropdownKey)}
                      onClick={() => setOpenDropdown(isOpen ? null : (link.dropdown as DropdownKey))}
                      style={isActive || isOpen ? { color: GOLD } : undefined}
                      className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                        isActive || isOpen ? '' : 'text-white/70 hover:text-white'
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {isActive && !isOpen && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full" style={{ background: GOLD }} />
                      )}
                    </button>

                    {/* ── Services dropdown ── */}
                    {link.dropdown === 'services' && isOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                        style={{ background: '#111111' }}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-4">All Services</p>
                          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {services.map((s) => {
                              const active = pathname === s.href
                              return (
                                <li key={s.href}>
                                  <Link
                                    href={s.href}
                                    className={`flex flex-col rounded-lg px-3 py-2.5 transition-colors ${
                                      active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.05]'
                                    }`}
                                  >
                                    <span
                                      style={active ? { color: GOLD } : undefined}
                                      className={`text-[13px] font-semibold transition-colors ${active ? '' : 'text-white/85'}`}
                                    >
                                      {s.label}
                                    </span>
                                    <span className="text-[11px] text-white/40 mt-0.5">{s.desc}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                          <div className="mt-4 pt-4 border-t border-white/[0.08] flex justify-between items-center">
                            <Link href="/services" style={{ color: GOLD }} className="text-[12px] hover:brightness-110 font-semibold tracking-wide uppercase transition-all">
                              View all services
                            </Link>
                            <a href="tel:0723089983" className="text-[12px] text-white/40 hover:text-white transition-colors">
                              Dispatch: 072 308 9983
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Areas dropdown ── */}
                    {link.dropdown === 'areas' && isOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                        style={{ background: '#111111' }}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-4">Nationwide Service Areas</p>
                          <div className="grid grid-cols-2 gap-x-6">
                            {areaRegions.map((group) => (
                              <div key={group.region} className="mb-4">
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: `${GOLD}cc` }}>
                                  {group.region}
                                </p>
                                <ul className="space-y-0">
                                  {group.areas.map((area) => {
                                    const active = pathname === `/logistics-${area.slug}`
                                    return (
                                      <li key={area.slug}>
                                        <Link
                                          href={`/logistics-${area.slug}`}
                                          style={active ? { color: GOLD } : undefined}
                                          className={`block py-1.5 text-[13px] transition-colors ${
                                            active ? '' : 'text-white/65 hover:text-white'
                                          }`}
                                        >
                                          {area.name}
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-1 pt-4 border-t border-white/[0.08] flex justify-between items-center">
                            <Link href="/areas" style={{ color: GOLD }} className="text-[12px] hover:brightness-110 font-semibold tracking-wide uppercase transition-all">
                              View all areas
                            </Link>
                            <span className="text-[11px] text-white/30">8 areas · 5 provinces</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={isActive ? { color: GOLD } : undefined}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? '' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full" style={{ background: GOLD }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0723089983"
            style={{ background: `linear-gradient(135deg, ${GOLD_SOFT}, ${GOLD})` }}
            className="hidden md:inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-2.5 text-[#0a0a0a] text-[13px] font-bold tracking-wide shadow-[0_6px_20px_-8px_rgba(232,163,61,0.9)] hover:brightness-105 hover:-translate-y-0.5 transition-all shrink-0"
          >
            <span className="grid place-items-center w-6 h-6 rounded-full bg-[#0a0a0a]/15">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
            style={{ '--tw-ring-color': GOLD } as React.CSSProperties}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD}66, transparent)` }} />
        <div className="px-6 pt-3 pb-6" style={{ background: '#0d0d0d' }}>
          <ul className="space-y-0">
            {navLinks.map((link) => {
              const active = pathname === link.href

              /* ── Mobile Services accordion ── */
              if (link.dropdown === 'services') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.08] text-white/80 hover:text-white transition-colors"
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <ul className="pl-4 py-2 space-y-0">
                        {services.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setIsMenuOpen(false)}
                              style={pathname === s.href ? { color: GOLD } : undefined}
                              className={`flex py-2.5 text-[13px] border-b border-white/[0.05] transition-colors ${pathname === s.href ? '' : 'text-white/55 hover:text-white'}`}
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href="/services" onClick={() => setIsMenuOpen(false)} style={{ color: GOLD }} className="block pt-3 text-[12px] font-bold tracking-widest uppercase">
                            All Services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                )
              }

              /* ── Mobile Areas accordion ── */
              if (link.dropdown === 'areas') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileAreasOpen((v) => !v)}
                      className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.08] text-white/80 hover:text-white transition-colors"
                      aria-expanded={mobileAreasOpen}
                    >
                      Areas
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileAreasOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <div className="pl-4 py-3 space-y-4">
                        {areaRegions.map((group) => (
                          <div key={group.region}>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: `${GOLD}cc` }}>
                              {group.region}
                            </p>
                            <ul className="space-y-0">
                              {group.areas.map((area) => (
                                <li key={area.slug}>
                                  <Link
                                    href={`/logistics-${area.slug}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={pathname === `/logistics-${area.slug}` ? { color: GOLD } : undefined}
                                    className={`block py-2 text-[13px] border-b border-white/[0.05] transition-colors ${
                                      pathname === `/logistics-${area.slug}` ? '' : 'text-white/55 hover:text-white'
                                    }`}
                                  >
                                    {area.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link href="/areas" onClick={() => setIsMenuOpen(false)} style={{ color: GOLD }} className="block pt-1 text-[12px] font-bold tracking-widest uppercase">
                          All Areas →
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={active ? { color: GOLD } : undefined}
                    className={`flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.08] transition-colors ${active ? '' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                    {active && <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-5 space-y-2.5">
            <a
              href="tel:0723089983"
              style={{ background: `linear-gradient(135deg, ${GOLD_SOFT}, ${GOLD})` }}
              className="flex items-center justify-center gap-2.5 w-full rounded-full py-4 text-[#0a0a0a] font-bold text-[15px] tracking-wide hover:brightness-105 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call 072 308 9983
            </a>
            <a
              href="mailto:info@madimetsalogistics.co.za"
              className="flex items-center justify-center gap-2.5 w-full rounded-full py-3 border border-white/15 text-white/70 font-medium text-[13px] tracking-wide hover:text-white hover:border-white/30 transition-colors"
            >
              info@madimetsalogistics.co.za
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
