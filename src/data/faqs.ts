/**
 * FAQ content lives here rather than in the component so the same questions
 * feed both the visible accordion and the FAQPage structured data. Google only
 * honours FAQ rich results when the markup matches what the user can see.
 */
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
    answer:
      "Our fleet includes Toyota Revo, Toyota Fortuner, Toyota Corolla, Honda Civic, Suzuki Alto, Toyota Vitz, Toyota Yaris, Toyota Aqua, Toyota Prius and JAC T9. All vehicles are well maintained and regularly serviced.",
  },
  {
    question: "How do I book a rental car in Karachi?",
    answer:
      "Simply contact us via WhatsApp, call or fill out our contact form on this website. Our team will confirm availability and finalize the details with you directly.",
  },
];
