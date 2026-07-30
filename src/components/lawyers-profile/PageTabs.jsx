/**
 * PageTabs — 3-tab navigation bar for the main Lawyers Profile page.
 *
 * Active tab: bg-g4-900 (deep navy) + white bold text
 * Inactive tab: transparent background + g4-600 coloured text
 */

const TABS = [
  { id: "list",     label: "List of Lawyers" },
  { id: "ratings",  label: "Ratings & Feedback" },
  { id: "schedule", label: "Lawyers Schedule" },
];

export default function PageTabs({ activeTab, onChange }) {
  return (
    <div className="flex rounded-t-xl overflow-hidden border border-g4-700/30">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            id={`page-tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={[
              "flex-1 py-4 px-2 text-center font-inter font-bold text-base sm:text-lg transition-colors",
              isActive
                ? "bg-g4-900 text-white"
                : "bg-white text-g4-600 hover:bg-g4-50",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
