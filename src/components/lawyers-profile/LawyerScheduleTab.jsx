const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/**
 * Formats a schedule slot: "Not available" gets a muted grey style.
 */
function SlotCell({ slot }) {
  const isUnavailable = slot === "Not available";
  return (
    <td
      className={[
        "py-3 px-4 font-inter text-sm",
        isUnavailable ? "text-gray-400 italic" : "text-gray-800",
      ].join(" ")}
    >
      {slot}
    </td>
  );
}

/**
 * LawyerScheduleTab — Day / AM Schedule / PM Schedule table with zebra-striped rows.
 * 7 rows, one per day of the week.
 */
export default function LawyerScheduleTab({ schedule }) {
  // Ensure days are always in canonical order regardless of data order
  const orderedSchedule = DAYS.map(
    (day) =>
      schedule.find((s) => s.day === day) ?? {
        day,
        am: "Not available",
        pm: "Not available",
      }
  );

  return (
    <div className="p-5 overflow-x-auto">
      <table className="w-full min-w-[360px] border-collapse">
        <thead>
          <tr className="bg-g4-700 text-white">
            <th className="py-3 px-4 text-left font-inter font-semibold text-sm">Day</th>
            <th className="py-3 px-4 text-left font-inter font-semibold text-sm">AM Schedule</th>
            <th className="py-3 px-4 text-left font-inter font-semibold text-sm">PM Schedule</th>
          </tr>
        </thead>
        <tbody>
          {orderedSchedule.map((row, idx) => (
            <tr
              key={row.day}
              className={idx % 2 === 0 ? "bg-white" : "bg-g4-50"}
            >
              <td className="py-3 px-4 font-inter text-sm font-semibold text-gray-900">
                {row.day}
              </td>
              <SlotCell slot={row.am} />
              <SlotCell slot={row.pm} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
