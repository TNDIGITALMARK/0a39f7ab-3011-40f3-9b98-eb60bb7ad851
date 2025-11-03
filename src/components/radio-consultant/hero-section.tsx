'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const backgroundImages = [
  '/generated/radio-studio-bg-1.png',
  '/generated/radio-studio-bg-2.png',
  '/generated/radio-waves-bg-3.png'
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy-primary))] to-[hsl(var(--blue-accent))] pt-[140px] pb-20 md:pb-32 overflow-hidden animate-gradient">
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient && backgroundImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 0.35 : 0,
              transitionDuration: '2000ms'
            }}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))]/80 via-[hsl(var(--navy-primary))]/70 to-[hsl(var(--blue-accent))]/60"></div>
      </div>

      {/* Floating animated orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[hsl(var(--blue-accent))] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[hsl(var(--blue-accent))] rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
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
              {/* Animated decorative ring */}
              <div className="absolute -inset-4 border-4 border-[hsl(var(--blue-accent))]/40 rounded-full -z-10 animate-pulse-ring"></div>
              <div className="absolute -inset-6 border-2 border-white/20 rounded-full -z-10 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Hero Content - Right Column (3/5) */}
          <div className="md:col-span-3 text-center md:text-left">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold font-montserrat mb-6 border border-white/20">
              TRUSTED BY 200+ STATIONS NATIONWIDE
            </div>
            <h1 className="hero-title mb-6 leading-tight">
              TRANSFORM YOUR STATION INTO A MARKET LEADER
            </h1>
            <p className="text-white/90 text-xl mb-4 max-w-2xl drop-shadow-lg">
              Strategic programming, audience development, and performance analytics that deliver measurable ratings improvements within 90 days.
            </p>
            <div className="flex items-center gap-6 mb-8 justify-center md:justify-start text-white font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--blue-accent))] shadow-lg shadow-[hsl(var(--blue-accent))]/50"></div>
                <span className="drop-shadow-md">Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--blue-accent))] shadow-lg shadow-[hsl(var(--blue-accent))]/50"></div>
                <span className="drop-shadow-md">15+ Years Experience</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-white text-[hsl(var(--navy-primary))] hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">SCHEDULE FREE CONSULTATION</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--navy-primary))] shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/case-studies">VIEW SUCCESS STORIES</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slideshow indicators */}
        {isClient && (
          <div className="flex justify-center gap-2 mt-12">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? 'bg-white w-8 shadow-lg shadow-white/50'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
