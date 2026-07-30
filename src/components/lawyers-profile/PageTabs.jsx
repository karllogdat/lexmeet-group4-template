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
    <div className="flex overflow-hidden border border-g4-700/30">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            id={`page-tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={[
              "flex-1 py-4 px-2 text-center g4-heading-2 sm:text-lg transition-colors",
              isActive
                ? "bg-g4-700 text-white"
                : "bg-[#EAF6FB] text-g4-700 hover:bg-g4-50",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
