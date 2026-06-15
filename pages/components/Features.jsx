import {
  ScanLine,
  ChartColumn,
  BadgePercent,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const features = [
  {
    icon: <ScanLine size={34} />,
    title: "Membership Validation",
    description:
      "Scan and validate membership cards instantly",
    bg: "bg-[#DDF5E6]",
    color: "text-[#0A5A41]",
  },
  {
    icon: <ChartColumn size={34} />,
    title: "Vendor Tracking",
    description:
      "Monitor all vendor transactions and activities in real-time",
    bg: "bg-[#FDEBCF]",
    color: "text-[#C2801F]",
  },
  {
    icon: <BadgePercent size={34} />,
    title: "Discount Management",
    description:
      "Create and apply discounts to eligible customers",
    bg: "bg-[#DCF6E8]",
    color: "text-[#067647]",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Secure Transactions",
    description:
      "Encrypted and secure transactions recorded accurately",
    bg: "bg-[#E1E7FF]",
    color: "text-[#4A5FE7]",
  },
];

  return (
    <section
  id="features"
  className="bg-white pb-20 scroll-mt-32"
>
      <div className="mx-auto px-6 lg:px-12">

        <div className="bg-[#FBF8F3] border border-[#EFE8DD] rounded-[28px] overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {features.map((item, index) => (
              <div
  key={index}
  className={`
    p-8 flex gap-5
    ${index !== features.length - 1
      ? "border-b lg:border-b-0 lg:border-r border-[#EFE8DD]"
      : ""
    }
  `}
>
                {/* Icon */}
                <div
                  className={`
                    min-w-[64px] h-16 rounded-full
                    flex items-center justify-center
                    ${item.bg} ${item.color}
                  `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[24px] font-semibold text-[#0E1B16] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#6B7280] text-[15px] leading-7 mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}