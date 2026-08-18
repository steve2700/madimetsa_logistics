import Link from 'next/link'

const BASE_URL = 'https://www.madimetsalogistics.co.za'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      // Last item (current page) doesn't need an item URL per Google's guidelines
      ...(item.href && index < items.length - 1
        ? { item: `${BASE_URL}${item.href}` }
        : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 text-sm">
        <ol
          className="flex flex-wrap items-center gap-1"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-1"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {index > 0 && (
                  <span className="text-[#1a1a1a]/30 select-none" aria-hidden="true">
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-[#1a1a1a]/50 hover:text-[#e8a33d] transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className="text-[#1a1a1a] font-medium"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
