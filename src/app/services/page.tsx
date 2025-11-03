import Link from 'next/link'
import { Header } from '@/components/radio-consultant/header'
import { Footer } from '@/components/radio-consultant/footer'
import { Button } from '@/components/ui/button'
import { Mic, Radio, TrendingUp, Target } from 'lucide-react'

const services = [
  {
    id: 'programming',
    icon: Mic,
    title: 'PROGRAMMING STRATEGY',
    description:
      'Comprehensive format analysis and content optimization that increases time spent listening and audience retention.',
    details: [
      'Format analysis and competitive positioning',
      'Content flow and scheduling optimization',
      'Talent development and coaching',
      'Music programming and rotation strategies',
      'Benchmark analysis and implementation',
    ],
  },
  {
    id: 'audience',
    icon: Radio,
    title: 'AUDIENCE ENGAGEMENT',
    description:
      'Strategic demographic targeting and engagement tactics that expand your core listener base and attract new audiences.',
    details: [
      'Demographic targeting and analysis',
      'Social media strategy and integration',
      'Community engagement initiatives',
      'Listener loyalty program development',
      'Multi-platform content strategies',
    ],
  },
  {
    id: 'analytics',
    icon: TrendingUp,
    title: 'PERFORMANCE ANALYTICS',
    description:
      'Data-driven programming adjustments that deliver measurable ratings increases and competitive market positioning.',
    details: [
      'Ratings analysis and trend monitoring',
      'Market share evaluation',
      'Competitive intelligence gathering',
      'KPI tracking and reporting',
      'ROI measurement and optimization',
    ],
  },
  {
    id: 'branding',
    icon: Target,
    title: 'BRANDING CONSULTATION',
    description:
      'Strategic brand positioning and identity development that differentiates your station and builds lasting audience connections.',
    details: [
      'Brand identity and positioning strategy',
      'Messaging and voice development',
      'Visual identity consultation',
      'Marketing campaign strategy',
      'Brand consistency standards',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[hsl(var(--navy-primary))] text-white pt-[140px] pb-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h1 className="hero-title mb-4">OUR SERVICES</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your radio station into a market leader through strategic programming, audience development, and performance optimization.
            </p>
          </div>
        </section>

        {/* Services Details Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Service Content */}
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <div className="icon-container mb-6 mx-0">
                        <service.icon className="text-white" size={40} strokeWidth={2} />
                      </div>

                      <h2 className="text-[hsl(var(--navy-dark))] mb-4">
                        {service.title}
                      </h2>

                      <p className="text-[hsl(var(--gray-muted))] text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-[hsl(var(--navy-primary))] mt-2 flex-shrink-0" />
                            <span className="text-[hsl(var(--navy-dark))]">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button asChild>
                        <Link href="/contact">GET STARTED</Link>
                      </Button>
                    </div>

                    {/* Service Visual */}
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <div className="bg-[hsl(var(--bg-light))] rounded-lg p-12 text-center shadow-md">
                        <service.icon
                          className="text-[hsl(var(--navy-primary))] mx-auto mb-6"
                          size={120}
                          strokeWidth={1.5}
                        />
                        <h3 className="text-[hsl(var(--navy-dark))] mb-4">
                          Proven Results
                        </h3>
                        <p className="text-[hsl(var(--gray-muted))] leading-relaxed">
                          Our clients typically see measurable improvements within the first 90 days of implementation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[hsl(var(--navy-primary))] text-white py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-white mb-6">
              READY TO TRANSFORM YOUR STATION?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss how our proven strategies can help you achieve market leadership.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--navy-primary))]" asChild>
              <Link href="/contact">SCHEDULE CONSULTATION</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
