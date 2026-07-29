import { IconChevronDown } from "@tabler/icons-react";

export default function SeeMoreButton({ children = "See More", onClick, variant = "solid" }) {
  const styles =
    variant === "solid"
      ? "bg-g4-600 text-white hover:bg-[#175A85]"
      : "bg-white/10 text-white hover:bg-white/20";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[198px] h-[57px] inline-flex items-center justify-center gap-1.5 rounded-[8px] px-5 py-2.5 text-xl font-medium font-inter transition-colors ${styles}`}
    >
      {children}
      <IconChevronDown size={24} stroke={2} />
    </button>
  );
}
