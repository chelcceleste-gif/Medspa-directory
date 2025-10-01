import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MedSpa BC - Medical Spa Directory | Find Top Aesthetic Clinics in British Columbia',
    template: '%s | MedSpa BC Directory'
  },
  description: 'Find the best medical spas and aesthetic clinics in British Columbia. Connect with top-rated providers for Botox, fillers, laser treatments, and more. Read reviews and book consultations.',
  keywords: [
    'medical spa BC',
    'medspa Vancouver', 
    'aesthetic clinic British Columbia',
    'Botox Vancouver',
    'dermal fillers BC',
    'laser hair removal Vancouver',
    'skin rejuvenation BC',
    'cosmetic procedures Vancouver',
    'medical spa directory',
    'beauty treatments BC'
  ],
  authors: [{ name: 'MedSpa BC' }],
  creator: 'MedSpa BC Directory',
  publisher: 'MedSpa BC',
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
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://medspa-directory.vercel.app',
    siteName: 'MedSpa BC Directory',
    title: 'MedSpa BC - Medical Spa Directory | Find Top Aesthetic Clinics',
    description: 'Find the best medical spas and aesthetic clinics in British Columbia. Connect with top-rated providers for Botox, fillers, laser treatments, and more.',
    images: [
      {
        url: 'https://medspa-directory.vercel.app/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'MedSpa BC - Medical Spa Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedSpa BC - Medical Spa Directory',
    description: 'Find the best medical spas and aesthetic clinics in British Columbia.',
    images: ['https://medspa-directory.vercel.app/hero-background.jpg'],
  },
  alternates: {
    canonical: 'https://medspa-directory.vercel.app',
  },
  category: 'health',
  classification: 'Medical Spa Directory',
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'British Columbia',
    'geo.position': '49.2827;-123.1207',
    'ICBM': '49.2827, -123.1207',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
