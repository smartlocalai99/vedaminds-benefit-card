export default function ProcessStep({ number, icon, title, description, isLast = false, accent = "primary" }) {
  const ring =
    accent === "secondary"
      ? "from-[#FFF7E6] to-[#FDEFCB] border-[#F0DBA0] text-[#B3873A]"
      : "from-[#F2EEFC] to-[#E9E1FB] border-[#D9CCF7] text-[#5B3FD6]";

  return (
    <div className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div
          className="hidden md:block absolute top-11 left-1/2 w-full h-[2px] bg-[#E4DEF7] -z-0"
          aria-hidden="true"
        />
      )}

      <div
        className={`relative z-10 w-[88px] h-[88px] rounded-full bg-gradient-to-br ${ring} border flex items-center justify-center shadow-sm`}
      >
        {icon}
        <span className="absolute -top-2 -right-1 w-7 h-7 rounded-full bg-[#172033] text-white text-xs font-semibold flex items-center justify-center shadow-md">
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-[17px] font-semibold text-[#172033] leading-snug px-2">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-[14px] text-[#5B6479] leading-6 max-w-[220px]">
          {description}
        </p>
      )}
    </div>
  );
}
