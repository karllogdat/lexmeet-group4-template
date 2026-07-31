import { useLocation, Link } from "react-router";
import { ChevronRight } from "lucide-react";

function Crumb({ name, to, isLast }) {
  return (
    <>
      <Link
        to={to ? to : "#"}
        className={`g4-large-body ${isLast ? "text-g4-900" : "text-g4-700"}`}
      >
        {name}
      </Link>
      {!isLast && <ChevronRight className="text-g4-700" />}
    </>
  );
}

export default function Breadcrumbs({ items }) {
  const location = useLocation();

  const crumbs = items;

  return (
    <div className="w-full flex items-center gap-2.5">
      <Crumb name="Home" to="/" isLast={crumbs.length === 0} />
      {crumbs.map((crumb, index) => (
        <Crumb
          name={crumb.name}
          to={crumb.to}
          isLast={index === crumbs.length - 1}
          key={index}
        />
      ))}
    </div>
  );
}
