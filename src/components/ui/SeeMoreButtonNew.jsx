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
            className={`min-w-49.5 h-14.25 inline-flex items-center justify-center gap-1.5 rounded-lg px-8 py-2.5 text-xl font-medium font-inter transition-colors ${bgColor} ${textColor} ${hoverColor}`}
        >
            {text}
            <IconChevronDown size={24} stroke={2} />
        </button>
    );
}