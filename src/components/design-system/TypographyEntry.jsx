export default function TypographyEntry({ name, children }) {
  return (
    <div className="flex flex-col">
      <p className="w-fit font-mono text-xs px-4 rounded-sm bg-slate-200 text-slate-500">
        {name}
      </p>
      {children}
    </div>
  );
}
