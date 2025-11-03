import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="bg-[hsl(var(--bg-light))] pt-[140px] pb-20 md:pb-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Professional Headshot - Left Column (2/5) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px]">
              <Image
                src="/generated/consultant-headshot.png"
                alt="Professional Radio Consultant"
                width={280}
                height={280}
                className="headshot-image w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Hero Content - Right Column (3/5) */}
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="text-[hsl(var(--navy-dark))] mb-4">
              STRATEGIC RADIO CONSULTING
            </h1>
            <p className="lead-text text-xl mb-8 max-w-2xl">
              Elevating Stations. Engaging Audiences. Delivering Results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact">SCHEDULE FREE CONSULTATION</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#testimonials">VIEW SUCCESS STORIES</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
