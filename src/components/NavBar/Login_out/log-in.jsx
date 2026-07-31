import React, { useState } from 'react';
import bgImage from '../../../assets/Log_pics/logbg.jpg';
import lexLogo from '../../../assets/Lex.svg';
import lexMeetLogo from '../../../assets/LexMeetName.png';
import Signin from './Signin';

// Social SVGs imported from assets/Sign_in
import googleIcon from '../../../assets/Sign_in/google.svg';
import facebookIcon from '../../../assets/Sign_in/facebook.svg';
import appleIcon from '../../../assets/Sign_in/apple.svg';

export default function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto">
      
      {/* Main Login Card - Corner Radius 8px */}
      <div className="relative z-10 w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl backdrop-blur-xl bg-slate-900/40 border border-white/20 text-white my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white z-20 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        >
          ✕
        </button>

        {/* Card Background Overlay with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none backdrop-blur-[50%]"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 md:p-12 gap-8 items-center">
          
          {/* Left Column: Form Section */}
          <div className="flex flex-col space-y-5">
            
            {/* Logo & Header */}
            <div className="flex items-center space-x-3">
              <img src={lexLogo} alt="Rizal Logo" className="w-12 h-12 shrink-0 object-contain" />

              <div className="flex flex-col justify-center leading-tight text-white">
                <span className="text-[26px] font-['Playfair_Display'] font-bold text-white">Welcome to</span>
                <span className="text-[26px] font-['Playfair_Display'] font-bold tracking-wide text-white">
                  Rizal Law Office
                </span>
              </div>
            </div>  

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 placeholder-gray-400 font-poppins text-[12px] focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-inner"
                />
              </div>

              <div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 placeholder-gray-400 font-poppins text-[12px] focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-inner"
                />
              </div>

              {/* Remember Me & Forgot Password (White text) */}
              <div className="flex items-center justify-between font-poppins text-[10px] text-white pt-1">
                <label className="flex items-center space-x-2 cursor-pointer select-none text-white">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-gray-300 text-sky-700 focus:ring-sky-600 cursor-pointer"
                  />
                  <span className="text-white">Remember Me</span>
                </label>
                <a href="#forgot" className="text-white hover:underline transition-opacity">
                  Forgot Password
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-2.5 mt-2 bg-[#1b4b72] hover:bg-[#153a59] text-white g4-button rounded-lg shadow-md transition-colors duration-200 cursor-pointer"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-white/20 w-full" />
              <span className="bg-transparent px-2 font-inter text-[12px] tracking-widest text-white uppercase shrink-0">
                OR SIGN IN WITH
              </span>
              <div className="border-t border-white/20 w-full" />
            </div>

            {/* Social Logins (White BG -> Dark text preserved) */}
            <div className="grid grid-cols-3 gap-2">
              <button 
                type="button" 
                className="flex items-center justify-center gap-1.5 py-2 px-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign in with</span>
                <img src={googleIcon} alt="Google" className="w-3.5 h-3.5 object-contain shrink-0" />
              </button>

              <button 
                type="button" 
                className="flex items-center justify-center gap-1.5 py-2 px-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign in with</span>
                <img src={facebookIcon} alt="Facebook" className="w-3.5 h-3.5 object-contain shrink-0" />
              </button>

              <button 
                type="button" 
                className="flex items-center justify-center gap-1.5 py-2 px-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign in with</span>
                <img src={appleIcon} alt="Apple" className="w-3.5 h-3.5 object-contain shrink-0" />
              </button>
            </div>

            {/* Create Account Link (White text) */}
            <div className="text-center font-poppins text-[14px] text-white pt-2">
              Don't have an account?{' '}
              <button 
                type="button"
                onClick={() => setIsSignUpOpen(true)}
                className="underline text-white hover:text-white/80 transition-colors cursor-pointer font-semibold ml-1"
              >
                Create one now!
              </button>
            </div>

            {/* Footer Branding - Powered by text colored g4-400 */}
            <div className="flex items-center justify-center space-x-1.5 font-inter text-[14px] pt-3 border-t border-white/10">
              <span className="text-g4-400">Powered by</span>
              <img src={lexMeetLogo} alt="LexMeet Logo" className="h-5 object-contain" />
            </div>
          </div>

          {/* Right Column: Text Content (All white text) */}
          <div className="flex flex-col justify-center space-y-4 md:pl-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
            <h1 className="g4-heading-1 text-white">
              We are Ready to Serve for all your Legal Needs!
            </h1>
            <p className="g4-body text-white leading-relaxed">
              We are full-service law firm with a complement of competent lawyers in various legal expertise and a support personal group ready to serve all your legal services needs. From legal advice, legal documents, legal works and other related legal services, we are here for you.
            </p>
          </div>

        </div>
      </div>

      {/* Render Signin Modal Component */}
      <Signin 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSwitchToLogin={() => setIsSignUpOpen(false)} 
      />
    </div>
  );
}