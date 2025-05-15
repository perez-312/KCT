"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Kari's Clean Touch Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-sky-400">Kari's Clean Touch</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sky-400 hover:text-sky-500 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-sky-400 hover:text-sky-500 font-medium">
              Services
            </Link>
            <Link href="/book" className="text-sky-400 hover:text-sky-500 font-medium">
              Book Now
            </Link>
            <Link href="/reviews" className="text-sky-400 hover:text-sky-500 font-medium">
              Reviews
            </Link>
            <Link href="/about" className="text-sky-400 hover:text-sky-500 font-medium">
              About
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-sky-400 hover:bg-sky-500">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-teal-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sky-400 hover:text-sky-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-sky-400 hover:text-sky-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/book"
              className="block text-sky-400 hover:text-sky-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
            <Link
              href="/reviews"
              className="block text-sky-400 hover:text-sky-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="block text-sky-400 hover:text-sky-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button className="w-full bg-sky-400 hover:bg-sky-500">
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
