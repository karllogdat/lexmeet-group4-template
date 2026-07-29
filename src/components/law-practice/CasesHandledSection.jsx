import SectionEyebrow from "../ui/SectionEyebrow";
import SeeMoreButton from "../ui/SeeMoreButton";
import CaseCard from "./CaseCard";
import { casesHandled } from "./lawPracticeData";

export default function CasesHandledSection() {
  return (
    <section className="bg-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>What We Handle</SectionEyebrow>
        <h2 className="font-serif text-3xl md:text-4xl text-[#002E56] mb-10">
          Cases Handled
        </h2>

        <div className="flex flex-row flex-wrap gap-[50px] items-center justify-center">
          {casesHandled.map((item) => (
            <CaseCard key={item.id} text={item.text} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <SeeMoreButton />
        </div>
      </div>
    </section>
  );
}
