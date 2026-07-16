import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import BenefitsCardPreview from "./BenefitsCardPreview";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F8F7FF] pt-32 md:pt-40 pb-16 md:pb-24 scroll-mt-20"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 bg-[#EFEAFC] px-5 py-2 rounded-full text-[13px] font-semibold text-[#5B3FD6] mb-6 tracking-wide">
              VEDA MINDS LEARNING &amp; DEVELOPMENT CENTER
            </div>

            <h1 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[1.12] font-semibold text-[#172033]">
              One Card. Multiple Benefits.
              <br />
              <span className="text-[#5B3FD6]">Stronger Communities.</span>
            </h1>

            <p className="text-[#5B6479] text-[16px] md:text-[18px] mt-6 max-w-[520px] mx-auto lg:mx-0 leading-8">
              The Veda Benefits Card connects families with trusted local
              businesses, exclusive discounts, educational opportunities,
              community events, and valuable year-round savings.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-9">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#5B3FD6] text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-[#4c33b8] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                Get Your Benefits Card
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/#vendor-benefits"
                className="inline-flex items-center justify-center gap-2 border border-[#D9CCF7] bg-white text-[#172033] px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Become a Partner Vendor
              </Link>
            </div>
          </div>

          {/* Card mock-up */}
          <div className="relative flex justify-center order-2 mt-4 lg:mt-0">
            <div
              className="absolute w-[360px] h-[360px] bg-[#F4B942] blur-[120px] opacity-20 rounded-full"
              aria-hidden="true"
            />
            <BenefitsCardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
