import { CircleCheckBig } from "lucide-react";

export default function PromiseCard({ promise }) {
  return (
    <div className="flex items-center gap-2.5">
      <CircleCheckBig />
      <p className="">{promise}</p>
    </div>
  );
}
