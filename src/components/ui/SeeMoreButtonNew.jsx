import { IconChevronDown } from "@tabler/icons-react";

export default function SeeMoreButton({
    text = "See More",
    onClick,
    bgColor = "bg-g4-600",
    textColor = "text-white",
    hoverColor = "hover:bg-[#175A85]",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`min-w-[198px] h-[57px] inline-flex items-center justify-center gap-1.5 rounded-[8px] px-8 py-2.5 text-xl font-medium font-inter transition-colors ${bgColor} ${textColor} ${hoverColor}`}
        >
            {text}
            <IconChevronDown size={24} stroke={2} />
        </button>
    );
}