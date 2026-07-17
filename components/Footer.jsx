import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Partner Vendors", href: "/#partner-vendors" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/#contact" },
];

const MEMBER_LINKS = [
  { label: "Member Benefits", href: "/#member-benefits" },
  { label: "Become a Member", href: "/#contact" },
  { label: "FAQs", href: "/#faqs" },
];

const VENDOR_LINKS = [
  { label: "Vendor Benefits", href: "/#vendor-benefits" },
  { label: "Register as a Partner Vendor", href: "/#contact" },
  { label: "Partner Business Categories", href: "/#partner-vendors" },
];

const LEGAL_LINKS = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Partner Disclaimer", href: "/partner-disclaimer" },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#14181F] pt-14 pb-8 text-white sm:pt-16">
      <Container>
        <div className="grid gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <Image
              src="/vedalogoold.jpeg"
              alt="Veda Minds Learning & Development Center logo"
              width={420}
              height={420}
              className="h-20 w-auto max-w-full object-contain md:h-24 mb-5"
            />
            <p className="text-[#AEB4C7] leading-7 text-[14.5px]">
              The Veda Benefits Card is a community membership card by Veda
              Minds Learning &amp; Development Center, connecting families
              with trusted local partner vendors, discounts, and educational
              opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-[#AEB4C7] text-[14.5px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-5">For Members</h3>
            <ul className="space-y-3 text-[#AEB4C7] text-[14.5px]">
              {MEMBER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-[16px] font-semibold mt-7 mb-5">For Vendors</h3>
            <ul className="space-y-3 text-[#AEB4C7] text-[14.5px]">
              {VENDOR_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-5">Contact</h3>
            <ul className="space-y-3 text-[#AEB4C7] text-[14.5px]">
              <li>Hyderabad, India</li>
              <li>
                <a href="mailto:support@veda.com" className="hover:text-white transition-colors duration-200">
                  support@veda.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">
                  +91 9876543210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-left text-[13.5px] text-[#AEB4C7] sm:mt-12 sm:flex-row sm:items-center sm:pt-8">
          <p>© 2026 Veda Minds Learning &amp; Development Center. All rights reserved.</p>
          <div className="flex flex-wrap justify-start gap-x-5 gap-y-2 sm:justify-center sm:gap-x-6">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
