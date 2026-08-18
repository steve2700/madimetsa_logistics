const BASE_URL = 'https://www.madimetsalogistics.co.za'
const BUSINESS_ID = `${BASE_URL}/#business`

interface AreaSchemaProps {
  areaName: string
  url: string
  /** Optional: list of specific suburbs/neighbourhoods within the area */
  suburbs?: string[]
}

export default function AreaSchema({ areaName, url, suburbs }: AreaSchemaProps) {
  if (!areaName?.trim() || !url?.trim()) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: 'Madimetsa Logistics',
    description: `Freight transport, warehousing, fleet management and cross border logistics serving ${areaName} and surrounding areas.`,
    url: BASE_URL,
    telephone: '+27723089983',
    email: 'info@madimetsalogistics.co.za',
    priceRange: '$$',
    currenciesAccepted: 'ZAR',
    paymentAccepted: 'Cash, EFT',
    image: `${BASE_URL}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: areaName,
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    areaServed: [
      {
        '@type': 'City',
        name: areaName,
        containedInPlace: {
          '@type': 'State',
          name: 'Gauteng',
          containedInPlace: {
            '@type': 'Country',
            name: 'South Africa',
            sameAs: 'https://www.wikidata.org/wiki/Q258',
          },
        },
      },
      // Spread in any suburbs passed as props
      ...(suburbs ?? []).map((suburb) => ({
        '@type': 'Place',
        name: suburb,
        containedInPlace: {
          '@type': 'City',
          name: areaName,
        },
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Logistics Services in ${areaName}`,
      itemListElement: [
        'Freight Transport',
        'Warehousing & Distribution',
        'Fleet Management',
        'Supply Chain Solutions',
        'Cross Border Logistics',
        'Express Delivery',
        'Contract Logistics',
        'Freight Forwarding',
      ].map((service, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: service,
          provider: { '@id': BUSINESS_ID },
        },
      })),
    },
    sameAs: [`${BASE_URL}${url}`],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
