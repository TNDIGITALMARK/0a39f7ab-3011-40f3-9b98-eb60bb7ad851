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
    <section id="testimonials" className="relative py-20 bg-gradient-to-br from-[hsl(var(--bg-light))] via-white to-[hsl(var(--bg-light))] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-96 h-96 bg-[hsl(var(--navy-primary))] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[hsl(var(--blue-accent))] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[hsl(var(--navy-dark))] mb-4">CLIENT SUCCESS STORIES</h2>
          <div className="w-24 h-1 bg-[hsl(var(--navy-primary))] mx-auto mb-6"></div>
          <p className="lead-text max-w-2xl mx-auto text-[hsl(var(--gray-muted))]">
            Real results from radio professionals who've transformed their stations with our strategic guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-all border-l-4 border-[hsl(var(--blue-accent))]"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[hsl(var(--blue-accent))] opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote size={48} />
              </div>

              {/* Testimonial Quote */}
              <p className="text-[hsl(var(--navy-dark))] text-lg mb-6 relative z-10 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="border-t border-[hsl(var(--gray-border))] pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--navy-primary))] to-[hsl(var(--blue-accent))] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg font-montserrat">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-[hsl(var(--navy-dark))]">
                    {testimonial.name}
                  </p>
                  <p className="text-[hsl(var(--gray-muted))] text-sm">
                    {testimonial.title} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="text-[hsl(var(--navy-dark))] text-xl font-semibold mb-8 font-montserrat">
            TRUSTED BY LEADING STATIONS
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="client-logo font-montserrat font-bold text-[hsl(var(--navy-dark))] text-lg hover:scale-110 transition-transform cursor-default"
                style={{ width: `${logo.width}px` }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
