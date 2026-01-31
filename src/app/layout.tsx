import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { generateMetadata } from '@/lib/seo'
import { organizationSchema } from '@/lib/seo'
import WhatsAppButton from '@/components/WhatsappButton'
import SiteLoader from '@/components/SiteLoader'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = generateMetadata(
  'Adbhut India',
  'Multi-vertical business portfolio offering real estate, IRCTC food delivery, advertising solutions, and soft toys in Lucknow.',
  '/'
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white font-poppins antialiased">
        <SiteLoader/>
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  )
}