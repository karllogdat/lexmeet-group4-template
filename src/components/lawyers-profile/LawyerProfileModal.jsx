import { useState } from "react";
import { MapPin, User, Star, Phone } from "lucide-react";
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
export default function LawyerProfileModal({ lawyer, initialTab = "cv", onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Reset tab to CV whenever a new lawyer is opened
  // (keeps state reset cheap — only runs on prop change via key in parent)

  if (!lawyer) return null;

  return (
    <LawyerModal isOpen={!!lawyer} onClose={onClose}>
      {/* ── Modal Header ───────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row h-fit items-center gap-4 sm:gap-6 pt-10 px-4 sm:px-8 lg:px-10 pb-10 justify-center">
        {/* Avatar + status dot */}
        <div className="relative shrink-0">
          <div className="w-23 h-23 rounded-full bg-g4-50 overflow-hidden border-2 border-g4-200">
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
        <div className="flex flex-col flex-1 min-w-0 items-center sm:items-start justify-center text-center sm:text-left">
          <h2 className="font-playfair font-normal text-2xl sm:text-3xl text-g4-900 leading-tight">
            {lawyer.name}
          </h2>
          <p className="font-inter text-g4-600 font-medium text-base mt-0.5">
            {lawyer.position}
          </p>
          {/* Meta row: location, consultations, rating */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 mt-2 text-sm font-inter text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-[#6B7C8C] shrink-0" />
              {lawyer.location}
            </span>
            <span className="flex items-center gap-1">
              <User size={14} className="text-[#6B7C8C] shrink-0" />
              {lawyer.consultationCount}
            </span>
            <span className="flex items-center gap-1">
              <Star size={14} className="text-[#6B7C8C] fill-[#6B7C8C] shrink-0" />
              {lawyer.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Talk to this lawyer button */}
        <div className="shrink-0 mt-2 sm:mt-0">
          <a
            href={`tel:${lawyer.phone}`}
            id={`talk-btn-${lawyer.id}`}
            className="inline-flex items-center gap-2 bg-g4-700 hover:bg-g4-900 text-white font-inter font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
          >
            <Phone size={16} />
            Talk to this Lawyer
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
