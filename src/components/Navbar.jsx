import React, { useState } from "react";
import ProfileDropdown from "./NavBar/ProfileDropdown.jsx";
import BrandLogo from "./NavBar/BrandLogo.jsx";
import NavLink from "./NavBar/NavLink.jsx";
import Login from "./NavBar/Login_out/log-in.jsx"; 
import ContactModal from "./Contactus/Contact_modal.jsx"; // Ensure correct relative path

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Lawyers Profile', href: '/lawyers-profile' },
    { label: 'Law Practice', href: '/law-practice' },
    { label: 'Law Office', href: '/law-office' },
    { label: 'Everyday Law', href: '/everyday-law' },
    { label: 'Our Services', href: '/#our-services' },
    { label: 'Contact Us', href: '/#contact-us', isModalTrigger: true },
  ];

  const handleNavClick = (e, item) => {
    if (item.isModalTrigger) {
      e.preventDefault(); // Prevent standard page/anchor navigation
      setIsContactOpen(true);
    }
  };

  return (
    <>
      <header
        style={{
          width: '100%',
          padding: '20px',
          minHeight: '70px',
          backgroundColor: '#0F2338',
          color: '#FFFFFF',
          boxSizing: 'border-box',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Brand Logo */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <BrandLogo />
          </div>

          {/* Links */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justify: 'space-around',
              gap: '20px',
              overflowX: 'auto',
              minWidth: 0,
            }}
          >
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

          {/* Profile Dropdown */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <ProfileDropdown onOpenLogin={() => setIsLoginOpen(true)} />
          </div>
        </nav>
      </header>

      {/* Login Modal */}
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Contact Us Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}