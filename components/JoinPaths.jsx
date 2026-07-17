import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";

const PATHS = [
  {
    tone: "bg-[#EFEAFC]",
    check: "bg-white text-[#5B3FD6]",
    eyebrow: "For Members",
    heading: "Become a Member",
    text: "Join the Veda Minds community and start saving at partner businesses right away.",
    features: [
      "Guaranteed discounts at every partner",
      "Family savings, year-round",
      "Educational programs and events",
    ],
    button: "Get Your Benefits Card",
    href: "/#contact",
  },
  {
    tone: "bg-[#FDECC4]",
    check: "bg-white text-[#B3873A]",
    eyebrow: "For Partner Vendors",
    heading: "Become a Partner Vendor",
    text: "Reach local families, build loyalty, and grow through the Veda Minds network.",
    features: [
      "Direct access to local families",
      "Affordable community marketing",
      "Long-term business growth",
    ],
    button: "Register as a Partner Vendor",
    href: "/#contact",
  },
];

export default function JoinPaths() {
  return (
    <section id="join" className="scroll-mt-20 bg-[#FAF9F6] py-16 md:py-24">
      <Container>
        <div className="text-center">
          <p className="inline-block text-[13px] font-semibold text-[#14181F] bg-[#F4F3EF] px-4 py-1.5 rounded-full">
            Join Veda Minds
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] text-[#14181F] mt-5 leading-tight">
            Choose How You Join
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
          {PATHS.map((path) => (
            <div key={path.heading} className={`${path.tone} flex flex-col rounded-[26px] p-6 sm:rounded-[32px] sm:p-8 md:p-10`}>
              <p className="text-[13px] font-semibold text-[#14181F]/60 uppercase tracking-[2px]">
                {path.eyebrow}
              </p>
              <h3 className="font-display text-[26px] md:text-[30px] text-[#14181F] mt-3">
                {path.heading}
              </h3>
              <p className="text-[#3A3F4A] text-[15px] leading-7 mt-3">{path.text}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {path.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-[#14181F]">
                    <span className={`w-5 h-5 rounded-full ${path.check} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check size={12} aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={path.href}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#14181F] px-5 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#272D3A] sm:w-fit sm:px-7"
              >
                {path.button}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
