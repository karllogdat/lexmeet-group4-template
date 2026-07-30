export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 w-fit px-8 py-4 bg-g4-700 text-white g4-button rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
}
