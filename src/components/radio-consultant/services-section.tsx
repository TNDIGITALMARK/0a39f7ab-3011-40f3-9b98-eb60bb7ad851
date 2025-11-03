import Link from 'next/link'
import { Mic, Radio, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Mic,
    title: 'PROGRAMMING STRATEGY',
    description:
      'Comprehensive format analysis and content optimization that increases time spent listening and audience retention.',
    href: '/services#programming',
  },
  {
    icon: Radio,
    title: 'AUDIENCE ENGAGEMENT',
    description:
      'Strategic demographic targeting and engagement tactics that expand your core listener base and attract new audiences.',
    href: '/services#audience',
  },
  {
    icon: TrendingUp,
    title: 'PERFORMANCE ANALYTICS',
    description:
      'Data-driven programming adjustments that deliver measurable ratings increases and competitive market positioning.',
    href: '/services#analytics',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--navy-dark))] mb-4">OUR SERVICES</h2>
          <p className="lead-text max-w-2xl mx-auto">
            Comprehensive consulting solutions designed to transform your radio station into a market leader
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-10 text-center card-hover"
            >
              {/* Icon Container */}
              <div className="icon-container mb-6">
                <service.icon className="text-white" size={40} strokeWidth={2} />
              </div>

              {/* Service Title */}
              <h3 className="text-[hsl(var(--navy-dark))] mb-4 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[hsl(var(--gray-muted))] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA Button */}
              <Button variant="outline" size="sm" asChild>
                <Link href={service.href}>READ MORE</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
