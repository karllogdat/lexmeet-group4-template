export default function AwardCard({ title, description, image }) {
  return (
    <div className="flex flex-col items-center text-center w-56 sm:w-64">
      {/* Image container — compact to match Figma proportions */}
      <div className="grid place-items-center h-36 w-full rounded-xl bg-[#EAF2F8] mb-4 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-20 w-20 object-contain"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-[#0F4C75]/20" />
        )}
      </div>
      <h3 className="font-playfair font-medium text-xl text-[#002E56] mb-1">{title}</h3>
      <p className="font-inter text-sm text-slate-600 leading-snug">{description}</p>
    </div>
  );
}
