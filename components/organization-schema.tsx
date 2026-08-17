const BASE_URL = 'https://www.madimetsalogistics.co.za'

const GAUTENG_CITIES = [
  'Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'Centurion',
  'Randburg', 'Roodepoort', 'Kempton Park', 'Boksburg', 'Benoni',
  'Germiston', 'Alberton', 'Edenvale', 'Krugersdorp', 'Springs',
  'Soweto', 'Fourways', 'Vereeniging',
]

const SERVICES = [
  { name: 'Freight Transport', url: '/freight-transport' },
  { name: 'Warehousing & Distribution', url: '/warehousing' },
  { name: 'Fleet Management', url: '/fleet-management' },
  { name: 'Supply Chain Solutions', url: '/supply-chain-solutions' },
  { name: 'Cross Border Logistics', url: '/cross-border-logistics' },
  { name: 'Express Delivery', url: '/express-delivery' },
  { name: 'Contract Logistics', url: '/contract-logistics' },
  { name: 'Freight Forwarding', url: '/freight-forwarding' },
]

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
        name: 'Madimetsa Logistics',
        legalName: 'Madimetsa Logistics',
        description:
          'Freight transport, warehousing, fleet management and cross border logistics, serving businesses across South Africa.',
        url: BASE_URL,
        telephone: '+27723089983',
        email: 'info@madimetsalogistics.co.za',
        priceRange: '$$',
        currenciesAccepted: 'ZAR',
        paymentAccepted: 'Cash, EFT',
        image: `${BASE_URL}/og-image.jpg`,
        logo: `${BASE_URL}/logo-wordmark.png`,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -26.2041,
          longitude: 28.0473,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+27723089983',
            contactType: 'customer service',
            areaServed: 'ZA',
            availableLanguage: 'English',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+27723089983',
            contactType: 'dispatch',
            areaServed: 'ZA',
            availableLanguage: 'English',
          },
        ],
        areaServed: {
          '@type': 'Country',
          name: 'South Africa',
          sameAs: 'https://www.wikidata.org/wiki/Q258',
          containsPlace: {
            '@type': 'State',
            name: 'Gauteng',
            containsPlace: GAUTENG_CITIES.map((city) => ({
              '@type': 'City',
              name: city,
            })),
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Logistics Services',
          itemListElement: SERVICES.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Service',
              '@id': `${BASE_URL}${s.url}#service`,
              name: s.name,
              url: `${BASE_URL}${s.url}`,
              provider: { '@id': `${BASE_URL}/#business` },
            },
          })),
        },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Madimetsa Logistics',
        description: 'Freight transport, warehousing and fleet management, serving businesses across South Africa.',
        publisher: { '@id': `${BASE_URL}/#business` },
        inLanguage: 'en-ZA',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
