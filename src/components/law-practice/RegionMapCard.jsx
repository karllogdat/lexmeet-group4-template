export default function RegionMapCard({ label, image }) {
  return (
    <div className="relative rounded-lg bg-[#0F4C75] aspect-square overflow-hidden">
      <span className="absolute top-2 left-2 z-10 inline-block rounded bg-g4-50 px-2 py-1 text-xs font-semibold text-[#002E56]">
        {label}
      </span>
      {image ? (
        <img
          src={image}
          alt={`${label} region map`}
          className="absolute inset-0 h-full w-full object-contain p-4"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="h-16 w-16 rounded-full bg-[#89CFF1]/40 blur-md" />
        </div>
      )}
    </div>
  );
}
