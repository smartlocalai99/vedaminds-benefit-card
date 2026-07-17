import {
  Dumbbell,
  GraduationCap,
  Pill,
  School,
  ShoppingBasket,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";

const LOGOS = [
  { label: "Schools", icon: School },
  { label: "Clinics", icon: Stethoscope },
  { label: "Pharmacies", icon: Pill },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Grocers", icon: ShoppingBasket },
  { label: "Local Retail", icon: Store },
  { label: "Fitness", icon: Dumbbell },
  { label: "Education", icon: GraduationCap },
];

function LogoGroup({ hidden = false }) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10 md:gap-14 md:pr-14"
      aria-hidden={hidden || undefined}
    >
      {LOGOS.map((logo) => {
        const Icon = logo.icon;

        return (
          <div
            key={logo.label}
            className="flex shrink-0 items-center gap-2.5 text-white/80 sm:gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DFA080]/35 bg-white/5 text-[#DFA080] sm:h-11 sm:w-11">
              <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap text-[14px] font-semibold tracking-[-0.01em] sm:text-[15px]">
              {logo.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="border-y border-white/10 bg-[#171717] py-4 sm:py-5 md:py-6"
      aria-label="Veda Benefits partner categories"
    >
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
