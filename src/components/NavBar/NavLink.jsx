import React, { useState } from "react";
import { Link } from "react-router";

export default function NavLink({ href, onClick, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        whiteSpace: 'nowrap', // Prevents text inside buttons from wrapping
        transition: 'all 0.2s ease',
        padding: '6px 10px',
        borderRadius: '6px',
        backgroundColor: isHovered ? '#387fa7' : 'transparent',
      }}
    >
      {children}
    </Link>
  );
}