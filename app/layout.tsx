import type { Metadata } from 'next'
import { Inter_Tight, Bebas_Neue, Space_Mono } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const geistMono = Space_Mono({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WeBraza — Um ecossistema criativo e estratégico',
    template: '%s | WeBraza',
  },
  description: 'WeBraza é um grupo criativo e estratégico com cinco operações integradas: branding, performance, influência, produção e conteúdo. Baseado no Porto.',
  keywords: [
    'webraza',
    'grupo criativo portugal',
    'branding porto',
    'marketing digital portugal',
    'influencer marketing europa',
    'ecossistema criativo',
    'mediabraza',
    'wedigitalbranding',
    'braza connecta',
  ],
  authors: [{ name: 'WeBraza' }],
  creator: 'WeBraza',
  publisher: 'WeBraza',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://webraza.com',
    siteName: 'WeBraza',
    title: 'WeBraza — Um ecossistema criativo e estratégico',
    description: 'Cinco operações integradas: branding, performance, influência, produção e conteúdo. Baseado no Porto.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WeBraza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeBraza — Um ecossistema criativo e estratégico',
    description: 'Não é agência. É estrutura. Cinco operações integradas.',
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webraza.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${interTight.variable} ${bebasNeue.variable} ${geistMono.variable}`}>
      <head>
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
