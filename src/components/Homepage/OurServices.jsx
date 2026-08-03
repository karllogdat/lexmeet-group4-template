import React, { useRef, useEffect, useContext } from "react";

// Import custom SVGs from src/assets/Homepage/OurService/
import worksIcon from "../../assets/Homepage/OurService/Works.svg";
import assistIcon from "../../assets/Homepage/OurService/Assist.svg";
import documentsIcon from "../../assets/Homepage/OurService/Documents.svg";
import consultIcon from "../../assets/Homepage/OurService/Consult.svg";

import { ScrollContext } from "../../contexts/ScrollContext";

export default function OurServices() {
  const { registerServicesRef } = useContext(ScrollContext);
  const ref = useRef(null);

  useEffect(() => {
    registerServicesRef(ref);
  }, [registerServicesRef]);

  const services = [
    {
      id: "assist",
      title: "Assist",
      description: "Free online legal assessment and guidance",
      ctaText: "Talk to Lawyers",
      ctaLink: "#",
      icon: assistIcon,
    },
    {
      id: "consult",
      title: "Consult",
      description: "Paid online consultation",
      ctaText: "Talk to Lawyers",
      ctaLink: "#",
      icon: consultIcon,
    },
    {
      id: "documents",
      title: "Documents",
      description: "Create own documents with lawyer review",
      ctaText: "Request Proposal",
      ctaLink: "#",
      icon: documentsIcon,
    },
    {
      id: "works",
      title: "Works",
      description: "Free legal fee proposals and paid legal works delivery",
      ctaText: "Ask Lawyers",
      ctaLink: "#",
      icon: worksIcon,
    },
  ];

  return (
    <div
      ref={ref}
      className="relative max-w-6xl mx-6 sm:mx-8 md:mx-auto px-4 sm:px-6 z-20 -mt-24 md:-mt-32 scroll-mt-50"
    >
      {/* Container with responsive padding */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-g4-900">
        {/* Header Title: Playfair Display */}
        <h2 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] md:text-[64px] font-extrabold text-center leading-tight mb-8">
          Our Services
        </h2>

        {/* Services Grid/Flex Container */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-10.5">
          {services.map((item) => (
            <div
              key={item.id}
              className="flex-1 flex flex-col justify-between items-start text-left space-y-4"
            >
              <div className="space-y-4">
                {/* Circular Icon Container */}
                <div className="w-25 h-25 rounded-full bg-g4-400 flex items-center justify-center p-2.5">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-13.25 h-13.25 object-contain"
                  />
                </div>

                {/* Card Title: Inter, 24px, Bold */}
                <h3 className="font-['Inter'] text-[24px] font-bold text-g4-900 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="g4-body font-color-g4-50">{item.description}</p>
              </div>

              {/* Action Link */}
              <a
                href={item.ctaLink}
                className="g4-button inline-flex items-center gap-1.5 font-bold text-g4-900 hover:text-[#2d7099] transition-colors duration-200 text-sm pt-2"
              >
                <span>{item.ctaText}</span>
                <span className="text-base">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
