import { useState } from "react";
import {
  UserPlus,
  ListChecks,
  CreditCard,
  Search,
  ScanLine,
  BadgePercent,
  FileText,
  ShieldCheck,
  Tag,
  CheckCircle2,
  Store,
  Users,
} from "lucide-react";
import Container from "./Container";
import ProcessStep from "./ProcessStep";

const MEMBER_STEPS = [
  { icon: <UserPlus size={28} />, title: "Register with Veda Minds" },
  { icon: <ListChecks size={28} />, title: "Select the appropriate membership plan" },
  { icon: <CreditCard size={28} />, title: "Receive a physical or digital Veda Benefits Card" },
  { icon: <Search size={28} />, title: "Explore participating businesses" },
  { icon: <ScanLine size={28} />, title: "Show or scan the card at the partner location" },
  { icon: <BadgePercent size={28} />, title: "Receive the applicable discount or offer" },
];

const VENDOR_STEPS = [
  { icon: <FileText size={28} />, title: "Submit the partner-vendor application" },
  { icon: <ShieldCheck size={28} />, title: "Complete business verification" },
  { icon: <Tag size={28} />, title: "Choose the discount or member benefit" },
  { icon: <CheckCircle2 size={28} />, title: "Receive partner approval" },
  { icon: <Store size={28} />, title: "Get listed in the Veda Benefits network" },
  { icon: <Users size={28} />, title: "Start serving and attracting card members" },
];

export default function HowItWorks() {
  const [tab, setTab] = useState("members");
  const steps = tab === "members" ? MEMBER_STEPS : VENDOR_STEPS;

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 scroll-mt-20">
      <Container>
        <div className="text-center max-w-[700px] mx-auto">
          <p className="uppercase tracking-[3px] text-[13px] font-semibold text-[#5B3FD6]">
            How It Works
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] mt-3 leading-tight">
            A simple journey, every time.
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="How it works for members or vendors"
          className="flex justify-center mt-10 mb-14"
        >
          <div className="inline-flex bg-[#F8F7FF] border border-[#EAE5F9] rounded-full p-1.5 gap-1">
            <button
              role="tab"
              id="tab-members"
              aria-selected={tab === "members"}
              aria-controls="panel-members"
              onClick={() => setTab("members")}
              className={`px-6 py-2.5 rounded-full text-[14.5px] font-semibold transition-all duration-300 ${
                tab === "members"
                  ? "bg-[#5B3FD6] text-white shadow-sm"
                  : "text-[#5B6479] hover:text-[#172033]"
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
              className={`px-6 py-2.5 rounded-full text-[14.5px] font-semibold transition-all duration-300 ${
                tab === "vendors"
                  ? "bg-[#5B3FD6] text-white shadow-sm"
                  : "text-[#5B6479] hover:text-[#172033]"
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14"
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              isLast={index === steps.length - 1}
              accent={tab === "members" ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
