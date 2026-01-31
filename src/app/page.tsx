import HeroSlider from '@/components/HeroSlider'
import ServiceGrid from '@/components/ServiceGrid'
import StatsCounter from '@/components/StatsCounter'
import ProcessFlow from '@/components/ProcessFlow'
import { generateMetadata } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientReviews from '@/components/ClientReview'

export const metadata = generateMetadata(
  'Home',
  'Adbhut India - Your trusted partner for real estate, IRCTC food delivery, advertising solutions, and quality soft toys in Lucknow.',
  '/',
  ['Adbhut India', 'Multi-vertical business', 'Lucknow services', 'business portfolio']
)

export default function HomePage() {
  return (
    <main>
     <Header />
      <main>
        <HeroSlider />
        <ServiceGrid />
        <StatsCounter />
        <ProcessFlow />
        <ClientReviews/>
      </main>
      <Footer/>
    </main>
  )
}