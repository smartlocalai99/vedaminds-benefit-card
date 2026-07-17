import { Heart, Handshake } from "lucide-react";
import Container from "./Container";

const CARDS = [
  {
    icon: <Heart size={20} aria-hidden="true" />,
    iconBg: "bg-[#EFEAFC] text-[#5B3FD6]",
    heading: "Why Families Trust Veda Minds",
    text: "Every partner business is verified before joining the network, so members can shop, dine, and learn with confidence — knowing each discount comes from a trusted local name.",
  },
  {
    icon: <Handshake size={20} aria-hidden="true" />,
    iconBg: "bg-[#FDECC4] text-[#B3873A]",
    heading: "Why Vendors Partner With Us",
    text: "Veda Minds connects businesses with engaged local families through a community built on education and trust — turning members into loyal, repeat customers.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="text-center">
          <p className="inline-block text-[13px] font-semibold text-[#14181F] bg-[#F4F3EF] px-4 py-1.5 rounded-full">
            Veda Minds Community
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] text-[#14181F] mt-5 leading-tight">
            Built on Trust, Not Just Discounts
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
          {CARDS.map((card) => (
            <div key={card.heading} className="rounded-[24px] bg-[#FAF9F6] p-6 sm:rounded-[28px] sm:p-8 md:p-10">
              <div className={`w-11 h-11 rounded-2xl ${card.iconBg} flex items-center justify-center`}>
                {card.icon}
              </div>
              <h3 className="text-[19px] font-bold text-[#14181F] mt-6">{card.heading}</h3>
              <p className="text-[15px] text-[#5B6479] leading-7 mt-3">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
