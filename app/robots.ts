import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.madimetsalogistics.co.za'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default rule — applies to any crawler not matched below
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*?*',        // block URLs with query strings (tracking params, filters, etc.)
          '/*?utm_',      // explicit UTM campaign params, in case wildcard above is ever narrowed
          '/thank-you',
          '/404',
          '/500',
        ],
      },
      {
        // Googlebot gets the same rules, kept explicit so it's not silently
        // inheriting from '*' if this file is edited later.
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/*?*', '/thank-you'],
      },
      {
        // Let Google's image crawler in even if query-string blocking above
        // would otherwise catch optimised Next.js image URLs.
        userAgent: 'Googlebot-Image',
        allow: ['/', '/images/', '/_next/image'],
      },
      {
        // AI crawlers — allowed on purpose, so tools like ChatGPT, Claude,
        // Perplexity and Google's AI features can reference and cite this
        // site in their answers.
        userAgent: [
          'GPTBot',           // OpenAI / ChatGPT
          'ChatGPT-User',     // ChatGPT browsing on a user's behalf
          'OAI-SearchBot',    // OpenAI search
          'ClaudeBot',        // Anthropic / Claude
          'anthropic-ai',
          'PerplexityBot',    // Perplexity
          'Google-Extended',  // Google AI features / Gemini training
          'Applebot-Extended',// Apple Intelligence
          'CCBot',            // Common Crawl (feeds many AI training sets)
          'Bytespider',       // ByteDance / TikTok AI
        ],
        allow: '/',
      },
      {
        // Block low-value SEO scraper bots that scan for competitor
        // research rather than referencing the site in AI answers.
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
