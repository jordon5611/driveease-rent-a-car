import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold text-gray-900 hover:text-amber">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
