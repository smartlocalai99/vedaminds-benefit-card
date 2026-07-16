import {
  UserPlus,
  CreditCard,
  Store,
  ScanLine,
  BadgePercent,
  GraduationCap,
  Heart,
  Users,
} from "lucide-react";
import Container from "./Container";
import ProcessStep from "./ProcessStep";
import IllustrationCollage from "./IllustrationCollage";

const FLOW = [
  { icon: <UserPlus size={30} />, title: "Join Veda Minds" },
  { icon: <CreditCard size={30} />, title: "Receive Your Benefits Card" },
  { icon: <Store size={30} />, title: "Visit Partner Vendors" },
  { icon: <ScanLine size={30} />, title: "Show or Scan the Card" },
  { icon: <BadgePercent size={30} />, title: "Receive Discounts and Member Benefits" },
];

export default function WhatIsSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] leading-tight">
              What Is the Veda Benefits Card?
            </h2>
            <p className="text-[#5B6479] text-[16px] md:text-[17px] leading-8 mt-5 max-w-[520px] mx-auto lg:mx-0">
              The Veda Benefits Card is a community membership card created by
              Veda Minds Learning &amp; Development Center. It helps families
              access discounts, special offers, trusted services, educational
              programs, events, and community opportunities through a growing
              network of local partner businesses.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <IllustrationCollage
              theme="primary"
              size="lg"
              centerIcon={<CreditCard size={40} aria-hidden="true" />}
              satellites={[
                <Store key="store" size={22} aria-hidden="true" />,
                <GraduationCap key="grad" size={22} aria-hidden="true" />,
                <Heart key="heart" size={22} aria-hidden="true" />,
                <Users key="users" size={22} aria-hidden="true" />,
              ]}
            />
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
          {FLOW.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              isLast={index === FLOW.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
