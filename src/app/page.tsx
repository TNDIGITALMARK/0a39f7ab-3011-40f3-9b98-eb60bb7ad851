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

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[hsl(var(--navy-primary))] to-[hsl(var(--navy-dark))] text-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-montserrat">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-montserrat">200+</div>
                <div className="text-white/80">Stations Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-montserrat">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-montserrat">50+</div>
                <div className="text-white/80">Markets Nationwide</div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}