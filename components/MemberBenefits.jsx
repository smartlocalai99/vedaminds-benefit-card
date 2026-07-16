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
  Heart,
} from "lucide-react";
import Container from "./Container";
import MemberBenefitCard from "./MemberBenefitCard";
import IllustrationCollage from "./IllustrationCollage";

const BENEFITS = [
  {
    icon: <BadgePercent size={26} />,
    title: "Guaranteed Discounts",
    description:
      "Receive minimum discounts and special pricing from participating partner businesses.",
  },
  {
    icon: <PiggyBank size={26} />,
    title: "Family Savings",
    description:
      "Reduce regular household expenses through year-round member benefits.",
  },
  {
    icon: <Layers size={26} />,
    title: "One Card, Multiple Benefits",
    description:
      "Use one membership card across multiple participating vendors and service categories.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Exclusive Offers",
    description:
      "Access member-only promotions, seasonal offers, and limited-time deals.",
  },
  {
    icon: <Award size={26} />,
    title: "Reward Programs",
    description:
      "Participate in loyalty points, referral rewards, cashback offers, and vendor-specific programs.",
  },
  {
    icon: <CalendarCheck size={26} />,
    title: "Priority Event Access",
    description:
      "Receive early access to workshops, student events, family programs, and community activities.",
  },
  {
    icon: <GraduationCap size={26} />,
    title: "Educational Opportunities",
    description:
      "Access selected learning, training, skill-development, and enrichment programs.",
  },
  {
    icon: <Users size={26} />,
    title: "Community Networking",
    description:
      "Connect with families, professionals, educators, and trusted local organisations.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Trusted Vendor Access",
    description:
      "Discover verified and reliable businesses through the Veda Minds partner network.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Community Membership",
    description:
      "Become part of a respected ecosystem supporting education, families, and local development.",
  },
];

export default function MemberBenefits() {
  return (
    <section id="member-benefits" className="bg-[#F8F7FF] py-16 md:py-24 scroll-mt-20">
      <Container>
        <div className="text-center max-w-[700px] mx-auto">
          <IllustrationCollage
            theme="primary"
            centerIcon={<Heart size={30} aria-hidden="true" />}
            satellites={[
              <BadgePercent key="badge" size={18} aria-hidden="true" />,
              <GraduationCap key="grad" size={18} aria-hidden="true" />,
              <Award key="award" size={18} aria-hidden="true" />,
              <Users key="users" size={18} aria-hidden="true" />,
            ]}
          />
          <p className="uppercase tracking-[3px] text-[13px] font-semibold text-[#5B3FD6] mt-6">
            Member Benefits
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] mt-3 leading-tight">
            Benefits for Members and Families
          </h2>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <MemberBenefitCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
