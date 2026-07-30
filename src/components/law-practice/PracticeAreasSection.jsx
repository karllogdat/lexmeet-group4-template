import { useState } from "react";
import PracticeAreaTile from "./PracticeAreaTile";
import SeeMoreButton from "../ui/SeeMoreButton";
import { practiceAreas } from "./lawPracticeData";
import { useNavigate } from "react-router";

const TABS = ["Law Practice", "About"];
const INITIAL_VISIBLE = 8; // 2 rows × 4 columns — matches the Figma grid

export default function PracticeAreasSection() {
  const [activeTab, setActiveTab] = useState("Law Practice");
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleAreas = showAll ? practiceAreas : practiceAreas.slice(0, INITIAL_VISIBLE);
  const hasMore = practiceAreas.length > INITIAL_VISIBLE;

  return (
    <section className="bg-[#002E56] px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8 border-b border-[#3776A1] mb-8">
          {/* {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`g4-heading-3 pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                activeTab === tab
                  ? "border-[#89CFF1] text-g4-400"
                  : "border-transparent text-g4-700 hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))} */}
          <button
            type="button"
            onClick={() => navigate("/law-practice")}
            className="border-g4-400 text-g4-400 g4-heading-3 pb-3 text-sm font-medium border-b-2 -mb-px transition-colors hover:text-white/70"
          >
            Law Practice
          </button>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="g4-heading-3 pb-3 text-sm font-medium border-b-2 -mb-px transition-colors border-transparent text-g4-700 hover:text-white/70"
          >
            About
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-8 pr-8">
          {visibleAreas.map((area) => (
            <PracticeAreaTile
              key={area.id}
              label={area.label}
              image={area.image}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex flex-row justify-center mt-8">
            <SeeMoreButton
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "See More"}
            </SeeMoreButton>
          </div>
        )}
      </div>
    </section>
  );
}
