import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VendorBenefitCard({
  icon,
  title,
  description,
  featured = false,
}) {
  return (
    <article
      className={`group flex min-h-0 flex-col rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(23,23,23,0.1)] sm:min-h-[270px] sm:rounded-[24px] sm:p-6 ${
        featured
          ? "border-[#171717] bg-[#171717] text-white shadow-[0_18px_45px_rgba(23,23,23,0.18)]"
          : "border-[#E8D8CF] bg-white text-[#171717]"
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
          featured
            ? "bg-[#DFA080] text-[#171717]"
            : "bg-[#F7E9E1] text-[#B86F4B]"
        }`}
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3
        className={`mt-5 text-[17px] font-bold leading-[1.2] ${
          featured ? "text-white" : "text-[#171717]"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 text-[13.5px] leading-6 ${
          featured ? "text-white/68" : "text-[#6A625E]"
        }`}
      >
        {description}
      </p>

      <Link
        href="/#contact"
        className={`mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-semibold transition-colors ${
          featured
            ? "text-[#DFA080] hover:text-white"
            : "text-[#B86F4B] hover:text-[#8F5034]"
        }`}
      >
        Learn More
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
