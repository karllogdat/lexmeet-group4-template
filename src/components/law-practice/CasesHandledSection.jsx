import { useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import SeeMoreButton from "../ui/SeeMoreButton";
import CaseCard from "./CaseCard";
import { casesHandled } from "./lawPracticeData";

const INITIAL_VISIBLE = 6; // 2 rows × 3 cards — matches the Figma grid

export default function CasesHandledSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCases = showAll ? casesHandled : casesHandled.slice(0, INITIAL_VISIBLE);
  const hasMore = casesHandled.length > INITIAL_VISIBLE;

  return (
    <section className="bg-white px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>What We Handle</SectionEyebrow>
        <h2 className="font-['Playfair_Display'] text-[42px] md:text-[56px] font-bold text-[#002E56] mb-10">
          Cases Handled
        </h2>

        <div className="flex flex-row flex-wrap gap-12.5 items-center justify-center">
          {visibleCases.map((item) => (
            <CaseCard key={item.id} text={item.text} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <SeeMoreButton onClick={() => setShowAll((prev) => !prev)} isOpen={showAll}>
              {showAll ? "Show Less" : "See More"}
            </SeeMoreButton>
          </div>
        )}
      </div>
    </section>
  );
}
