/**
 * ModalTabs — 3-tab navigation for the lawyer detail modal.
 *
 * Active tab: bg-g4-900 + white bold text
 * Inactive tab: transparent + dark text
 */

const TABS = [
  { id: "cv",       label: "Curriculum Vitae" },
  { id: "ratings",  label: "Ratings & Feedback" },
  { id: "schedule", label: "Lawyer Schedule" },
];

export default function ModalTabs({ activeTab, onChange }) {
  return (
    <div className="flex border-b border-gray-200">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            id={`modal-tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={[
              "flex-1 py-3 px-2 text-center font-inter font-semibold text-sm sm:text-base transition-colors",
              isActive
                ? "bg-g4-900 text-white"
                : "bg-white text-g4-700 hover:bg-g4-50",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
