import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import ProfileDropdown from "./NavBar/ProfileDropdown";
import BrandLogo from "./NavBar/BrandLogo";
import NavLink from "./NavBar/NavLink";
import Login from "./NavBar/Login_out/login";
import ContactModal from "./Contactus/Contact_modal";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Lawyers Profile", href: "/lawyers-profile" },
    { label: "Law Practice", href: "/law-practice" },
    { label: "Law Office", href: "/law-office" },
    { label: "Our Services", href: "/#our-services" },
    { label: "Everyday Law", href: "/everyday-law" },
    {
      label: "Contact Us",
      href: "/#contact-us",
      isModalTrigger: true,
    },
  ];

  const handleNavClick = (e, item) => {
    if (item.isModalTrigger) {
      e.preventDefault();
      setIsContactOpen(true);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#0F2338] text-white">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo with expanded right margin */}
          <div className="shrink-0 mr-10 xl:mr-12">
            <BrandLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center justify-end gap-3 xl:gap-5 xl:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
              >
                <span className="text-sm xl:text-base">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Desktop Profile with expanded left margin */}
          <div className="hidden shrink-0 xl:block xl:ml-10 xl:mr-2">
            <ProfileDropdown onOpenLogin={() => setIsLoginOpen(true)} />
          </div>

          {/* Mobile/Tablet Right Side (Triggers below xl) */}
          <div className="flex items-center gap-3 xl:hidden">
            <ProfileDropdown onOpenLogin={() => setIsLoginOpen(true)} />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 transition hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile/Tablet Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 xl:hidden ${
            isMenuOpen ? "max-h-125 border-t border-white/20" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
              >
                <div className="py-2.5">{item.label}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
