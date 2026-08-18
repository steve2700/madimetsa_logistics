import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.madimetsalogistics.co.za'
  const currentDate = new Date().toISOString()

  const mainPages = [
    { url: baseUrl,                        priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/services`,          priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/areas`,             priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/contact`,           priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`,               priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`,             priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`,    priority: 0.3, changeFrequency: 'yearly'  as const },
    { url: `${baseUrl}/terms`,             priority: 0.3, changeFrequency: 'yearly'  as const },
  ]

  const servicePages = [
    'freight-transport',
    'warehousing',
    'fleet-management',
    'supply-chain-solutions',
    'cross-border-logistics',
    'express-delivery',
    'contract-logistics',
    'freight-forwarding',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
  }))

  // Only areas with a live /logistics-<slug> page — keep this in sync with
  // the `builtAreaSlugs` set in app/areas/page.tsx and app/page.tsx.
  // Add a slug here the moment its page goes live, nothing else needs to change.
  const areaPages = [
    'johannesburg',
    'pretoria',
    'sandton',
    'centurion',
    'durban',
    'capetown',
    'gqeberha',
    'bloemfontein',
  ].map((area) => ({
    url: `${baseUrl}/logistics-${area}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }))

  return [...mainPages, ...servicePages, ...areaPages].map((page) => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
