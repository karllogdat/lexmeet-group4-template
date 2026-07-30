import { ChevronDown } from "lucide-react";

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
    <p className="text-g4-600 font-inter font-semibold text-xs tracking-widest uppercase mb-1">
      {children}
    </p>
  );
}

/**
 * "See More" button — matches the solid navy button from Figma modal.
 */
function CvSeeMoreBtn({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 w-full flex items-center justify-center gap-1.5 bg-g4-700 hover:bg-g4-900 text-white font-inter font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
    >
      See More
      <ChevronDown size={16} />
    </button>
  );
}

/**
 * CurriculumVitaeTab — 3-column layout matching the Figma CV tab.
 *
 * Col 1: Roll #, Date Admitted, IBP, MCLE, Language & Dialect + See More
 * Col 2: Work Experience + See More, Education + See More, Location of Practice
 * Col 3: Concentration of Law Practice, Cases Handled + See More
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

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* ── Column 1 ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        {/* Roll of Attorneys Number */}
        <div>
          <CvLabel>Roll of Attorneys Number</CvLabel>
          <p className="font-inter text-sm text-gray-800">{rollNumber}</p>
        </div>

        {/* Date Admitted */}
        <div>
          <CvLabel>Date Admitted</CvLabel>
          <p className="font-inter text-sm font-semibold text-gray-900">{dateAdmitted}</p>
        </div>

        {/* IBP */}
        <div>
          <CvLabel>IBP</CvLabel>
          <p className="font-inter text-sm font-semibold text-gray-900">{ibp.number}</p>
          <p className="font-inter text-sm text-gray-600">{ibp.date}</p>
        </div>

        {/* MCLE */}
        <div>
          <CvLabel>MCLE</CvLabel>
          <p className="font-inter text-sm font-semibold text-gray-900">
            {mcle.status} • {mcle.number}
          </p>
          <p className="font-inter text-sm text-gray-600">{mcle.dateRange}</p>
        </div>

        {/* Language & Dialect */}
        <div>
          <CvLabel>Language &amp; Dialect</CvLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            {languages.map((lang) => (
              <Pill key={lang} label={lang} />
            ))}
          </div>
        </div>

        <CvSeeMoreBtn />
      </div>

      {/* ── Column 2 ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Work Experience */}
        <div>
          <CvLabel>Work Experience</CvLabel>
          {workExperience.map((job, i) => (
            <div key={i} className="mb-1">
              <p className="font-inter text-sm font-semibold text-gray-900">{job.firm}</p>
              <p className="font-inter text-sm text-gray-600">
                {job.role} • {job.address}
              </p>
            </div>
          ))}
          <CvSeeMoreBtn />
        </div>

        {/* Education */}
        <div>
          <CvLabel>Education</CvLabel>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-inter text-sm font-semibold text-gray-900">{edu.institution}</p>
              <p className="font-inter text-sm text-gray-600">
                {edu.degree} • {edu.date}
              </p>
            </div>
          ))}
          <CvSeeMoreBtn />
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

      {/* ── Column 3 ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Concentration of Law Practice */}
        <div>
          <CvLabel>Concentration of Law Practice</CvLabel>
          <ul className="mt-1 space-y-1">
            {concentration.map((item) => (
              <li key={item} className="font-inter text-sm text-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cases Handled */}
        <div>
          <CvLabel>Cases Handled</CvLabel>
          <ul className="mt-1 space-y-1">
            {casesHandled.map((item) => (
              <li key={item} className="font-inter text-sm text-gray-800">
                {item}
              </li>
            ))}
          </ul>
          <CvSeeMoreBtn />
        </div>
      </div>
    </div>
  );
}
