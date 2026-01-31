import { generateMetadata } from '@/lib/seo'
import Image from 'next/image'

export const metadata = generateMetadata(
  'Real Estate',
  'Discover residential and commercial properties in Lucknow. Adbhut India offers the finest real estate investments with transparent dealings.',
  '/real-estate',
  ['Real Estate Lucknow', 'Premium Properties', 'Residential Spaces', 'Commercial Real Estate']
)

export default function RealEstatePage() {
  // JSON-LD for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real Estate Services',
    provider: {
      '@type': 'Organization',
      name: 'Adbhut India',
    },
    areaServed: {
      '@type': 'City',
      name: 'Lucknow',
    },
    description: 'Residential and commercial real estate services in Lucknow',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Your page content here */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Premium <span className="text-[var(--gold)]">Real Estate</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover your dream property in Lucknow&apos;s most sought-after locations.
            </p>
            {/* Add more content */}
          </div>
        </section>
      </main>
    </>
  )
}