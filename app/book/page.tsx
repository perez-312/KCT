"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar, Clock, Home, User, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("package") || "standard"

  const [selectedPackage, setSelectedPackage] = useState(initialPackage)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [bookingStep, setBookingStep] = useState(1)

  const handleContinue = () => {
    setBookingStep(bookingStep + 1)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setBookingStep(bookingStep - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-sky-400">Book Your Cleaning Service</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className={`flex flex-col items-center ${bookingStep >= 1 ? "text-sky-400" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${bookingStep >= 1 ? "border-sky-400 bg-sky-50" : "border-gray-300"}`}
              >
                <Home className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Service</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${bookingStep >= 2 ? "bg-sky-400" : "bg-gray-300"}`}></div>
            <div className={`flex flex-col items-center ${bookingStep >= 2 ? "text-sky-400" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${bookingStep >= 2 ? "border-sky-400 bg-sky-50" : "border-gray-300"}`}
              >
                <Calendar className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Schedule</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${bookingStep >= 3 ? "bg-sky-400" : "bg-gray-300"}`}></div>
            <div className={`flex flex-col items-center ${bookingStep >= 3 ? "text-sky-400" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${bookingStep >= 3 ? "border-sky-400 bg-sky-50" : "border-gray-300"}`}
              >
                <User className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Details</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${bookingStep >= 4 ? "bg-sky-400" : "bg-gray-300"}`}></div>
            <div className={`flex flex-col items-center ${bookingStep >= 4 ? "text-sky-400" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${bookingStep >= 4 ? "border-sky-400 bg-sky-50" : "border-gray-300"}`}
              >
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        {/* Step 1: Select Service */}
        {bookingStep === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-sky-400">Select Your Cleaning Package</h2>
            <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage} className="space-y-6">
              <div
                className={`border rounded-lg p-6 ${selectedPackage === "basic" ? "border-sky-500 bg-sky-50" : "border-gray-200"}`}
              >
                <div className="flex items-start">
                  <RadioGroupItem value="basic" id="basic" className="mt-1" />
                  <div className="ml-3">
                    <Label htmlFor="basic" className="text-xl font-semibold text-sky-400">
                      Basic Clean
                    </Label>
                    <p className="text-sky-300/90 mt-1">
                      Essential cleaning for all rooms, including dusting, vacuuming, and bathroom/kitchen cleaning.
                    </p>
                    <p className="text-sky-400 font-bold mt-2">$99</p>
                  </div>
                </div>
              </div>

              <div
                className={`border rounded-lg p-6 ${selectedPackage === "standard" ? "border-sky-500 bg-sky-50" : "border-gray-200"}`}
              >
                <div className="flex items-start">
                  <RadioGroupItem value="standard" id="standard" className="mt-1" />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <Label htmlFor="standard" className="text-xl font-semibold text-sky-400">
                        Standard Clean
                      </Label>
                      <span className="ml-2 bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        POPULAR
                      </span>
                    </div>
                    <p className="text-sky-300/90 mt-1">
                      More thorough cleaning including inside windows, baseboards, and changing bed linens.
                    </p>
                    <p className="text-sky-400 font-bold mt-2">$149</p>
                  </div>
                </div>
              </div>

              <div
                className={`border rounded-lg p-6 ${selectedPackage === "deep" ? "border-sky-500 bg-sky-50" : "border-gray-200"}`}
              >
                <div className="flex items-start">
                  <RadioGroupItem value="deep" id="deep" className="mt-1" />
                  <div className="ml-3">
                    <Label htmlFor="deep" className="text-xl font-semibold text-sky-400">
                      Deep Clean
                    </Label>
                    <p className="text-sky-300/90 mt-1">
                      Comprehensive cleaning including carpet cleaning, inside appliances, and move-in/move-out ready.
                    </p>
                    <p className="text-sky-400 font-bold mt-2">$249</p>
                  </div>
                </div>
              </div>
            </RadioGroup>

            <div className="mt-8 flex justify-end">
              <Button onClick={handleContinue} className="bg-sky-500 hover:bg-sky-600">
                Continue to Schedule
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date and Time */}
        {bookingStep === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-sky-400">Select Date and Time</h2>

            <div className="mb-8">
              <Label className="text-lg font-medium mb-4 block text-sky-400">Select a Date</Label>
              <div className="border rounded-lg p-4">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="mx-auto"
                  disabled={(date) => {
                    // Disable past dates and Sundays
                    return date < new Date() || date.getDay() === 0
                  }}
                />
              </div>
            </div>

            <div className="mb-8">
              <Label className="text-lg font-medium mb-4 block text-sky-400">Select a Time</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                  <Button key={time} variant="outline" className="justify-start">
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleContinue} className="bg-sky-500 hover:bg-sky-600">
                Continue to Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Customer Details */}
        {bookingStep === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-sky-400">Your Details</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sky-400">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sky-400">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sky-400">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sky-400">
                  Phone Number
                </Label>
                <Input id="phone" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sky-400">
                  Address
                </Label>
                <Input id="address" placeholder="123 Main St" />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sky-400">
                    City
                  </Label>
                  <Input id="city" placeholder="Anytown" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sky-400">
                    State
                  </Label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      {/* Add more states as needed */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-sky-400">
                    ZIP Code
                  </Label>
                  <Input id="zip" placeholder="12345" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sky-400">
                  Special Instructions
                </Label>
                <Textarea id="notes" placeholder="Any special requests or instructions for our cleaning team..." />
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleContinue} className="bg-sky-500 hover:bg-sky-600">
                Continue to Payment
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {bookingStep === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-sky-400">Payment</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-sky-400">Order Summary</CardTitle>
                <CardDescription className="text-sky-300/90">Review your booking details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-sky-400">Service:</span>
                  <span className="font-semibold text-sky-300/90">
                    {selectedPackage === "basic" && "Basic Clean"}
                    {selectedPackage === "standard" && "Standard Clean"}
                    {selectedPackage === "deep" && "Deep Clean"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-sky-400">Date:</span>
                  <span className="text-sky-300/90">
                    {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-sky-400">Time:</span>
                  <span className="text-sky-300/90">9:00 AM</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span className="text-sky-400">Total:</span>
                    <span className="text-sky-600">
                      {selectedPackage === "basic" && "$99.00"}
                      {selectedPackage === "standard" && "$149.00"}
                      {selectedPackage === "deep" && "$249.00"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card" className="text-sky-400">
                  Credit Card
                </TabsTrigger>
                <TabsTrigger value="paypal" className="text-sky-400">
                  PayPal
                </TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="space-y-6 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="cardName" className="text-sky-400">
                    Name on Card
                  </Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-sky-400">
                    Card Number
                  </Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-sky-400">
                      Expiry Date
                    </Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc" className="text-sky-400">
                      CVC
                    </Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="paypal" className="mt-6">
                <div className="text-center p-6 border rounded-lg">
                  <p className="mb-4 text-sky-300/90">Click the button below to pay with PayPal</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Pay with PayPal</Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button className="bg-sky-500 hover:bg-sky-600">Complete Booking</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
