export default function PracticeAreaTile({ label, image }) {
  return (
    <div className="relative flex flex-col gap-2.5 w-full pt-6.75 pr-5.75 pb-6.75 pl-5.75 rounded-[3px] bg-[#0F4C75]">
      {/* Filter converts any opaque PNG to #89CFF1 (g4-400 = hsl(201,78%,74%)) */}
      <img
        src={image}
        alt={label}
        className="h-8.75 w-8.75 object-contain"

      />
      <span className="text-xl font-inter text-white">{label}</span>
    </div>
  );
}
