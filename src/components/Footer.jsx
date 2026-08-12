import React from 'react';
import { Link, useNavigate } from 'react-router';

import lexLogo from "../assets/Lex.svg";
import lexMeetLogo from "../assets/LexMeetName.svg";

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col w-full text-white font-sans">
      <div className="bg-linear-to-r from-[#3776A1] to-[#142B3B] px-6 py-6 sm:py-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-start">

          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center justify-start gap-2.5 sm:col-span-2 lg:col-span-2 min-w-0 max-w-full hover:opacity-90 transition-opacity cursor-pointer group"
          >
            <img
              src={lexLogo}
              alt="Brand Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 object-contain shrink-0 group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            <div className="text-left font-poppins min-w-0 flex-1 overflow-hidden">
              <h2 className="text-sm sm:text-base lg:text-lg font-bold tracking-wide leading-snug uppercase wrap-break-word hyphens-auto">
                Valderama Valderama and Buenaventure Law Offices
              </h2>
              <p className="text-[11px] font-normal tracking-wide text-slate-200 mt-0.5 wrap-break-word">
                Legal Help Simplified
              </p>
            </div>
          </Link>

          <div className="text-slate-200 leading-snug space-y-0.5 min-w-0 text-xs lg:col-span-1">
            <h3 className="font-bold font-poppins text-xs sm:text-sm text-white uppercase tracking-wider mb-1.5">
              CONTACT US
            </h3>
            <p>Tel.No: (02) 8-451-1594</p>
            <p>Cel.No: 0299999</p>
            <p>Fax: 6432341</p>
            <p>Viber: 09231231111</p>
            <p className="break-all">Email: contact@rizallawoffice.com</p>
          </div>

          <div className="text-slate-200 leading-snug space-y-0.5 min-w-0 text-xs lg:col-span-1">
            <h3 className="font-bold font-poppins text-xs sm:text-sm text-white uppercase tracking-wider mb-1.5">
              VISIT US
            </h3>
            <p>Unit 608, 6th floor</p>
            <p>AIC Burgundy Empire Tower</p>
            <p>ADB Avenue Corner, Garnet Road</p>
            <p>Ortigas Center, Pasig City</p>
          </div>

          <div className="text-slate-200 leading-snug min-w-0 text-xs lg:col-span-1">
            <h3 className="font-bold font-poppins text-xs sm:text-sm text-white tracking-wider mb-1.5 uppercase">
              TERMS OF USE
            </h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Informed Consent of Service Performed</a></li>
              <li><a href="#" className="hover:underline">Child Safety Standards Policy</a></li>
            </ul>
          </div>

          <div className="text-slate-200 leading-snug min-w-0 text-xs lg:col-span-1">
            <h3 className="font-bold font-poppins text-xs sm:text-sm text-white tracking-wider mb-1.5 uppercase">
              FOLLOW US:
            </h3>
            <div className="flex flex-wrap gap-1.5 text-slate-900 w-full max-w-full">
              <a href="#" className="w-7 h-7 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" /></svg>
              </a>
              <a href="#" className="w-7 h-7 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 2H22l-6.7 7.7L23.5 22h-5.9l-4.7-6.2L7.4 22H4.2l7.2-8.2L1.5 2h6.1l4.2 5.5L18.9 2Zm-1 18h1.2L6.2 4H5l12.9 16Z" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
              </a>
              <a href="#" className="w-7 h-7 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
              <a href="#" className="w-7 h-7 bg-slate-200 hover:bg-white rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.122 5.122 0 0 1-3.414-1.31 5.128 5.128 0 0 1-1.706-3.312h-3.44v13.66c0 1.618-1.32 2.938-2.938 2.938a2.941 2.941 0 0 1-2.938-2.938 2.941 2.941 0 0 1 2.938-2.938c.244 0 .48.03.706.086v-3.49a6.43 6.43 0 0 0-.706-.04A6.428 6.428 0 0 0 2.395 14.6a6.428 6.428 0 0 0 6.428 6.428 6.428 6.428 0 0 0 6.428-6.428V8.264a8.56 8.56 0 0 0 4.994 1.6V6.42c-.312 0-.618-.03-.924-.086v-.772z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#00192F] py-2 px-6 text-center text-[10px] text-g4-900 flex flex-wrap justify-center items-center gap-2 leading-none">
        <span>All Rights Reserved, 2022.</span>
        <span className="flex items-center gap-1">
          Powered by{' '}
          <strong className="text-white font-semibold inline-flex items-center">
            <span
              className="h-2.5 w-12 bg-g4-900 inline-block shrink-0"
              style={{
                maskImage: `url(${lexMeetLogo})`,
                WebkitMaskImage: `url(${lexMeetLogo})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
              aria-label="LexMeet Logo"
            />
          </strong>
        </span>
      </div>
    </footer>
  );
}