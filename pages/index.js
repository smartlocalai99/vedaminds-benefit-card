import Head from "next/head";
import { CreditCard, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import WhatIsSection from "@/components/WhatIsSection";
import MemberBenefits from "@/components/MemberBenefits";
import VendorBenefits from "@/components/VendorBenefits";
import HowItWorks from "@/components/HowItWorks";
import PartnerCategories from "@/components/PartnerCategories";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Veda Benefits Card | Family Savings and Local Business Benefits</title>
        <meta
          name="description"
          content="Discover the Veda Benefits Card by Veda Minds Learning & Development Center. Access partner discounts, family savings, trusted local vendors, educational opportunities, and community benefits."
        />
      </Head>

      <Navbar />
      <Hero />
      <TrustHighlights />
      <WhatIsSection />
      <MemberBenefits />
      <VendorBenefits />
      <HowItWorks />
      <PartnerCategories />

      <CTASection
        icon={<CreditCard size={28} aria-hidden="true" />}
        heading="Start Saving with the Veda Benefits Card"
        text="Join the Veda Minds community and unlock valuable discounts, trusted services, educational opportunities, and exclusive family benefits."
        primaryLabel="Become a Member"
        primaryHref="/#contact"
        secondaryLabel="Explore Benefits"
        secondaryHref="/#member-benefits"
      />

      <CTASection
        icon={<Store size={28} aria-hidden="true" />}
        heading="Grow Your Business with the Veda Benefits Network"
        text="Reach more local families, improve customer loyalty, and promote your business through a trusted community platform."
        primaryLabel="Become a Partner Vendor"
        primaryHref="/#contact"
        secondaryLabel="Contact Veda Minds"
        secondaryHref="/#contact"
      />

      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
}
