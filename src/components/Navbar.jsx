import AvatarButton from "./NavBar/AvatarButton.jsx";
import BrandLogo from "./NavBar/BrandLogo.jsx";
import NavLink from "./NavBar/NavLink.jsx";

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/Home' },
    { label: 'Lawyers Profile', href: '/lawyers-profile' },
    { label: 'Law Practice', href: '/law-practice' },
    { label: 'Law Office', href: '/law-office' },
    { label: 'Everyday Law', href: '/everyday-law' },
    { label: 'Our Services', href: '/our-services' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header
      style={{
        width: '100%',
        padding: '20px', // Updated padding to 20px
        minHeight: '70px',
        backgroundColor: '#0F2338',
        color: 'g4-900',
        boxSizing: 'border-box',
        justifyContent: 'space-around',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px', // Updated outer layout gap to 20px
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%'
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
            gap: '20px', // Updated navigation links gap to 20px
            overflowX: 'auto',
            minWidth: 0
          }}
        >
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Avatar */}
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <AvatarButton />
        </div>
      </nav>
    </header>
  );
}