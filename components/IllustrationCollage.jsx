const THEMES = {
  primary: {
    blob: "from-[#EFEAFC] via-[#E7DFFB] to-[#DCD0F9]",
    dots: "#5B3FD6",
    center: "bg-gradient-to-br from-[#5B3FD6] to-[#3d2a9e]",
    satelliteIcon: "text-[#5B3FD6]",
  },
  secondary: {
    blob: "from-[#FFF3D6] via-[#FDECBE] to-[#FBE0A0]",
    dots: "#B3873A",
    center: "bg-gradient-to-br from-[#F4B942] to-[#D99C1F]",
    satelliteIcon: "text-[#B3873A]",
  },
};

const SATELLITE_POSITIONS = [
  "top-1 left-3 md:top-2 md:left-4",
  "top-6 right-0 md:top-8 md:-right-2",
  "bottom-8 left-0 md:bottom-10 md:-left-3",
  "bottom-0 right-6 md:bottom-1 md:right-8",
];

export default function IllustrationCollage({
  centerIcon,
  satellites = [],
  theme = "primary",
  size = "md",
}) {
  const t = THEMES[theme] ?? THEMES.primary;
  const dims = size === "lg" ? "w-[260px] h-[260px] md:w-[320px] md:h-[320px]" : "w-[200px] h-[200px] md:w-[240px] md:h-[240px]";

  return (
    <div className={`relative mx-auto ${dims}`} aria-hidden="true">
      <div className={`absolute inset-0 rounded-[42%] bg-gradient-to-br ${t.blob}`} />

      <div
        className="absolute inset-6 rounded-[42%] opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(${t.dots} 1px, transparent 1.5px)`,
          backgroundSize: "16px 16px",
        }}
      />

      <div
        className={`absolute inset-[26%] rounded-full ${t.center} text-white flex items-center justify-center shadow-xl`}
      >
        {centerIcon}
      </div>

      {satellites.map((icon, i) => (
        <div
          key={i}
          className={`card-float absolute ${SATELLITE_POSITIONS[i % SATELLITE_POSITIONS.length]} w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center ${t.satelliteIcon}`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
