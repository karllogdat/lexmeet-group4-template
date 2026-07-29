import { IconQuote } from "@tabler/icons-react";

export default function CaseCard({ text }) {
  return (
    <div className="flex items-center w-[336px] h-[150px] relative rounded-xl border border-slate-200 bg-white p-6 overflow-hidden ">
      <p className="text-xl relative text-g4-900 font-medium leading-snug font-inter">{text}</p>
    </div>
  );
}
