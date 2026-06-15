"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
  {
    question: "What is VEDA?",
    answer:
      "VEDA is a smart vendor membership platform that helps businesses validate memberships, manage discounts, and track vendor activities securely.",
  },
  {
    question: "How do vendors join VEDA?",
    answer:
      "Vendors can join the VEDA network through a quick onboarding process and start validating memberships instantly.",
  },
  {
    question: "How does membership validation work?",
    answer:
      "VEDA validates membership cards instantly through QR or barcode scanning with real-time verification.",
  },
  {
    question: "Is vendor and customer data secure?",
    answer:
      "Yes. VEDA uses secure systems and encrypted technology to protect all vendor and membership data.",
  },
  {
    question: "How long does vendor onboarding take?",
    answer:
      "Most vendors can complete onboarding within a few days depending on setup and verification.",
  },
  {
    question: "Can I track discounts and payments?",
    answer:
      "Yes. Vendors can monitor discounts, membership validations, and payment activity in real time.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="bg-[#FBF8F3] py-20"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#B3873A] uppercase tracking-[3px] text-sm font-semibold">
            SUPPORT
          </p>

          <h2 className="text-[40px] md:text-[54px] font-serif text-[#0E1B16] mt-4 leading-tight">
            Frequently asked
            <br />
            questions.
          </h2>

          <p className="text-[#6B7280] text-lg mt-5 max-w-[600px] mx-auto leading-8">
            Find answers about vendor onboarding, membership validation, discounts, and secure transactions with VEDA.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid md:grid-cols-2 gap-6 items-start">

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
  h-fit
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
                    px-7 py-5 text-left
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

