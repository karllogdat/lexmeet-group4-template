export default function CaseCard({ text }) {
  return (
    <div className="flex items-center w-full max-w-[336px] min-h-[120px] relative rounded-xl border border-slate-200 bg-white p-6 overflow-hidden">
      <p className="text-xl relative text-g4-900 font-medium leading-snug font-inter">{text}</p>
    </div>
  );
}
