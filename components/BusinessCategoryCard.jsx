import Image from "next/image";

export default function BusinessCategoryCard({ image, label, priority = false }) {
  return (
    <article className="group relative isolate aspect-[4/3] min-h-[210px] overflow-hidden rounded-[22px] border border-white/70 bg-[#24201E] shadow-[0_16px_38px_rgba(55,35,25,0.12)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(55,35,25,0.18)] sm:min-h-0 sm:rounded-[24px]">
      <Image
        src={image}
        alt={`${label} partner category`}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/95 via-[#171412]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8AE8E]">
          Veda Partner
        </span>
        <h3 className="max-w-[18rem] text-[16px] font-semibold leading-5 text-white">
          {label}
        </h3>
      </div>
    </article>
  );
}
