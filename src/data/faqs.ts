/**
 * FAQ content lives here rather than in the component so the same questions
 * feed both the visible accordion and the FAQPage structured data. Google only
 * honours FAQ rich results when the markup matches what the user can see.
 */
import { site } from "@/lib/site";

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What documents are required to rent a car in Karachi?",
    answer:
      "You will need a valid CNIC or passport and a valid driving license. For outstation travel, additional documentation may be required. Contact us for full details.",
  },
  {
    question: "Do you offer car rental with a driver in Karachi?",
    answer:
      "Yes, we offer both self drive and with driver rental options across Karachi. Our drivers are experienced, licensed and familiar with all routes in the city.",
  },
  {
    question: "Do you provide airport pick up and drop off in Karachi?",
    answer:
      "Yes, we provide pick up and drop off at Jinnah International Airport. Share your flight details on WhatsApp and a car will be waiting for you at arrivals, or we will drop you off in time for your departure.",
  },
  {
    question: "What areas of Karachi do you serve?",
    answer:
      "We serve all major areas of Karachi including DHA, Clifton, Gulshan, North Karachi, Bahria Town, Saddar, Korangi, Malir and more.",
  },
  {
    question: "Can I rent a car for a full month in Karachi?",
    answer:
      "Yes, we offer flexible monthly car rental packages in Karachi at very competitive rates. Contact us to get a customized quote based on your requirements.",
  },
  {
    question: "Which cars are available for rent in Karachi?",
    answer: `Our fleet of ${site.fleetSize} vehicles includes the Toyota Revo, Toyota Fortuner, Toyota Corolla, Honda Civic, Suzuki Alto, Toyota Vitz, Toyota Yaris, Toyota Aqua, Toyota Prius and JAC T9, with multiple units of each model. All vehicles are well maintained and regularly serviced.`,
  },
  {
    question: "How do I book a rental car in Karachi?",
    answer: `Simply call or WhatsApp us at ${site.phoneDisplay} with your dates and the car you need. Our team will confirm availability and finalize the details with you directly, usually within minutes.`,
  },
];
