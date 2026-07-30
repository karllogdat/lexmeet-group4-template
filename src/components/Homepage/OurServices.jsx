import React from "react";

// Import your custom SVGs from src/assets/Homepage/OurService/
import worksIcon from "../../assets/Homepage/OurService/Works.svg";
import assistIcon from "../../assets/Homepage/OurService/Assist.svg";
import documentsIcon from "../../assets/Homepage/OurService/Documents.svg";
import consultIcon from "../../assets/Homepage/OurService/Consult.svg";

export default function OurServices() {
  const services = [
    {
      id: "works",
      title: "Works",
      description: "Free legal fee proposals and paid legal works delivery",
      ctaText: "Ask Lawyers",
      ctaLink: "#",
      icon: worksIcon,
    },
    {
      id: "assist",
      title: "Assist",
      description: "Free online legal assessment and guidance",
      ctaText: "Talk to Lawyers",
      ctaLink: "#",
      icon: assistIcon,
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
      id: "consult",
      title: "Consult",
      description: "Paid online consultation",
      ctaText: "Talk to Lawyers",
      ctaLink: "#",
      icon: consultIcon,
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4 z-20 -mt-24 md:-mt-32">
      {/* Container with 32px padding on all sides */}
      <div className="bg-white rounded-3xl shadow-2xl p-[32px] text-[#0c2a4a]">
        {/* Header Title: Playfair Display, 64px, Bold */}
        <h2 className="font-['Playfair_Display'] text-[64px] font-bold text-center leading-tight mb-8">
          Our Services
        </h2>

        {/* Services Flex Container with 42px gap */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-[42px]">
          {services.map((item) => (
            <div
              key={item.id}
              className="flex-1 flex flex-col justify-between items-start text-left space-y-4"
            >
              <div className="space-y-4">
                {/* Circular Icon Container */}
                <div className="w-[100px] h-[100px] rounded-full bg-[#89CFF1] flex items-center justify-center p-2.5">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-[53px] h-[53px] object-contain"
                  />
                </div>

                {/* Card Title */}
                <h3 className="g4-large-body font-bold">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="g4-body font-color-g4-400">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={item.ctaLink}
                className="g4-button inline-flex items-center gap-1.5 font-semibold text-[#0c2a4a] hover:text-[#2d7099] transition-colors duration-200 text-sm pt-2"
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