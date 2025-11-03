import { Header } from '@/components/radio-consultant/header'
import { Footer } from '@/components/radio-consultant/footer'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Radio, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const caseStudies = [
  {
    id: 'wmix-market-turnaround',
    station: 'WMIX-FM',
    market: 'Major Market (Top 25)',
    format: 'Hot Adult Contemporary',
    challenge: 'Station ranked #8 in target demo with declining TSL (Time Spent Listening) and aging audience profile.',
    solution: [
      'Comprehensive music rotation overhaul focusing on current hits',
      'Morning show talent development and content restructuring',
      'Social media integration strategy to attract younger listeners',
      'Community engagement initiatives and local partnerships',
    ],
    results: [
      { metric: 'Rating Increase', value: '+2.3 points', period: '6 months' },
      { metric: 'Market Rank', value: '#8 → #3', period: '12 months' },
      { metric: 'TSL Growth', value: '+18 minutes', period: '6 months' },
      { metric: 'Demo Shift', value: '5 years younger', period: '12 months' },
    ],
    testimonial: {
      quote: "The transformation was remarkable. Within six months, we saw measurable improvements in every key metric. Their strategic approach and hands-on support made all the difference.",
      author: 'Jennifer Martinez',
      role: 'Program Director, WMIX-FM',
    },
  },
  {
    id: 'kzap-format-launch',
    station: 'KZAP-FM',
    market: 'Medium Market (51-100)',
    format: 'Classic Hits',
    challenge: 'New format launch in competitive market with established players. Zero brand awareness and no existing audience base.',
    solution: [
      'Strategic format positioning to differentiate from competitors',
      'Comprehensive marketing campaign with strong local focus',
      'Curated music library appealing to underserved demo',
      'Aggressive promotional strategy to build initial awareness',
    ],
    results: [
      { metric: 'First Book', value: '4.2 share', period: '3 months' },
      { metric: 'Second Book', value: '6.8 share', period: '6 months' },
      { metric: 'Market Position', value: 'Top 5', period: '9 months' },
      { metric: 'Awareness', value: '72% unaided', period: '12 months' },
    ],
    testimonial: {
      quote: "Launching a new format is incredibly risky. Their strategic guidance and industry expertise gave us the confidence to execute boldly and succeed quickly.",
      author: 'Robert Chen',
      role: 'General Manager, KZAP-FM',
    },
  },
  {
    id: 'wblu-audience-expansion',
    station: 'WBLU-FM',
    market: 'Large Market (26-50)',
    format: 'Country',
    challenge: 'Strong P1 loyalty but limited audience growth. Station plateaued at #5 with minimal P2/P3 listener development.',
    solution: [
      'Data-driven audience expansion strategy targeting adjacent demos',
      'Content diversification to appeal to broader listener base',
      'Digital streaming and podcast initiatives for audience discovery',
      'Strategic on-air positioning and imaging updates',
    ],
    results: [
      { metric: 'Cume Growth', value: '+125,000', period: '9 months' },
      { metric: 'P2/P3 Increase', value: '+45%', period: '9 months' },
      { metric: 'Share Growth', value: '+1.8 points', period: '12 months' },
      { metric: 'Revenue Impact', value: '+22%', period: '12 months' },
    ],
    testimonial: {
      quote: "We were comfortable being #5, but they showed us a clear path to #2. The audience expansion strategies they implemented exceeded all our expectations.",
      author: 'Sarah Thompson',
      role: 'Market Manager, WBLU-FM',
    },
  },
  {
    id: 'kqfx-turnaround',
    station: 'KQFX-FM',
    market: 'Small Market (101+)',
    format: 'Classic Rock',
    challenge: 'Legacy station losing relevance with declining ratings over 3 consecutive books. Revenue down 30% year-over-year.',
    solution: [
      'Brand refresh maintaining heritage while modernizing appeal',
      'Talent coaching and content optimization',
      'Community-focused initiatives to rebuild local connections',
      'Strategic digital presence enhancement',
    ],
    results: [
      { metric: 'Rating Recovery', value: '+3.1 points', period: '6 months' },
      { metric: 'Market Rank', value: '#6 → #2', period: '9 months' },
      { metric: 'Revenue Rebound', value: '+38%', period: '12 months' },
      { metric: 'Client Retention', value: '89%', period: 'ongoing' },
    ],
    testimonial: {
      quote: "They didn't just fix our ratings—they revitalized our entire station culture. We went from struggling to thriving in less than a year.",
      author: 'Michael Davis',
      role: 'Owner/GM, KQFX-FM',
    },
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--navy-primary))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-primary))] text-white pt-[140px] pb-24 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[hsl(var(--blue-accent))] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title mb-6">SUCCESS STORIES</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Real results from real clients. See how we've helped radio stations across diverse markets achieve measurable ratings improvements, audience growth, and competitive market positioning.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="scroll-mt-24">
                  {/* Header */}
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--navy-primary))] flex items-center justify-center">
                        <Radio size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-[hsl(var(--navy-dark))] mb-1">{study.station}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-[hsl(var(--gray-muted))]">
                          <span>{study.market}</span>
                          <span>•</span>
                          <span>{study.format}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="text-[hsl(var(--blue-accent))]" size={28} />
                          <h3 className="text-[hsl(var(--navy-dark))] text-2xl font-semibold">
                            THE CHALLENGE
                          </h3>
                        </div>
                        <p className="text-[hsl(var(--gray-muted))] text-lg leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <TrendingUp className="text-[hsl(var(--blue-accent))]" size={28} />
                          <h3 className="text-[hsl(var(--navy-dark))] text-2xl font-semibold">
                            OUR APPROACH
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {study.solution.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[hsl(var(--navy-primary))] mt-2 flex-shrink-0" />
                              <span className="text-[hsl(var(--gray-muted))] leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-[hsl(var(--bg-light))] rounded-lg p-8 border-l-4 border-[hsl(var(--blue-accent))]">
                        <p className="text-[hsl(var(--navy-dark))] text-lg italic mb-4 leading-relaxed">
                          "{study.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[hsl(var(--navy-primary))] flex items-center justify-center">
                            <Users size={24} className="text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-[hsl(var(--navy-dark))]">
                              {study.testimonial.author}
                            </div>
                            <div className="text-sm text-[hsl(var(--gray-muted))]">
                              {study.testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                        <h3 className="text-[hsl(var(--navy-dark))] text-2xl font-semibold mb-6 text-center">
                          THE RESULTS
                        </h3>
                        <div className="space-y-6">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center">
                              <div className="text-4xl font-bold text-[hsl(var(--blue-accent))] mb-2 font-montserrat">
                                {result.value}
                              </div>
                              <div className="text-[hsl(var(--navy-dark))] font-semibold mb-1">
                                {result.metric}
                              </div>
                              <div className="text-sm text-[hsl(var(--gray-muted))]">
                                {result.period}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < caseStudies.length - 1 && (
                    <div className="mt-16 border-t border-[hsl(var(--gray-border))]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[hsl(var(--navy-primary))] to-[hsl(var(--navy-dark))] text-white py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-white mb-6">
              READY TO WRITE YOUR SUCCESS STORY?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              These results are achievable for your station. Let's discuss how we can help you dominate your market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--navy-primary))]" asChild>
                <Link href="/contact">
                  SCHEDULE CONSULTATION
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" className="bg-[hsl(var(--blue-accent))] text-white hover:bg-[hsl(var(--blue-accent))]/90" asChild>
                <Link href="/services">VIEW SERVICES</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
