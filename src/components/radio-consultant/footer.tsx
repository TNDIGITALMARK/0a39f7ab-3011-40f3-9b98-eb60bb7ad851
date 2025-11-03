import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[hsl(var(--navy-primary))] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">info@broadcastconsultant.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">
                    123 Radio Lane
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#programming"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Programming Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#audience"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Audience Engagement
                </Link>
              </li>
              <li>
                <Link
                  href="/services#analytics"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Performance Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services#branding"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Branding Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Broadcast Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
