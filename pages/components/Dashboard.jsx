import {
  CircleCheck,
  ArrowRight,
  Bell,
  UserCircle2,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
  {
    title: "Registered Vendors",
    value: "2,500+",
    growth: "+12.5%",
  },
  {
    title: "Cards Scanned Today",
    value: "18,240",
    growth: "+15.3%",
  },
  {
    title: "Discounts Applied",
    value: "8,764",
    growth: "+10.1%",
  },
  {
    title: "Revenue Processed",
    value: "₹48,75,890",
    growth: "+14.2%",
  },
];

  const transactions = [
  {
    id: "#SCAN-1258",
    vendor: "Hyderabad Mart",
    amount: "Card Verified",
  },
  {
    id: "#DISC-1257",
    vendor: "Green Valley Store",
    amount: "15% Discount",
  },
  {
    id: "#PAY-1256",
    vendor: "Sharma Retail",
    amount: "₹1,900",
  },
  {
    id: "#SCAN-1255",
    vendor: "Elegant Traders",
    amount: "Membership Active",
  },
];

  return (
    <section
  id="about"
  className="bg-white pb-24"
>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[3px] text-sm font-semibold text-[#B3873A]">
              REAL-TIME INSIGHTS
            </p>

            <h2 className="text-[42px] md:text-[56px] leading-tight font-serif text-[#0E1B16] mt-4">
              Manage Vendors.
              <br />
              Track Performance.
            </h2>

            <p className="text-[#6B7280] text-lg leading-8 mt-6 max-w-[520px]">
                A centralized dashboard to onboard vendors,
                validate memberships, and monitor business activity.
            </p>

            {/* Checklist */}
            <div className="space-y-5 mt-8">

              {[
                "Real-time transaction tracking",
                "Advanced analytics & reporting",
                "Detailed vendor insights",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#F7E8C7] flex items-center justify-center">
                    <CircleCheck
                      size={18}
                      className="text-[#B3873A]"
                    />
                  </div>

                  <span className="text-[#374151] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-10 flex items-center gap-3 bg-[#0E3B2E] text-white px-8 py-4 rounded-full font-medium">
              Join Vendor Network
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Dashboard UI */}
          <div
  className="bg-white rounded-[30px] border border-[#EFE8DD] shadow-xl p-6
  "
>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

              <div>
                <h3 className="text-2xl font-bold text-[#0E1B16]">
                  VEDA
                </h3>
                <p className="text-sm text-gray-500">
                  Dashboard Overview
                </p>
              </div>

              <div className="flex items-center gap-4">
  <Bell size={20} className="text-[#0E1B16]" />

  <div className="flex items-center gap-3">
    <img
      src="/dash.png"
      alt="Indian Vendor"
      className="w-11 h-11 rounded-full object-cover border-2 border-[#EADFCF]"
    />

    <div className="hidden sm:block">
      <p className="text-sm font-semibold text-[#0E1B16]">
        Ravi Kumar
      </p>
      <p className="text-xs text-gray-500">
        Vendor Admin
      </p>
    </div>
  </div>
</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
  bg-[#FAFAFA]
  rounded-2xl p-5
  border border-[#F0F0F0]
"
                >
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h4 className="text-2xl font-bold text-[#0E1B16] mt-2">
                    {item.value}
                  </h4>

                  <span className="text-green-600 text-sm font-medium">
                    {item.growth}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-2 gap-5 mt-6">

              {/* Graph */}
              <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-[#F0F0F0]">
                <h4 className="font-semibold text-[#0E1B16] mb-4">
                  Transactions Overview
                </h4>

                <div className="h-44 flex items-end gap-2">
                  {[40, 60, 45, 90, 75, 120].map(
                    (bar, index) => (
                      <div
  key={index}
  className="
    flex-1
    bg-[#D9EBD9]
    rounded-t-xl
    relative
  "
  style={{
    height: `${bar}px`,
  }}
>
                        <div className="absolute bottom-0 w-full bg-[#0E3B2E] rounded-t-xl h-[50%]"></div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Transactions */}
              <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-[#F0F0F0]">
                <h4 className="font-semibold text-[#0E1B16] mb-4">
                  Recent Transactions
                </h4>

                <div className="space-y-4">
                  {transactions.map((item, index) => (
                    <div
                      key={index}
                      className="
  flex justify-between items-center
  border-b border-gray-100
  pb-3 px-2 py-2 rounded-xl
"
                    >
                      <div>
                        <p className="font-medium text-[#111827] text-sm">
                          {item.id}
                        </p>

                        <p className="text-xs text-gray-500">
                          {item.vendor}
                        </p>
                      </div>

                      <span className="font-semibold text-[#0E3B2E]">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}