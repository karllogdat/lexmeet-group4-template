import { useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import CarouselArrow from "../ui/CarouselArrow";
import CarouselDots from "../ui/CarouselDots";
import MemberCard from "./MemberCard";
import { members } from "./lawPracticeData";

const ITEMS_PER_VIEW = 3;

export default function MembersSection() {
  const maxIndex = Math.max(0, members.length - ITEMS_PER_VIEW);
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const visible = members.slice(index, index + ITEMS_PER_VIEW);
  const centerAbsoluteIndex = index + Math.floor(ITEMS_PER_VIEW / 2);

  return (
    <section className="bg-[#002E56] px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow tone="light">Who We Are</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">
          Notable Members
        </h2>

        <div className="flex items-center justify-center gap-6">
          <CarouselArrow direction="prev" onClick={goPrev} />

          <div className="flex gap-8">
            {visible.map((member, i) => (
              <MemberCard
                key={member.id}
                name={member.name}
                note={member.note}
                active={index + i === centerAbsoluteIndex}
              />
            ))}
          </div>

          <CarouselArrow direction="next" onClick={goNext} />
        </div>

        <CarouselDots
          count={maxIndex + 1}
          activeIndex={index}
          onSelect={setIndex}
          tone="light"
        />
      </div>
    </section>
  );
}
