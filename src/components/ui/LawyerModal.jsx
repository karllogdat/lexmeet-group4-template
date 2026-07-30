import { useEffect } from "react";
import { X } from "lucide-react";

/**
 * Generic modal shell used by LawyerProfileModal.
 * Traps scroll on <body> while open; closes on backdrop click or X button.
 */
export default function LawyerModal({ isOpen, onClose, children }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Panel — stop click propagation so clicking inside doesn't close */}
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-1 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={22} />
        </button>

        {children}
      </div>
    </div>
  );
}
