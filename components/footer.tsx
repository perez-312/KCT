import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-sky-300">Kari's Clean Touch</h3>
            <p className="text-gray-400">Professional home cleaning services tailored to your needs.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-sky-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-sky-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-sky-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sky-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sky-300 hover:text-white">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sky-300 hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sky-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-300">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#basic" className="text-sky-300 hover:text-white">
                  Basic Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#standard" className="text-sky-300 hover:text-white">
                  Standard Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#deep" className="text-sky-300 hover:text-white">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#move" className="text-sky-300 hover:text-white">
                  Move In/Out Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-sky-300 hover:text-white">
                  Commercial Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sky-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sky-300 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Cleaning Street
                  <br />
                  Sparkle City, SC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-sky-300 mr-2" />
                <Link href="tel:+15551234567" className="text-sky-300 hover:text-white">
                  (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sky-300 mr-2" />
                <Link href="mailto:info@kariscleantouch.com" className="text-sky-300 hover:text-white">
                  info@kariscleantouch.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kari's Clean Touch. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="text-sky-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sky-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
