export default function Button({ children }) {
  return (
    <div className="flex items-center gap-2 w-fit px-8 py-4 bg-g4-700 text-white g4-button rounded-lg cursor-pointer">
      {children}
    </div>
  );
}
