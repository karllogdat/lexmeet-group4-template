import React, { useState } from "react";

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

  return (
    <main className="bg-[#f8fafc]">
      {/* Hero Section - Anchor point para sa right-0 */}
      <section className="relative w-full min-h-[750px] bg-[#0c2a4a] text-white overflow-hidden flex items-center">
        {/* Background Layer 1: Architectural Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${bg1})` }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b243f] via-[#0b243f]/80 to-transparent" />

        {/* Background Layer 2: Lady Justice
            - right-0: Dikit na dikit sa kanang border ng screen/browser
            - top-16 md:top-20: Sumasabay sa eksaktong pt-16 / md:pt-20 ng text container para pantay na pantay sa H1
            - object-right-top: Sinisigurong ang mismong tuktok ng imahe ang nakalinya */}
        <img
          src={bg2}
          alt="Lady Justice"
          className="hidden md:block absolute right-0 top-16 md:top-20 w-[710px] h-[1065px] max-w-none object-contain object-right-top z-0 pointer-events-none"
        />

        {/* Hero Content Wrapper */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24 w-full flex flex-col md:flex-row items-start justify-between gap-8 z-10">
          
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-5 max-w-xl">
            <h1 className="g4-heading-1 tracking-tight text-white">
              The Digital Environment for Modern Legal Services
            </h1>

            <p className="g4-caption leading-relaxed text-slate-200">
              Consult with Philippine attorneys and manage your legal documents
              through our secure virtual platform. Experience efficient counsel
              tailored for your busy schedule, entirely from your screen.
            </p>

            <div className="pt-3">
              <Button onClick={() => setIsLoginOpen(true)}>
                Talk to Us!
              </Button>
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

          <Button onClick={() => setIsContactOpen(true)}>
            Contact Us
          </Button>
        </div>
      </section>

      {/* Everyday Law Section */}
      <EverydayLawSection />

      {/* Law Updates Section */}
      <LawUpdatesSection />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </main>
  );
}