import React, { useState, useEffect } from 'react';
import bgImage from '../../../assets/Log_pics/logbg.jpg';
import lexmeetLogo from '../../../assets/LexMeetName.png';
import rizalLogo from '../../../assets/Lex.svg';

// Social SVGs
import googleIcon from '../../../assets/Sign_in/google.svg';
import facebookIcon from '../../../assets/Sign_in/facebook.svg';
import appleIcon from '../../../assets/Sign_in/apple.svg';

export default function Signin({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      {/* Outer wrapper */}
      <div 
        className="relative flex flex-col md:flex-row w-full max-w-4xl my-auto rounded-xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 text-white/80 hover:text-white z-30 text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full bg-slate-900/80 border border-white/20 hover:bg-slate-800 transition cursor-pointer"
        >
          ✕
        </button>

        {/* LEFT CARD: Form Section */}
        <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-between gap-4 bg-[#13426B] text-white">
          <div>
            {/* Logo & Branding */}
            <div className="flex flex-col items-center mb-3 sm:mb-4">
              <div className="flex items-center justify-center gap-3 mb-2 w-full">
                <img src={rizalLogo} alt="Rizal Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0" />
                <span className="g4-heading-1 text-xl sm:text-2xl tracking-wide text-white whitespace-nowrap">Rizal Law Office</span>
              </div>
              <div className="w-full h-px bg-white/20 my-1"></div>
            </div>

            {/* Header */}
            <div className="text-center mb-3 sm:mb-4">
              <h2 className="g4-heading-2 text-xl sm:text-2xl text-white font-bold">Create Account</h2>
              <p className="g4-caption text-xs sm:text-sm text-blue-200 mt-0.5">Quick setup. Secure access</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-3.5">
              
              {/* Responsive Name Fields: Stacks on mobile, side-by-side on sm screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block g4-caption text-xs text-blue-100 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Juan"
                    className="w-full px-3 py-2 bg-white text-gray-800 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block g4-caption text-xs text-blue-100 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Logdat"
                    className="w-full px-3 py-2 bg-white text-gray-800 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block g4-caption text-xs text-blue-100 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="JuanLgdt@gmail.com"
                  className="w-full px-3 py-2 bg-white text-gray-800 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block g4-caption text-xs text-blue-100 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-white text-gray-800 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block g4-caption text-xs text-blue-100 mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-white text-gray-800 text-xs sm:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  required
                />
                <label htmlFor="agreeTerms" className="text-[11px] sm:text-xs text-blue-100 leading-tight cursor-pointer">
                  I have read and agreed to the <span className="font-bold underline">TERMS AND CONDITIONS</span> set by LexMeet.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#2B6CB0] hover:bg-[#2c5282] text-white font-medium text-xs sm:text-sm rounded-md shadow transition duration-200 mt-1 cursor-pointer"
              >
                Create Account
              </button>
            </form>

            {/* Social Logins */}
            <div className="mt-3 sm:mt-4">
              <div className="relative flex py-1 items-center">
                <div className="grow border-t border-white/20"></div>
                <span className="shrink mx-2 font-inter text-[10px] sm:text-[12px] text-blue-200 uppercase tracking-wider">Or Sign Up With</span>
                <div className="grow border-t border-white/20"></div>
              </div>

              {/* Responsive Social Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                <button type="button" className="flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 bg-white text-gray-700 rounded border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                  <span className="font-poppins text-[10px] sm:text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign up</span>
                  <img src={googleIcon} alt="Google" className="w-3.5 h-3.5 object-contain shrink-0" />
                </button>

                <button type="button" className="flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 bg-white text-gray-700 rounded border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                  <span className="font-poppins text-[10px] sm:text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign up</span>
                  <img src={facebookIcon} alt="Facebook" className="w-3.5 h-3.5 object-contain shrink-0" />
                </button>

                <button type="button" className="flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 bg-white text-gray-700 rounded border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                  <span className="font-poppins text-[10px] sm:text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign up</span>
                  <img src={appleIcon} alt="Apple" className="w-3.5 h-3.5 object-contain shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-white/10 flex flex-col items-center justify-center gap-1.5 text-center">
            <div className="flex items-center justify-center text-xs sm:text-sm">
              <span className="text-blue-200">Already Registered?</span>
              <button 
                type="button"
                onClick={onSwitchToLogin} 
                className="underline text-white font-semibold hover:text-blue-200 cursor-pointer ml-1"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="font-inter text-xs text-blue-300">Powered by</span>
              <img src={lexmeetLogo} alt="LexMeet" className="h-4 sm:h-5 object-contain" />
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Image Banner (Desktop Only) */}
        <div className="hidden md:block md:w-1/2 relative min-h-125">
          <img
            src={bgImage}
            alt="Secure Legal Access"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#13426B]/80 via-black/20 to-transparent flex items-center justify-start p-8 text-left">
            <h1 className="g4-heading-1 text-white uppercase tracking-widest leading-relaxed drop-shadow-md">
              Secure<br />
              Access<br />
              To Your<br />
              Legal<br />
              Portal
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}