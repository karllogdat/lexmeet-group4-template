import React from "react";
import { Link } from "react-router";
// Import the SVG directly so Vite bundles it correctly
import lexLogo from "../../assets/Lex.svg";

export default function BrandLogo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 cursor-pointer group select-none"
      aria-label="Rizal Law Office Home"
    >
      <img
        src={lexLogo}
        alt="Lex Logo"
        className="w-6 h-6 lg:w-13 lg:h-13 object-contain transition-transform duration-200 group-hover:scale-105"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
        className="text-xl lg:text-3xl font-bold whitespace-nowrap text-white transition-opacity duration-200 group-hover:opacity-90"
      >
        Rizal Law Office
      </span>
    </Link>
  );
}