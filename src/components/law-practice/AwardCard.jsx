import { IconAward, IconQuote } from "@tabler/icons-react";

export default function AwardCard({ type, title, description }) {
  const Icon = type === "citation" ? IconQuote : IconAward;

  return (
    <div className="flex flex-col items-center text-center w-64">
      <div className="grid place-items-center h-40 w-full rounded-xl bg-[#EAF2F8] mb-4">
        <Icon size={48} stroke={1.5} className="text-[#0F4C75]" />
      </div>
      <h3 className="font-serif text-xl text-[#002E56] mb-1">{title}</h3>
      <p className="font-inter text-sm text-slate-600 leading-snug">{description}</p>
    </div>
  );
}
