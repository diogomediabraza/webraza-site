import type { Metadata } from 'next'
import { Inter_Tight, Bebas_Neue, Space_Mono } from 'next/font/google'
import './globals.css'

// ─── Fonts ────────────────────────────────────────────────────────────────────
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
})

// Bebas Neue via Google Fonts
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

// Monospace font
const geistMono = Space_Mono({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Media Braza — Agência de Marketing Digital no Porto',
    template: '%s | Media Braza',
  },
  description:
    'Agência de marketing digital baseada no Porto. Tráfego pago, influencer marketing, gestão de redes sociais e produção de conteúdo para marcas que querem crescer na Europa.',
  keywords: [
    'agência marketing digital porto',
    'marketing digital portugal',
    'influencer marketing europa',
    'gestão redes sociais porto',
    'tráfego pago portugal',
    'media braza',
  ],
  authors: [{ name: 'Media Braza' }],
  creator: 'Media Braza',
  publisher: 'Media Braza',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://mediabraza.com',
    siteName: 'Media Braza',
    title: 'Media Braza — Agência de Marketing Digital no Porto',
    description:
      'Tráfego pago, influencer marketing e gestão de redes sociais para marcas que querem crescer na Europa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Media Braza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Braza — Agência de Marketing Digital no Porto',
    description: 'Marcas que dominam o digital. Baseados no Porto.',
    images: ['/og-image.jpg'],
  },
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mediabraza.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt"
      className={`${interTight.variable} ${bebasNeue.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
