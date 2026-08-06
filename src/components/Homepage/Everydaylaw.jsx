import React from "react";
import { useNavigate } from "react-router";
import Button from "../Button";

// Background image import
import libraryBg from "../../assets/Homepage/everydaybg.png";

export default function EverydayLawSection() {
  const navigate = useNavigate();

  const article = {
    category: "Everyday Law",
    title: "Co-maker ng 'di nagbayad sa utang, tama ba na ikaw ang singilin?",
    author: "Author",
    date: "Month 1, 2026",
    readTime: "10 min read",
    descriptionLines: [
      "Nakapirma ka na ba sa loan agreement bilang co-maker?",
      "Ano ang panganib kung ikaw ay pipirma bilang co-maker sa isang loan?",
    ],
  };

  return (
    <section className="w-full bg-[#053258] text-white">
      {/* Top Background Image Header */}
      <div className="w-full h-55 sm:h-75 md:h-90 relative overflow-hidden">
        <img
          src={libraryBg}
          alt="Library Bookshelf Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14 space-y-6 relative">
        {/* Category Badge */}
        <div>
          <span className="w-85 h-19.75 bg-[#ebf3f8] text-g4-900 g4-heading-2 px-5 py-2 rounded-md font-medium shadow-sm flex items-center justify-center">
            {article.category}
          </span>
        </div>

        {/* Article Title - Clickable to open blog */}
        <h2 
          onClick={() => navigate("/everyday-law/blog")}
          className="g4-heading-2 text-g4-50 cursor-pointer hover:text-slate-200 transition-colors"
        >
          {article.title}
        </h2>

        {/* Article Metadata */}
        <p className="g4-caption text-g4-600 font-light">
          {article.author} • {article.date} • {article.readTime}
        </p>

        {/* Article Excerpt */}
        <div className="g4-body text-g4-100 leading-relaxed space-y-2">
          {article.descriptionLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 flex items-center justify-between">
          {/* Read More button navigating to blog article */}
          <button
            type="button"
            onClick={() => navigate("/everyday-law/blog")}
            className="group inline-flex items-center gap-2.5 g4-button text-white hover:text-slate-300 transition-colors text-base font-semibold bg-transparent border-none p-0 cursor-pointer"
          >
            <span>Read More</span>
            <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Learn More button navigating to main Everyday Law page */}
          <Button onClick={() => navigate("/everyday-law")}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}