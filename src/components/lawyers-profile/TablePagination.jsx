import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * TablePagination — prev / numbered-pages / next controls for the lawyers table.
 *
 * Props mirror the return value of usePagination() so the parent can spread them:
 *   currentPage  {number}
 *   totalPages   {number}
 *   hasPrevPage  {boolean}
 *   hasNextPage  {boolean}
 *   goToPage     {(page: number) => void}
 *   nextPage     {() => void}
 *   prevPage     {() => void}
 *
 * Hidden when there is only 1 page.
 */
export default function TablePagination({
  currentPage,
  totalPages,
  hasPrevPage,
  hasNextPage,
  goToPage,
  nextPage,
  prevPage,
}) {
  // Nothing to paginate — hide the controls entirely
  if (totalPages <= 1) return null;

  return (
    <div
      className="flex items-center justify-center gap-1.5 py-8 px-4 bg-white border-t border-gray-200"
      role="navigation"
      aria-label="Pagination"
    >
      {/* ← Previous */}
      <button
        type="button"
        id="lawyer-table-prev"
        onClick={prevPage}
        disabled={!hasPrevPage}
        aria-label="Go to previous page"
        className={[
          "flex items-center justify-center w-9 h-9 rounded-full transition-colors",
          hasPrevPage
            ? "bg-g4-700 text-white hover:bg-g4-900 active:scale-95"
            : "bg-gray-200 text-gray-400 cursor-not-allowed",
        ].join(" ")}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Numbered page buttons */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            id={`lawyer-table-page-${page}`}
            onClick={() => goToPage(page)}
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? "page" : undefined}
            className={[
              "w-9 h-9 flex items-center justify-center rounded-full font-inter text-sm transition-colors",
              isActive
                ? "bg-g4-700 text-white font-semibold"
                : "text-g4-700 hover:bg-g4-50 active:bg-g4-100",
            ].join(" ")}
          >
            {page}
          </button>
        );
      })}

      {/* → Next */}
      <button
        type="button"
        id="lawyer-table-next"
        onClick={nextPage}
        disabled={!hasNextPage}
        aria-label="Go to next page"
        className={[
          "flex items-center justify-center w-9 h-9 rounded-full transition-colors",
          hasNextPage
            ? "bg-g4-700 text-white hover:bg-g4-900 active:scale-95"
            : "bg-gray-200 text-gray-400 cursor-not-allowed",
        ].join(" ")}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
