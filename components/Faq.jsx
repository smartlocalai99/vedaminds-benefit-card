import { useState } from "react";
import Container from "./Container";
import FaqAccordion from "./FaqAccordion";

const FAQS = [
  {
    question: "What is the Veda Benefits Card?",
    answer:
      "It is a membership card that gives eligible members access to discounts, exclusive offers, trusted partner vendors, educational programs, and community benefits.",
  },
  {
    question: "Where can I use the card?",
    answer:
      "The card can be used at approved businesses listed in the Veda Minds partner network.",
  },
  {
    question: "How do I receive a discount?",
    answer:
      "Show the physical card or digital membership card before completing payment. The vendor will apply the eligible member offer.",
  },
  {
    question: "Can one card be used at multiple businesses?",
    answer:
      "Yes. One Veda Benefits Card can provide benefits across multiple participating businesses.",
  },
  {
    question: "How can a business become a partner?",
    answer:
      "The business must submit a partner application, complete verification, and provide an approved member discount or special benefit.",
  },
  {
    question: "Are all discounts the same?",
    answer:
      "No. Discounts and offers may vary depending on the business, service category, location, and promotional period.",
  },
  {
    question: "Can the benefits change?",
    answer:
      "Yes. Partner offers may be updated, added, or withdrawn based on the applicable terms.",
  },
  {
    question: "Is the card transferable?",
    answer:
      "Membership usage is subject to the terms provided during registration.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="bg-white py-16 md:py-24 scroll-mt-20">
      <Container maxWidth="880px">
        <div className="text-center max-w-[620px] mx-auto">
          <p className="uppercase tracking-[3px] text-[13px] font-semibold text-[#5B3FD6]">
            FAQs
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] mt-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5B6479] text-[16px] leading-8 mt-4">
            Everything you need to know about the Veda Benefits Card and the
            Veda Minds Community.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, index) => (
            <FaqAccordion
              key={faq.question}
              id={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
