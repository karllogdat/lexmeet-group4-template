import React from "react";

// Import custom Button component
import Button from "../Button";

// Import custom SVGs from assets/Practice Areas/
import civilIcon from "../../assets/Practice Areas/Civil.svg";
import commercialIcon from "../../assets/Practice Areas/Commercial.svg";
import criminalIcon from "../../assets/Practice Areas/Criminal.svg";
import familyIcon from "../../assets/Practice Areas/Family.svg";
import immigrationIcon from "../../assets/Practice Areas/Immigration.svg";
import laborIcon from "../../assets/Practice Areas/Labor.svg";
import specialServiceIcon from "../../assets/Practice Areas/SpecialService.svg";
import taxationIcon from "../../assets/Practice Areas/Taxation.svg";

export default function PracticeArea() {
  const practiceAreas = [
    {
      id: "family",
      title: "Family Law",
      link: "#",
      icon: familyIcon,
    },
    {
      id: "labor",
      title: "Labor Law",
      link: "#",
      icon: laborIcon,
    },
    {
      id: "civil",
      title: "Civil Law",
      link: "#",
      icon: civilIcon,
    },
    {
      id: "immigration",
      title: "Immigration Law",
      link: "#",
      icon: immigrationIcon,
    },
    {
      id: "criminal",
      title: "Criminal Law",
      link: "#",
      icon: criminalIcon,
    },
    {
      id: "commercial",
      title: "Commercial Law",
      link: "#",
      icon: commercialIcon,
    },
    {
      id: "taxation",
      title: "Taxation Law",
      link: "#",
      icon: taxationIcon,
    },
    {
      id: "special",
      title: "Special Services",
      link: "#",
      icon: specialServiceIcon,
    },
  ];

  return (
    <section className="justify-center w-full pt-20 pb-24 px-[32px] bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[#0c2a4a] text-sm md:text-base font-semibold tracking-wider uppercase">
            AREAS OF PRACTICE
          </span>
          <h2 className="font-['Playfair_Display'] text-[42px] md:text-[56px] font-bold text-[#0c2a4a] leading-tight">
            Practice Areas
          </h2>
        </div>

        {/* Practice Cards Grid with 26px gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6.5">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#ebf3f8] rounded-xl p-6 flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4">
                {/* SVG Container locked to 50x50px */}
                <div className="w-12.5 h-12.5">
                  <img
                    src={area.icon}
                    alt={`${area.title} icon`}
                    className="w-12.5 h-12.5 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="g4-large-body text-g4-900 font-semibold">
                  {area.title}
                </h3>
              </div>

              {/* Custom Button */}
              <Button onClick={() => (window.location.href = area.link)}>
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}