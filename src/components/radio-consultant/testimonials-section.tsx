import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Working with this consultant increased our morning drive ratings by 40 percent in just three months. The strategic insights and programming adjustments were game-changing.',
    name: 'Sarah Johnson',
    title: 'General Manager',
    company: 'WXYZ Radio Chicago',
  },
  {
    quote:
      'The programming strategy completely transformed our station identity and listener engagement. We saw immediate results in both ratings and revenue.',
    name: 'Mike Davidson',
    title: 'Program Director',
    company: 'KQED Radio Denver',
  },
]

const clientLogos = [
  { name: 'POWER 98.7 FM', width: 120 },
  { name: 'KISS FM', width: 100 },
  { name: 'MIDWEST RADIO', width: 140 },
  { name: 'LIPSO FM', width: 110 },
  { name: '96.1 THE VOICE', width: 130 },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--bg-light))]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--navy-dark))] mb-4">WHAT OUR CLIENTS SAY</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-[hsl(var(--navy-primary))] opacity-20">
                <Quote size={40} />
              </div>

              {/* Testimonial Quote */}
              <p className="text-[hsl(var(--navy-dark))] text-lg italic mb-6 relative z-10 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="border-t border-[hsl(var(--gray-border))] pt-4">
                <p className="font-montserrat font-semibold text-[hsl(var(--navy-dark))]">
                  {testimonial.name}
                </p>
                <p className="text-[hsl(var(--gray-muted))] text-sm">
                  {testimonial.title} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="client-logo font-montserrat font-bold text-[hsl(var(--navy-dark))] text-lg"
              style={{ width: `${logo.width}px` }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
