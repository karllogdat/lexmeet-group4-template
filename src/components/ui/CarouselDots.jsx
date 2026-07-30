export default function CarouselDots({ count, activeIndex, onSelect, tone = "dark" }) {
  const inactive = tone === "light" ? "bg-white/30" : "bg-[#89CFF1]/50";
  const active = tone === "light" ? "bg-white" : "bg-[#1D6FA5]";

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect?.(i)}
          className={`h-2 rounded-full transition-all ${i === activeIndex ? `w-6 ${active}` : `w-2 ${inactive}`
            }`}
        />
      ))}
    </div>
  );
}
