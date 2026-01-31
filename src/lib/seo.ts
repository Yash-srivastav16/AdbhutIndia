import { Metadata } from 'next'

const siteConfig = {
  name: 'Adbhut India',
  description: 'Multi-vertical business portfolio offering real estate, IRCTC food delivery, advertising solutions, and soft toys in Lucknow.',
  url: 'https://www.adbhutindia.co.in',
  ogImage: 'https://www.adbhutindia.co.in/og-image.jpg',
  keywords: [
    'Adbhut India',
    'Real Estate Lucknow',
    'IRCTC Food Delivery',
    'Advertising Agency Lucknow',
    'Soft Toys India',
    'Services in Lucknow',
  ],
}

export function generateMetadata(
  title: string,
  description: string,
  path: string = '',
  keywords?: string[]
): Metadata {
  const url = `${siteConfig.url}${path}`
  
  return {
    metadataBase: new URL(siteConfig.url),
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: keywords || siteConfig.keywords,
    authors: [{ name: 'Adbhut India' }],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
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
    verification: {
      google: 'your-google-verification-code',
      // Add other verification codes as needed
    },
  }
}

// JSON-LD Schema for Organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Adbhut India',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/adbhut-logo.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    // Add your social media URLs
    'https://www.facebook.com/adbhutindia',
    'https://www.instagram.com/adbhutindia',
    'https://www.linkedin.com/company/adbhutindia',
  ],
}