import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-sky-400">About Kari's Clean Touch</h1>
              <p className="mt-6 text-lg text-sky-300/90">
                Founded with a passion for cleanliness and attention to detail, Kari's Clean Touch has been serving the
                local community with exceptional cleaning services for over 5 years.
              </p>
              <p className="mt-4 text-lg text-sky-300/90">
                Our mission is simple: to provide you with a spotless, healthy living environment so you can focus on
                what matters most in your life.
              </p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Cleaning team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl">Our Story</h2>
            <div className="mt-6 text-lg text-sky-300/90 space-y-4">
              <p>
                Kari's Clean Touch was founded in 2018 by Kari Johnson, who had a vision to create a cleaning service
                that truly cared about the details and the customer experience.
              </p>
              <p>
                After working for several cleaning companies and seeing the corners that were cut and the lack of
                attention to detail, Kari decided to start her own company with a commitment to excellence and
                thoroughness.
              </p>
              <p>
                What started as a one-woman operation has now grown into a team of dedicated cleaning professionals who
                share Kari's passion for creating clean, healthy living spaces for our clients.
              </p>
              <p>
                Today, we serve hundreds of satisfied customers throughout the area, providing both residential and
                commercial cleaning services with the same attention to detail and commitment to quality that Kari
                started with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-sky-400 sm:text-4xl mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mb-6">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Quality</h3>
              <p className="text-sky-300/90">
                We believe in doing the job right the first time. Our thorough approach ensures that no corner is left
                untouched and every surface shines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mb-6">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Reliability</h3>
              <p className="text-sky-300/90">
                You can count on us to show up on time, every time. We understand the importance of consistency and
                dependability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 mb-6">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Integrity</h3>
              <p className="text-sky-300/90">
                We operate with honesty and transparency in all our dealings. Our pricing is clear, and we stand behind
                our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl mb-6">Why Choose Us?</h2>
              <ul className="space-y-6">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Experienced & Vetted Staff</h3>
                    <p className="text-sky-300/90 mt-1">
                      All our cleaning professionals undergo thorough background checks and training to ensure the
                      highest quality service.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Eco-Friendly Products</h3>
                    <p className="text-sky-300/90 mt-1">
                      We use environmentally friendly cleaning products that are safe for your family, pets, and the
                      planet.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">100% Satisfaction Guarantee</h3>
                    <p className="text-sky-300/90 mt-1">
                      If you're not completely satisfied with our service, we'll come back and make it right at no
                      additional cost.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
                    <p className="text-sky-300/90 mt-1">
                      We work around your schedule to provide cleaning services at times that are convenient for you.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-64 lg:h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Cleaning service" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Experience the Difference?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Book your cleaning service today and see why our customers love Kari's Clean Touch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/book" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Book Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-600">
              <Link href="/contact" className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
