export default function RegionMapCard({ label }) {
  return (
    <div className="relative rounded-lg bg-[#0F4C75] aspect-square p-3">
      <span className="inline-block rounded bg-g4-50 px-2 py-1 text-xs font-semibold text-[#002E56]">
        {label}
      </span>
      {/* Placeholder silhouette — swap for the real regional map asset (SVG) once available. */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="h-16 w-16 rounded-full bg-[#89CFF1]/40 blur-md" />
      </div>
    </div>
  );
}
