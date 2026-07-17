import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const HIGHLIGHTS = [
  "Member-only savings and special offers",
  "Trusted local businesses and services",
  "Educational and community opportunities",
];

export default function WhatIsSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white" aria-labelledby="about-card-heading">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center bg-[#171717] px-5 py-14 sm:min-h-[560px] sm:px-10 sm:py-16 md:px-14 md:py-20 lg:min-h-[700px] lg:px-16 lg:py-24 xl:px-24">
          <div className="max-w-[560px]">
            <p className="inline-flex rounded-full border border-[#D89A7B]/35 bg-[#D89A7B]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[1.8px] text-[#E5AA8D]">
              About the Card
            </p>

            <h2
              id="about-card-heading"
              className="mt-6 font-display text-[32px] leading-[1.08] text-white sm:text-[42px] md:text-[48px]"
            >
              What Is the
              <span className="mt-1 block text-[#DFA080]">
                Veda Benefits Card?
              </span>
            </h2>

            <p className="mt-6 text-[15.5px] leading-7 text-white/68 md:text-[16px] md:leading-8">
              The Veda Benefits Card is a community membership card created by
              Veda Minds Learning &amp; Development Center. It connects families
              with valuable discounts, trusted services, educational programs,
              events, and opportunities through a growing local partner network.
            </p>

            <div className="mt-8 space-y-3.5">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-white/88">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFA080] text-[#171717]">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-[14px] font-medium md:text-[14.5px]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/#member-benefits"
              className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#171717] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F5E7DF] sm:w-auto"
            >
              Explore Member Benefits
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[340px] sm:min-h-[560px] lg:min-h-[700px]">
          <Image
            src="/cards.webp"
            alt="Veda Minds Benefits Cards arranged on a light surface"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
