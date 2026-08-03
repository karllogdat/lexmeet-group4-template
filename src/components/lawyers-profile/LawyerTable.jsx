import LawyerTableRow from "./LawyerTableRow";

/**
 * Column header labels per variant.
 */
const HEADERS = {
  list: { third: "Action" },
  ratings: { third: "Ratings" },
  schedule: { third: "Availability" },
};

/**
 * LawyerTable — full table with sticky header row and mapped rows.
 * On mobile the table scrolls horizontally inside its container.
 */
export default function LawyerTable({ lawyers, variant, onSeeMore }) {
  const { third } = HEADERS[variant];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-130 border-collapse">
        {/* Table header — g4-700 background matching Figma */}
        <thead>
          <tr className="bg-g4-700 text-white">

            <th className="py-3 px-4 text-left font-inter font-semibold text-xs sm:text-sm">
              Name
            </th>
            <th className="py-3 px-4 text-left font-inter font-semibold text-xs sm:text-sm">
              Position
            </th>
            <th className="py-3 px-4 text-left font-inter font-semibold text-xs sm:text-sm">
              {third}
            </th>
            {/* Empty header — See More column has no label */}
            <th className="py-3 px-4" aria-label="Actions" />
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {lawyers.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="py-12 text-center font-inter text-gray-500"
              >
                No lawyers found.
              </td>
            </tr>
          ) : (
            lawyers.map((lawyer) => (
              <LawyerTableRow
                key={lawyer.id}
                lawyer={lawyer}
                variant={variant}
                onSeeMore={onSeeMore}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
