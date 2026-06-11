"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

          {/* Button */}
          <div className="flex items-center">
            <a
              href="#services"
              className={`
                hidden md:flex items-center gap-2
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

        </nav>
      </div>
    </header>
  );
}