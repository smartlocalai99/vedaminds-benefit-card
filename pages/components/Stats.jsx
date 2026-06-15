"use client";

import {
  Users,
  Store,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={30} />,
      value: "50K+",
      label: "Active Members",
    },
    {
      icon: <Store size={30} />,
      value: "2,500+",
      label: "Vendors",
    },
    {
      icon: <ShieldCheck size={30} />,
      value: "99.8%",
      label: "Validation Accuracy",
    },
    {
      icon: <TrendingUp size={30} />,
      value: "1.2M+",
      label: "Transactions Processed",
    },
  ];

  return (
    <section className="bg-white pb-20 overflow-hidden">
      <div className="w-full px-6 lg:px-12">

        <div className="bg-gradient-to-r from-[#06271D] to-[#0B3B2D] rounded-[40px] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            
            {stats.map((item, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-5
                  px-10 py-10
                  relative
                  ${
                    index !== stats.length - 1
                      ? "border-b lg:border-b-0 lg:border-r border-white/10"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#0F4A38] flex items-center justify-center text-[#D8B15C] shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white text-[34px] font-bold leading-none">
                    {item.value}
                  </h3>

                  <p className="text-[#D1D5DB] text-sm mt-2">
                    {item.label}
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