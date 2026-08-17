const BASE_URL = 'https://www.madimetsalogistics.co.za'
const BUSINESS_ID = `${BASE_URL}/#business`

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  /** Optional: override or extend the service category */
  serviceType?: string
}

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType = 'Logistics Service',
}: ServiceSchemaProps) {
  if (!name?.trim() || !description?.trim() || !url?.trim()) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}${url}#service`,
    name: name.trim(),
    description: description.trim(),
    serviceType,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: 'Madimetsa Logistics',
      telephone: '+27723089983',
      email: 'info@madimetsalogistics.co.za',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
      sameAs: 'https://www.wikidata.org/wiki/Q258',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+27723089983',
        contactType: 'customer service',
        areaServed: 'ZA',
        availableLanguage: 'English',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
