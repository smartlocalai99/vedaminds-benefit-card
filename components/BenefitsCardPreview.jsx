import { GraduationCap, Users } from "lucide-react";

function QrPlaceholder() {
  return (
    <svg
      viewBox="0 0 29 29"
      className="w-full h-full"
      role="img"
      aria-label="Sample QR code placeholder"
    >
      <rect width="29" height="29" fill="#ffffff" />
      {[
        [0, 0],
        [22, 0],
        [0, 22],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="#172033" />
          <rect x={x + 1.5} y={y + 1.5} width="4" height="4" fill="#ffffff" />
          <rect x={x + 2.5} y={y + 2.5} width="2" height="2" fill="#172033" />
        </g>
      ))}
      {Array.from({ length: 60 }).map((_, i) => {
        const x = (i * 7) % 24;
        const y = 9 + Math.floor((i * 7) / 24) * 2;
        if (x < 8 && y < 8) return null;
        if (x > 20 && y < 8) return null;
        if (x < 8 && y > 20) return null;
        return <rect key={i} x={x + 3} y={y} width="1.6" height="1.6" fill="#172033" />;
      })}
    </svg>
  );
}

export default function BenefitsCardPreview({ floating = true }) {
  return (
    <div
      style={{ "--card-tilt": "-4deg" }}
      className={`relative w-full max-w-[420px] md:max-w-[480px] rounded-[28px] p-6 md:p-8 overflow-hidden text-white shadow-2xl bg-gradient-to-br from-[#241a63] via-[#3d2a9e] to-[#5b3fd6] rotate-[-4deg] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${
        floating ? "card-float" : ""
      }`}
    >
      {/* Decorative education/community pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <GraduationCap
        aria-hidden="true"
        className="absolute -bottom-6 -left-6 w-32 h-32 text-white opacity-[0.08]"
      />
      <Users
        aria-hidden="true"
        className="absolute -top-4 -right-2 w-24 h-24 text-white opacity-[0.08]"
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="font-display text-[20px] md:text-[24px] font-semibold leading-tight">
            Veda Benefits Card
          </p>
          <p className="text-[12px] md:text-[13px] text-[#E4DEF7] mt-1 leading-snug max-w-[220px]">
            Veda Minds Learning &amp; Development Center
          </p>
        </div>
        <div
          className="w-11 h-8 rounded-md bg-gradient-to-br from-[#F4B942] to-[#D99C1F] shrink-0"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mt-8 md:mt-10">
        <p className="text-[11px] uppercase tracking-[2px] text-[#C9BEF2]">
          Member Name
        </p>
        <p className="font-display text-[19px] md:text-[22px] font-semibold mt-1">
          Member Name
        </p>
      </div>

      <div className="relative z-10 mt-6 md:mt-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[2px] text-[#C9BEF2]">
            Membership No.
          </p>
          <p className="font-card text-[15px] md:text-[17px] font-medium mt-1 tracking-wide">
            VBC-0000-0000
          </p>

          <div className="flex gap-6 mt-4">
            <div>
              <p className="text-[10.5px] uppercase tracking-[2px] text-[#C9BEF2]">
                Valid From
              </p>
              <p className="font-card text-[13px] mt-1">MM/YYYY</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[2px] text-[#C9BEF2]">
                Valid Thru
              </p>
              <p className="font-card text-[13px] mt-1">MM/YYYY</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-2 w-16 h-16 md:w-20 md:h-20 shrink-0">
          <QrPlaceholder />
        </div>
      </div>
    </div>
  );
}
