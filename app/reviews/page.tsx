"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Upload, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ReviewsPage() {
  const [rating, setRating] = useState<number>(5)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "March 15, 2023",
      rating: 5,
      comment:
        "Kari's team did an amazing job on our home. They were thorough, professional, and left everything spotless. I've tried several cleaning services in the past, but this is by far the best experience I've had. Will definitely be booking regular cleanings!",
      images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      date: "February 28, 2023",
      rating: 5,
      comment:
        "I've been using Kari's Clean Touch for monthly cleanings for over a year now, and they never disappoint. The attention to detail is impressive, and my home always feels fresh and inviting after they leave. Highly recommend their services!",
      images: [],
    },
    {
      id: 3,
      name: "Jennifer Lee",
      date: "January 10, 2023",
      rating: 4,
      comment:
        "We hired Kari's team for a deep cleaning after our renovation, and they did a fantastic job. They removed all the construction dust and made our home look brand new. The only reason for 4 stars instead of 5 is that they arrived a bit late, but they did call to let us know.",
      images: ["/placeholder.svg?height=200&width=300"],
    },
    {
      id: 4,
      name: "David Wilson",
      date: "December 5, 2022",
      rating: 5,
      comment:
        "Exceptional service! The team was friendly, efficient, and thorough. They even cleaned areas I hadn't thought to mention. Our home has never looked better. Will definitely be using their services again.",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      id: 5,
      name: "Emily Parker",
      date: "November 18, 2022",
      rating: 5,
      comment:
        "I'm extremely impressed with the quality of service from Kari's Clean Touch. They were able to accommodate my last-minute request and still delivered outstanding results. The bathroom and kitchen are sparkling! Worth every penny.",
      images: [],
    },
    {
      id: 6,
      name: "Robert Thompson",
      date: "October 30, 2022",
      rating: 4,
      comment:
        "Very satisfied with the standard cleaning package. The team was professional and did a great job overall. I appreciated their attention to detail in the living areas. Would recommend to friends and family.",
      images: ["/placeholder.svg?height=200&width=300"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-sky-400">Customer Reviews</h1>
          <p className="text-lg text-sky-300/90 mb-8">
            See what our customers have to say about our cleaning services.
          </p>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-2xl font-bold">4.8</span>
            </div>
            <span className="text-gray-600">Based on {reviews.length} reviews</span>
          </div>

          <Button onClick={() => setShowReviewForm(!showReviewForm)} className="bg-sky-400 hover:bg-sky-500">
            {showReviewForm ? "Cancel" : "Write a Review"}
          </Button>
        </div>

        {showReviewForm && (
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label>Your Rating</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                        <Star
                          className={`h-8 w-8 ${rating >= star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea id="review" placeholder="Share your experience with our cleaning service..." rows={5} />
                </div>

                <div className="space-y-2">
                  <Label>Upload Photos (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Drag and drop photos here, or click to select files</p>
                    <Button variant="outline" className="mt-4">
                      <Upload className="mr-2 h-4 w-4" /> Upload Photos
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-sky-400 hover:bg-sky-500">
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="space-y-8">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{review.name}</h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex mt-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{review.comment}</p>

                    {review.images.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {review.images.map((image, index) => (
                          <div key={index} className="relative h-24 rounded-md overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Review image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">Load More Reviews</Button>
        </div>
      </div>
    </div>
  )
}
