import Link from "next/link";
import Container from "./Container";

export default function CTASection({
  icon,
  heading,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  id,
}) {
  return (
    <section id={id} className="py-14 md:py-20 scroll-mt-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#241a63] via-[#3d2a9e] to-[#5b3fd6] px-8 md:px-14 py-14 text-center">
          <div
            className="absolute -right-16 -top-16 w-64 h-64 bg-[#F4B942]/20 blur-[100px] rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute -left-16 -bottom-16 w-64 h-64 bg-white/10 blur-[100px] rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center max-w-[640px] mx-auto">
            {icon && (
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F4B942] mb-6">
                {icon}
              </div>
            )}

            <h2 className="font-display text-white text-[30px] md:text-[40px] leading-tight font-semibold">
              {heading}
            </h2>

            <p className="text-[#E4DEF7] mt-4 text-[16px] md:text-[17px] leading-8">
              {text}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 bg-[#F4B942] text-[#172033] px-8 py-3.5 rounded-full font-semibold shadow-md hover:bg-[#F7C766] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
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
