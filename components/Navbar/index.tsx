"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { outerSansRegular } from "@/app/fonts/font";
const Navbar = () => {
  const [colorSection, setColorSection] = useState("#C9DA2C");
  const [logoMobileSrc, setLogoMobileSrc] = useState(
    "/assets/logo/senamLogo_IconOnly.png"
  );
  const [logoDesktopSrc, setLogoDesktopSrc] = useState(
    "/assets/logo/SENAM_LOGO.png"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentColor = "#C9DA2C";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          if (
            section.getAttribute("data-color") === "#C9DA2C" ||
            section.getAttribute("data-color") === "#FAFBEA"
          ) {
            currentColor = "#121212";
          }
        }
      });

      setColorSection(currentColor);

      if (currentColor === "#121212") {
        setLogoMobileSrc("/assets/logo/senamLogoBlack_IconOnly.png");
        setLogoDesktopSrc("/assets/logo/senamLogoBlack_Vertical.png");
      } else {
        setLogoMobileSrc("/assets/logo/senamLogo_IconOnly.png");
        setLogoDesktopSrc("/assets/logo/senamLogo_vertical.png");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  };

  return (
    <div className={`block z-50 ${outerSansRegular.className}`}>
      <div
        className="flex justify-between items-center max-w-7xl mx-auto py-6  top-0 px-8"
        style={{ transition: "background-color 0.3s ease" }}
      >
        <Link href={"/"}>
          <Image
            className="block md:hidden"
            src={logoMobileSrc}
            width={37}
            height={37}
            alt="LogoImage"
          />
          <Image
            className="hidden md:block"
            src={logoDesktopSrc}
            width={80}
            height={100}
            alt="LogoImage"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer z-[99]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform text-[${colorSection}] ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-current transition-opacity text-[${colorSection}] ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-current transition-transform text-[${colorSection}] ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Full-Screen Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link href="/#why-senam" onClick={toggleMenu}>
              <span className="text-5xl" style={{ color: colorSection }}>
                Why Senam
              </span>
            </Link>
            <Link
              href="https://bookings.vibefam.com/senamhub/classes"
              onClick={toggleMenu}
              target="_blank"
            >
              <span className="text-5xl" style={{ color: colorSection }}>
                Membership
              </span>
            </Link>
            <Link href="/training-club" onClick={toggleMenu}>
              <span className="text-5xl" style={{ color: colorSection }}>
                Training Club
              </span>
            </Link>
            <Link href="/faq" onClick={toggleMenu}>
              <span className="text-5xl" style={{ color: colorSection }}>
                FAQ
              </span>
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <span className="text-5xl" style={{ color: colorSection }}>
                Contact Us
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex flex-row gap-4" style={{ color: colorSection }}>
            <li>
              <Link href="#why-senam">Why Senam</Link>
            </li>
            <li>
              <Link href="https://bookings.vibefam.com/senamhub/classes">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/training-club">Training Club</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
