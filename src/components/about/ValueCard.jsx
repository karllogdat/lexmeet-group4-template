import React from "react";

export default function ValueCard({ value, index }) {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`w-full flex items-center gap-4 lg:gap-10.5 ${
        isOdd ? "flex-row-reverse justify-end" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center p-6 lg:p-10 ${
          isOdd ? "rounded-full" : "rounded-full"
        } bg-g4-50`}
      >
        <img src={value.icon} alt="Logo" className="w-32 h-auto" />
      </div>

      <div
        className={`w-full flex flex-col gap-2 ${isOdd ? "text-right" : ""}`}
      >
        <p className="g4-large-body font-bold!">{value.title}</p>
        <p className="g4-body">{value.description}</p>
      </div>
    </div>
  );
}
