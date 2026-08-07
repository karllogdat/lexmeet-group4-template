import { ChevronLeft, ChevronRight } from "lucide-react";
import usePagination from "../../hooks/usePagination";
import BlogCard from "./BlogCard";
import { useEffect } from "react";

export default function BlogPagination({ blogs = [], currentPage }) {
  const pagination = usePagination({
    totalItems: blogs.length,
    itemsPerPage: 3,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagination.currentPage]);

  const currentBlogs = blogs.slice(pagination.startIndex, pagination.endIndex);

  return (
    <>
      <div className="flex flex-col gap-6 ">
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            to={`${currentPage.to}/${blog.id}`}
          />
        ))}
      </div>

      <Pagination {...pagination} />
    </>
  );
}

function Pagination({ currentPage, totalPages, goToPage, nextPage, prevPage }) {
  return (
    <div className="flex items-center justify-center gap-2 text-white">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="flex items-center justify-center p-2 rounded-full bg-g4-700"
      >
        <ChevronLeft />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentPage === page ? "bg-g4-700 text-white" : "text-g4-700"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center p-2 rounded-full bg-g4-700"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
