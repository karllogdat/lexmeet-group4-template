const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


const TODAY = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "Asia/Manila",
}).format(new Date());


function SlotCell({ slot }) {
  const isUnavailable = slot === "Not available";
  return (
    <td
      className={[
        "py-3.5 px-4 font-inter text-sm text-center wrap-break-word",
        isUnavailable ? "text-gray-400 italic" : "text-g4-900 font-medium",
      ].join(" ")}
    >
      {slot}
    </td>
  );
}

export default function LawyerScheduleTab({ schedule }) {
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
      <div className="w-full max-w-4xl mx-auto rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full min-w-72 border-collapse table-fixed">
          <thead>
            <tr className="border-b-2 border-g4-700">
              <th className="w-1/3 py-3 px-4 pl-8 text-left font-inter font-semibold text-sm uppercase tracking-wide text-[#5B5B5B]">
                Day
              </th>
              <th className="w-1/3 py-3 px-4 text-center font-inter font-semibold text-sm uppercase tracking-wide text-[#5B5B5B]">
                AM Schedule
              </th>
              <th className="w-1/3 py-3 px-4 text-center font-inter font-semibold text-sm uppercase tracking-wide text-[#5B5B5B]">
                PM Schedule
              </th>
            </tr>
          </thead>
          <tbody>
            {orderedSchedule.map((row, idx) => {
              const isToday = row.day === TODAY;
              return (
                <tr
                  key={row.day}
                  className={[
                    idx % 2 === 0 ? "bg-[#F2F6FA]" : "bg-white",
                    isToday ? "bg-g4-50" : "",
                    "hover:bg-g4-50/70 transition-colors duration-150",
                  ].join(" ")}
                >
                  <td className="py-3.5 px-4 pl-8 font-inter text-left text-sm font-bold text-g4-900">
                    {row.day}
                  </td>
                  <SlotCell slot={row.am} />
                  <SlotCell slot={row.pm} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}