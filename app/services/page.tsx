import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-sky-400">
            Our Cleaning Services
          </h1>
          <p className="mt-6 text-xl text-sky-300/90 max-w-3xl mx-auto">
            Choose from our range of professional cleaning services designed to meet your specific needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* Basic Clean */}
            <div id="basic" className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="Basic Cleaning" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sky-400">Basic Clean</h2>
                <p className="mt-4 text-lg text-sky-300/90">
                  Our Basic Clean service covers all the essential areas of your home, ensuring a clean and tidy
                  environment.
                </p>
                <p className="mt-2 text-2xl font-bold text-sky-400">$99</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Dusting all accessible surfaces</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Vacuuming floors and carpets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Bathroom cleaning (toilets, sinks, showers)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Kitchen cleaning (countertops, sink, stovetop)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Empty trash bins</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-sky-500 hover:bg-sky-600">
                  <Link href="/book?package=basic" className="flex items-center gap-2">
                    Book Basic Clean <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Standard Clean */}
            <div id="standard" className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2 relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Standard Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-2 md:order-1">
                <div className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  MOST POPULAR
                </div>
                <h2 className="text-3xl font-bold text-sky-400">Standard Clean</h2>
                <p className="mt-4 text-lg text-sky-300/90">
                  Our Standard Clean service includes everything in the Basic Clean plus additional services for a more
                  thorough cleaning experience.
                </p>
                <p className="mt-2 text-2xl font-bold text-sky-400">$149</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>All Basic Clean services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Inside window cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Baseboards and door frames</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Refrigerator exterior</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Changing bed linens</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Light fixture dusting</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-sky-500 hover:bg-sky-600">
                  <Link href="/book?package=standard" className="flex items-center gap-2">
                    Book Standard Clean <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Deep Clean */}
            <div id="deep" className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="Deep Cleaning" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sky-400">Deep Clean</h2>
                <p className="mt-4 text-lg text-sky-300/90">
                  Our Deep Clean service is a comprehensive cleaning solution that covers every corner of your home,
                  perfect for seasonal cleaning or special occasions.
                </p>
                <p className="mt-2 text-2xl font-bold text-sky-400">$249</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>All Standard Clean services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Deep carpet cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Inside oven and cabinets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Inside refrigerator</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Wall washing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Ceiling fan cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span>Move-in/Move-out ready</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-sky-500 hover:bg-sky-600">
                  <Link href="/book?package=deep" className="flex items-center gap-2">
                    Book Deep Clean <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sky-400 sm:text-4xl">Additional Services</h2>
            <p className="mt-4 text-lg text-sky-300/90 max-w-3xl mx-auto">
              Customize your cleaning experience with these add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-sky-400">Window Cleaning</h3>
              <p className="mt-2 text-sky-300/90">
                Professional cleaning of all windows, inside and out, including frames and sills.
              </p>
              <p className="mt-4 font-semibold text-sky-400">Starting at $75</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-sky-400">Carpet Cleaning</h3>
              <p className="mt-2 text-sky-300/90">
                Deep steam cleaning for carpets and rugs to remove stains and refresh fibers.
              </p>
              <p className="mt-4 font-semibold text-sky-400">Starting at $99</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-sky-400">Upholstery Cleaning</h3>
              <p className="mt-2 text-sky-300/90">
                Professional cleaning for sofas, chairs, and other upholstered furniture.
              </p>
              <p className="mt-4 font-semibold text-sky-400">Starting at $89</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-sky-400">Oven Cleaning</h3>
              <p className="mt-2 text-sky-300/90">Thorough cleaning of your oven, removing grease and food residue.</p>
              <p className="mt-4 font-semibold text-sky-400">Starting at $65</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-sky-400">Refrigerator Cleaning</h3>
              <p className="mt-2 text-sky-300/90">
                Complete cleaning of your refrigerator, inside and out, including shelves and drawers.
              </p>
              <p className="mt-4 font-semibold text-sky-400">Starting at $75</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-sky-400">Laundry Service</h3>
              <p className="mt-2 text-sky-300/90">Washing, drying, and folding of clothes, linens, and towels.</p>
              <p className="mt-4 font-semibold text-sky-400">Starting at $45</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Book Your Cleaning?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Schedule your cleaning service today and enjoy a spotless home tomorrow.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
