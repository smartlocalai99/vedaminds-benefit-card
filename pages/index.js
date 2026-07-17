import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import BentoHighlights from "@/components/BentoHighlights";
import WhatIsSection from "@/components/WhatIsSection";
import MemberBenefits from "@/components/MemberBenefits";
import VendorBenefits from "@/components/VendorBenefits";
import HowItWorks from "@/components/HowItWorks";
import PartnerCategories from "@/components/PartnerCategories";
import JoinPaths from "@/components/JoinPaths";
import TrustSection from "@/components/TrustSection";
import Faq from "@/components/Faq";
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
      <LogoMarquee />
      <BentoHighlights />
      <WhatIsSection />
      <MemberBenefits />
      <HowItWorks />
      <VendorBenefits />
      <PartnerCategories />
      <JoinPaths />
      <TrustSection />
      <Faq />
      <Footer />
    </div>
  );
}
