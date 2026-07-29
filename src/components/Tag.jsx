export default function Tag({ name }) {
  return (
    <div className="py-1 px-4 bg-g4-400 border border-g4-900 rounded-full text-g4-900">
      <span className="g4-subcaption">{name}</span>
    </div>
  );
}
