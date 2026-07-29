import PracticeAreasSection from "../components/law-practice/PracticeAreasSection";
import CasesHandledSection from "../components/law-practice/CasesHandledSection";
import LocationSection from "../components/law-practice/LocationSection";
import AwardsSection from "../components/law-practice/AwardsSection";
import MembersSection from "../components/law-practice/MembersSection";

// Color reference used across these components (swap for your real Tailwind
// tokens if they already exist in tailwind.config.js — these are the raw hex
// values from the design system so far):
//   #002E56  deep navy   — section backgrounds, headline text
//   #0F4C75  mid navy    — tiles, region map placeholders
//   #1D6FA5  blue        — buttons, province pills
//   #89CFF1  light blue  — eyebrow labels on dark bg, accents
//
// Fraunces is assumed mapped to `font-serif` and Inter to the default
// `font-sans` in tailwind.config.js, matching the rest of the site.

export default function LawPracticePage() {
  return (
    <main>
      <PracticeAreasSection />
      <CasesHandledSection />
      <LocationSection />
      <AwardsSection />
      <MembersSection />
    </main>
  );
}