"use client";

import { useState } from "react";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">
          Thank you for your inquiry!
        </p>
        <p className="mt-2 text-sm text-green-700">
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+92 3XX XXXXXXX"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="car" className="text-sm font-medium text-gray-700">
          Car of Interest
        </Label>
        <select
          id="car"
          name="car"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
        >
          <option value="">Select a car</option>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your rental needs"
          className="mt-1"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-amber text-navy font-semibold hover:bg-amber-400"
      >
        Submit Inquiry
      </Button>
    </form>
  );
}
