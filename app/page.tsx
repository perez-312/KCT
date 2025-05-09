import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Star, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Clean home interior"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Kari's Clean Touch</span>
              <span className="block text-sky-300">Professional Home Cleaning</span>
            </h1>
            <p className="mt-6 text-xl">
              We bring sparkle to your space with our professional, reliable, and thorough cleaning services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sky-400 hover:bg-sky-500">
                <Link href="/book" className="flex items-center gap-2">
                  Book Now <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-sky-300/90 max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional cleaning services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-sky-400">Professional Staff</h3>
              <p className="mt-4 text-sky-300/90">
                Our team is thoroughly vetted, trained, and insured for your peace of mind.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Star className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-sky-400">Satisfaction Guaranteed</h3>
              <p className="mt-4 text-sky-300/90">
                If you're not completely satisfied, we'll come back and make it right.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-sky-400">Flexible Scheduling</h3>
              <p className="mt-4 text-sky-300/90">
                Book appointments that work with your schedule, including evenings and weekends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl">About Kari's Clean Touch</h2>
              <p className="mt-6 text-lg text-sky-300/90">
                Founded with a passion for cleanliness and attention to detail, Kari's Clean Touch has been serving the
                local community with exceptional cleaning services for over 5 years.
              </p>
              <p className="mt-4 text-lg text-sky-300/90">
                Our mission is simple: to provide you with a spotless, healthy living environment so you can focus on
                what matters most in your life.
              </p>
              <Button className="mt-8 bg-sky-400 hover:bg-sky-500">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Cleaning team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl">Our Cleaning Packages</h2>
            <p className="mt-4 text-lg text-sky-300/90 max-w-3xl mx-auto">
              Choose the perfect cleaning package for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Basic Package */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-sky-400">Basic Clean</h3>
                <p className="mt-2 text-3xl font-bold text-teal-600">$99</p>
                <p className="text-sm text-sky-300/90">Per visit</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Dusting all accessible surfaces</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Vacuuming floors and carpets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Bathroom cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Kitchen cleaning</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-sky-400 hover:bg-sky-500">
                  <Link href="/book?package=basic">Select Package</Link>
                </Button>
              </div>
            </div>

            {/* Standard Package */}
            <div className="border border-teal-200 rounded-lg overflow-hidden shadow-md relative">
              <div className="absolute top-0 right-0 bg-sky-400 text-white px-4 py-1 text-sm font-bold">POPULAR</div>
              <div className="bg-teal-50 p-6">
                <h3 className="text-2xl font-bold text-sky-400">Standard Clean</h3>
                <p className="mt-2 text-3xl font-bold text-teal-600">$149</p>
                <p className="text-sm text-sky-300/90">Per visit</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>All Basic Clean services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Inside window cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Baseboards and door frames</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Refrigerator exterior</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Changing bed linens</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-sky-400 hover:bg-sky-500">
                  <Link href="/book?package=standard">Select Package</Link>
                </Button>
              </div>
            </div>

            {/* Deep Clean Package */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-sky-400">Deep Clean</h3>
                <p className="mt-2 text-3xl font-bold text-teal-600">$249</p>
                <p className="text-sm text-sky-300/90">Per visit</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>All Standard Clean services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Deep carpet cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Inside oven and cabinets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Inside refrigerator</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                    <span>Move-in/Move-out ready</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-sky-400 hover:bg-sky-500">
                  <Link href="/book?package=deep">Select Package</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
              <Link href="/services" className="flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-sky-300/90 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-teal-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sky-300/90 mb-6">
                "Kari's team did an amazing job on our home. They were thorough, professional, and left everything
                spotless. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Customer" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sky-400">Sarah Johnson</p>
                  <p className="text-sm text-sky-300/90">Regular Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-teal-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sky-300/90 mb-6">
                "I've tried several cleaning services, but Kari's Clean Touch is by far the best. Consistent quality and
                attention to detail every time."
              </p>
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Customer" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sky-400">Michael Rodriguez</p>
                  <p className="text-sm text-sky-300/90">Monthly Subscriber</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-teal-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sky-300/90 mb-6">
                "The deep cleaning package was exactly what our home needed after renovation. The team was efficient and
                the results were outstanding!"
              </p>
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Customer" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sky-400">Jennifer Lee</p>
                  <p className="text-sm text-sky-300/90">One-time Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
              <Link href="/reviews" className="flex items-center gap-2">
                Read All Reviews <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready for a Cleaner Home?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Book your cleaning service today and experience the Kari's Clean Touch difference.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/book" className="flex items-center gap-2">
                Book Now <Calendar className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
