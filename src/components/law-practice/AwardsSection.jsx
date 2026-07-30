import { useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import CarouselArrow from "../ui/CarouselArrow";
import CarouselDots from "../ui/CarouselDots";
import AwardCard from "./AwardCard";
import { recognitions } from "./lawPracticeData";

const ITEMS_PER_VIEW = 2;

export default function AwardsSection() {
  const maxIndex = Math.max(0, recognitions.length - ITEMS_PER_VIEW);
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const visible = recognitions.slice(index, index + ITEMS_PER_VIEW);

  return (
    <section className="bg-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>Recognition</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-[#002E56] mb-10">
          Special Awards and Citations
        </h2>

        <div className="flex items-center justify-center gap-10">
          <CarouselArrow direction="prev" tone="light" onClick={goPrev} />

          <div className="flex gap-10">
            {visible.map((item) => (
              <AwardCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>

          <CarouselArrow direction="next" tone="light" onClick={goNext} />
        </div>

        <CarouselDots count={maxIndex + 1} activeIndex={index} onSelect={setIndex} />
      </div>
    </section>
  );
}
