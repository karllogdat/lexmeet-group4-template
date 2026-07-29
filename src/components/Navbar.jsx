import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

// Reusable Brand Logo Component
function BrandLogo() {
  return (
    <div className="flex items-center gap-5 cursor-pointer">
      <img
        src="/src/assets/Lex.svg"
        alt="Lex Logo"
        className="w-20 h-20 object-contain"
      />
      <span className="g4-heading-1 text-white whitespace-nowrap">
        Rizal Law Office
      </span>
    </div>
  );
}

// Reusable Nav Link Component
/**
 * @typedef {Object} NavLinkProps
 * @property {string} href
 * @property {React.ReactNode} children
 */
function NavLink({ href, children }) {
  return (
    <Link
      to={href}
      className="px-4 py-3 text-base text-white hover:bg-g4-600 hover:shadow-lg transition-colors duration-200 rounded whitespace-nowrap"
    >
      {children}
    </Link>
  );
}

// Interactive User Actions & Profile Dropdown Component
function UserActions() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicking outside or pressing Escape to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Avatar Button & Chevron Trigger */}
      <button
        type="button"
        aria-label="User Profile"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 group cursor-pointer focus:outline-none"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1C3B61] hover:bg-[#254A7A] hover:shadow-md text-white transition-all duration-200 shrink-0">
          <svg
            className="w-5 h-5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>

        {/* Chevron Indicator */}
        <svg
          className={`w-3.5 h-3.5 text-white fill-none stroke-current stroke-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Profile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-52 rounded-lg border border-slate-300/40 bg-[#e2eaf0] py-2 text-[#0b2239] shadow-2xl z-50">
          {/* Go to Lexmeet */}
          <Link
            to="/lexmeet"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#cbd5e1]"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="M7 21h10" />
              <path d="M12 3v18" />
              <path d="M3 7h18" />
            </svg>
            <span>Go to Lexmeet</span>
          </Link>

          {/* Admin Account */}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#cbd5e1]"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            <span>Admin Account</span>
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#cbd5e1]"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.10a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Settings</span>
          </Link>

          {/* Divider */}
          <div className="mx-4 my-1.5 h-px bg-[#94a3b8]" />

          {/* Log-in */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#cbd5e1]"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
            <span>Log-in</span>
          </Link>

          {/* Log-out */}
          <Link
            to="/logout"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#cbd5e1]"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
            <span>Log-out</span>
          </Link>
        </div>
      )}
    </div>
  );
}

// Main Navbar Component
export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Lawyers Profile', href: '/lawyers-profile' },
    { label: 'Law Practice', href: '/law-practice' },
    { label: 'Law Office', href: '/law-office' },
    { label: 'Everyday Law', href: '/everyday-law' },
    { label: 'Our Services', href: '/our-services' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <div className="w-full bg-g4-900 p-5 relative z-50">
      <nav className="flex items-center justify-around gap-5">
        <BrandLogo />

        <div className="flex items-center gap-5">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <UserActions />
      </nav>
    </div>
  );
}