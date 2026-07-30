export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: '#FFFFFF',
        textDecoration: 'none',
        padding: '8px 12px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        borderRadius: '4px',
        transition: 'background-color 0.2s',
        display: 'inline-block'
      }}
      className="hover:bg-g4-700"
    >
      {children}
    </a>
  );
}