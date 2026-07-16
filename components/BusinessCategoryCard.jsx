export default function BusinessCategoryCard({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 bg-white rounded-[20px] border border-[#EAE5F9] px-4 py-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#D9CCF7]">
      <div
        className="w-12 h-12 rounded-xl bg-[#EFEAFC] text-[#5B3FD6] flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="text-[13.5px] font-medium text-[#172033] leading-5">
        {label}
      </span>
    </div>
  );
}
