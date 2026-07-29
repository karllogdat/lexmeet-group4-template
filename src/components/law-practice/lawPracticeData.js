import {
  IconUsers,
  IconBriefcase,
  IconId,
  IconGavel,
  IconContract,
  IconBuildingBank,
  IconReceipt,
  IconScale,
} from "@tabler/icons-react";

// TODO(content): "Taxation Law" appears twice in the approved wireframe — likely
// lofi placeholder repetition rather than final content, same issue flagged on the
// Everyday Law blog cards. Confirm the intended 8th practice area before launch.
export const practiceAreas = [
  { id: "family", label: "Family Law", icon: IconUsers },
  { id: "labor", label: "Labor Law", icon: IconBriefcase },
  { id: "immigration", label: "Immigration Law", icon: IconId },
  { id: "criminal", label: "Criminal Law", icon: IconGavel },
  { id: "commercial", label: "Commercial Law", icon: IconContract },
  { id: "taxation", label: "Taxation Law", icon: IconBuildingBank },
  { id: "taxation-2", label: "Taxation Law", icon: IconReceipt },
  { id: "special", label: "Special Services", icon: IconScale },
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
  { id: "nationwide", label: "Nationwide" },
  { id: "luzon", label: "Luzon" },
  { id: "visayas", label: "Visayas" },
  { id: "mindanao", label: "Mindanao" },
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
  },
  {
    id: "citation-1",
    type: "citation",
    title: "Citations",
    description:
      "University of Santo Tomas, Certificate of Recognition for Best Internship Law Firm, 2021",
  },
  {
    id: "citation-1",
    type: "citation",
    title: "Citations",
    description:
      "University of Santo Tomas, Certificate of Recognition for Best Internship Law Firm, 2021",
  },
];

export const members = [
  {
    id: "member-1",
    name: "Atty. Louisse V. Martinez",
    note: "Top 100 Lawyers of the Philippines",
  },
  {
    id: "member-2",
    name: "Atty. Anna C. Bermudez",
    note: "ALB Philippines Client Choice Lawyers 2021",
  },
  {
    id: "member-3",
    name: "Atty. Kalix Jace Martinez",
    note: "Commended External Counsel of the Year",
  },
];
