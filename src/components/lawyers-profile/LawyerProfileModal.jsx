import { useState } from "react";
import { MapPin, Users, Star, Phone } from "lucide-react";
import LawyerModal from "../ui/LawyerModal";
import ModalTabs from "./ModalTabs";
import CurriculumVitaeTab from "./CurriculumVitaeTab";
import RatingsFeedbackTab from "./RatingsFeedbackTab";
import LawyerScheduleTab from "./LawyerScheduleTab";

/**
 * LawyerProfileModal — full modal for a single lawyer.
 *
 * Props:
 *   lawyer  — the full lawyer data object (or null when closed)
 *   onClose — callback to clear selection
 */
export default function LawyerProfileModal({ lawyer, onClose }) {
  const [activeTab, setActiveTab] = useState("cv");

  // Reset tab to CV whenever a new lawyer is opened
  // (keeps state reset cheap — only runs on prop change via key in parent)

  if (!lawyer) return null;

  return (
    <LawyerModal isOpen={!!lawyer} onClose={onClose}>
      {/* ── Modal Header ───────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-start gap-4 p-6 pb-4">
        {/* Avatar + status dot */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-g4-50 overflow-hidden border-2 border-g4-200">
            <img
              src={lawyer.photo}
              alt={lawyer.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={[
              "absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white",
              lawyer.isOnline ? "bg-green-500" : "bg-gray-400",
            ].join(" ")}
            aria-label={lawyer.isOnline ? "Online" : "Offline"}
          />
        </div>

        {/* Name / role / meta */}
        <div className="flex-1 min-w-0">
          <h2 className="font-playfair text-2xl sm:text-3xl text-g4-900 font-bold leading-tight">
            {lawyer.name}
          </h2>
          <p className="font-inter text-g4-600 font-semibold text-base mt-0.5">
            {lawyer.position}
          </p>
          {/* Meta row: location, consultations, rating */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm font-inter text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-g4-600 flex-shrink-0" />
              {lawyer.location}
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} className="text-g4-600 flex-shrink-0" />
              {lawyer.consultationCount}
            </span>
            <span className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
              {lawyer.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Talk to this lawyer button */}
        <div className="flex-shrink-0 mt-2 sm:mt-0">
          <a
            href={`tel:${lawyer.phone}`}
            id={`talk-btn-${lawyer.id}`}
            className="inline-flex items-center gap-2 bg-g4-700 hover:bg-g4-900 text-white font-inter font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
          >
            <Phone size={16} />
            Talk to this lawyer
          </a>
        </div>
      </div>

      {/* ── Modal Tabs ─────────────────────────────────────────────── */}
      <ModalTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* ── Tab Content ────────────────────────────────────────────── */}
      {activeTab === "cv" && <CurriculumVitaeTab cv={lawyer.cv} />}
      {activeTab === "ratings" && <RatingsFeedbackTab reviews={lawyer.reviews} />}
      {activeTab === "schedule" && <LawyerScheduleTab schedule={lawyer.schedule} />}
    </LawyerModal>
  );
}
