import React, { useState, useEffect } from 'react';
import bgImage from '../../../assets/Log_pics/logbg.jpg';
import lexLogo from '../../../assets/Lex.svg';
import lexMeetLogo from '../../../assets/LexMeetName.svg';
import Signin from './Signin';

import Button from '../../Button';

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

export default function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <>
      {!isSignUpOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <div 
            className="relative z-10 w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl backdrop-blur-xl bg-slate-900/40 border border-white/20 text-white my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="absolute top-3 right-3 text-white/70 hover:text-white z-20 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              ✕
            </button>

            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none backdrop-blur-[50%]"
              style={{ backgroundImage: `url(${bgImage})` }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 md:p-12 gap-8 items-center">
              
              <div className="flex flex-col space-y-5">
                
                <div className="flex items-center space-x-3">
                  <img src={lexLogo} alt="Rizal Logo" className="w-12 h-12 shrink-0 object-contain" />

                  <div className="flex flex-col justify-center leading-tight text-white">
                    <span className="text-[26px] font-['Playfair_Display'] font-bold text-white">Welcome to</span>
                    <span className="text-[26px] font-['Playfair_Display'] font-bold tracking-wide text-white">
                      Rizal Law Office
                    </span>
                  </div>
                </div>  

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
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 placeholder-gray-400 font-poppins text-[12px] focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-inner"
                    />
                  </div>

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

                  <div className="pt-2 [&>button]:w-full [&>button]:justify-center">
                    <Button onClick={handleSubmit}>
                      Sign In
                    </Button>
                  </div>
                </form>

                <div className="relative flex items-center justify-center my-2">
                  <div className="border-t border-white/20 w-full" />
                  <span className="bg-transparent px-2 font-inter text-[12px] tracking-widest text-white uppercase shrink-0">
                    OR SIGN IN WITH
                  </span>
                  <div className="border-t border-white/20 w-full" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button 
                    type="button" 
                    className="flex items-center justify-center gap-1.5 py-2 px-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign in with</span>
                    <GoogleIcon className="w-3.5 h-3.5 shrink-0 text-g4-900 fill-g4-900" />
                  </button>

                  <button 
                    type="button" 
                    className="flex items-center justify-center gap-1.5 py-2 px-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign in with</span>
                    <FacebookIcon className="w-3.5 h-3.5 shrink-0 text-g4-900 fill-g4-900" />
                  </button>

                  <button 
                    type="button" 
                    className="flex items-center justify-center gap-1.5 py-2 px-1 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <span className="font-poppins text-[11px] font-medium text-gray-800 whitespace-nowrap">Sign in with</span>
                    <AppleIcon className="w-4 h-4 shrink-0 text-g4-900 fill-g4-900" />
                  </button>
                </div>

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

                <div className="flex items-center justify-center space-x-0.5 font-inter text-[10px] pt-2 border-t border-white/10 text-g4-400 opacity-80">
                  <span className="leading-none">Powered by</span>
                  <div 
                    className="h-2.5 w-14 bg-current shrink-0 inline-block align-middle"
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
        </div>
      )}

      <Signin 
        isOpen={isSignUpOpen} 
        onClose={onClose}
        onSwitchToLogin={() => setIsSignUpOpen(false)}
      />
    </>
  );
}