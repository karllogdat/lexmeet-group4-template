import { useState } from "react";

export default function ShareLink() {
  const [copied, setCopied] = useState(false);

  const shareLink = window.location.href;

  const handleCopy = async (e) => {
    e.target.select();

    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        readOnly
        value={shareLink}
        onClick={handleCopy}
        className="g4-caption w-full rounded-lg bg-slate-300 text-slate-500 px-4 py-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-g4-500"
      />

      {copied && (
        <p className="g4-subcaption text-slate-300">
          Link copied to clipboard!
        </p>
      )}
    </div>
  );
}
