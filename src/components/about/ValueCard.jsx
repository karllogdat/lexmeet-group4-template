import React from "react";

export default function ValueCard({ value, index }) {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`w-full flex items-center gap-10.5 ${
        isOdd ? "flex-row-reverse justify-end" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center p-8 lg:p-16 ${
          isOdd
            ? "lg:pr-8 rounded-tl-full rounded-bl-full"
            : "lg:pl-8 rounded-tr-full rounded-br-full"
        } bg-g4-50`}
      >
        <img src={value.icon} alt="Logo" className="w-32 h-auto" />
      </div>

      <div
        className={`w-full flex flex-col gap-4 ${isOdd ? "text-right pl-4" : ""}`}
      >
        <p className="g4-large-body font-bold!">{value.title}</p>
        <p className="g4-body">{value.description}</p>
      </div>
    </div>
  );
}
