import React from "react";


import bg1 from "../assets/Homepage/bg1.png";
import bg2 from "../assets/Homepage/bg2.png";

import OurServices from "../components/Homepage/OurServices";
import PracticeArea from "../components/Homepage/PracticeArea";
import EverydayLawSection from "../components/Homepage/Everydaylaw";
import LawUpdatesSection from "../components/Homepage/Lawupdates";

export default function HomePage() {
  return (
    <main className="bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[1065px] bg-[#0c2a4a] text-white overflow-hidden flex items-center">
        {/* Background Layer 1: Architectural Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${bg1})` }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b243f] via-[#0b243f]/80 to-transparent" />

        {/* Background Layer 2: Lady Justice */}
        <img
          src={bg2}
          alt="Lady Justice"
          className="hidden md:block absolute right-0 bottom-0 w-[710px] h-[1065px] max-w-none object-contain object-right-bottom z-0 pointer-events-none"
        />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-[200px] md:pt-24 w-full flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          <div className="w-full md:w-7/12 space-y-6 max-w-xl">
            <h1 className="g4-heading-1 tracking-tight text-white">
              The Digital Environment for Modern Legal Services
            </h1>

            <p className="g4-caption leading-relaxed text-slate-200">
              Consult with Philippine attorneys and manage your legal documents
              through our secure virtual platform. Experience efficient counsel
              tailored for your busy schedule, entirely from your screen.
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#2d7099] hover:bg-[#235b7f]g4-button text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-md"
              >
                <span>Talk to Us!</span>
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:block md:w-5/12 h-full pointer-events-none" />
        </div>
      </section>

      {/* Services Component */}
      <OurServices />

      {/* Practice Areas Component */}
      <PracticeArea />

      {/* Got A Legal Question Banner */}
      <section className="w-full bg-[#033b67] text-white py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide uppercase leading-tight">
            Got a Legal <br className="hidden sm:inline" /> Question?
          </h2>

          <p className="text-lg md:text-xl font-normal text-slate-100">
            Get in touch with us!
          </p>

          <a
            href="#contact"
            className="bg-[#387fa7] hover:bg-[#2d6b8e]=g4-button text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Everyday Law Section */}
      <EverydayLawSection />

      {/* Law Updates Section (Below Everyday Law) */}
      <LawUpdatesSection />
    </main>
  );
}