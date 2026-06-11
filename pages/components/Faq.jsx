"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "What is VEDA?",
      answer:
        "VEDA is a smart vendor membership and discount management platform designed to streamline membership validation, vendor tracking, and secure transactions.",
    },
    {
      question: "How does membership validation work?",
      answer:
        "VEDA instantly validates membership cards through QR or barcode scanning with real-time verification and status updates.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. VEDA uses enterprise-grade encryption and secure systems to ensure complete protection of customer and vendor data.",
    },
    {
      question: "Can I integrate VEDA with my existing system?",
      answer:
        "Absolutely. VEDA supports seamless integration with POS systems and existing business tools.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most businesses can get started within a few days depending on vendor onboarding and configuration requirements.",
    },
    {
      question: "Can I track discounts and transactions?",
      answer:
        "Yes. VEDA provides real-time analytics to track discounts, purchases, memberships, and vendor performance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[#FBF8F3] py-24"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#B3873A] uppercase tracking-[3px] text-sm font-semibold">
            SUPPORT
          </p>

          <h2 className="text-[40px] md:text-[54px] font-serif text-[#0E1B16] mt-4 leading-tight">
            Frequently asked
            <br />
            questions.
          </h2>

          <p className="text-[#6B7280] text-lg mt-5 max-w-[600px] mx-auto leading-8">
            Everything you need to know about
            VEDA membership tracking and vendor
            management.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white rounded-[28px]
                  border border-[#EFE8DD]
                  overflow-hidden
                  transition-all duration-300
                "
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="
                    w-full flex items-center
                    justify-between
                    px-8 py-7 text-left
                  "
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#0E1B16]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`
                      text-[#B3873A]
                      transition-transform duration-300
                      ${
                        isOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                    size={26}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-7 text-[#6B7280] text-[16px] leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

