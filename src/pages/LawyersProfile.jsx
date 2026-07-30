import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { lawyers } from "../components/lawyers-profile/lawyersProfileData";
import PageTabs from "../components/lawyers-profile/PageTabs";
import LawyerTable from "../components/lawyers-profile/LawyerTable";
import LawyerProfileModal from "../components/lawyers-profile/LawyerProfileModal";

/**
 * LawyersProfilePage — main page for /lawyers-profile
 *
 * Features:
 *   - "Lawyers Profile" page title
 *   - Search input filtered by lawyer name
 *   - 3-tab navigation (List of Lawyers / Ratings & Feedback / Lawyers Schedule)
 *   - Shared table structure, variable right column per tab
 *   - "See More" modal for individual lawyer details
 */
export default function LawyersProfilePage() {
  const [activeTab, setActiveTab] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  // Filter lawyers by name (case-insensitive)
  const filteredLawyers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return lawyers;
    return lawyers.filter((l) =>
      l.name.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Map page tab to table variant
  const variantMap = {
    list:     "list",
    ratings:  "ratings",
    schedule: "schedule",
  };

  return (
    <>
      {/* ── Page content ──────────────────────────────────────────── */}
      <div className="min-h-screen bg-gradient-to-b from-g4-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Page title */}
          <h1 className="g4-heading-1 text-g4-900 text-center mb-8">
            Lawyers Profile
          </h1>

          {/* Search input */}
          <div className="flex items-center gap-0 mb-6">
            <div className="flex items-center justify-center w-11 h-11 bg-g4-700 rounded-l-lg flex-shrink-0">
              <Search size={20} className="text-white" />
            </div>
            <input
              id="lawyers-search"
              type="search"
              placeholder="Search lawyers by name…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-11 px-4 border border-g4-300 rounded-r-lg font-inter text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-g4-600 focus:border-transparent"
              aria-label="Search lawyers"
            />
          </div>

          {/* Tab navigation + table panel */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-g4-700/20">
            {/* Tabs */}
            <PageTabs activeTab={activeTab} onChange={setActiveTab} />

            {/* Table */}
            <div className="bg-white">
              <LawyerTable
                lawyers={filteredLawyers}
                variant={variantMap[activeTab]}
                onSeeMore={setSelectedLawyer}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Lawyer detail modal ────────────────────────────────────── */}
      {/* key forces tab state reset when a different lawyer is selected */}
      <LawyerProfileModal
        key={selectedLawyer?.id ?? "closed"}
        lawyer={selectedLawyer}
        onClose={() => setSelectedLawyer(null)}
      />
    </>
  );
}
