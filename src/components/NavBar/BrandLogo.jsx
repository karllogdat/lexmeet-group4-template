import React from 'react';
// Import the SVG directly so Vite bundles it correctly
import lexLogo from "../../assets/Lex.svg";

export default function BrandLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
      <img
        src={lexLogo}
        alt="Lex Logo"
        style={{ width: '59px', height: '59px', objectFit: 'contain' }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <span 
        style={{ 
          fontFamily: "'Poppins', sans-serif",
          fontSize: '32px',
          fontWeight: 'bold', 
          whiteSpace: 'nowrap',
          color: '#FFFFFF'
        }}
      >
        Rizal Law Office
      </span>
    </div>
  );
}