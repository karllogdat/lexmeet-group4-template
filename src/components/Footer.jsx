import React from 'react';

// Import assets directly so Vite bundles them correctly for production/Vercel
import lexLogo from "../assets/Lex.svg";
import lexMeetLogo from "../assets/LexMeetName.png";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full text-white font-sans">
      {/* Main Footer Container */}
      <div className="bg-linear-to-r from-[#3776A1] to-[#142B3B] px-8 py-10 sm:py-12">
        
        {/* Responsive Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
          
          {/* Brand Logo Section - Reduced Size */}
          <div className="flex items-center justify-start gap-3 sm:col-span-2 lg:col-span-2 min-w-0">
            <img 
              src={lexLogo} 
              alt="Rizal Law Office Brand Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain shrink-0" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="text-left font-poppins min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold tracking-wide leading-tight uppercase wrap-break-word">
                Rizal Law Office
              </h2>
              <p className="text-[11px] sm:text-xs font-medium tracking-wide text-slate-300 mt-0.5">
                Valderama Valderama and Buenaventure Law Offices
              </p>
              <p className="text-xs sm:text-sm font-normal tracking-wide text-slate-200 mt-1">
                Legal Help Simplified
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-slate-200 leading-snug space-y-1 min-w-0 text-sm sm:text-base lg:col-span-1">
            <h3 className="font-bold font-poppins text-base sm:text-lg text-white uppercase tracking-wider mb-2">
              CONTACT US
            </h3>
            <p>Tel.No: (02) 8-451-1594</p>
            <p>Cel.No: 0299999</p>
            <p>Fax: 6432341</p>
            <p>Viber: 09231231111</p>
            <p className="break-all">Email: contact@rizallawoffice.com</p>
          </div>

          {/* Visit Us */}
          <div className="text-slate-200 leading-snug space-y-1 min-w-0 text-sm sm:text-base lg:col-span-1">
            <h3 className="font-bold font-poppins text-base sm:text-lg text-white uppercase tracking-wider mb-2">
              VISIT US
            </h3>
            <p>Unit 608, 6th floor</p>
            <p>AIC Burgundy Empire Tower</p>
            <p>ADB Avenue Corner, Garnet Road</p>
            <p>Ortigas Center, Pasig City</p>
          </div>

          {/* Terms of Use */}
          <div className="text-slate-200 leading-snug min-w-0 text-sm sm:text-base lg:col-span-1">
            <h3 className="font-bold font-poppins text-base sm:text-lg text-white tracking-wider mb-2">
              Terms of Use
            </h3>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Informed Consent of Service Performed</a></li>
              <li><a href="#" className="hover:underline">Child Safety Standards Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-slate-200 leading-snug min-w-0 text-sm sm:text-base lg:col-span-1">
            <h3 className="font-bold font-poppins text-base sm:text-lg text-white tracking-wider mb-2">
              Follow Us:
            </h3>
            <div className="flex flex-wrap gap-2 text-slate-900 w-full max-w-full">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="w-8 h-8 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 2H22l-6.7 7.7L23.5 22h-5.9l-4.7-6.2L7.4 22H4.2l7.2-8.2L1.5 2h6.1l4.2 5.5L18.9 2Zm-1 18h1.2L6.2 4H5l12.9 16Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Sub-Footer Bar */}
      <div className="bg-[#00192F] py-3 px-8 text-center text-xs sm:text-sm text-slate-400 flex flex-wrap justify-center items-center gap-2">
        <span>All Rights Reserved, 2022.</span>
        <span className="flex items-center gap-1">
          Powered by{' '}
          <strong className="text-white font-semibold inline-flex items-center gap-1">
            <img 
              src={lexMeetLogo} 
              alt="LexMeet Logo" 
              className="h-4 object-contain inline-block" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </strong>
        </span>
      </div>
    </footer>
  );
}