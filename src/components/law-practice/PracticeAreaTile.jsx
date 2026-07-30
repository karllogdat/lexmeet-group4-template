export default function PracticeAreaTile({ label, image }) {
  return (
    <div className="relative flex flex-col gap-[10px] w-full pt-[27px] pr-[23px] pb-[27px] pl-[23px] rounded-[3px] bg-[#0F4C75]">
      {/* Filter converts any opaque PNG to #89CFF1 (g4-400 = hsl(201,78%,74%)) */}
      <img
        src={image}
        alt={label}
        className="h-[35px] w-[35px] object-contain"

      />
      <span className="text-xl font-inter text-white">{label}</span>
    </div>
  );
}
