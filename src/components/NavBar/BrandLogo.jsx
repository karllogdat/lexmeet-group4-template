import React from "react";
// Import the SVG directly so Vite bundles it correctly
import lexLogo from "../../assets/Lex.svg";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <img
        src={lexLogo}
        alt="Lex Logo"
        className="w-6 h-6 lg:w-13 lg:h-13 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
        className="text-xl lg:text-3xl font-bold whitespace-nowrap text-white"
      >
        Rizal Law Office
      </span>
    </div>
  );
}
