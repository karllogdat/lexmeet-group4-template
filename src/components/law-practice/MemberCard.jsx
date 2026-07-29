export default function MemberCard({ name, note, active = false, photoSrc }) {
  return (
    <div
      className={`w-70 rounded-xl overflow-hidden bg-white/5 ${active ? "ring-2 ring-white" : ""
        }`}
    >
      <div className="h-60 bg-slate-400/40">
        {photoSrc && (
          <img src={photoSrc} alt={name} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="p-3 flex flex-col p-8 items-center">
        <p className="text-lg font-inter font-semibold text-white text-center">{name}</p>
        <p className="text-base font-inter text-[#89CFF1] mt-1 leading-snug text-center">{note}</p>
      </div>
    </div>
  );
}
