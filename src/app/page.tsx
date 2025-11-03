import { Header } from '@/components/radio-consultant/header'
import { HeroSection } from '@/components/radio-consultant/hero-section'
import { ServicesSection } from '@/components/radio-consultant/services-section'
import { TestimonialsSection } from '@/components/radio-consultant/testimonials-section'
import { Footer } from '@/components/radio-consultant/footer'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}