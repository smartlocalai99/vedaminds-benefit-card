import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function ProcessStep({
  number,
  icon,
  title,
  description,
  image,
  isLast = false,
}) {
  const stepNumber = String(number).padStart(2, "0");

  return (
    <div className="relative">
      <article className="group flex h-full min-h-[350px] flex-col overflow-hidden rounded-[22px] border border-[#E8D8CF] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(23,23,23,0.1)] sm:min-h-[390px] sm:rounded-[24px]">
        <div className="relative h-[190px] overflow-hidden bg-[#F3EEE9] sm:h-[220px]">
          <div className="absolute inset-2.5 overflow-hidden rounded-[16px] border border-[#DEC5B7] bg-white/35 sm:inset-3 sm:rounded-[18px]">
            <Image
              src={image}
              alt={`${title} Veda Benefits Card`}
              fill
              sizes="(max-width: 1279px) 100vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <div
            className="absolute top-3.5 left-3.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-[#F7E9E1]/95 text-[#B86F4B] shadow-sm backdrop-blur sm:top-4 sm:left-4 sm:h-12 sm:w-12"
            aria-hidden="true"
          >
            {icon}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#B86F4B]">
            Step {stepNumber}
          </p>
          <h3 className="mt-3 text-[17px] font-bold leading-[1.35] text-[#171717]">
            {title}
          </h3>
          <p className="mt-3 text-[13px] leading-5 text-[#6A625E]">
            {description}
          </p>
        </div>
      </article>

      {!isLast && (
        <>
          <div
            className="absolute -right-[18px] top-[184px] z-10 hidden h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#DFA080] text-[#171717] shadow-sm xl:flex"
            aria-hidden="true"
          >
            <ArrowRight size={16} strokeWidth={2.4} />
          </div>

          <div
            className="flex h-10 items-center justify-center text-[#B86F4B] sm:h-14 xl:hidden"
            aria-hidden="true"
          >
            <ArrowDown size={24} strokeWidth={2.2} />
          </div>
        </>
      )}
    </div>
  );
}
