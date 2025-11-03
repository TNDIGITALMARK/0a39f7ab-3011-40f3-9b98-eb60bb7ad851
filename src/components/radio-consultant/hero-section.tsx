import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--bg-light))] via-white to-[hsl(var(--bg-light))] pt-[140px] pb-20 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[hsl(var(--navy-primary))] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--blue-accent))] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Professional Headshot - Left Column (2/5) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] animate-fade-in">
              <Image
                src="/generated/consultant-headshot.png"
                alt="Professional Radio Consultant"
                width={280}
                height={280}
                className="headshot-image w-full h-full object-cover"
                priority
              />
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-4 border-[hsl(var(--blue-accent))]/20 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Hero Content - Right Column (3/5) */}
          <div className="md:col-span-3 text-center md:text-left">
            <div className="inline-block bg-[hsl(var(--blue-accent))]/10 text-[hsl(var(--navy-primary))] px-4 py-2 rounded-full text-sm font-semibold font-montserrat mb-6">
              TRUSTED BY 200+ STATIONS NATIONWIDE
            </div>
            <h1 className="text-[hsl(var(--navy-dark))] mb-6 leading-tight">
              TRANSFORM YOUR STATION INTO A MARKET LEADER
            </h1>
            <p className="lead-text text-xl mb-4 max-w-2xl text-[hsl(var(--gray-muted))]">
              Strategic programming, audience development, and performance analytics that deliver measurable ratings improvements within 90 days.
            </p>
            <div className="flex items-center gap-6 mb-8 justify-center md:justify-start text-[hsl(var(--navy-dark))] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--blue-accent))]"></div>
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--blue-accent))]"></div>
                <span>15+ Years Experience</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">SCHEDULE FREE CONSULTATION</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-[hsl(var(--navy-primary))]">
                <Link href="/case-studies">VIEW SUCCESS STORIES</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
