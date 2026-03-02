"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team."
        />

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-6 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
