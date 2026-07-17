import { useState } from "react";
import {
  UserPlus,
  CreditCard,
  Search,
  ScanLine,
  BadgePercent,
  FileText,
  ShieldCheck,
  Tag,
  Store,
  Users,
} from "lucide-react";
import Container from "./Container";
import ProcessStep from "./ProcessStep";

const MEMBER_STEPS = [
  {
    icon: <UserPlus size={20} />,
    title: "Register with Veda Minds",
    description:
      "Complete a quick registration to join the Veda Minds benefits community.",
    image: "/registerwithvedaminds.webp",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Receive a physical",
    description:
      "Your Veda Benefits Card is prepared for convenient everyday use.",
    image: "/backcard.png",
  },
  {
    icon: <Search size={20} />,
    title: "Explore participating businesses",
    description:
      "Discover trusted local partners across shopping, dining, healthcare, education, and more.",
    image: "/explore.webp",
  },
  {
    icon: <ScanLine size={20} />,
    title: "Show card at the partner location",
    description:
      "Present your card before billing so the partner can confirm your membership.",
    image: "/showcard.webp",
  },
  {
    icon: <BadgePercent size={20} />,
    title: "Receive the  discount ",
    description:
      "Enjoy the applicable member discount and save on your purchase.",
    image: "/receivethediscount.webp",
  },
];

const VENDOR_STEPS = [
  {
    icon: <FileText size={20} />,
    title: "Submit the partner-vendor application",
    description:
      "Share your business details and interest in joining the Veda partner network.",
    image: "/Submitthepartner.jpg",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Complete business verification",
    description:
      "Our team reviews your business information to maintain a trusted community.",
    image: "/Completebusinessverification.webp",
  },
  {
    icon: <Tag size={20} />,
    title: "Choose the member benefit",
    description:
      "Select the discount or special offer you want to provide to members.",
    image: "/Choosethememberbenefit.webp",
  },
  {
    icon: <Store size={20} />,
    title: "Get listed in the Veda Benefits network",
    description:
      "Appear in the Veda Benefits directory so members can find your business.",
    image: "/GetlistedintheVedaBenefitsnetwork.webp",
  },
  {
    icon: <Users size={20} />,
    title: "Start serving and attracting card members",
    description:
      "Welcome cardholders, deliver valuable benefits, and build lasting local relationships.",
    image: "/Startservingandattractingcardmembers.webp",
  },
];

export default function HowItWorks() {
  const [tab, setTab] = useState("members");
  const steps = tab === "members" ? MEMBER_STEPS : VENDOR_STEPS;
  const journeyGridClasses =
    steps.length === 5
      ? "xl:mx-auto xl:max-w-[1650px] xl:grid-cols-5"
      : "xl:grid-cols-6";

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-white py-16 md:py-24 lg:py-28"
    >
      <Container>
        <div className="text-center">
          <p className="inline-block rounded-full border border-[#DFA080]/35 bg-[#F7E9E1] px-4 py-1.5 text-[13px] font-semibold text-[#B86F4B]">
            How It Works
          </p>
          <h2 className="mt-5 font-display text-[32px] leading-tight text-[#171717] sm:text-[34px] md:text-[46px]">
            A simple journey, every time.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15.5px] leading-7 text-[#6A625E]">
            Follow each step from registration to real-world savings and
            trusted community connections.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="How it works for members or vendors"
          className="mb-10 mt-8 flex justify-center sm:mb-12 sm:mt-10"
        >
          <div className="inline-flex w-full max-w-[360px] gap-1 rounded-full bg-[#F3EEE9] p-1.5">
            <button
              role="tab"
              id="tab-members"
              aria-selected={tab === "members"}
              aria-controls="panel-members"
              onClick={() => setTab("members")}
              className={`min-h-11 flex-1 rounded-full px-3 py-2.5 text-[13.5px] font-semibold transition-all duration-300 sm:px-6 sm:text-[14.5px] ${
                tab === "members"
                  ? "bg-[#171717] text-white"
                  : "text-[#6A625E] hover:text-[#171717]"
              }`}
            >
              For Members
            </button>
            <button
              role="tab"
              id="tab-vendors"
              aria-selected={tab === "vendors"}
              aria-controls="panel-vendors"
              onClick={() => setTab("vendors")}
              className={`min-h-11 flex-1 rounded-full px-3 py-2.5 text-[13.5px] font-semibold transition-all duration-300 sm:px-6 sm:text-[14.5px] ${
                tab === "vendors"
                  ? "bg-[#171717] text-white"
                  : "text-[#6A625E] hover:text-[#171717]"
              }`}
            >
              For Vendors
            </button>
          </div>
        </div>

        <div
          role="tabpanel"
          id={tab === "members" ? "panel-members" : "panel-vendors"}
          aria-labelledby={tab === "members" ? "tab-members" : "tab-vendors"}
        >
          <div
            className={`grid grid-cols-1 gap-0 xl:gap-4 ${journeyGridClasses}`}
          >
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                image={step.image}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
