export default function Hero() {
  return (
    <section
  id="home"
  className="bg-white pt-20 md:pt-32 pb-16 md:pb-32"
>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F4EEE5] px-5 py-2 rounded-full text-sm font-medium text-[#5A5A5A] mb-6">
              <span>SMART</span>
              <span>•</span>
              <span>SECURE</span>
              <span>•</span>
              <span>SEAMLESS</span>
            </div>

            {/* Heading */}
            <h1 className="text-[48px] md:text-[64px] leading-tight font-serif text-[#0E1B16] font-semibold">
              Smart Membership.
              <br />
              <span className="text-[#C49A4A]">
                Real Value.
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#5A5A5A] text-lg mt-6 max-w-[520px] leading-8">
              Validate memberships, manage discounts,
              track vendors and record every transaction
              with ease and accuracy.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
  href="#services"
  className="bg-[#0E3B2E] text-white px-8 py-4 rounded-full font-medium shadow-md
  hover:bg-[#145340]
  hover:scale-105
  hover:-translate-y-1
  hover:shadow-xl
  active:scale-95
  transition-all duration-300 flex items-center justify-center gap-2"
>
  Get Started
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

              <a
  href="#services"
  className="flex items-center gap-3 border border-[#E5E5E5] bg-white px-8 py-4 rounded-full font-medium text-[#1F2937]
  hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
>
  <span className="w-10 h-10 rounded-full border flex items-center justify-center text-[#C49A4A]">
    ▶
  </span>

  See How It Works
</a>
            </div>

            {/* Trusted Users */}
<a
  href="#testimonials"
  className="
    inline-flex items-center gap-4 mt-10
    group cursor-pointer
    transition-all duration-300
    hover:scale-[1.02]
  "
>
  {/* Images */}
  <div className="flex -space-x-3">

    <img
      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
      className="
        w-12 h-12 rounded-full
        border-2 border-white
        object-cover
        transition-transform duration-300
        group-hover:-translate-y-1
      "
      alt="Business owner"
    />

    <img
      src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200"
      className="
        w-12 h-12 rounded-full
        border-2 border-white
        object-cover
        transition-transform duration-300
        group-hover:-translate-y-1
      "
      alt="Business owner"
    />

    <img
      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
      className="
        w-12 h-12 rounded-full
        border-2 border-white
        object-cover
        transition-transform duration-300
        group-hover:-translate-y-1
      "
      alt="Business owner"
    />
  </div>

  {/* Text */}
  <p className="text-[#5A5A5A] text-sm leading-6">
    <span className="font-semibold text-[#0E1B16] group-hover:text-[#0E3B2E] transition">
      Trusted by businesses
    </span>
    <br />
    to grow stronger.
  </p>
</a>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">

            {/* Glow Background */}
            <div className="absolute top-16 right-20 w-[450px] h-[450px] bg-[#E6D3A8] blur-[120px] opacity-20 rounded-full"></div>

            {/* Membership Card */}
            <div
  className="
    relative z-10
rotate-[-4deg] md:rotate-[-7deg]
bg-gradient-to-br from-[#072A20] to-[#0E3B2E]
text-white
rounded-[28px] md:rounded-[40px]
p-4 md:p-8
w-full max-w-[290px] md:max-w-[560px]
shadow-2xl
mx-auto
overflow-hidden
    transition-all duration-500
    hover:rotate-[-4deg]
    hover:scale-105
    hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]
    animate-card-float
  "
>

              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold">
                    VEDA
                  </h2>
                  <p className="text-sm text-gray-300">
                    Smart Vendor Membership
                  </p>
                </div>

                <div className="w-14 h-10 bg-[#D4AF37] rounded-md"></div>
              </div>

              <div className="mt-6 md:mt-10">
                <h3 className="text-xl md:text-3xl font-semibold">
                  John Doe
                </h3>

                <p className="text-gray-400 mt-3 md:mt-6 text-sm">
                  Member ID
                </p>

                <p className="text-lg md:text-2xl font-bold break-words">
                  VEDA-4587-PL
                </p>
              </div>

              <div className="flex justify-between mt-6 md:mt-10">
                <div>
                  <p className="text-sm text-gray-400">
                    Valid From
                  </p>
                  <p>01 Jan 2026</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Valid Thru
                  </p>
                  <p>31 Dec 2026</p>
                </div>
              </div>

              {/* QR */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-2 rounded-xl">
                <img src="https://quickchart.io/qr?text=VEDA&size=120" 
                         alt="QR"
                         className="w-20 h-20 md:w-28 md:h-28 object-contain"/>
              </div>
            </div>

            {/* Verification Card */}
            {/* Verification Card */}
<div
  className="
    absolute
    -bottom-8 md:-bottom-14
    left-1/2 md:left-6
    -translate-x-1/2 md:translate-x-0
    bg-white
    rounded-[18px] md:rounded-[24px]
    shadow-2xl
    px-3 md:px-5
    py-2 md:py-3
    flex items-center gap-2 md:gap-4
    z-20
    backdrop-blur-sm
    w-[220px] md:w-auto
  "
>
  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#7ED957] rounded-full flex items-center justify-center text-white text-sm md:text-xl shadow-sm">
    ✔
  </div>

  <div>
    <h4 className="font-semibold text-[#0E1B16] text-sm md:text-base">
      Membership Verified
    </h4>

    <p className="text-xs md:text-sm text-gray-500">
      Active • Valid
    </p>
  </div>
</div>
   
          </div>

        </div>
      </div>
    </section>
  );
}