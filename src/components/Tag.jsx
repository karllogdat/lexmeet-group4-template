export default function Tag({ name }) {
  return (
    <div className="py-0.5 px-3 bg-g4-400 border border-g4-900 rounded-full text-g4-900">
      <span className="g4-subcaption">{name}</span>
    </div>
  );
}
