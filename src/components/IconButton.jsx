export default function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-shrink h-shrink p-3.5 bg-g4-700 hover:bg-g4-500 text-white rounded-lg transition-colors transiiton-300"
    >
      {children}
    </button>
  );
}
