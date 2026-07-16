import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Member Benefits", href: "/#member-benefits" },
  { label: "Vendor Benefits", href: "/#vendor-benefits" },
  { label: "Partner Vendors", href: "/#partner-vendors" },
  { label: "FAQs", href: "/#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        <Link
          href="/#home"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Veda Minds Learning & Development Center, home"
        >
          <Image
            src="/logo.png"
            alt="Veda Minds Learning & Development Center logo"
            width={60}
            height={40}
            className="h-9 w-auto object-contain shrink-0"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-[16px] font-semibold text-[#172033]">
              Veda Minds
            </span>
            <span className="block text-[11px] text-[#5B6479] whitespace-nowrap">
              Learning &amp; Development Center
            </span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-7">
          <nav aria-label="Primary" className="flex items-center gap-6 text-[14.5px] font-medium text-[#374151]">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-1 whitespace-nowrap hover:text-[#5B3FD6] transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#5B3FD6] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/#contact"
              className="px-4 py-2.5 rounded-full font-medium text-[14px] whitespace-nowrap text-[#5B3FD6] border border-[#5B3FD6]/30 hover:bg-[#EFEAFC] transition-colors duration-200"
            >
              Become a Partner
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2.5 rounded-full font-medium text-[14px] whitespace-nowrap bg-[#5B3FD6] text-white hover:bg-[#4c33b8] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              Become a Member
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="xl:hidden text-[#172033] p-2"
        >
          {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`xl:hidden bg-white border-t border-[#EFEAFC] overflow-y-auto transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4 gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#172033] font-medium text-[16px] py-2.5"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-3 pb-2">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="text-center px-5 py-3 rounded-full font-medium text-[#5B3FD6] border border-[#5B3FD6]/30"
            >
              Become a Partner
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="text-center px-5 py-3 rounded-full font-medium bg-[#5B3FD6] text-white"
            >
              Become a Member
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
