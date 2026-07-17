import Container from "./Container";
import BusinessCategoryCard from "./BusinessCategoryCard";

const CATEGORIES = [
  {
    image: "/categories/schools.jpg",
    label: "Schools and Educational Services",
  },
  { image: "/categories/clinics.jpg", label: "Hospitals and Clinics" },
  { image: "/categories/pharmacies.jpg", label: "Pharmacies" },
  { image: "/categories/grocery-stores.jpg", label: "Grocery Stores" },
  {
    image: "/categories/restaurants-cafes.jpg",
    label: "Restaurants and Cafés",
  },
  { image: "/categories/clothing-stores.jpg", label: "Clothing Stores" },
  {
    image: "/categories/electronics-stores.jpg",
    label: "Electronics Stores",
  },
  { image: "/categories/fitness-centres.jpg", label: "Fitness Centres" },
  {
    image: "/categories/salons-beauty.jpg",
    label: "Salons and Beauty Services",
  },
  { image: "/categories/travel-services.jpg", label: "Travel Services" },
  {
    image: "/categories/professional-services.jpg",
    label: "Professional Services",
  },
  {
    image: "/categories/childrens-activities.jpg",
    label: "Children's Activity Centres",
  },
  {
    image: "/categories/bookstores-stationery.jpg",
    label: "Bookstores and Stationery Shops",
  },
  { image: "/categories/home-services.jpg", label: "Home Services" },
  { image: "/categories/local-retail.jpg", label: "Local Retail Businesses" },
];

export default function PartnerCategories() {
  return (
    <section
      id="partner-vendors"
      className="scroll-mt-20 bg-[#F6F0EB] py-16 md:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block rounded-full border border-[#C97950]/25 bg-[#F8E9DF] px-4 py-1.5 text-[13px] font-semibold text-[#B65F37]">
            Partner Vendors
          </p>
          <h2 className="font-display mt-5 text-[30px] leading-tight text-[#171717] md:text-[42px]">
            Explore trusted businesses near you
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#6E645F] md:text-[17px] md:leading-8">
            Discover a growing network of verified local partners across the
            everyday categories your family relies on.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((item, index) => (
            <BusinessCategoryCard
              key={item.label}
              image={item.image}
              label={item.label}
              priority={index < 2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
