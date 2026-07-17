import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ question, answer, isOpen, onToggle, id }) {
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#EAE5F9] bg-white transition-all duration-300 sm:rounded-[24px]">
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-5 text-left sm:gap-4 sm:px-6 sm:py-6 md:px-8"
        >
          <span className="text-[15px] font-semibold leading-6 text-[#172033] sm:text-[16px] md:text-[18px]">
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
          <p className="px-5 pb-5 text-[14.5px] leading-7 text-[#5B6479] sm:px-6 sm:pb-6 sm:text-[15px] md:px-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
