import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ question, answer, isOpen, onToggle, id }) {
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="bg-white rounded-[24px] border border-[#EAE5F9] overflow-hidden transition-all duration-300">
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 text-left"
        >
          <span className="text-[16px] md:text-[18px] font-semibold text-[#172033]">
            {question}
          </span>

          <ChevronDown
            aria-hidden="true"
            className={`shrink-0 text-[#5B3FD6] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={22}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 md:px-8 pb-6 text-[#5B6479] text-[15px] leading-7">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
