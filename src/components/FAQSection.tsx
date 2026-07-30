import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="bg-white py-20 sm:py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you need to know before booking a car with us."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-navy-200 bg-white px-5 shadow-card sm:px-6">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-navy-100"
                >
                  <AccordionTrigger className="text-[15px] font-semibold text-navy-900 hover:text-brand-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-navy-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
