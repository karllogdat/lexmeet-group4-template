export default function PracticeAreaTile({ label, icon: Icon, badge }) {
  return (
    <div className="relative flex flex-col gap-[10px] w-[246px] h-[128px] pt-[27px] pr-[23px] pb-[27px] pl-[23px] rounded-[3px] bg-[#0F4C75]">
      <Icon size={35} stroke={1.75} className="text-[#89CFF1]" />
      <span className="text-xl font-inter text-white">{label}</span>
    </div>
  );
}
