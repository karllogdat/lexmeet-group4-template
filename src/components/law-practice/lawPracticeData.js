// ── Practice-area image assets ───────────────────────────────────────────────
import familyLawImg from "../../assets/law-practice/practice-areas/family-law.png";
import laborLawImg from "../../assets/law-practice/practice-areas/labor-law.png";
import immigrationLawImg from "../../assets/law-practice/practice-areas/immigration-law.png";
import criminalLawImg from "../../assets/law-practice/practice-areas/criminal-law.png";
import commercialLawImg from "../../assets/law-practice/practice-areas/commercial-law.png";
import civilLawImg from "../../assets/law-practice/practice-areas/civil-law.png";
import taxationLawImg from "../../assets/law-practice/practice-areas/taxation-law.png";
import specialServicesImg from "../../assets/law-practice/practice-areas/special-services.png";

// ── Location / region map assets ─────────────────────────────────────────────
import nationwideImg from "../../assets/law-practice/location-section/nationwide.png";
import luzonImg from "../../assets/law-practice/location-section/luzon.png";
import visayasImg from "../../assets/law-practice/location-section/visayas.png";
import mindanaoImg from "../../assets/law-practice/location-section/mindanao.png";

// ── Awards & citations assets ─────────────────────────────────────────────────
import specialAwardsImg from "../../assets/law-practice/awards-citation/special-awards.png";
import citationsImg from "../../assets/law-practice/awards-citation/citations.png";

// ── Member photo assets ───────────────────────────────────────────────────────
import louisseMartinezImg from "../../assets/law-practice/members/louisse-martinez.png";
import annaBermudezImg from "../../assets/law-practice/members/anna-bermudez.png";
import kalixMartinezImg from "../../assets/law-practice/members/kalix-martinez.png";

// ─────────────────────────────────────────────────────────────────────────────

export const practiceAreas = [
  { id: "family",      label: "Family Law",       image: familyLawImg },
  { id: "labor",       label: "Labor Law",        image: laborLawImg },
  { id: "immigration", label: "Immigration Law",  image: immigrationLawImg },
  { id: "criminal",    label: "Criminal Law",     image: criminalLawImg },
  { id: "commercial",  label: "Commercial Law",   image: commercialLawImg },
  { id: "civil",       label: "Civil Law",        image: civilLawImg },
  { id: "taxation",    label: "Taxation Law",     image: taxationLawImg },
  { id: "special",     label: "Special Services", image: specialServicesImg },
];

// TODO(content): rows 1 and 2 are duplicated in the wireframe. Swap in the six
// real case categories before this ships.
export const casesHandled = [
  { id: "case-1", text: "Annulment of Marriage of Declaration of Nullity of Marriage" },
  { id: "case-2", text: "Contract drafting and other commercial documents" },
  { id: "case-3", text: "Actions for specific performance" },
  { id: "case-4", text: "Annulment of Marriage of Declaration of Nullity of Marriage" },
  { id: "case-5", text: "Contract drafting and other commercial documents" },
  { id: "case-6", text: "Actions for specific performance" },
];

export const regions = [
  { id: "nationwide", label: "Nationwide", image: nationwideImg },
  { id: "luzon",      label: "Luzon",      image: luzonImg },
  { id: "visayas",    label: "Visayas",    image: visayasImg },
  { id: "mindanao",   label: "Mindanao",   image: mindanaoImg },
];

export const provinces = [
  "Agusan del Sur",
  "Cavite",
  "Agusan del Norte",
  "Leyte",
  "Camarines Norte",
  "La Union",
  "Camarines Sur",
  "Nueva Vizcaya",
  "Zamboanga",
  "Agusan del Sur",
  "Cavite",
  "Agusan del Norte",
  "Leyte",
  "Camarines Norte",
  "La Union",
  "Camarines Sur",
  "Nueva Vizcaya",
  "Zamboanga",
];

export const recognitions = [
  {
    id: "award-1",
    type: "award",
    title: "Special Awards",
    description: "Best Law Firm in 2020 Women's Rights Cases Category, December 2020",
    image: specialAwardsImg,
  },
  {
    id: "citation-1",
    type: "citation",
    title: "Citations",
    description:
      "University of Santo Tomas, Certificate of Recognition for Best Internship Law Firm, 2021",
    image: citationsImg,
  },
  {
    id: "citation-2",
    type: "citation",
    title: "Citations",
    description:
      "Child Safety Committee, Certificate of Friendship Law Firm 2021",
    image: citationsImg,
  },
];

export const members = [
  {
    id: "member-1",
    name: "Atty. Louisse V. Martinez",
    note: "Top 100 Lawyers of the Philippines",
    photo: louisseMartinezImg,
  },
  {
    id: "member-2",
    name: "Atty. Anna C. Bermudez",
    note: "ALB Philippines Client Choice Lawyers 2021",
    photo: annaBermudezImg,
  },
  {
    id: "member-3",
    name: "Atty. Kalix Jace Martinez",
    note: "Commended External Counsel of the Year",
    photo: kalixMartinezImg,
  },
];
