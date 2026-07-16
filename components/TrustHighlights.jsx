import { Store, Percent, ShieldCheck, Heart } from "lucide-react";
import Container from "./Container";

const HIGHLIGHTS = [
  {
    icon: <Store size={26} />,
    title: "Multiple Partner Businesses",
    description: "A growing network of local businesses across categories.",
  },
  {
    icon: <Percent size={26} />,
    title: "Exclusive Member Discounts",
    description: "Special pricing and offers reserved for card members.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Trusted Local Vendors",
    description: "Every partner is verified before joining the network.",
  },
  {
    icon: <Heart size={26} />,
    title: "Family and Community Benefits",
    description: "Savings and programs designed for families and communities.",
  },
];

export default function TrustHighlights() {
  return (
    <section className="bg-[#F8F7FF] pb-16 md:pb-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 bg-white rounded-[20px] border border-[#EAE5F9] px-4 py-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="w-[52px] h-[52px] rounded-2xl bg-[#EFEAFC] text-[#5B3FD6] flex items-center justify-center"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="text-[14.5px] md:text-[15px] font-semibold text-[#172033] leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#5B6479] leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
