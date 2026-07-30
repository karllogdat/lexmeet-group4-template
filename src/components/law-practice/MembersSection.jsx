import { useState } from "react";
import SectionEyebrow from "../ui/SectionEyebrow";
import CarouselArrow from "../ui/CarouselArrow";
import CarouselDots from "../ui/CarouselDots";
import MemberCard from "./MemberCard";
import { members } from "./lawPracticeData";

const DESKTOP_PER_VIEW = 3;
const MOBILE_PER_VIEW = 1;

const mobileMaxIndex = Math.max(0, members.length - MOBILE_PER_VIEW);
const desktopMaxIndex = Math.max(0, members.length - DESKTOP_PER_VIEW);

export default function MembersSection() {
  // Separate indices so mobile and desktop carousels never interfere with each other.
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const goPrevMobile = () => setMobileIndex((i) => Math.max(0, i - 1));
  const goNextMobile = () => setMobileIndex((i) => Math.min(mobileMaxIndex, i + 1));

  const goPrevDesktop = () => setDesktopIndex((i) => Math.max(0, i - 1));
  const goNextDesktop = () => setDesktopIndex((i) => Math.min(desktopMaxIndex, i + 1));

  const mobileVisible = members.slice(mobileIndex, mobileIndex + MOBILE_PER_VIEW);

  const desktopVisible = members.slice(desktopIndex, desktopIndex + DESKTOP_PER_VIEW);

  return (
    <section className="bg-[#002E56] px-4 sm:px-6 md:px-12 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow tone="light">Who We Are</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-10">
          Notable Members
        </h2>

        {/* ── Mobile: single card, arrows flank it ──────────────────────── */}
        <div className="flex md:hidden items-center justify-center gap-4">
          <CarouselArrow direction="prev" onClick={goPrevMobile} />

          <div className="flex-1 max-w-xs py-2">
            {mobileVisible.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                note={member.note}
                active={false}
                photoSrc={member.photo}
                fluid
              />
            ))}
          </div>

          <CarouselArrow direction="next" onClick={goNextMobile} />
        </div>

        {/* ── Tablet+: 3 fluid cards, centre card always emphasised ─────── */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6">
          <CarouselArrow direction="prev" onClick={goPrevDesktop} />

          {/* py-4 gives vertical breathing room for the scaled centre card */}
          <div className="flex flex-1 gap-4 lg:gap-6 items-center py-4 max-w-3xl">
            {desktopVisible.map((member, i) => (
              <MemberCard
                key={member.id}
                name={member.name}
                note={member.note}
                active={i === 1}
                photoSrc={member.photo}
                fluid
              />
            ))}
          </div>

          <CarouselArrow direction="next" onClick={goNextDesktop} />
        </div>

        {/* ── Dots ──────────────────────────────────────────────────────── */}
        <div className="md:hidden">
          <CarouselDots
            count={mobileMaxIndex + 1}
            activeIndex={mobileIndex}
            onSelect={setMobileIndex}
            tone="light"
          />
        </div>
        <div className="hidden md:block">
          <CarouselDots
            count={desktopMaxIndex + 1}
            activeIndex={desktopIndex}
            onSelect={setDesktopIndex}
            tone="light"
          />
        </div>
      </div>
    </section>
  );
}
