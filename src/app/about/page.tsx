import { Header } from '@/components/radio-consultant/header'
import { Footer } from '@/components/radio-consultant/footer'
import { Button } from '@/components/ui/button'
import { Award, Target, Users, TrendingUp, CheckCircle, Radio } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Stations Served' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Markets Nationwide' },
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your station\'s performance improvements and ratings growth.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'We work alongside your team, not above them, to implement sustainable strategies.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Decades of combined experience across major, mid-size, and small markets.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Informed',
    description: 'Every recommendation is backed by analytics, research, and industry best practices.',
  },
]

const team = [
  {
    name: 'Michael Chen',
    role: 'Founder & Lead Consultant',
    bio: 'With over 15 years of experience in radio programming and 8+ years consulting top-rated stations across the country, Michael brings a data-driven approach to broadcast excellence.',
    achievements: [
      'Led programming for #1 rated stations in 3 major markets',
      'Developed award-winning content strategies',
      'Consulted for 50+ stations with measurable ratings increases',
    ],
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Audience Development Specialist',
    bio: 'Sarah specializes in demographic targeting and digital engagement strategies that expand listener bases and build lasting audience relationships.',
    achievements: [
      '10+ years in audience research and analytics',
      'Certified in Nielsen PPM methodology',
      'Expert in multi-platform content strategies',
    ],
  },
  {
    name: 'David Thompson',
    role: 'Brand Strategy Consultant',
    bio: 'David crafts compelling brand identities that differentiate stations in competitive markets and create emotional connections with listeners.',
    achievements: [
      'Rebranded 25+ successful radio stations',
      '12 years in radio marketing and promotion',
      'Award-winning campaign strategist',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[hsl(var(--navy-primary))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy-primary))] text-white pt-[140px] pb-24 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--blue-accent))] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white mb-6 animate-fade-in">ABOUT US</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                We're a team of broadcast industry veterans dedicated to transforming radio stations into market leaders through strategic programming, audience development, and performance optimization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--navy-primary))]" asChild>
                  <Link href="/contact">WORK WITH US</Link>
                </Button>
                <Button size="lg" className="bg-[hsl(var(--blue-accent))] text-white hover:bg-[hsl(var(--blue-accent))]/90" asChild>
                  <Link href="/case-studies">VIEW CASE STUDIES</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-[hsl(var(--gray-border))]">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-[hsl(var(--navy-primary))] mb-2 font-montserrat">
                    {stat.number}
                  </div>
                  <div className="text-[hsl(var(--gray-muted))] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-[hsl(var(--bg-light))]">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-[hsl(var(--navy-dark))] mb-4">OUR STORY</h2>
                <div className="w-24 h-1 bg-[hsl(var(--navy-primary))] mx-auto"></div>
              </div>

              <div className="space-y-6 text-[hsl(var(--gray-muted))] text-lg leading-relaxed">
                <p>
                  Founded in 2009, our consulting firm emerged from a simple observation: too many talented radio professionals were struggling to adapt to rapidly changing audience behaviors and media consumption patterns.
                </p>
                <p>
                  Our founder, Michael Chen, spent over a decade programming top-rated stations in major markets before recognizing a critical need for strategic, data-driven consulting that goes beyond surface-level advice. He assembled a team of industry veterans who share his passion for broadcast excellence and commitment to measurable results.
                </p>
                <p>
                  Today, we've helped over 200 radio stations across 50+ markets improve their ratings, expand their audiences, and strengthen their market positions. Our approach combines decades of hands-on programming experience with cutting-edge analytics and proven strategic frameworks.
                </p>
                <p>
                  We don't believe in one-size-fits-all solutions. Every station, market, and format is unique, and our consulting reflects that reality. We work closely with your team to understand your specific challenges, opportunities, and goals—then develop customized strategies that deliver real, lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-[hsl(var(--navy-dark))] mb-4">OUR VALUES</h2>
              <p className="text-[hsl(var(--gray-muted))] text-lg max-w-2xl mx-auto">
                These principles guide every engagement and ensure we deliver exceptional value to our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 text-center shadow-md card-hover"
                >
                  <div className="icon-container mb-6">
                    <value.icon className="text-white" size={40} strokeWidth={2} />
                  </div>
                  <h3 className="text-[hsl(var(--navy-dark))] text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[hsl(var(--gray-muted))] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-[hsl(var(--bg-light))]">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-[hsl(var(--navy-dark))] mb-4">MEET THE TEAM</h2>
              <p className="text-[hsl(var(--gray-muted))] text-lg max-w-2xl mx-auto">
                Industry veterans with a proven track record of transforming radio stations into market leaders.
              </p>
            </div>

            <div className="space-y-16">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-5 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Team Member Photo Placeholder */}
                  <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="bg-gradient-to-br from-[hsl(var(--navy-primary))] to-[hsl(var(--blue-accent))] rounded-lg aspect-square flex items-center justify-center shadow-lg">
                      <Radio size={120} className="text-white opacity-30" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-[hsl(var(--navy-dark))] mb-2">{member.name}</h3>
                    <div className="text-[hsl(var(--blue-accent))] font-semibold text-lg mb-4 font-montserrat">
                      {member.role}
                    </div>
                    <p className="text-[hsl(var(--gray-muted))] leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[hsl(var(--navy-primary))] flex-shrink-0 mt-0.5" />
                          <span className="text-[hsl(var(--navy-dark))]">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[hsl(var(--navy-primary))] to-[hsl(var(--navy-dark))] text-white py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-white mb-6">
              READY TO WORK TOGETHER?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help your station achieve market leadership.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[hsl(var(--navy-primary))]" asChild>
              <Link href="/contact">SCHEDULE A CONSULTATION</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
