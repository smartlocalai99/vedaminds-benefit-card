const TONES = {
  violet: { bg: "bg-[#EFEAFC]", icon: "bg-white text-[#5B3FD6]" },
  gold: { bg: "bg-[#FDECC4]", icon: "bg-white text-[#B3873A]" },
  green: { bg: "bg-[#DCF3E6]", icon: "bg-white text-[#1C7A4B]" },
  white: { bg: "bg-white border border-black/5", icon: "bg-[#F4F3EF] text-[#14181F]" },
};

export default function MemberBenefitCard({ icon, title, description, tone = "white", span = "" }) {
  const t = TONES[tone] ?? TONES.white;

  return (
    <div
      className={`${span} ${t.bg} h-full flex flex-col rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1.5`}
    >
      <div
        className={`w-12 h-12 rounded-2xl ${t.icon} flex items-center justify-center shrink-0`}
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="mt-5 text-[17px] font-bold text-[#14181F] leading-snug">
        {title}
      </h3>

      <p className="mt-2 text-[14px] text-[#5B6479] leading-6">
        {description}
      </p>
    </div>
  );
}
