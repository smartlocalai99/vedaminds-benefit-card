export default function VendorBenefitCard({ icon, title, description }) {
  return (
    <div className="h-full flex flex-col bg-white/95 rounded-[24px] border border-white/60 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div
        className="w-14 h-14 rounded-2xl bg-[#FDEFCB] text-[#B3873A] flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="mt-5 text-[18px] font-semibold text-[#172033] leading-snug">
        {title}
      </h3>

      <p className="mt-2.5 text-[14.5px] text-[#5B6479] leading-7">
        {description}
      </p>
    </div>
  );
}
