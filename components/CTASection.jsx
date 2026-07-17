import Link from "next/link";
import Container from "./Container";

export default function CTASection({
  heading,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  id,
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 sm:py-10 md:py-14">
      <Container>
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[26px] bg-[#14181F] px-5 py-10 sm:rounded-[32px] sm:px-8 sm:py-12 md:px-12 md:py-14 lg:grid-cols-[220px_1fr] lg:gap-10">
          <div
            className="absolute -right-10 -top-10 w-56 h-56 bg-[#5B3FD6]/25 blur-[100px] rounded-full"
            aria-hidden="true"
          />

          {/* Layered card visual */}
          <div className="relative hidden lg:block h-[130px]" aria-hidden="true">
            <div className="absolute top-3 left-6 w-[150px] h-[95px] rounded-[20px] bg-gradient-to-br from-[#3d2a9e] to-[#5b3fd6] rotate-[-8deg] shadow-xl" />
            <div className="absolute top-0 left-0 w-[150px] h-[95px] rounded-[20px] bg-gradient-to-br from-[#D99C1F] to-[#F4B942] rotate-[6deg] shadow-xl flex items-end p-3">
              <span className="w-7 h-5 rounded-sm bg-white/30" />
            </div>
          </div>

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="font-display text-white text-[28px] md:text-[38px] leading-tight">
              {heading}
            </h2>

            <p className="text-[#B7BAC4] mt-3 text-[15px] md:text-[16px] leading-7">
              {text}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start">
              <Link
                href={primaryHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F4B942] px-6 py-3.5 font-semibold text-[#14181F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7C766] active:scale-95 sm:w-auto sm:px-7"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto sm:px-7"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
