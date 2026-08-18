'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  { src: '/images/hero-freight-truck-highway.webp',    alt: 'Madimetsa Logistics freight truck travelling at speed on a South African highway' },
  { src: '/images/hero-truck-loaded-departing.webp',   alt: 'Loaded Madimetsa Logistics truck departing a Gauteng distribution depot' },
  { src: '/images/hero-fleet-trucks-depot.webp',       alt: 'Row of Madimetsa Logistics trucks lined up at the fleet depot' },
  { src: '/images/hero-cross-border-highway.webp',     alt: 'Long distance freight truck on an open highway heading to a border post' },
  { src: '/images/hero-warehouse-loading.webp',        alt: 'Pallets of cargo being loaded into a trailer at a warehouse loading bay' },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show hero image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#e8a33d] w-4' : 'bg-white/30 w-1.5 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </>
  )
}
