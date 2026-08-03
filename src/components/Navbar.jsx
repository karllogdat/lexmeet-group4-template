import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import ProfileDropdown from "./NavBar/ProfileDropdown";
import BrandLogo from "./NavBar/BrandLogo";
import NavLink from "./NavBar/NavLink";
import Login from "./NavBar/Login_out/log-in";
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
    { label: "Everyday Law", href: "/everyday-law" },
    { label: "Our Services", href: "/#our-services" },
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
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-center px-6 lg:px-8">
          {/* Logo - shrink-0 prevents links from bleeding into logo bounds */}
          <div className="shrink-0 mr-8">
            <BrandLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Profile */}
          <div className="hidden lg:block lg:ml-6 shrink-0">
            <ProfileDropdown onOpenLogin={() => setIsLoginOpen(true)} />
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-3 lg:hidden">
            <ProfileDropdown onOpenLogin={() => setIsLoginOpen(true)} />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 transition hover:bg-white/10"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-[500px] border-t border-white/20" : "max-h-0"
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