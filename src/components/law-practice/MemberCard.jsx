// fluid=true  → w-full (fills flex-1 parent, used in both layouts)
// fluid=false → fixed pixel width (legacy fallback, not currently used)
export default function MemberCard({ name, note, active = false, photoSrc, fluid = false }) {
  return (
    <div
      className={`${fluid ? "w-full" : "w-44 sm:w-52"} rounded-xl overflow-hidden bg-white/5 transition-transform duration-300 ${active ? "scale-110 z-10 ring-2 ring-white" : "scale-100"
        }`}
    >
      <div className={`h-60 ${photoSrc ? "" : "bg-slate-400/40"}`}>
        {photoSrc && (
          <img src={photoSrc} alt={name} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="flex flex-col p-4 items-center">
        <p className="text-lg font-inter font-semibold text-white text-center">{name}</p>
        <p className="text-base font-inter text-g4-400 mt-1 leading-snug text-center">{note}</p>
      </div>
    </div>
  );
}
