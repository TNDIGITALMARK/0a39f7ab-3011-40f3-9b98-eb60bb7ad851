'use client'

import { useState } from 'react'
import { Header } from '@/components/radio-consultant/header'
import { Footer } from '@/components/radio-consultant/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stationName: '',
    marketSize: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        stationName: '',
        marketSize: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[hsl(var(--navy-primary))] text-white pt-[140px] pb-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h1 className="hero-title mb-4">GET IN TOUCH</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform your radio station? Schedule a free consultation and discover how we can help you achieve market leadership.
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="md:col-span-2">
                <h2 className="text-[hsl(var(--navy-dark))] mb-6">CONTACT INFORMATION</h2>
                <p className="text-[hsl(var(--gray-muted))] mb-8 leading-relaxed">
                  Have questions or ready to get started? Reach out to us using the contact form or through any of the channels below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--navy-primary))] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-[hsl(var(--navy-dark))] mb-1">
                        PHONE
                      </h4>
                      <p className="text-[hsl(var(--gray-muted))]">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--navy-primary))] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-[hsl(var(--navy-dark))] mb-1">
                        EMAIL
                      </h4>
                      <p className="text-[hsl(var(--gray-muted))]">
                        info@broadcastconsultant.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--navy-primary))] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-[hsl(var(--navy-dark))] mb-1">
                        LOCATION
                      </h4>
                      <p className="text-[hsl(var(--gray-muted))]">
                        123 Radio Lane
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-[hsl(var(--navy-dark))] mb-6">REQUEST CONSULTATION</h3>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you! Your consultation request has been received. We'll be in touch within 24 hours.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-montserrat font-semibold text-sm text-[hsl(var(--navy-dark))] mb-2"
                        >
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-[hsl(var(--gray-border))] rounded focus:border-[hsl(var(--navy-primary))] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block font-montserrat font-semibold text-sm text-[hsl(var(--navy-dark))] mb-2"
                        >
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-[hsl(var(--gray-border))] rounded focus:border-[hsl(var(--navy-primary))] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-montserrat font-semibold text-sm text-[hsl(var(--navy-dark))] mb-2"
                        >
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-[hsl(var(--gray-border))] rounded focus:border-[hsl(var(--navy-primary))] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="stationName"
                          className="block font-montserrat font-semibold text-sm text-[hsl(var(--navy-dark))] mb-2"
                        >
                          STATION NAME
                        </label>
                        <input
                          type="text"
                          id="stationName"
                          name="stationName"
                          value={formData.stationName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-[hsl(var(--gray-border))] rounded focus:border-[hsl(var(--navy-primary))] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="marketSize"
                        className="block font-montserrat font-semibold text-sm text-[hsl(var(--navy-dark))] mb-2"
                      >
                        MARKET SIZE
                      </label>
                      <select
                        id="marketSize"
                        name="marketSize"
                        value={formData.marketSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-[hsl(var(--gray-border))] rounded focus:border-[hsl(var(--navy-primary))] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select market size</option>
                        <option value="major">Major Market (1-25)</option>
                        <option value="large">Large Market (26-50)</option>
                        <option value="medium">Medium Market (51-100)</option>
                        <option value="small">Small Market (101+)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-montserrat font-semibold text-sm text-[hsl(var(--navy-dark))] mb-2"
                      >
                        MESSAGE *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-[hsl(var(--gray-border))] rounded focus:border-[hsl(var(--navy-primary))] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your station and consulting needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        'SENDING...'
                      ) : (
                        <>
                          <Send size={20} />
                          REQUEST CONSULTATION
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
