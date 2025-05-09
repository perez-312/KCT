"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-sky-400">Contact Us</h1>
          <p className="mt-6 text-xl text-sky-300/90 max-w-3xl mx-auto">
            Have questions or ready to book a cleaning? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 mb-6">
                <MapPin className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-2">Our Location</h3>
              <p className="text-sky-300/90">
                123 Cleaning Street
                <br />
                Sparkle City, SC 12345
                <br />
                United States
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 mb-6">
                <Phone className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-2">Phone & Email</h3>
              <p className="text-sky-300/90 mb-2">
                <Link href="tel:+15551234567" className="hover:text-sky-400">
                  (555) 123-4567
                </Link>
              </p>
              <p className="text-sky-300/90">
                <Link href="mailto:info@kariscleantouch.com" className="hover:text-sky-400">
                  info@kariscleantouch.com
                </Link>
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 mb-6">
                <Clock className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-2">Business Hours</h3>
              <p className="text-sky-300/90">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">Send Us a Message</h2>

            {formSubmitted ? (
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 mb-6">
                  <Send className="h-6 w-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-sky-400 mb-2">Message Sent!</h3>
                <p className="text-sky-300/90 mb-6">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setFormSubmitted(false)} className="bg-sky-500 hover:bg-sky-600">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="booking">Booking Inquiry</SelectItem>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={6} required />
                </div>

                <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map integration */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-sky-300/90">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-sky-400 mb-2">How do I book a cleaning service?</h3>
                <p className="text-sky-300/90">
                  You can book a cleaning service through our website by visiting the{" "}
                  <Link href="/book" className="text-sky-400 hover:underline">
                    Book Now
                  </Link>{" "}
                  page, or by calling us at{" "}
                  <Link href="tel:+15551234567" className="text-sky-400 hover:underline">
                    (555) 123-4567
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-sky-400 mb-2">What is your cancellation policy?</h3>
                <p className="text-sky-300/90">
                  We require at least 24 hours notice for cancellations. Cancellations made with less than 24 hours
                  notice may be subject to a cancellation fee.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-sky-400 mb-2">Do I need to be home during the cleaning?</h3>
                <p className="text-sky-300/90">
                  No, you don't need to be home during the cleaning. Many of our clients provide us with a key or access
                  code. We ensure all our staff are thoroughly vetted and trustworthy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-sky-400 mb-2">What cleaning products do you use?</h3>
                <p className="text-sky-300/90">
                  We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the
                  environment. If you have specific product preferences or allergies, please let us know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
