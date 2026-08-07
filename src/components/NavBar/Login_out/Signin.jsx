import React, { useState } from 'react';
import bgImage from '../../../assets/Log_pics/logbg.jpg';
import lexMeetLogo from '../../../assets/LexMeetName.svg';
import rizalLogo from '../../../assets/Lex.svg';

const GoogleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const AppleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 3.91c.64-.78 1.08-1.85.96-2.91-.93.04-2.06.62-2.72 1.4-.59.68-1.1 1.77-.96 2.83 1.04.08 2.08-.54 2.72-1.32z"/>
  </svg>
);

export default function Signin({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative flex flex-col md:flex-row gap-3 w-full max-w-4xl my-auto max-h-[95vh] md:max-h-none overflow-y-auto md:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-2 right-2 md:-top-3 md:-right-3 text-white/80 hover:text-white z-30 text-base sm:text-lg font-bold w-7 h-7 flex items-center justify-center rounded-full bg-slate-900/90 border border-white/20 hover:bg-slate-800 transition cursor-pointer"
        >
          ✕
        </button>

        {/* LEFT CARD */}
        <div className="w-full md:w-1/2 p-4 sm:p-5 flex flex-col justify-between rounded-lg bg-[#13426B] text-white shadow-2xl border border-white/10">
          <div>
            <div className="flex flex-col items-center mb-2">
              <div className="flex items-center justify-center gap-2 mb-1 w-full flex-wrap">
                <img 
                  src={rizalLogo} 
                  alt="Rizal Logo" 
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0" 
                />
                <span className="g4-heading-3 text-lg sm:text-xl font-bold tracking-wide text-white text-center">
                  Rizal Law Office
                </span>
              </div>
              <div className="w-full h-px bg-white/20 my-0.5"></div>
            </div>

            <div className="text-center mb-2">
              <h2 className="text-base sm:text-lg text-white font-bold leading-tight">Create Account</h2>
              <p className="text-[11px] sm:text-xs text-blue-200 mt-0.5">Quick setup. Secure access</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] sm:text-xs text-blue-100 font-medium mb-0.5">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Juan"
                    className="w-full px-2.5 py-1.5 bg-white text-gray-800 text-xs sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs text-blue-100 font-medium mb-0.5">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Logdat"
                    className="w-full px-2.5 py-1.5 bg-white text-gray-800 text-xs sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs text-blue-100 font-medium mb-0.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="JuanLgdt@gmail.com"
                  className="w-full px-2.5 py-1.5 bg-white text-gray-800 text-xs sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs text-blue-100 font-medium mb-0.5">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-2.5 py-1.5 bg-white text-gray-800 text-xs sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs text-blue-100 font-medium mb-0.5">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-2.5 py-1.5 bg-white text-gray-800 text-xs sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex items-start gap-1.5 pt-0.5">
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

              <button
                type="submit"
                className="w-full py-2 bg-[#2B6CB0] hover:bg-[#2c5282] text-white text-xs sm:text-sm font-semibold rounded shadow transition duration-200 mt-1 cursor-pointer"
              >
                Create Account
              </button>
            </form>

            <div className="mt-2.5">
              <div className="relative flex py-0.5 items-center">
                <div className="grow border-t border-white/20"></div>
                <span className="shrink mx-2 font-inter text-[10px] text-blue-200 uppercase tracking-wider">Or Sign Up With</span>
                <div className="grow border-t border-white/20"></div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 mt-1">
                <button type="button" className="flex items-center justify-center gap-1.5 py-1.5 px-1 bg-white text-gray-700 rounded border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                  <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign up</span>
                  <GoogleIcon className="w-3.5 h-3.5 shrink-0 text-gray-800 fill-gray-800" />
                </button>

                <button type="button" className="flex items-center justify-center gap-1.5 py-1.5 px-1 bg-white text-gray-700 rounded border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                  <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign up</span>
                  <FacebookIcon className="w-3.5 h-3.5 shrink-0 text-gray-800 fill-gray-800" />
                </button>

                <button type="button" className="flex items-center justify-center gap-1.5 py-1.5 px-1 bg-white text-gray-700 rounded border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                  <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign up</span>
                  <AppleIcon className="w-3.5 h-3.5 shrink-0 text-gray-800 fill-gray-800" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col items-center justify-center gap-1 text-center mt-2">
            <div className="flex items-center justify-center">
              <span className="text-[11px] sm:text-xs text-blue-200">Already Registered?</span>
              <button 
                type="button"
                onClick={onSwitchToLogin} 
                className="text-[11px] sm:text-xs underline text-white font-semibold hover:text-blue-200 cursor-pointer ml-1"
              >
                Sign in
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-0.5 font-inter text-[9px] pt-0.5 text-blue-300 opacity-90">
              <span className="leading-none">Powered by</span>
              <div 
                className="h-2 w-12 bg-current shrink-0 inline-block align-middle"
                style={{
                  maskImage: `url(${lexMeetLogo})`,
                  WebkitMaskImage: `url(${lexMeetLogo})`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'left center',
                  WebkitMaskPosition: 'left center'
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hidden md:block md:w-1/2 relative rounded-lg overflow-hidden shadow-2xl border border-white/10">
          <img
            src={bgImage}
            alt="Secure Legal Access"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13426B]/80 via-black/20 to-transparent flex items-center justify-start p-6 text-left">
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