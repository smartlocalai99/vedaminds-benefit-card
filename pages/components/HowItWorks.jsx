export default function HowItWorks() {
  const steps = [
  {
    number: "01",
    title: "Customer Buys",
    description:
      "Customers purchase products from partnered stores using membership benefits.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
  },
  {
    number: "02",
    title: "ShopKeeper Scans Card",
    description:
      "The shopkeeper scans the membership card to validate customer eligibility instantly.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    reverse: true,
  },
  {
    number: "03",
    title: "Discount Applied",
    description:
      "Eligible discounts are automatically applied after successful validation.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
  },
  {
    number: "04",
    title: "Payment Processed",
    description:
      "Payment is securely completed and the transaction is recorded successfully.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    reverse: true,
  },
];

  return (
    <section
      id="services"
      className="bg-[#f8f8f8] py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#B3873A] uppercase tracking-[4px] text-sm font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="text-[40px] md:text-[58px] font-serif text-[#111827] mt-4">
            A simple journey.
          </h2>
        </div>

        {steps.map((step, index) => (
          <div key={index}>
            <div
              className={`flex flex-row items-center justify-between py-10 md:py-16 gap-4 md:gap-10 ${
  step.reverse ? "flex-row-reverse" : ""
}`}
            >
              {/* Number */}
<div className="flex justify-center shrink-0 overflow-visible w-[100px] sm:w-auto">
  <h1
    className="text-[80px] sm:text-[120px] md:text-[220px] font-extrabold leading-none"
    style={{
      backgroundImage: `url(${step.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      display: "inline-block",
    }}
  >
    {step.number}
  </h1>
</div>

              {/* Content */}
              {/* Content */}
<div className="flex-1 text-left">
  <h2 className="text-[20px] sm:text-[28px] md:text-5xl font-semibold text-black mb-3 md:mb-5">
    {step.title}
  </h2>

  <div className="w-14 md:w-24 h-[2px] bg-[#CBB48A] mb-4 md:mb-6" />

  <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-6 md:leading-10">
    {step.description}
  </p>
</div>
            </div>

            {index !== steps.length - 1 && (
              <div className="border-t border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}