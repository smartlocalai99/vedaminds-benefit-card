import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Card", href: "/#about" },
  { label: "Member Benefits", href: "/#member-benefits" },
  { label: "How It Works", href: "/#how-it-works" },
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
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 md:h-20 md:gap-4">
        <Link
          href="/#home"
          className="flex h-16 w-[150px] shrink-0 items-center overflow-hidden sm:w-[180px] md:h-20 md:w-[210px]"
          aria-label="Veda Minds Learning & Development Center, home"
        >
          <Image
            src="/logoonnav.png"
            alt="Veda Minds Learning & Development Center logo"
            width={240}
            height={135}
            className="h-20 w-auto shrink-0 object-contain sm:h-24 md:h-28"
            unoptimized
            priority
          />

        </Link>

        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center justify-center gap-5 text-[14px] font-medium text-[#3A3F4A]"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap hover:text-[#14181F] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center justify-end gap-5 shrink-0">
          <Link
            href="/#join"
            className="text-[14px] font-medium whitespace-nowrap text-[#3A3F4A] hover:text-[#14181F] transition-colors duration-200"
          >
            Become a Partner
          </Link>
          <Link
            href="/#join"
            className="px-6 py-3 rounded-full font-semibold text-[14px] whitespace-nowrap bg-[#14181F] text-white hover:bg-[#272D3A] hover:-translate-y-0.5 transition-all duration-200"
          >
            Become a Member
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center justify-self-end rounded-full text-[#14181F] xl:hidden"
        >
          {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`xl:hidden bg-white border-t border-black/5 overflow-y-auto transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-[calc(100dvh-4rem)] md:max-h-[calc(100dvh-5rem)]"
            : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center py-2.5 text-[16px] font-medium text-[#14181F]"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-3 pb-2">
            <Link
              href="/#join"
              onClick={() => setMenuOpen(false)}
              className="text-center px-5 py-3 rounded-full font-medium text-[#14181F] border border-black/10"
            >
              Become a Partner
            </Link>
            <Link
              href="/#join"
              onClick={() => setMenuOpen(false)}
              className="text-center px-5 py-3 rounded-full font-semibold bg-[#14181F] text-white"
            >
              Become a Member
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
