export default function SectionEyebrow({ children, tone = "dark" }) {
  const toneClass = tone === "light" ? "text-[#89CFF1]" : "text-[#1D6FA5]";

  return (
    <p className={`text-sm md:text-base font-semibold tracking-[0.14em] uppercase ${toneClass}`}>
      {children}
    </p>
  );
}
