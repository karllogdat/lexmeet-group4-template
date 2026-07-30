export default function PracticeAreaTile({ label, image }) {
  return (
    <div className="relative flex flex-col gap-[10px] w-full pt-[27px] pr-[23px] pb-[27px] pl-[23px] rounded-[3px] bg-[#0F4C75]">
      <img
        src={image}
        alt={label}
        className="h-[35px] w-[35px] object-contain"
        style={{ filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(180deg) brightness(1.5)" }}
      />
      <span className="text-xl font-inter text-white">{label}</span>
    </div>
  );
}
