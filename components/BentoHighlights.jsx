import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  CalendarCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Container from "./Container";

const FEATURES = [
  {
    title: "Verified Partners",
    text: "Every participating business is reviewed before joining our trusted local network.",
    href: "/#partner-vendors",
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: "Transparent Discounts",
    text: "See clear member-only savings at participating vendors with no hidden conditions.",
    href: "/#member-benefits",
    icon: BadgePercent,
  },
  {
    title: "Fast Card Setup",
    text: "Join quickly and start accessing benefits without a complicated enrollment process.",
    href: "/#contact",
    icon: Zap,
  },
  {
    title: "Year-Round Savings",
    text: "Save across everyday family needs, education, healthcare, dining, and shopping.",
    href: "/#member-benefits",
    icon: CalendarCheck,
  },
];

export default function BentoHighlights() {
  return (
    <section
      className="flex items-center bg-white py-16 md:min-h-[620px] md:py-24 lg:min-h-[700px] lg:py-28"
      aria-labelledby="savings-heading"
    >
      <Container>
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="max-w-[450px]">
            <p className="text-[13px] font-semibold uppercase tracking-[2px] text-[#B86F4B]">
              Veda Benefits Card
            </p>

            <h2
              id="savings-heading"
              className="mt-5 font-display text-[32px] leading-[1.08] text-[#14181F] sm:text-[42px] md:text-[48px]"
            >
              Smarter Savings
              <br />
              <span className="text-[#B86F4B]">Start Here</span>
            </h2>

            <p className="mt-6 text-[15.5px] leading-7 text-[#6A7180]">
              One simple card connects your family to trusted local partners,
              clear discounts, and valuable benefits across the services you
              use every day.
            </p>

            <Link
              href="/#member-benefits"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2A2A2A] sm:w-auto"
            >
              Explore Benefits
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-x-10 md:gap-y-10">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className={`rounded-[18px] border border-black/5 bg-white p-5 md:p-6 ${
                    feature.featured
                      ? "shadow-[0_12px_35px_rgba(23,23,23,0.1)]"
                      : "sm:border-transparent sm:bg-transparent"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7E9E1] text-[#B86F4B]">
                      <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-[16px] font-bold text-[#171717]">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-6 text-[#707782]">
                        {feature.text}
                      </p>
                      <Link
                        href={feature.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#B86F4B] hover:text-[#8F5034]"
                      >
                        Learn More
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
