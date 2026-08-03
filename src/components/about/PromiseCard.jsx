import { CircleCheckBig } from "lucide-react";

export default function PromiseCard({ promise }) {
  return (
    <div className="flex justify-start items-center gap-2">
      <CircleCheckBig size={24} />
      <p className="g4-body">{promise}</p>
    </div>
  );
}
