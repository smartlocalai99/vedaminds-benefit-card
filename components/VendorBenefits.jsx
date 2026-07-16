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
  Store,
} from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import VendorBenefitCard from "./VendorBenefitCard";
import IllustrationCollage from "./IllustrationCollage";

const BENEFITS = [
  {
    icon: <Users size={26} />,
    title: "Direct Access to Families",
    description:
      "Connect with local parents, students, and households who may become long-term customers.",
  },
  {
    icon: <Footprints size={26} />,
    title: "Increased Customer Footfall",
    description: "Encourage card members to visit your business more frequently.",
  },
  {
    icon: <Repeat size={26} />,
    title: "Repeat Customers",
    description:
      "Build recurring business through trust, member offers, and quality service.",
  },
  {
    icon: <Megaphone size={26} />,
    title: "Affordable Marketing",
    description:
      "Gain promotional visibility through Veda Minds channels at a lower cost than traditional advertising.",
  },
  {
    icon: <BadgeCheck size={26} />,
    title: "Stronger Brand Trust",
    description:
      "Improve credibility by supporting education and community-development initiatives.",
  },
  {
    icon: <Share2 size={26} />,
    title: "Digital Promotion",
    description:
      "Receive exposure through social media, community groups, digital listings, and promotional campaigns.",
  },
  {
    icon: <Ticket size={26} />,
    title: "Event Promotion and Sponsorship",
    description:
      "Showcase your brand through student, parent, education, and community events.",
  },
  {
    icon: <Medal size={26} />,
    title: "Community Recognition",
    description:
      "Build a positive reputation as a business that supports local families and development.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Business Expansion Opportunities",
    description: "Reach new customer groups as the Veda Benefits Card network expands.",
  },
  {
    icon: <LineChart size={26} />,
    title: "Long-Term Growth",
    description:
      "Develop sustainable customer relationships through a growing local ecosystem.",
  },
];

export default function VendorBenefits() {
  return (
    <section
      id="vendor-benefits"
      className="bg-gradient-to-b from-[#FFF8EA] via-[#FFFBF2] to-white py-16 md:py-24 scroll-mt-20"
    >
      <Container>
        <div className="text-center max-w-[700px] mx-auto">
          <IllustrationCollage
            theme="secondary"
            centerIcon={<Store size={30} aria-hidden="true" />}
            satellites={[
              <TrendingUp key="trend" size={18} aria-hidden="true" />,
              <Megaphone key="megaphone" size={18} aria-hidden="true" />,
              <Users key="users" size={18} aria-hidden="true" />,
              <BadgeCheck key="badge" size={18} aria-hidden="true" />,
            ]}
          />
          <p className="uppercase tracking-[3px] text-[13px] font-semibold text-[#B3873A] mt-6">
            Vendor Benefits
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] mt-3 leading-tight">
            Benefits for Partner Vendors
          </h2>
          <p className="text-[#5B6479] text-[16px] md:text-[17px] leading-8 mt-4">
            Partner with Veda Minds to reach local families, strengthen your
            brand, and grow through trusted community relationships.
          </p>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <VendorBenefitCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#172033] text-white px-9 py-4 rounded-full font-semibold shadow-md hover:bg-[#0f1522] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            Register as a Partner Vendor
          </Link>
        </div>
      </Container>
    </section>
  );
}
