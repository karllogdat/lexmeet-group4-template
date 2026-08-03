import { Phone, Star } from "lucide-react";

/**
 * LawyerTableRow — one row in the lawyers table.
 *
 * variant:
 *   "list"     → right column: phone icon + "See More" link
 *   "ratings"  → right column: star + numeric rating + "See More" link
 *   "schedule" → right column: Available/Not Available text + "See More" link
 */
export default function LawyerTableRow({ lawyer, variant, onSeeMore }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-g4-50/50 transition-colors">
      {/* Name column — avatar + status dot + name */}
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          {/* Avatar with online/offline dot */}
          <div className="relative shrink-0">
            <img
              src={lawyer.photo}
              alt={lawyer.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span
              className={[
                "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
                lawyer.isOnline ? "bg-green-500" : "bg-gray-400",
              ].join(" ")}
              aria-label={lawyer.isOnline ? "Online" : "Offline"}
            />
          </div>
          <span className="font-inter text-sm sm:text-base text-gray-900 font-medium">
            {lawyer.name}
          </span>
        </div>
      </td>

      {/* Position column */}
      <td className="py-3 px-4 font-inter text-sm sm:text-base text-gray-700">
        {lawyer.position}
      </td>

      {/* Variable right column */}
      <td className="py-3 px-4">
        <div className="flex items-center gap-3 justify-start">
          {variant === "list" && (
            <Phone size={20} className="text-g4-700 shrink-0" />
          )}

          {variant === "ratings" && (
            <div className="flex items-center gap-1">
              <Star size={16} className="text-g4-600 shrink-0" />
              <span className="font-inter text-sm sm:text-base text-gray-800">
                {lawyer.rating.toFixed(1)}
              </span>
            </div>
          )}

          {variant === "schedule" && (
            <span
              className={[
                "font-inter text-sm sm:text-base font-semibold",
                lawyer.isAvailable ? "text-g4-600" : "text-g4-400",
              ].join(" ")}
            >
              {lawyer.isAvailable ? "Available" : "Not Available"}
            </span>
          )}
        </div>
      </td>

      {/* See More — own column, no header, always aligned */}
      <td className="py-3 px-4 text-left">
        <button
          type="button"
          id={`see-more-${lawyer.id}-${variant}`}
          onClick={() => onSeeMore(lawyer, variant)}
          className="font-inter text-sm sm:text-base text-g4-700 font-semibold hover:text-g4-900 hover:underline transition-colors whitespace-nowrap"
        >
          See More
        </button>
      </td>
    </tr>
  );
}
