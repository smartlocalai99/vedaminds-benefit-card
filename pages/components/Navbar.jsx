"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-[#0E3B2E] shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="cursor-pointer">
            <a href="#home">
               <img
      src={scrolled ? "/logo-light.png" : "/logo.png"}
      alt="VEDA Logo"
      className="
        h-28 w-auto object-contain
        scale-150 origin-left
        transition-all duration-500
      "
    />
            </a>
          </div>

          {/* Menu */}
          {/* Desktop Menu */}
<ul
  className={`
    hidden lg:flex items-center gap-10
    font-medium text-[15px]
    transition-all duration-500
    ${
      scrolled
        ? "text-white"
        : "text-[#1F2937]"
    }
  `}
>
  {[
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Support", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ].map((item) => (
    <li key={item.label}>
      <a
        href={item.href}
        className="
          relative inline-block
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#C49A4A]
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-[#C49A4A]
          after:transition-all
          after:duration-300
          hover:after:w-full
        "
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>

{/* Desktop Button */}
<div className="hidden lg:flex items-center">
  <a
    href="#services"
    className={`
      flex items-center gap-2
      px-7 py-3 rounded-full
      font-medium
      transition-all duration-500
      hover:scale-105
      hover:-translate-y-1
      ${
        scrolled
          ? "bg-white text-[#0E3B2E]"
          : "bg-[#0E3B2E] text-white"
      }
    `}
  >
    Get Started
    <span className="text-lg">→</span>
  </a>
</div>

{/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`lg:hidden ${
    scrolled
      ? "text-white"
      : "text-[#0E3B2E]"
  }`}
>
  {menuOpen ? (
    <X size={30} />
  ) : (
    <Menu size={30} />
  )}
</button>

{/* Mobile Menu */}
{/* Mobile Menu */}
<div
  className={`
    lg:hidden absolute top-24 left-0
    w-full bg-white shadow-xl
    transition-all duration-500
    ${
      menuOpen
        ? "h-[calc(100vh-96px)] overflow-y-auto"
        : "h-0 overflow-hidden"
    }
  `}
>
  <ul className="flex flex-col items-center gap-5 py-6">

    {[
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Services", href: "#services" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Support", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ].map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="text-[#0E1B16] font-medium text-lg"
        >
          {item.label}
        </a>
      </li>
    ))}

    {/* Get Started Button */}
    <li className="pt-2">
      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="
          inline-flex items-center gap-2
          bg-[#0E3B2E]
          text-white
          px-8 py-3
          rounded-full
          font-medium
        "
      >
        Get Started
        <span>→</span>
      </a>
    </li>

  </ul>
</div>

        </nav>
      </div>
    </header>
  );
}