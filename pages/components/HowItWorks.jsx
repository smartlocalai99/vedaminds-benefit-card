import {
  UserPlus,
  CreditCard,
  Store,
  ScanLine,
  ShieldCheck,
  BadgePercent,
  WalletCards,
  FileText,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: "1",
      icon: <UserPlus size={28} />,
      title: "Admin Creates",
      subtitle: "Membership",
    },
    {
      id: "2",
      icon: <CreditCard size={28} />,
      title: "Customer Receives",
      subtitle: "Card",
    },
    {
      id: "3",
      icon: <Store size={28} />,
      title: "Customer Visits",
      subtitle: "Vendor",
    },
    {
      id: "4",
      icon: <ScanLine size={28} />,
      title: "Vendor Scans",
      subtitle: "Barcode",
    },
    {
      id: "5",
      icon: <ShieldCheck size={28} />,
      title: "System",
      subtitle: "Validates",
    },
    {
      id: "6",
      icon: <BadgePercent size={28} />,
      title: "Discount",
      subtitle: "Applied",
    },
    {
      id: "7",
      icon: <WalletCards size={28} />,
      title: "Payment",
      subtitle: "Processed",
    },
    {
      id: "8",
      icon: <FileText size={28} />,
      title: "Transaction",
      subtitle: "Saved",
    },
  ];

  return (
    <section
  id="services"
  className="bg-white py-20"
>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Top Heading */}
        <div className="text-center mb-16">

          <p className="text-[#B3873A] uppercase tracking-[3px] text-sm font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="text-[38px] md:text-[52px] font-serif text-[#0E1B16] mt-4">
            A simple journey.
            <span className="relative inline-block ml-3">
              Every time.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        {/* Timeline */}
{/* Timeline */}
<div className="relative">

  {/* Background Line Behind Circles */}
  <div className="hidden lg:block absolute top-14 left-0 w-full z-0">
    <div className="relative w-full h-[2px] bg-[#E8D9BA]">

      {/* Moving Arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 animate-flow z-10">
        <div className="flex items-center">
          <div className="w-16 h-[2px] bg-[#C49A4A]"></div>

          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#C49A4A]"></div>
        </div>
      </div>

    </div>
  </div>

  {/* Steps */}
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 relative z-20">
    {steps.map((step, index) => (
      <div
        key={step.id}
        className="
          flex flex-col items-center text-center relative
          transition-all duration-500
          hover:-translate-y-4
          group
          step-float
        "
        style={{
          animationDelay: `${index * 0.5}s`,
        }}
      >
        {/* Step Number */}
        <div className="
          absolute -top-3 z-30
          bg-[#0E3B2E]
          text-white
          w-8 h-8 rounded-full
          flex items-center justify-center
          text-xs font-semibold
          shadow-lg
        ">
          {step.id}
        </div>

        {/* Icon Circle */}
        <div
          className="
            process-circle
            relative z-20
            w-28 h-28 rounded-full
            bg-gradient-to-br from-[#FFF9F0] to-[#F7F2E8]
            border border-[#E8DDCC]
            flex items-center justify-center
            shadow-md
            text-[#B3873A]
          "
          style={{
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {step.icon}
        </div>

        <h3 className="text-[16px] font-semibold text-[#0E1B16] mt-5 leading-6">
          {step.title}
        </h3>

        <p className="text-[15px] text-[#4B5563]">
          {step.subtitle}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}