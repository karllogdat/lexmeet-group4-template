import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import bg1 from "../assets/Homepage/bg1.png";
import bg2 from "../assets/Homepage/bg2.png";

import OurServices from "../components/Homepage/OurServices";
import PracticeArea from "../components/Homepage/PracticeArea";
import EverydayLawSection from "../components/Homepage/Everydaylaw";
import LawUpdatesSection from "../components/Homepage/Lawupdates";
import ContactModal from "../components/Contactus/Contact_modal";
import LoginModal from "../components/NavBar/Login_out/log-in";

import Button from "../components/Button";

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#our-services" || location.state?.scrollToServices) {
      setTimeout(() => {
        const element = document.getElementById("our-services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="bg-[#f8fafc]">
      <section className="relative w-full min-h-[650px] bg-[#0c2a4a] text-white overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${bg1})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b243f] via-[#0b243f]/80 to-transparent" />

        <img
          src={bg2}
          alt="Lady Justice"
          className="hidden md:block absolute right-0 top-12 md:top-16 w-[710px] h-[1065px] max-w-none object-contain object-right-top z-0 pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24 w-full flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          <div className="w-full md:w-7/12 space-y-3 max-w-xl pt-0 -mt-20 md:-mt-24">
            <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] md:text-[48px] font-extrabold text-white leading-tight">
              The Digital Environment for Modern Legal Services
            </h1>

            <p className="g4-body leading-relaxed text-slate-200">
              Consult with Philippine attorneys and manage your legal documents
              through our secure virtual platform. Experience efficient counsel
              tailored for your busy schedule, entirely from your screen.
            </p>

            <div className="pt-4 w-full">
              <button
                type="button"
                onClick={() => setIsLoginOpen(true)}
                className="w-full block bg-[#1b4e85] hover:bg-[#153f6c] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md text-center text-base sm:text-lg tracking-wide cursor-pointer"
              >
                Talk to Us!
              </button>
            </div>
          </div>

          <div className="hidden md:block md:w-5/12 h-full pointer-events-none" />
        </div>
      </section>

      <OurServices />

      <PracticeArea />

      <section className="w-full bg-[#033b67] text-white py-4 md:py-6 px-4 text-center flex items-center justify-center">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center space-y-2 w-full">
          <h2 className="g4-heading-1 font-bold tracking-wide leading-tight">
            Got a Legal <br className="hidden sm:inline" /> Question?
          </h2>

          <p className="g4-body md:text-xl text-slate-100">
            Get in touch with us!
          </p>

          <div className="pt-1">
            <Button onClick={() => setIsContactOpen(true)}>Contact Us</Button>
          </div>
        </div>
      </section>

      <EverydayLawSection />

      <LawUpdatesSection />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </main>
  );
}