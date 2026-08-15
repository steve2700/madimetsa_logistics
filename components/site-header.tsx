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
    region: 'Johannesburg & CBD',
    areas: [
      { slug: 'johannesburg', name: 'Johannesburg' },
      { slug: 'soweto', name: 'Soweto' },
      { slug: 'randburg', name: 'Randburg' },
      { slug: 'roodepoort', name: 'Roodepoort' },
      { slug: 'krugersdorp', name: 'Krugersdorp' },
      { slug: 'fourways', name: 'Fourways' },
    ],
  },
  {
    region: 'Pretoria & North',
    areas: [
      { slug: 'pretoria', name: 'Pretoria' },
      { slug: 'centurion', name: 'Centurion' },
      { slug: 'midrand', name: 'Midrand' },
      { slug: 'sandton', name: 'Sandton' },
    ],
  },
  {
    region: 'East Rand',
    areas: [
      { slug: 'kempton-park', name: 'Kempton Park' },
      { slug: 'boksburg', name: 'Boksburg' },
      { slug: 'benoni', name: 'Benoni' },
      { slug: 'germiston', name: 'Germiston' },
      { slug: 'alberton', name: 'Alberton' },
      { slug: 'edenvale', name: 'Edenvale' },
      { slug: 'springs', name: 'Springs' },
    ],
  },
  {
    region: 'South Gauteng',
    areas: [
      { slug: 'vereeniging', name: 'Vereeniging' },
    ],
  },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', dropdown: 'services' },
  { href: '/areas', label: 'Areas', dropdown: 'areas' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

type DropdownKey = 'services' | 'areas' | null

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

  const isServiceActive = (path: string) =>
    path.includes('freight') || path.includes('warehous') || path.includes('fleet') ||
    path.includes('supply-chain') || path.includes('cross-border') || path.includes('express') ||
    path.includes('contract-logistics') || path === '/services'

  const isAreaActive = (path: string) =>
    path === '/areas' || path.includes('logistics-')

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/96 backdrop-blur-md shadow-[0_1px_0_rgba(232,163,29,0.18)]'
          : 'bg-[#0a0a0a]'
      }`}
    >
      {/* ── Top bar ── */}
      <div className="hidden md:block border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/40 text-xs tracking-wide">
            Serving all of Gauteng — Johannesburg · Pretoria · Sandton · Centurion &amp; more
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@madimetsalogistics.co.za"
              className="text-white/40 hover:text-white transition-colors text-xs tracking-wide"
            >
              info@madimetsalogistics.co.za
            </a>
            <a
              href="tel:0723089983"
              className="text-[#e8a33d] hover:text-white transition-colors text-xs font-semibold tracking-widest"
            >
              072 308 9983
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="Madimetsa Logistics — home">
            <Image
              src="/logo-wordmark.png"
              alt="Madimetsa Logistics"
              width={220}
              height={110}
              className="object-contain h-12 md:h-14 w-auto"
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
                      onClick={() => setOpenDropdown(isOpen ? null : link.dropdown as DropdownKey)}
                      className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                        isActive || isOpen ? 'text-[#e8a33d]' : 'text-white/65 hover:text-white'
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {isActive && !isOpen && (
                        <span className="absolute inset-x-3 bottom-0 h-[2px] bg-[#e8a33d] rounded-full" />
                      )}
                    </button>

                    {/* ── Services dropdown ── */}
                    {link.dropdown === 'services' && isOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[540px] bg-[#111111] border border-white/[0.08] shadow-2xl"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#e8a33d] to-transparent" />
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">All Services</p>
                          <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                            {services.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  className="flex flex-col py-2.5 border-b border-white/[0.05] group/item"
                                >
                                  <span className={`text-[13px] font-semibold transition-colors ${pathname === s.href ? 'text-[#e8a33d]' : 'text-white/80 group-hover/item:text-[#e8a33d]'}`}>
                                    {s.label}
                                  </span>
                                  <span className="text-[11px] text-white/35 mt-0.5">{s.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-4 border-t border-white/[0.06] flex justify-between items-center">
                            <Link href="/services" className="text-[12px] text-[#e8a33d] hover:text-white font-semibold tracking-wide uppercase transition-colors">
                              View all services
                            </Link>
                            <a href="tel:0723089983" className="text-[12px] text-white/35 hover:text-white transition-colors">
                              Dispatch: 072 308 9983
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Areas dropdown ── */}
                    {link.dropdown === 'areas' && isOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-[#111111] border border-white/[0.08] shadow-2xl"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#e8a33d] to-transparent" />
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
                            Gauteng Service Areas
                          </p>
                          <div className="grid grid-cols-2 gap-x-6">
                            {areaRegions.map((group) => (
                              <div key={group.region} className="mb-4">
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e8a33d]/70 mb-2">
                                  {group.region}
                                </p>
                                <ul className="space-y-0">
                                  {group.areas.map((area) => (
                                    <li key={area.slug}>
                                      <Link
                                        href={`/logistics-${area.slug}`}
                                        className={`block py-1.5 text-[13px] border-b border-white/[0.04] transition-colors ${
                                          pathname === `/logistics-${area.slug}`
                                            ? 'text-[#e8a33d]'
                                            : 'text-white/65 hover:text-white'
                                        }`}
                                      >
                                        {area.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 pt-4 border-t border-white/[0.06] flex justify-between items-center">
                            <Link href="/areas" className="text-[12px] text-[#e8a33d] hover:text-white font-semibold tracking-wide uppercase transition-colors">
                              View all areas
                            </Link>
                            <span className="text-[11px] text-white/25">18 areas covered</span>
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
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-[#e8a33d]' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 bottom-0 h-[2px] bg-[#e8a33d] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0723089983"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#e8a33d] text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-[#f5b859] transition-colors shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white focus:outline-none focus:ring-2 focus:ring-[#e8a33d] focus:ring-offset-1 focus:ring-offset-[#0a0a0a]"
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
        <div className="h-px bg-gradient-to-r from-transparent via-[#e8a33d]/40 to-transparent" />
        <div className="bg-[#0d0d0d] px-6 pt-3 pb-6">
          <ul className="space-y-0">
            {navLinks.map((link) => {
              const active = pathname === link.href

              /* ── Mobile Services accordion ── */
              if (link.dropdown === 'services') {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.06] text-white/75 hover:text-white transition-colors"
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <ul className="pl-4 py-2 space-y-0">
                        {services.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`flex py-2.5 text-[13px] border-b border-white/[0.04] transition-colors ${pathname === s.href ? 'text-[#e8a33d]' : 'text-white/55 hover:text-white'}`}
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block pt-3 text-[12px] font-bold tracking-widest uppercase text-[#e8a33d]">
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
                      className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.06] text-white/75 hover:text-white transition-colors"
                      aria-expanded={mobileAreasOpen}
                    >
                      Areas
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileAreasOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                      <div className="pl-4 py-3 space-y-4">
                        {areaRegions.map((group) => (
                          <div key={group.region}>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e8a33d]/70 mb-1.5">
                              {group.region}
                            </p>
                            <ul className="space-y-0">
                              {group.areas.map((area) => (
                                <li key={area.slug}>
                                  <Link
                                    href={`/logistics-${area.slug}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 text-[13px] border-b border-white/[0.04] transition-colors ${
                                      pathname === `/logistics-${area.slug}` ? 'text-[#e8a33d]' : 'text-white/55 hover:text-white'
                                    }`}
                                  >
                                    {area.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link href="/areas" onClick={() => setIsMenuOpen(false)} className="block pt-1 text-[12px] font-bold tracking-widest uppercase text-[#e8a33d]">
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
                    className={`flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.06] transition-colors ${active ? 'text-[#e8a33d]' : 'text-white/75 hover:text-white'}`}
                  >
                    {link.label}
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#e8a33d]" aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-5 space-y-2.5">
            <a
              href="tel:0723089983"
              className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#e8a33d] text-[#0a0a0a] font-bold text-[15px] tracking-wide hover:bg-[#f5b859] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call 072 308 9983
            </a>
            <a
              href="mailto:info@madimetsalogistics.co.za"
              className="flex items-center justify-center gap-2.5 w-full py-3 border border-white/15 text-white/70 font-medium text-[13px] tracking-wide hover:text-white hover:border-white/30 transition-colors"
            >
              info@madimetsalogistics.co.za
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
