import React from "react";
import { useNavigate } from "react-router";
import Button from "../Button";

import libraryBg from "../../assets/Homepage/everydaybg.png";

export default function LawUpdatesSection() {
  const navigate = useNavigate();

  const article = {
    category: "Law Updates",
    title: "Behind the Case: Practical Lessons from Real Client Experiences",
    author: "Author",
    date: "Month 1, 2026",
    readTime: "10 min read",
    description:
      "Growing a business means taking on new opportunities, but it also comes with legal responsibilities that many entrepreneurs overlook. One of the most common mistakes we see is relying on verbal agreements or informal conversations instead of written contracts. While trust is important, a properly drafted agreement...",
  };

  return (
    <section className="w-full bg-[#053258] text-white">
      <div className="w-full h-55 sm:h-75 md:h-90 relative overflow-hidden">
        <img
          src={libraryBg}
          alt="Library Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14 space-y-6 relative">
        <div>
          <span className="w-85 h-19.75 bg-[#ebf3f8] text-g4-900 g4-heading-2 px-5 py-2 rounded-md font-medium shadow-sm flex items-center justify-center">
            {article.category}
          </span>
        </div>

        <h2
          onClick={() => navigate("/everyday-law/blog")}
          className="g4-heading-2 text-g4-50 cursor-pointer hover:text-slate-200 transition-colors"
        >
          {article.title}
        </h2>

        <p className="g4-caption text-g4-600 font-light">
          {article.author} • {article.date} • {article.readTime}
        </p>

        <div className="g4-body text-g4-100 leading-relaxed max-w-5xl">
          <p>{article.description}</p>
        </div>

        <div className="pt-6 flex items-center justify-between">
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

          <Button onClick={() => navigate("/everyday-law/law-updates-blog-list")}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}