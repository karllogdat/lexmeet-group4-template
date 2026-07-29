import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function CarouselArrow({ direction = "next", onClick, tone = "dark" }) {
  const Icon = direction === "prev" ? IconChevronLeft : IconChevronRight;
  const styles =
    tone === "light"
      ? "bg-[#F2F6FA]  text-[#002E56] hover:bg-slate-100"
      : "bg-white/15 text-white hover:bg-white/25";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className={`grid place-items-center h-10 w-10 rounded-full shadow-sm transition-colors ${styles}`}
    >
      <Icon size={20} stroke={2} />
    </button>
  );
}
