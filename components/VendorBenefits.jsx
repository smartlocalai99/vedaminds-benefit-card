import {
  Users,
  Footprints,
  Repeat,
  Megaphone,
  BadgeCheck,
  Share2,
  Ticket,
  Medal,
  TrendingUp,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import VendorBenefitCard from "./VendorBenefitCard";

const BENEFITS = [
  {
    icon: <Users size={22} />,
    title: "Direct Access to Families",
    description:
      "Connect with local parents, students, and households who may become long-term customers.",
    tone: "gold",
    span: "lg:col-span-2",
  },
  {
    icon: <Footprints size={22} />,
    title: "Increased Customer Footfall",
    description: "Encourage card members to visit your business more frequently.",
    tone: "white",
  },
  {
    icon: <Repeat size={22} />,
    title: "Repeat Customers",
    description:
      "Build recurring business through trust, member offers, and quality service.",
    tone: "violet",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Affordable Marketing",
    description:
      "Gain promotional visibility through Veda Minds channels at a lower cost than traditional advertising.",
    tone: "white",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Stronger Brand Trust",
    description:
      "Improve credibility by supporting education and community-development initiatives.",
    tone: "green",
  },
  {
    icon: <Share2 size={22} />,
    title: "Digital Promotion",
    description:
      "Receive exposure through social media, community groups, digital listings, and promotional campaigns.",
    tone: "white",
    span: "lg:col-span-2",
  },
  {
    icon: <Ticket size={22} />,
    title: "Event Promotion and Sponsorship",
    description:
      "Showcase your brand through student, parent, education, and community events.",
    tone: "gold",
  },
  {
    icon: <Medal size={22} />,
    title: "Community Recognition",
    description:
      "Build a positive reputation as a business that supports local families and development.",
    tone: "violet",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Business Expansion Opportunities",
    description: "Reach new customer groups as the Veda Benefits Card network expands.",
    tone: "white",
  },
  {
    icon: <LineChart size={22} />,
    title: "Long-Term Growth",
    description:
      "Develop sustainable customer relationships through a growing local ecosystem.",
    tone: "green",
  },
];

export default function VendorBenefits() {
  return (
    <section
      id="vendor-benefits"
      className="scroll-mt-20 bg-[#F3EEE9] py-16 md:py-24 lg:py-28"
    >
      <Container>
        <div className="max-w-[680px]">
          <p className="inline-block rounded-full border border-[#DFA080]/35 bg-[#F7E9E1] px-4 py-1.5 text-[13px] font-semibold text-[#B86F4B]">
            Vendor Benefits
          </p>
          <h2 className="mt-5 font-display text-[32px] leading-tight text-[#171717] sm:text-[34px] md:text-[46px]">
            Benefits for Partner Vendors
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#6A625E]">
            Partner with Veda Minds to reach local families, strengthen your
            brand, and grow through trusted community relationships.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {BENEFITS.map((item, index) => (
            <VendorBenefitCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] active:scale-95 sm:w-auto sm:px-9 sm:py-4"
          >
            Register as a Partner Vendor
          </Link>
        </div>
      </Container>
    </section>
  );
}
