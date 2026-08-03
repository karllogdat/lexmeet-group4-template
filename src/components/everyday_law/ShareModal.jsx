import React, { useEffect } from "react";

export default function ShareModal({ isOpen, onClose, title, children }) {
  // Close the modal when the user presses the Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling while the modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blue-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all gap-4"
        onClick={(e) => e.stopPropagation()} // Stop click propagation to backdrop
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3">
          <h3 className="g4-heading-2 text-g4-900 border-b-4 border-g4-700">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 text-sm text-gray-500">{children}</div>

        {/* Footer Actions */}
        {/* <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert("Confirmed!");
              onClose();
            }}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Confirm
          </button>
        </div> */}
      </div>
    </div>
  );
}
