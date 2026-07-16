import {
  School,
  Stethoscope,
  Pill,
  ShoppingCart,
  UtensilsCrossed,
  Shirt,
  Laptop,
  Dumbbell,
  Scissors,
  Plane,
  Briefcase,
  Baby,
  BookOpen,
  Wrench,
  Store,
} from "lucide-react";
import Container from "./Container";
import BusinessCategoryCard from "./BusinessCategoryCard";

const CATEGORIES = [
  { icon: <School size={22} />, label: "Schools and Educational Services" },
  { icon: <Stethoscope size={22} />, label: "Hospitals and Clinics" },
  { icon: <Pill size={22} />, label: "Pharmacies" },
  { icon: <ShoppingCart size={22} />, label: "Grocery Stores" },
  { icon: <UtensilsCrossed size={22} />, label: "Restaurants and Cafés" },
  { icon: <Shirt size={22} />, label: "Clothing Stores" },
  { icon: <Laptop size={22} />, label: "Electronics Stores" },
  { icon: <Dumbbell size={22} />, label: "Fitness Centres" },
  { icon: <Scissors size={22} />, label: "Salons and Beauty Services" },
  { icon: <Plane size={22} />, label: "Travel Services" },
  { icon: <Briefcase size={22} />, label: "Professional Services" },
  { icon: <Baby size={22} />, label: "Children's Activity Centres" },
  { icon: <BookOpen size={22} />, label: "Bookstores and Stationery Shops" },
  { icon: <Wrench size={22} />, label: "Home Services" },
  { icon: <Store size={22} />, label: "Local Retail Businesses" },
];

export default function PartnerCategories() {
  return (
    <section id="partner-vendors" className="bg-[#F8F7FF] py-16 md:py-24 scroll-mt-20">
      <Container>
        <div className="text-center max-w-[700px] mx-auto">
          <p className="uppercase tracking-[3px] text-[13px] font-semibold text-[#5B3FD6]">
            Partner Vendors
          </p>
          <h2 className="font-display text-[30px] md:text-[42px] font-semibold text-[#172033] mt-3 leading-tight">
            Partner Business Categories
          </h2>
          <p className="text-[#5B6479] text-[16px] md:text-[17px] leading-8 mt-4">
            A growing network of trusted local businesses across categories
            families rely on every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {CATEGORIES.map((item) => (
            <BusinessCategoryCard key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
