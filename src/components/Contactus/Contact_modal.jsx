import React, { useEffect } from "react";

// Import custom Button component
import Button from "../Button";

// Import Lex.svg from assets folder relative to components/Contactus/Contact_modal.jsx
import LexLogo from "../../assets/Lex.svg";

export default function ContactModal({ isOpen, onClose }) {
  // Disable body scrolling when modal is active
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity overflow-y-auto"
      onClick={onClose}
    >
      {/* Outer Alignment Box */}
      <div
        className="relative w-full max-w-5xl my-auto py-8"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
      >
        {/* Main Light Blue Outer Container */}
        {/* Modified padding from p-6 sm:p-16 md:pl-0 to p-4 sm:p-8 md:pl-0 */}
        <div className="relative bg-[#edf4f9] rounded-2xl shadow-xl p-4 sm:p-8 md:pl-0">
          {/* Top-Right Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-200/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 stroke-current stroke-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Grid Layout with 15px Gap */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.75 items-center">
            {/* Dark Blue Overlapping Card */}
            {/* Modified padding from p-6 sm:p-16 to p-4 sm:p-8 */}
            <div className="md:col-span-5 bg-[#003865] text-white p-4 sm:p-8 rounded-xl shadow-2xl relative md:-ml-8 md:-my-8 z-10 border border-white/10">
              <div>
                {/* Logo & Title Header */}
                <div className="flex items-center gap-3.75 mb-2">
                  {/* Lex.svg asset */}
                  {/* Reduced logo size from w-8 h-8 sm:w-14.75 sm:h-14.75 to w-6 h-6 sm:w-10 sm:h-10 */}
                  <img
                    src={LexLogo}
                    alt="Lex Logo"
                    className="w-6 h-6 sm:w-10 sm:h-10 object-contain shrink-0"
                  />

                  {/* Poppins 32px Semibold Title */}
                  <h3 className="g4-heading-3 text-white">Rizal Law Office</h3>
                </div>

                {/* Subtitle & Description */}
                <h2 className="g4-large-body">Contact Us</h2>
                <p className="g4-body text-slate-200 mb-4">
                  We'd Love to hear from you! Whether you have questions, need
                  support or want to learn more about our services, feel free to
                  get in touch send us a message using the form below or contact
                  us through our phone number or email
                </p>

                {/* Contact Info Items */}
                <div className="flex flex-col gap-3.75 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.75">
                    <div className="p-2.5 bg-g4-400 rounded-full shrink-0">
                      <svg
                        className="w-5 h-5 fill-none stroke-g4-900 stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="g4-body text-white font-semibold">
                        Address
                      </h4>
                      <p className="text-slate-300 g4-body leading-snug">
                        123 Kalayaan Avenue, Barangay San Antonio Makati City,
                        1205 Metro Manila, Philippines
                      </p>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-3.75">
                    <div className="p-2.5 bg-g4-400 rounded-full shrink-0">
                      <svg
                        className="w-5 h-5 fill-none stroke-g4-900 stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="g4-body text-white font-semibold">
                        Telephone
                      </h4>
                      <p className="text-slate-300 g4-body">02999999999</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.75">
                    <div className="p-2.5 bg-g4-400 rounded-full shrink-0">
                      <svg
                        className="w-5 h-5 fill-none stroke-g4-900 stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="g4-body text-white font-semibold">
                        Email
                      </h4>
                      <p className="text-slate-300 g4-body">
                        Contact@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="md:col-span-7 md:pl-3.75">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3.75"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.75">
                  <div>
                    <label className="g4-caption text-slate-700 mb-1 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Juan"
                      className="w-full px-4 py-2.5 g4-body rounded-lg border-0 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#003865] outline-none shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="g4-caption text-slate-700 mb-1 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dela Cruz"
                      className="w-full px-4 py-2.5 g4-body rounded-lg border-0 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#003865] outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="g4-caption text-slate-700 mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="juandelacruz@gmail.com"
                    className="w-full px-4 py-2.5 g4-body rounded-lg border-0 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#003865] outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="g4-caption text-slate-700 mb-1 block">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="+63 0920304052"
                    className="w-full px-4 py-2.5 g4-body rounded-lg border-0 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#003865] outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="g4-caption text-slate-700 mb-1 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2.5 g4-body rounded-lg border-0 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#003865] outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="g4-caption text-slate-700 mb-1 block">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-2.5 g4-body rounded-lg border-0 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#003865] outline-none shadow-sm resize-none"
                  ></textarea>
                </div>

                {/* Form Action Section */}
                <div className="pt-1.25 flex flex-col sm:flex-row gap-3.75 [&>button]:w-full [&>button]:justify-center">
                  <Button onClick={() => {}}>Send message</Button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:hidden py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 g4-caption rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
