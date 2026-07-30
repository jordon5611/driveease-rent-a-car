"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site, whatsappHref } from "@/lib/site";

const fieldClass =
  "mt-1.5 border-navy-200 bg-white text-navy-900 placeholder:text-navy-400";
const labelClass = "text-sm font-medium text-navy-700";

/**
 * There is no server to receive form posts, so the inquiry is handed off to
 * WhatsApp with the details pre-filled. That way a submission always reaches us.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const carId = data.get("car");
    const car = cars.find((c) => c.id === carId);

    const lines = [
      `Hi ${site.name}, I would like to inquire about renting a car.`,
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : null,
      car ? `Car of interest: ${car.name}` : null,
      data.get("message") ? `Details: ${data.get("message")}` : null,
    ].filter(Boolean);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <MessageCircle size={22} />
        </div>
        <p className="mt-4 text-lg font-semibold text-navy-900">
          WhatsApp is opening
        </p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy-600">
          Your inquiry has been prepared in a WhatsApp chat with us. Just press
          send and our team will reply shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name" className={labelClass}>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className={fieldClass}
        />
      </div>

      <div>
        <Label htmlFor="phone" className={labelClass}>
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+92 3XX XXXXXXX"
          className={fieldClass}
        />
      </div>

      <div>
        <Label htmlFor="email" className={labelClass}>
          Email <span className="font-normal text-navy-400">(optional)</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className={fieldClass}
        />
      </div>

      <div>
        <Label htmlFor="car" className={labelClass}>
          Car of Interest
        </Label>
        <select
          id="car"
          name="car"
          className="mt-1.5 h-10 w-full rounded-md border border-navy-200 bg-white px-3 text-sm text-navy-900 transition-colors focus:border-brand-400"
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
        <Label htmlFor="message" className={labelClass}>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Rental dates, with or without driver, pickup area..."
          className={fieldClass}
        />
      </div>

      <Button
        type="submit"
        className="h-11 w-full bg-brand font-semibold text-white shadow-brand transition-colors hover:bg-brand-600"
      >
        <MessageCircle size={17} className="mr-2" />
        Send Inquiry on WhatsApp
      </Button>

      <p className="text-center text-xs text-navy-400">
        Prefer to talk? Call us at{" "}
        <span className="font-medium text-navy-600">{site.phoneDisplay}</span>
      </p>
    </form>
  );
}
