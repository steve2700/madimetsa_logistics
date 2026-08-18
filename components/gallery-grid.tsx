'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Fleet', 'Freight', 'Warehousing', 'Cross-Border', 'Express'] as const
type Category = (typeof categories)[number]

interface GalleryItem {
  src: string
  alt: string
  caption: string
  category: Category
  featured?: boolean
}

// NOTE: every item below currently points at the single fleet photo the
// site launched with (see README — "Images" section). Swap each `src`
// for a real freight/warehouse/fleet photo as they become available;
// leave the alt/caption/category as a guide for what each slot is for.
const items: GalleryItem[] = [
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Madimetsa Logistics truck dispatched from our Gauteng hub',
    caption: 'Fleet Ready for Dispatch',
    category: 'Fleet',
    featured: true,
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Madimetsa Logistics full load freight transport',
    caption: 'Full Load Freight Transport',
    category: 'Freight',
    featured: true,
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Palletised goods loaded for freight transport',
    caption: 'Palletised Goods Loaded',
    category: 'Freight',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Secure warehousing and storage facility',
    caption: 'Secure Storage Facility',
    category: 'Warehousing',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Pick and pack order fulfilment for distribution',
    caption: 'Pick-and-Pack Fulfilment',
    category: 'Warehousing',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'GPS tracked fleet vehicle on route',
    caption: 'GPS-Tracked Fleet Vehicle',
    category: 'Fleet',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Fleet vehicle serviced and maintained',
    caption: 'Fleet Maintenance Check',
    category: 'Fleet',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Cross-border freight route into the SADC region',
    caption: 'Cross-Border Route, SADC Region',
    category: 'Cross-Border',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Freight loaded and documented for cross-border dispatch',
    caption: 'Cross-Border Load Documentation',
    category: 'Cross-Border',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Same-day express delivery dispatch',
    caption: 'Same-Day Express Dispatch',
    category: 'Express',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Urgent freight prioritised for collection',
    caption: 'Priority Collection, Urgent Freight',
    category: 'Express',
  },
  {
    src: '/images/hero-madimetsa-logistics-truck.png',
    alt: 'Freight transport arriving at destination on schedule',
    caption: 'On-Time Delivery',
    category: 'Freight',
  },
]

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  const counts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = cat === 'All' ? items.length : items.filter((i) => i.category === cat).length
    return acc
  }, {})

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all border ${
              active === cat
                ? 'bg-[#e8a33d] text-[#0a0a0a] border-[#e8a33d]'
                : 'bg-transparent text-[#1a1a1a]/60 border-[#1a1a1a]/15 hover:border-[#e8a33d]/50 hover:text-[#e8a33d]'
            }`}
          >
            {cat}
            <span
              className={`text-xs font-bold tabular-nums ${
                active === cat ? 'text-[#0a0a0a]/60' : 'text-[#1a1a1a]/35'
              }`}
            >
              {counts[cat]}
            </span>
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            onClick={() => setLightbox(item)}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#e8a33d] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#e8a33d] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className={`relative w-full overflow-hidden ${item.featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#0a0a0a]/70 text-[#e8a33d] backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <p className="text-white font-semibold text-sm leading-snug">{item.caption}</p>
              </div>

              {/* Expand icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#e8a33d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2h5M2 2v5M14 2h-5M14 2v5M2 14h5M2 14v-5M14 14h-5M14 14v-5" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-[#e8a33d] transition-colors text-sm font-semibold flex items-center gap-2"
              aria-label="Close lightbox"
            >
              Close
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Gold accent line */}
            <div className="w-full h-0.5 bg-[#e8a33d] mb-1" />

            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-white font-semibold text-sm">{lightbox.caption}</p>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#e8a33d]">
                {lightbox.category}
              </span>
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2 mt-4">
              {(() => {
                const idx = filtered.findIndex((i) => i.src === lightbox.src && i.caption === lightbox.caption)
                const prev = filtered[idx - 1]
                const next = filtered[idx + 1]
                return (
                  <>
                    <button
                      disabled={!prev}
                      onClick={() => prev && setLightbox(prev)}
                      className="px-4 py-2 text-xs font-bold border border-white/15 text-white/50 hover:border-[#e8a33d]/50 hover:text-[#e8a33d] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                    >
                      ← Previous
                    </button>
                    <button
                      disabled={!next}
                      onClick={() => next && setLightbox(next)}
                      className="px-4 py-2 text-xs font-bold border border-white/15 text-white/50 hover:border-[#e8a33d]/50 hover:text-[#e8a33d] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                    >
                      Next →
                    </button>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
