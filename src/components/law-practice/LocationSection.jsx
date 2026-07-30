import { useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import RegionMapCard from "./RegionMapCard";
import ProvincePill from "./ProvincePill";
import SeeMoreButtonNew from "../ui/SeeMoreButtonNew";
import { regions, provinces } from "./lawPracticeData";

const INITIAL_VISIBLE = 9; // all provinces shown for now; wire up "See all" when the full list exists

export default function LocationSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProvinces = showAll ? provinces : provinces.slice(0, INITIAL_VISIBLE);

  return (
    <section className="bg-g4-900 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow tone="light">Where We Operate</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">
          Location of Practice
        </h2>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {regions.map((region) => (
            <RegionMapCard key={region.id} label={region.label} image={region.image} />
            ))}
          </div>

          <div>
            <p className="text-white font-medium mb-4 text-xl font-bold font-inter">Provinces Served</p>
            <div className="flex flex-wrap gap-3">
              {visibleProvinces.map((province) => (
                <ProvincePill key={province} label={province} />
              ))}
            </div>

            {provinces.length > INITIAL_VISIBLE && (
              <div className="mt-5">
                <SeeMoreButtonNew
                  text={showAll ? "Show fewer provinces" : "See all provinces"}
                  onClick={() => setShowAll((prev) => !prev)}
                  bgColor="bg-g4-700"
                  textColor="text-white"
                  hoverColor="hover:bg-g4-800"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}