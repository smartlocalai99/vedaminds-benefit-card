import Image from "next/image";
import {
  BadgePercent,
  PiggyBank,
  Layers,
  Sparkles,
  Award,
  CalendarCheck,
  GraduationCap,
  Users,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import Container from "./Container";

const BENEFITS = [
  {
    icon: <BadgePercent size={19} />,
    title: "Guaranteed Discounts",
    description:
      "Receive minimum discounts and special pricing from participating partner businesses.",
    tone: "light",
    mobilePosition: "sm:justify-self-start",
    desktopPlacement:
      "xl:col-start-1 xl:row-start-1 xl:justify-self-start xl:w-[280px] xl:-rotate-2",
  },
  {
    icon: <PiggyBank size={19} />,
    title: "Family Savings",
    description:
      "Reduce regular household expenses through year-round member benefits.",
    tone: "dark",
    mobilePosition: "sm:justify-self-end sm:translate-y-5",
    desktopPlacement:
      "xl:col-start-3 xl:row-start-1 xl:justify-self-end xl:w-[245px] xl:rotate-1",
  },
  {
    icon: <Layers size={19} />,
    title: "One Card, Multiple Benefits",
    description:
      "Use one membership card across multiple participating vendors and service categories.",
    tone: "light",
    mobilePosition: "sm:justify-self-start sm:-translate-y-1",
    desktopPlacement:
      "xl:col-start-1 xl:row-start-2 xl:justify-self-end xl:w-[290px] xl:rotate-2",
  },
  {
    icon: <Sparkles size={19} />,
    title: "Exclusive Offers",
    description:
      "Access member-only promotions, seasonal offers, and limited-time deals.",
    tone: "copper",
    mobilePosition: "sm:justify-self-end sm:translate-y-4",
    desktopPlacement:
      "xl:col-start-3 xl:row-start-2 xl:justify-self-start xl:w-[235px] xl:-rotate-1",
  },
  {
    icon: <Award size={19} />,
    title: "Reward Programs",
    description:
      "Participate in loyalty points, referral rewards, cashback offers, and vendor-specific programs.",
    tone: "light",
    mobilePosition: "sm:justify-self-start",
    desktopPlacement:
      "xl:col-start-1 xl:row-start-3 xl:justify-self-start xl:w-[250px] xl:rotate-1",
  },
  {
    icon: <CalendarCheck size={19} />,
    title: "Priority Event Access",
    description:
      "Receive early access to workshops, student events, family programs, and community activities.",
    tone: "light",
    mobilePosition: "sm:justify-self-end sm:translate-y-3",
    desktopPlacement:
      "xl:col-start-3 xl:row-start-3 xl:justify-self-end xl:w-[270px] xl:-rotate-2",
  },
  {
    icon: <GraduationCap size={19} />,
    title: "Educational Opportunities",
    description:
      "Access selected learning, training, skill-development, and enrichment programs.",
    tone: "dark",
    mobilePosition: "sm:justify-self-start sm:-translate-y-2",
    desktopPlacement:
      "xl:col-start-1 xl:row-start-4 xl:justify-self-end xl:w-[285px] xl:-rotate-1",
  },
  {
    icon: <Users size={19} />,
    title: "Community Networking",
    description:
      "Connect with families, professionals, educators, and trusted local organisations.",
    tone: "light",
    mobilePosition: "sm:justify-self-end sm:translate-y-4",
    desktopPlacement:
      "xl:col-start-3 xl:row-start-4 xl:justify-self-start xl:w-[260px] xl:rotate-2",
  },
  {
    icon: <ShieldCheck size={19} />,
    title: "Trusted Vendor Access",
    description:
      "Discover verified and reliable businesses through the Veda Minds partner network.",
    tone: "copper",
    mobilePosition: "sm:justify-self-start",
    desktopPlacement:
      "xl:col-start-1 xl:row-start-5 xl:justify-self-start xl:w-[260px] xl:-rotate-2",
  },
  {
    icon: <Handshake size={19} />,
    title: "Community Membership",
    description:
      "Become part of a respected ecosystem supporting education, families, and local development.",
    tone: "light",
    mobilePosition: "sm:justify-self-end sm:translate-y-3",
    desktopPlacement:
      "xl:col-start-3 xl:row-start-5 xl:justify-self-end xl:w-[275px] xl:rotate-1",
  },
];

const TONE_CLASSES = {
  light: {
    pill: "border-[#DEC5B7] bg-white/90 text-[#171717]",
    icon: "bg-[#F7E9E1] text-[#B86F4B]",
  },
  dark: {
    pill: "border-[#171717] bg-[#171717] text-white",
    icon: "bg-white/12 text-[#DFA080]",
  },
  copper: {
    pill: "border-[#B86F4B] bg-[#B86F4B] text-white",
    icon: "bg-white/18 text-white",
  },
};

function BenefitPill({ item }) {
  const tone = TONE_CLASSES[item.tone];

  return (
    <article
      aria-label={`${item.title}: ${item.description}`}
      className={`group relative z-20 flex min-h-[64px] w-full max-w-none items-center gap-3 rounded-[22px] border px-3 py-2.5 shadow-[0_10px_28px_rgba(23,23,23,0.09)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(23,23,23,0.14)] sm:max-w-[310px] sm:rounded-full ${tone.pill} ${item.mobilePosition} ${item.desktopPlacement}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-6 ${tone.icon}`}
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <h3 className="pr-3 text-[13.5px] font-bold leading-[1.25]">
        {item.title}
      </h3>
    </article>
  );
}

export default function MemberBenefits() {
  return (
    <section
      id="member-benefits"
      className="scroll-mt-20 overflow-hidden bg-[#F3EEE9] pt-16 pb-0 md:pt-24 lg:pt-28"
    >
      <Container>
        <div className="text-center">
          <p className="inline-block rounded-full border border-[#DFA080]/35 bg-[#F7E9E1] px-4 py-1.5 text-[13px] font-semibold text-[#B86F4B]">
            Member Benefits
          </p>
          <h2 className="mt-5 font-display text-[32px] leading-tight text-[#171717] sm:text-[34px] md:text-[46px]">
            Benefits for Members and Families
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15.5px] leading-7 text-[#6A625E]">
            One trusted card opens access to practical savings, meaningful
            experiences, and a stronger local community.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10 xl:mt-14 xl:min-h-[760px]">
          <div
            className="absolute bottom-[5%] left-1/2 h-[52%] w-[62%] -translate-x-1/2 rounded-full bg-[#DFA080]/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute left-[8%] top-[14%] hidden h-24 w-24 rounded-full border border-dashed border-[#B86F4B]/25 xl:block"
            aria-hidden="true"
          />
          <div
            className="absolute right-[8%] top-[36%] hidden h-16 w-16 rounded-full border border-[#DFA080]/30 xl:block"
            aria-hidden="true"
          />

          <div className="relative z-20 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 xl:min-h-[700px] xl:grid-cols-[minmax(240px,1fr)_minmax(520px,1.35fr)_minmax(240px,1fr)] xl:grid-rows-5 xl:content-between xl:gap-x-8 xl:gap-y-6">
            {BENEFITS.map((item) => (
              <BenefitPill key={item.title} item={item} />
            ))}
          </div>

          <div className="relative z-10 -mx-5 mt-6 flex w-[calc(100%+2.5rem)] items-end justify-center overflow-hidden leading-none sm:-mx-8 sm:mt-8 sm:w-[calc(100%+4rem)] xl:absolute xl:bottom-0 xl:left-1/2 xl:mx-0 xl:mt-0 xl:w-full xl:-translate-x-1/2 xl:overflow-visible">
            <Image
              src="/handholding.webp"
              alt="A hand holding the Veda Minds Benefits Card"
              width={2048}
              height={1294}
              sizes="(max-width: 1279px) 100vw, 46vw"
              className="block h-auto w-full min-w-0 max-w-[680px] object-contain drop-shadow-[0_24px_32px_rgba(23,23,23,0.22)] 2xl:max-w-[760px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
