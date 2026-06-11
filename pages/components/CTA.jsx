import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#06271D] to-[#0B3B2D] px-10 lg:px-16 py-12">

          <div className="grid lg:grid-cols-3 items-center gap-10">

            {/* Left Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-28 h-28 rounded-[28px] border border-[#C49A4A]/30 bg-[#0F4A38] flex items-center justify-center">
                <div className="text-[60px] text-[#D8B15C]">
                  🪪
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center lg:text-left">

              <h2 className="text-white text-[38px] md:text-[48px] leading-tight font-serif">
                Turn Every Membership
                <br />
                Into Measurable Value.
              </h2>

              <p className="text-gray-300 mt-5 text-lg leading-8 max-w-[520px]">
                Join thousands of businesses using
                VEDA to build stronger relationships
                and loyal customers.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center lg:items-end gap-4">

              <button className="bg-[#D8B15C] text-[#0E1B16] px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition">
                Get Started Today
                <ArrowRight size={18} />
              </button>

              <p className="text-sm text-gray-300">
                No setup fees • Easy to use • Secure
              </p>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -right-20 top-0 w-[300px] h-[300px] bg-[#D8B15C]/10 blur-[120px] rounded-full"></div>

        </div>
      </div>
    </section>
  );
}