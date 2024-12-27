"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [colorSection, setColorSection] = useState("#C9DA2C");
  const [logoMobileSrc, setLogoMobileSrc] = useState(
    "/assets/logo/senamLogo_IconOnly.png"
  );
  const [logoDesktopSrc, setLogoDesktopSrc] = useState(
    "/assets/logo/senamLogo_vertical.png"
  );
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

  return (
    <div
      className="flex justify-between items-center max-w-[1600px] mx-auto py-6 sticky top-0 z-50 px-8"
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
          width={200}
          height={100}
          alt="LogoImage"
        />
      </Link>
      <div className="block">
        <ul className="flex flex-row gap-4" style={{ color: colorSection }}>
          <li>
            <Link href="#why-senam">Why Senam</Link>
          </li>
          <li>
            <Link href="https://bookings.vibefam.com/senamhub/classes">Membership</Link>
          </li>
          <li>
            <Link href="/training-club">Training Club</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
