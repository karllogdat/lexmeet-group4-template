export default function AwardCard({ title, description, image }) {
  return (
    <div className="flex flex-col items-center text-center w-64">
      <div className="grid place-items-center h-40 w-full rounded-xl bg-[#EAF2F8] mb-4 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-[#0F4C75]/20" />
        )}
      </div>
      <h3 className="font-serif text-xl text-[#002E56] mb-1">{title}</h3>
      <p className="font-inter text-sm text-slate-600 leading-snug">{description}</p>
    </div>
  );
}
