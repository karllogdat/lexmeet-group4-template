import ProfileDropdown from "./NavBar/ProfileDropdown.jsx";
import BrandLogo from "./NavBar/BrandLogo.jsx";
import NavLink from "./NavBar/NavLink.jsx";

export default function Navbar() {
  // Routes updated to match your React Router setup in App.jsx
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
        padding: '20px', // Added 20px padding around header
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
          gap: '20px', // Added 20px gap between Brand, Links, and Profile
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
            justifyContent: 'around',
            gap: '20px', // Added 20px gap between navigation items
            overflowX: 'auto',
            minWidth: 0,
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