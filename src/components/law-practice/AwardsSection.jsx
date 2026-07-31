import { useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import CarouselArrow from "../ui/CarouselArrow";
import CarouselDots from "../ui/CarouselDots";
import AwardCard from "./AwardCard";
import { recognitions } from "./lawPracticeData";

// Desktop shows 2 cards at a time; mobile shows 1
const DESKTOP_PER_VIEW = 2;
const MOBILE_PER_VIEW = 1;

export default function AwardsSection() {
  const desktopMaxIndex = Math.max(0, recognitions.length - DESKTOP_PER_VIEW);
  const mobileMaxIndex = Math.max(0, recognitions.length - MOBILE_PER_VIEW);

  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNextMobile = () => setIndex((i) => Math.min(mobileMaxIndex, i + 1));
  const goNextDesktop = () => setIndex((i) => Math.min(desktopMaxIndex, i + 1));

  const desktopVisible = recognitions.slice(index, index + DESKTOP_PER_VIEW);
  const mobileVisible = recognitions.slice(index, index + MOBILE_PER_VIEW);

  return (
    <section className="bg-white px-6 md:px-12 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>Recognition</SectionEyebrow>
        <h2 className="font-['Playfair_Display'] text-[42px] md:text-[56px] font-bold text-[#002E56] mb-10">
          Special Awards and Citations
        </h2>

        {/* ── Mobile: single card ─────────────────────────────────── */}
        <div className="flex md:hidden items-center justify-center gap-6">
          <CarouselArrow direction="prev" tone="light" onClick={goPrev} />
          <div className="flex gap-6">
            {mobileVisible.map((item) => (
              <AwardCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
          <CarouselArrow direction="next" tone="light" onClick={goNextMobile} />
        </div>

        {/* ── Desktop: two-card view ──────────────────────────────── */}
        <div className="hidden md:flex items-center justify-center gap-10">
          <CarouselArrow direction="prev" tone="light" onClick={goPrev} />
          <div className="flex gap-10">
            {desktopVisible.map((item) => (
              <AwardCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
          <CarouselArrow direction="next" tone="light" onClick={goNextDesktop} />
        </div>

        {/* Dots count always based on the desktop window so it stays consistent */}
        <CarouselDots count={desktopMaxIndex + 1} activeIndex={Math.min(index, desktopMaxIndex)} onSelect={setIndex} />
      </div>
    </section>
  );
}
