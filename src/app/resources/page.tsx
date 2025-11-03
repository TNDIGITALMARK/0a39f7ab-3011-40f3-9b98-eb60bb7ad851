import { Header } from '@/components/radio-consultant/header'
import { Footer } from '@/components/radio-consultant/footer'
import { Button } from '@/components/ui/button'
import { BookOpen, TrendingUp, Users, Lightbulb, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    category: 'Strategy',
    icon: Lightbulb,
    title: '5 Data-Driven Strategies to Increase Time Spent Listening',
    excerpt: 'Learn how to keep listeners engaged longer with proven programming tactics backed by Nielsen PPM data and industry research.',
    date: 'November 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    category: 'Audience Development',
    icon: Users,
    title: 'Understanding Gen Z Radio Consumption Patterns',
    excerpt: 'Dive into the latest research on how Gen Z discovers, consumes, and shares radio content across multiple platforms.',
    date: 'October 2024',
    readTime: '6 min read',
    featured: true,
  },
  {
    category: 'Analytics',
    icon: TrendingUp,
    title: 'How to Interpret Your PPM Ratings Report',
    excerpt: 'A comprehensive guide to understanding Portable People Meter metrics and using data to inform programming decisions.',
    date: 'October 2024',
    readTime: '12 min read',
    featured: true,
  },
  {
    category: 'Programming',
    icon: BookOpen,
    title: 'Morning Show Best Practices for 2025',
    excerpt: 'Modern morning show strategies that balance entertainment, information, and community connection to drive ratings.',
    date: 'September 2024',
    readTime: '10 min read',
    featured: false,
  },
  {
    category: 'Digital Strategy',
    icon: TrendingUp,
    title: 'Integrating Social Media into Your Radio Strategy',
    excerpt: 'Proven tactics for using social platforms to amplify your on-air content and expand your audience reach.',
    date: 'September 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    category: 'Audience Development',
    icon: Users,
    title: 'Building P1 Loyalty in Competitive Markets',
    excerpt: 'Strategic approaches to converting casual listeners into passionate fans who choose your station first.',
    date: 'August 2024',
    readTime: '9 min read',
    featured: false,
  },
  {
    category: 'Strategy',
    icon: Lightbulb,
    title: 'Format Positioning: Standing Out in Crowded Markets',
    excerpt: 'Learn how to differentiate your station from competitors through strategic positioning and messaging.',
    date: 'August 2024',
    readTime: '11 min read',
    featured: false,
  },
  {
    category: 'Analytics',
    icon: TrendingUp,
    title: 'Music Testing Methodologies That Actually Work',
    excerpt: 'Best practices for conducting music research that produces actionable insights and ratings improvements.',
    date: 'July 2024',
    readTime: '8 min read',
    featured: false,
  },
  {
    category: 'Programming',
    icon: BookOpen,
    title: 'The Science of Playlist Flow and Momentum',
    excerpt: 'How to structure your music rotation to maintain listener engagement and minimize tune-out.',
    date: 'July 2024',
    readTime: '10 min read',
    featured: false,
  },
]

const categories = [
  { name: 'All Resources', count: resources.length },
  { name: 'Strategy', count: resources.filter((r) => r.category === 'Strategy').length },
  { name: 'Audience Development', count: resources.filter((r) => r.category === 'Audience Development').length },
  { name: 'Analytics', count: resources.filter((r) => r.category === 'Analytics').length },
  { name: 'Programming', count: resources.filter((r) => r.category === 'Programming').length },
  { name: 'Digital Strategy', count: resources.filter((r) => r.category === 'Digital Strategy').length },
]

export default function ResourcesPage() {
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
              <h1 className="hero-title mb-6">INDUSTRY INSIGHTS</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Expert perspectives, research-backed strategies, and actionable insights to help radio professionals stay ahead of industry trends and drive measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-white border-b border-[hsl(var(--gray-border))]">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-montserrat font-semibold text-sm transition-all ${
                    index === 0
                      ? 'bg-[hsl(var(--navy-primary))] text-white'
                      : 'bg-[hsl(var(--bg-light))] text-[hsl(var(--navy-dark))] hover:bg-[hsl(var(--navy-primary))] hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-[hsl(var(--bg-light))]">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="mb-12">
              <h2 className="text-[hsl(var(--navy-dark))] mb-2">FEATURED ARTICLES</h2>
              <div className="w-24 h-1 bg-[hsl(var(--navy-primary))]"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.filter((r) => r.featured).map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden card-hover group"
                >
                  {/* Article Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[hsl(var(--navy-primary))] to-[hsl(var(--blue-accent))] flex items-center justify-center relative overflow-hidden">
                    <resource.icon size={64} className="text-white opacity-30 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-[hsl(var(--navy-primary))] px-3 py-1 rounded-full text-xs font-semibold font-montserrat">
                        {resource.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[hsl(var(--gray-muted))] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{resource.date}</span>
                      </div>
                      <span>•</span>
                      <span>{resource.readTime}</span>
                    </div>

                    <h3 className="text-[hsl(var(--navy-dark))] text-xl font-semibold mb-3 group-hover:text-[hsl(var(--blue-accent))] transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-[hsl(var(--gray-muted))] mb-4 leading-relaxed">
                      {resource.excerpt}
                    </p>

                    <Button variant="link" className="p-0 h-auto text-[hsl(var(--blue-accent))] hover:text-[hsl(var(--navy-primary))]">
                      Read More <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="mb-12">
              <h2 className="text-[hsl(var(--navy-dark))] mb-2">ALL ARTICLES</h2>
              <div className="w-24 h-1 bg-[hsl(var(--navy-primary))]"></div>
            </div>

            <div className="space-y-6">
              {resources.filter((r) => !r.featured).map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Article Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[hsl(var(--navy-primary))] to-[hsl(var(--blue-accent))] flex items-center justify-center">
                        <resource.icon size={40} className="text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="bg-[hsl(var(--bg-light))] text-[hsl(var(--navy-primary))] px-3 py-1 rounded-full text-xs font-semibold font-montserrat">
                          {resource.category}
                        </span>
                        <div className="flex items-center gap-3 text-sm text-[hsl(var(--gray-muted))]">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{resource.date}</span>
                          </div>
                          <span>•</span>
                          <span>{resource.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-[hsl(var(--navy-dark))] text-xl font-semibold mb-2 group-hover:text-[hsl(var(--blue-accent))] transition-colors">
                        {resource.title}
                      </h3>

                      <p className="text-[hsl(var(--gray-muted))] mb-3 leading-relaxed">
                        {resource.excerpt}
                      </p>

                      <Button variant="link" className="p-0 h-auto text-[hsl(var(--blue-accent))] hover:text-[hsl(var(--navy-primary))]">
                        Read Full Article <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-[hsl(var(--navy-primary))] to-[hsl(var(--navy-dark))] text-white py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-6">
                STAY INFORMED
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to our newsletter for exclusive industry insights, strategic frameworks, and actionable tactics delivered to your inbox monthly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded text-[hsl(var(--navy-dark))] focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-[hsl(var(--blue-accent))] text-white hover:bg-[hsl(var(--blue-accent))]/90 whitespace-nowrap">
                  SUBSCRIBE NOW
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="text-[hsl(var(--navy-dark))] mb-6">
              NEED PERSONALIZED GUIDANCE?
            </h2>
            <p className="text-xl text-[hsl(var(--gray-muted))] mb-8 max-w-2xl mx-auto">
              Our consulting services provide customized strategies tailored to your station's unique challenges and opportunities.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                SCHEDULE A CONSULTATION
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
