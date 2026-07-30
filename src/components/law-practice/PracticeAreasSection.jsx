import { useState } from "react";
import PracticeAreaTile from "./PracticeAreaTile";
import SeeMoreButton from "../ui/SeeMoreButton";
import { practiceAreas } from "./lawPracticeData";

const TABS = ["Law Practice", "About"];

export default function PracticeAreasSection() {
  const [activeTab, setActiveTab] = useState("Law Practice");

  return (
    <section className="bg-[#002E56] px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8 border-b border-[#3776A1] mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`g4-heading-3 pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${activeTab === tab
                ? "border-[#89CFF1] text-g4-400"
                : "border-transparent text-g4-700 hover:text-white/70"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-8 pr-8">
          {practiceAreas.map((area) => (
            <PracticeAreaTile
              key={area.id}
              label={area.label}
              image={area.image}
            />
          ))}
        </div>

        <div className="flex flex-row justify-center mt-8 ">
          <SeeMoreButton />
        </div>
      </div>
    </section>
  );
}
