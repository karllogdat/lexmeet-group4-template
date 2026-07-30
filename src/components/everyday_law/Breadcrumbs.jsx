import { useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

function Crumb({ name, isLast }) {
  return (
    <>
      <span
        className={`g4-large-body ${isLast ? "text-g4-900" : "text-g4-700"}`}
      >
        {name}
      </span>
      {!isLast && <ChevronRight className="text-g4-700" />}
    </>
  );
}

export default function Breadcrumbs({ items }) {
  const location = useLocation();

  const crumbs = items || location.pathname.split("/").filter((item) => item);

  return (
    <div className="w-full flex items-center gap-2.5">
      <Crumb name="Home" isLast={crumbs.length === 0} />
      {crumbs.map((crumb, index) => (
        <Crumb name={crumb} isLast={index === crumbs.length - 1} key={index} />
      ))}
    </div>
  );
}
