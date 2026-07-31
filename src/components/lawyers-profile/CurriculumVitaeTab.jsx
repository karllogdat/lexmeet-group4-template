import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * How many items to show before the "See More" button appears.
 * Applies uniformly across Languages, Work Experience, Education, and Cases Handled.
 */
const PREVIEW_COUNT = 2;

/**
 * Pill tag — used for Languages & Dialects, Location of Practice.
 * Matches the province pill style from the law-practice section.
 */
function Pill({ label }) {
  return (
    <span className="inline-block border border-g4-600 text-g4-700 text-xs sm:text-sm font-inter px-3 py-1 rounded-md bg-g4-50">
      {label}
    </span>
  );
}

/**
 * Section label — uppercase teal heading, matches Figma CV section labels.
 */
function CvLabel({ children }) {
  return (
    <p className="text-g4-600 font-inter font-semibold text-l tracking-widest uppercase mb-1">
      {children}
    </p>
  );
}

/**
 * "See More / See Less" toggle button.
 * Hidden when there is nothing beyond the preview (total <= PREVIEW_COUNT).
 */
function CvToggleBtn({ expanded, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="mt-3 w-full flex items-center justify-center gap-1.5 bg-g4-700 hover:bg-g4-900 text-white font-inter font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
    >
      {expanded ? "See Less" : "See More"}
      {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
  );
}

/**
 * CurriculumVitaeTab — 3-column layout matching the Figma CV tab.
 *
 * Col 1: Roll #, Date Admitted, IBP, MCLE, Language & Dialect + See More/Less
 * Col 2: Work Experience + See More/Less, Education + See More/Less, Location of Practice
 * Col 3: Concentration of Law Practice, Cases Handled + See More/Less
 *
 * "See More" sections collapse to PREVIEW_COUNT items; clicking the button
 * reveals the remainder and relabels it "See Less".
 */
export default function CurriculumVitaeTab({ cv }) {
  const {
    rollNumber,
    dateAdmitted,
    ibp,
    mcle,
    languages,
    workExperience,
    education,
    locationOfPractice,
    concentration,
    casesHandled,
  } = cv;

  // Per-section expanded state
  const [langsExpanded, setLangsExpanded] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(false);
  const [eduExpanded, setEduExpanded] = useState(false);
  const [casesExpanded, setCasesExpanded] = useState(false);

  // Slice helpers
  const visibleLangs = langsExpanded ? languages : languages.slice(0, PREVIEW_COUNT);
  const visibleWork = workExpanded ? workExperience : workExperience.slice(0, PREVIEW_COUNT);
  const visibleEdu = eduExpanded ? education : education.slice(0, PREVIEW_COUNT);
  const visibleCases = casesExpanded ? casesHandled : casesHandled.slice(0, PREVIEW_COUNT);

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10">
      {/* —— Column 1 ——————————————————————————————————————————————— */}
      <div className="flex flex-col gap-6 px-2 sm:px-3">
        {/* Roll of Attorneys Number */}
        <div>
          <CvLabel>Roll of Attorneys Number</CvLabel>
          <p className="font-inter font-semibold text-l text-g4-900 break-words">{rollNumber}</p>
        </div>

        {/* Date Admitted */}
        <div>
          <CvLabel>Date Admitted</CvLabel>
          <p className="font-inter font-semibold text-l text-g4-900">{dateAdmitted}</p>
        </div>

        {/* IBP */}
        <div>
          <CvLabel>IBP</CvLabel>
          <p className="font-inter font-semibold text-l text-g4-900 break-words">{ibp.number}</p>
          <p className="font-inter font-normal text-l text-[#5B5B5B]">{ibp.date}</p>
        </div>

        {/* MCLE */}
        <div>
          <CvLabel>MCLE</CvLabel>
          <p className="font-inter font-semibold text-l text-g4-900 break-words">
            {mcle.status} • {mcle.number}
          </p>
          <p className="font-inter font-normal text-l text-[#5B5B5B]">{mcle.dateRange}</p>
        </div>

        {/* Language & Dialect */}
        <div>
          <CvLabel>Language &amp; Dialect</CvLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            {visibleLangs.map((lang) => (
              <Pill key={lang} label={lang} />
            ))}
          </div>
          {languages.length > PREVIEW_COUNT && (
            <CvToggleBtn
              expanded={langsExpanded}
              onToggle={() => setLangsExpanded((v) => !v)}
            />
          )}
        </div>
      </div>

      {/* —— Column 2 ——————————————————————————————————————————————— */}
      <div className="flex flex-col gap-6 px-2 sm:px-3">
        {/* Work Experience */}
        <div>
          <CvLabel>Work Experience</CvLabel>
          {visibleWork.map((job, i) => (
            <div key={i} className="mb-1">
              <p className="font-inter font-semibold text-l text-g4-900 break-words">{job.firm}</p>
              <p className="font-inter font-normal text-l text-[#5B5B5B] break-words">
                {job.role} • {job.address}
              </p>
            </div>
          ))}
          {workExperience.length > PREVIEW_COUNT && (
            <CvToggleBtn
              expanded={workExpanded}
              onToggle={() => setWorkExpanded((v) => !v)}
            />
          )}
        </div>

        {/* Education */}
        <div>
          <CvLabel>Education</CvLabel>
          {visibleEdu.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-inter font-semibold text-l text-g4-900 break-words">{edu.institution}</p>
              <p className="font-inter font-normal text-l text-[#5B5B5B] break-words">
                {edu.degree} • {edu.date}
              </p>
            </div>
          ))}
          {education.length > PREVIEW_COUNT && (
            <CvToggleBtn
              expanded={eduExpanded}
              onToggle={() => setEduExpanded((v) => !v)}
            />
          )}
        </div>

        {/* Location of Practice */}
        <div>
          <CvLabel>Location of Practice</CvLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            {locationOfPractice.map((loc) => (
              <Pill key={loc} label={loc} />
            ))}
          </div>
        </div>
      </div>

      {/* —— Column 3 ——————————————————————————————————————————————— */}
      <div className="flex flex-col gap-6 px-2 sm:px-3">
        {/* Concentration of Law Practice — no See More (shown in full per design) */}
        <div>
          <CvLabel>Concentration of Law Practice</CvLabel>
          <ul className="mt-1 space-y-1">
            {concentration.map((item) => (
              <li key={item} className="font-inter font-semibold text-l text-g4-900 break-words">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cases Handled */}
        <div>
          <CvLabel>Cases Handled</CvLabel>
          <ul className="mt-1 space-y-1">
            {visibleCases.map((item) => (
              <li key={item} className="font-inter font-semibold text-l text-g4-900 break-words">
                {item}
              </li>
            ))}
          </ul>
          {casesHandled.length > PREVIEW_COUNT && (
            <CvToggleBtn
              expanded={casesExpanded}
              onToggle={() => setCasesExpanded((v) => !v)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
