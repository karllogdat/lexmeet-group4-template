/**
 * PageTabs — 3-tab navigation bar for the main Lawyers Profile page.
 *
 * Active tab: bg-g4-900 (deep navy) + white bold text
 * Inactive tab: transparent background + g4-600 coloured text
 */

const TABS = [
  { id: "list", label: "List of Lawyers" },
  { id: "ratings", label: "Ratings & Feedback" },
  { id: "schedule", label: "Lawyers Schedule" },
];

export default function PageTabs({ activeTab, onChange }) {
  return (
    <div className="flex border border-g4-700/30">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            id={`page-tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={[
              "flex-1 min-w-0 py-3 px-1 sm:px-2 text-center font-playfair",
              "text-xs sm:text-sm md:text-base lg:text-2xl leading-snug transition-colors",
              isActive
                ? "bg-g4-700 text-white"
                : "bg-g4-50 text-g4-700 hover:bg-g4-50",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
