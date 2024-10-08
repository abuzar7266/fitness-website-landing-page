import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AsSeenOnSection from '../components/AsSeenOnSection'
import WorkoutPlansSection from '../components/WorkoutPlansSection'
import MembershipSection from '../components/MembershipSection'
import TestimonialsSection from '../components/TestimonialsSection'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <AsSeenOnSection />
        <WorkoutPlansSection />
        <MembershipSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}