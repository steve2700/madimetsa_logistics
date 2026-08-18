import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import WhatsAppButton from '@/components/whatsapp-button'
import OrganizationSchema from '@/components/organization-schema'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const BASE_URL = 'https://www.madimetsalogistics.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Madimetsa Logistics Gauteng | Freight Transport, Warehousing & Fleet Management',
    template: '%s | Madimetsa Logistics',
  },
  description:
    'Reliable freight transport, warehousing, fleet management and cross border logistics across South Africa. Based in Gauteng, serving Johannesburg, Pretoria, Durban, Cape Town and beyond. Call 072 308 9983.',
  keywords: [
    'logistics company Gauteng',
    'freight transport South Africa',
    'warehousing and distribution Johannesburg',
    'fleet management Gauteng',
    'cross border logistics South Africa',
    'express delivery Gauteng',
    'supply chain solutions',
    'freight forwarding South Africa',
    'contract logistics Gauteng',
    'transport company Johannesburg',
  ],
  authors: [{ name: 'Madimetsa Logistics', url: BASE_URL }],
  creator: 'Madimetsa Logistics',
  publisher: 'Madimetsa Logistics',

  // ── Favicons & icons ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // ── Web app manifest ──────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Open Graph ────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: BASE_URL,
    siteName: 'Madimetsa Logistics',
    title: 'Madimetsa Logistics Gauteng | Freight Transport, Warehousing & Fleet Management',
    description:
      'Reliable freight transport, warehousing, fleet management and cross border logistics across South Africa. Call 072 308 9983.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madimetsa Logistics — freight transport and logistics across South Africa',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Madimetsa Logistics Gauteng | Freight Transport & Warehousing',
    description:
      'Freight transport, warehousing, fleet management and cross border logistics across South Africa. Call 072 308 9983.',
    images: ['/og-image.jpg'],
  },

  // ── Robots ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical ─────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Misc ──────────────────────────────────────────────────────────
  category: 'Logistics & Freight Transport',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#e8a33d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <OrganizationSchema />
        {/* MS Tile */}
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="none" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        {/* Google Tag (gtag.js) Loaded via Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18328564945"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18328564945');
          `}
        </Script>

        <SiteHeader />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
