import ProfileDropdown from "./NavBar/ProfileDropdown.jsx";
import BrandLogo from "./NavBar/BrandLogo.jsx";
import NavLink from "./NavBar/NavLink.jsx";

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Lawyers Profile', href: '/everyday-law/lawyers-blog-list' },
    { label: 'Law Practice', href: '/law-practice' },
    { label: 'Law Office', href: '/law-office' },
    { label: 'Everyday Law', href: '/everyday-law' },
    { label: 'Our Services', href: '/#our-services' },
    { label: 'Contact Us', href: '/#contact-us' },
  ];

  return (
    <header
      style={{
        width: '100%',
        padding: '20px',
        backgroundColor: '#0F2338',
        color: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          gap: '16px', // Prevents elements from overlapping each other
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
            justifyContent: 'center',
            gap: '16px', // Balanced gap between items
            overflow: 'hidden', // Replaced overflowX: 'auto' to kill the grey scrollbar line
            whiteSpace: 'nowrap',
            minWidth: 0,
            padding: '0 8px',
          }}
        >
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Profile Dropdown */}
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
}