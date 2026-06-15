"use client";


import {
  ArrowRight,
  BatteryFull,
  Wifi,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white pb-20 overflow-hidden">
      <div className="w-full px-6 lg:px-12">

        {/* CTA Container */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#04251C] via-[#073528] to-[#0B3B2D] px-8 lg:px-16 py-16">

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">

            {/* LEFT SIDE */}
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* Mobile */}
<div className="flex justify-center shrink-0">
  <div className="relative rotate-[-2deg] lg:rotate-[-3deg] hover:rotate-0 transition-all duration-500 float-slow">

    {/* Glow */}
    <div className="absolute -inset-8 bg-emerald-500/20 blur-[90px] rounded-full" />
<div className="absolute inset-0 bg-[#D8B15C]/15 blur-[70px] rounded-full" />

    {/* Premium iPhone */}
    <div
      className="
      relative
      w-[230px]
      h-[470px]
      sm:w-[250px]
      sm:h-[520px]
      lg:w-[280px]
      lg:h-[580px]
      rounded-[58px]
      bg-[#111111]
      border border-white/20 ring-1 ring-black/50
      shadow-[0_45px_90px_rgba(0,0,0,0.55)]
      p-[7px]
      overflow-hidden
    "
    >
      {/* Metallic frame */}
      <div className="absolute inset-0 rounded-[58px] bg-gradient-to-b from-[#2A2A2A] via-[#0F0F0F] to-[#1B1B1B]" />

      {/* Side shine */}
      <div className="absolute left-[2px] top-20 h-16 w-[2px] bg-white/20 rounded-full" />
      <div className="absolute right-[2px] top-28 h-20 w-[2px] bg-white/10 rounded-full" />

      {/* Screen */}
      <div className="relative h-full w-full rounded-[50px] overflow-hidden z-10 bg-[#F7F8FA]">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B7A61] via-[#0F5A47] to-[#06372C]" />

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
          <div className="w-[120px] h-[34px] bg-black rounded-full shadow-inner" />
        </div>

        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-5 text-[14px] font-semibold text-white relative z-20">
          <span>9:41</span>

          <div className="flex items-center gap-2">
            <Wifi size={16} strokeWidth={2.5} />
            <BatteryFull size={18} strokeWidth={2.5} />
          </div>
        </div>

        {/* App Content */}
        <div className="px-4 pt-8 relative z-20">

          {/* Welcome */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/70 text-lg">
                Welcome Back 👋
              </p>

              <h2 className="text-white text-[34px] font-bold mt-1">
                Srinivas
              </h2>
            </div>
          </div>

          {/* Premium Membership Card */}
<div
  className="
  mt-6
  relative
  overflow-hidden
  rounded-[34px]
  bg-gradient-to-br
  from-[#F4D77B]
  via-[#D8B15C]
  to-[#BF8C2F]
  p-7
  shadow-[0_30px_50px_rgba(0,0,0,0.22)]
"
>
  {/* Luxury shine */}
  <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-3xl" />

  {/* Soft premium texture */}
  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />

  {/* Header */}
  <p className="text-[#5B4518] text-[13px] uppercase tracking-[1.8px] font-semibold">
    VEDA MEMBER
  </p>

  {/* Name */}
  <h3 className="text-[#111111] text-[28px] font-bold leading-[1.15] mt-5">
    Lakshmi
    <br />
    Reddy
  </h3>

  {/* Bottom */}
  <div className="flex justify-between items-end mt-10">
    <p className="text-[#4D3B15] text-[15px] font-medium">
      ID: VEDA-25896
    </p>

    {/* V watermark */}
    <div className="text-[88px] font-serif text-white/15 leading-none">
      V
    </div>
  </div>
</div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-5">

            <div className="bg-white rounded-[28px] p-5 shadow-lg">
              <p className="text-gray-500 text-sm">
                Discounts
              </p>

              <h4 className="font-bold text-3xl text-[#111] mt-2">
                1,248
              </h4>
            </div>

            <div className="bg-white rounded-[28px] p-5 shadow-lg">
              <p className="text-gray-500 text-sm">
                Vendors
              </p>

              <h4 className="font-bold text-3xl text-[#111] mt-2">
                350+
              </h4>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white mt-5 rounded-[30px] p-5 shadow-lg">
            <h4 className="font-semibold text-[#0E1B16] text-base mb-4">
              Recent Activity
            </h4>

            <div className="space-y-3">
              <div className="h-3 bg-gray-100 rounded-full" />
              <div className="h-3 bg-gray-100 rounded-full w-[80%]" />
              <div className="h-3 bg-gray-100 rounded-full w-[60%]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

              {/* Text Content */}
              <div className="max-w-[360px] lg:max-w-[420px] text-center lg:text-left relative z-20">

  <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.1] font-serif">
    Turn Every Membership
    <br />
    Into Measurable Value.
  </h2>

  <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 max-w-[400px]">
    Join businesses using VEDA to onboard
    vendors, validate memberships, and
    grow customer loyalty.
  </p>

</div>
            </div>

          
            {/* RIGHT SIDE */}
<div className="flex flex-col items-center lg:items-end w-full">

  {/* Premium Card */}
  <div className="relative lg:-ml-24 xl:-ml-16 rotate-[-1deg] hover:rotate-0 transition-all duration-500">

    {/* Glow */}
    <div className="absolute inset-0 bg-[#D8B15C]/20 blur-[90px] rounded-full" />

    {/* Membership Card */}
    <div
      className="
        relative
        w-[320px]
        sm:w-[380px]
        lg:w-[430px]
        h-[230px]
        sm:h-[250px]
        lg:h-[340px]
        rounded-[40px]
        overflow-hidden
        bg-gradient-to-r
        from-[#001B14]
        via-[#003628]
        to-[#014535]
        border border-white/10
        shadow-[0_35px_80px_rgba(0,0,0,0.30)]
        p-5 lg:p-8
      "
    >

      {/* Gold Chip */}
      <div className="absolute top-8 right-8 w-14 h-10 lg:w-20 lg:h-14 rounded-2xl bg-[#D8B15C]" />

      {/* Top Brand */}
<div>
  <h3 className="text-white text-3xl lg:text-5xl font-bold tracking-tight">
    VEDA
  </h3>

  <p className="text-white/80 text-sm lg:text-lg mt-1">
    Smart Vendor Membership
  </p>
</div>

{/* Name */}
{/* Card Content */}
<div className="mt-4 lg:mt-8 flex justify-between items-start">

  {/* Left Side */}
  <div className="flex-1 pr-3">

    {/* Name */}
    <h4 className="text-white text-lg sm:text-xl lg:text-3xl font-semibold leading-tight">
      Lakshmi Reddy
    </h4>

    {/* Member ID */}
    <div className="mt-4">
      <p className="text-[#B8C6C0] text-[10px] lg:text-xs uppercase tracking-wide">
        Member ID
      </p>

      <h5 className="text-white text-xs sm:text-sm lg:text-xl font-semibold mt-1">
        VEDA-4587-PL
      </h5>
    </div>

    {/* Valid From */}
    <div className="mt-3">
      <p className="text-[#B8C6C0] text-[10px] lg:text-xs uppercase tracking-wide">
        Valid From
      </p>

      <h4 className="text-white text-xs sm:text-sm lg:text-lg font-medium mt-1">
        01 Jan 2026
      </h4>
    </div>
  </div>

  {/* QR */}
  <div className="bg-white rounded-2xl p-2 lg:p-3 shadow-xl shrink-0">
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=VEDA-4587-PL"
      alt="QR"
      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
    />
  </div>
</div>
    </div>
  </div>

  {/* CTA Button */}
  <button className="mt-10 bg-[#D8B15C] text-[#0E1B16] px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition-all shadow-lg">
    Join Vendor Network
    <ArrowRight size={18} />
  </button>

  <p className="text-sm text-gray-300 mt-4">
    No setup fees • Easy onboarding • Secure
  </p>

</div>

          </div>

          {/* Glow Effects */}
          <div className="absolute -left-32 top-10 w-[300px] h-[300px] bg-[#D8B15C]/10 blur-[120px] rounded-full" />

          <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-[#0F4A38]/30 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
}