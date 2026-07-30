import { Star } from "lucide-react";
import { User } from "lucide-react";

/**
 * StarRating — renders filled + empty stars for a numeric rating (0–5).
 */
function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
      {half === 1 && (
        <Star key="h" size={14} className="text-yellow-400 fill-yellow-200" />
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} size={14} className="text-gray-300" />
      ))}
      <span className="ml-1 text-xs font-inter text-gray-500">({rating.toFixed(1)})</span>
    </div>
  );
}

/**
 * ReviewCard — individual review card matching Figma layout.
 */
function ReviewCard({ review }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-3 bg-white">
      {/* Reviewer header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-g4-50 border border-g4-200 flex items-center justify-center flex-shrink-0">
          <User size={20} className="text-g4-600" />
        </div>
        <div>
          <p className="font-inter font-semibold text-sm text-gray-900">{review.reviewer}</p>
          <StarRating rating={review.rating} />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Review text */}
      <p className="font-inter text-sm text-gray-700 leading-relaxed flex-1">
        {review.text}
      </p>

      {/* Timestamp */}
      <p className="font-inter text-xs text-gray-400 text-right">{review.timestamp}</p>
    </div>
  );
}

/**
 * RatingsFeedbackTab — scrollable 2-column grid of review cards.
 */
export default function RatingsFeedbackTab({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="p-6 text-center font-inter text-gray-500">
        No reviews yet.
      </div>
    );
  }

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
