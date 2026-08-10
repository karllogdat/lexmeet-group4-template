import React from "react";
import { Link, useNavigate } from "react-router";
import lexLogo from "../../assets/Lex.svg";

export default function BrandLogo() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
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