import React from "react";

// Replace with the path to your library background image
import libraryBg from "../../assets/Homepage/everydaybg.png";

export default function LawUpdatesSection() {
  const article = {
    category: "Law Updates",
    title: "Behind the Case: Practical Lessons from Real Client Experiences",
    author: "Author",
    date: "Month 1, 2026",
    readTime: "10 min read",
    description:
      "Growing a business means taking on new opportunities, but it also comes with legal responsibilities that many entrepreneurs overlook. One of the most common mistakes we see is relying on verbal agreements or informal conversations instead of written contracts. While trust is important, a properly drafted agreement...",
    link: "#",
  };

  return (
    <section className="w-full bg-[#053258] text-white">
      {/* Top Background Image Header */}
      <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] relative overflow-hidden">
        <img
          src={libraryBg}
          alt="Library Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14 space-y-6">
        {/* Category Badge locked to 340x79 px */}
        <div>
          <span className="w-[340px] h-[79px] bg-[#ebf3f8] text-g4-900 g4-heading-2 px-5 py-2 rounded-md font-medium shadow-sm flex items-center justify-center">
            {article.category}
          </span>
        </div>

        {/* Article Title */}
        <h2 className="g4-heading-2 text-g4-50">
          {article.title}
        </h2>

        {/* Article Metadata */}
        <p className="g4-caption text-g4-600 font-light">
          {article.author} • {article.date} • {article.readTime}
        </p>

        {/* Article Excerpt */}
        <div className="g4-body text-g4-100 leading-relaxed max-w-5xl">
          <p>{article.description}</p>
        </div>

        {/* Read More Link */}
        <div className="pt-4">
          <a
            href={article.link}
            className="g4-button text-white hover:text-slate-300 transition-colors text-base"
          >
            <span>Read More</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}