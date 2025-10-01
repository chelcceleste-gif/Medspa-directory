import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSpa BC - Medical Spa Directory',
  description: 'Find the best medical spas and aesthetic treatments in British Columbia',
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
