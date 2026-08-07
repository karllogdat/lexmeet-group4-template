import BlogCard from "../../components/everyday_law/BlogCard";
import Breadcrumbs from "../../components/everyday_law/Breadcrumbs";
import IconButton from "../../components/IconButton";
import { ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router";

import {
  blogsSamples,
  latestBlogSample,
} from "../../components/everyday_law/EverydayLawMainData";
import { useEffect, useState } from "react";
import BlogPagination from "../../components/everyday_law/BlogPagination";

export default function BlogList({ type }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState({ name: "Unknown", to: "/" });
  useEffect(() => {
    switch (type) {
      case "everyday_law":
        setCurrentPage({
          name: "Everyday Law",
          to: "/everyday-law/everyday-law-blog-list",
        });
        break;
      case "law_updates":
        setCurrentPage({
          name: "Law Updates",
          to: "/everyday-law/law-updates-blog-list",
        });
        break;
      case "lawyers_blog":
        setCurrentPage({
          name: "Lawyers Blog",
          to: "/everyday-law/lawyers-blog-list",
        });
        break;
    }
  }, [type]);

  const crumbs = [{ name: "Everyday Law", to: "/everyday-law" }, currentPage];

  const blogs = blogsSamples;

  return (
    <div className="flex flex-col gap-8 p-6 lg:px-20">
      <Breadcrumbs items={crumbs} />

      {/* Search input */}
      <div className="flex w-full items-center gap-2.5">
        <div
          onClick={() => navigate("/everyday-law")}
          className="flex items-center justify-center w-13 h-13 bg-g4-700 rounded-[10px] shrink-0"
        >
          <ChevronLeft size={20} className="text-white" />
        </div>
        <div className="flex items-center justify-center w-13 h-13 bg-g4-700 rounded-[10px] shrink-0">
          <Search size={20} className="text-white" />
        </div>
        <input
          id="lawyers-search"
          type="search"
          placeholder="Search blog posts..."
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 h-13 px-4 border bg-white border-g4-700 rounded-lg font-inter text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-g4-600 focus:border-transparent"
          aria-label="Search blog posts"
        />
      </div>

      <h1 className="w-full font-bold text-center g4-heading-1 text-g4-900">
        Everyday Law
      </h1>

      <div className="flex flex-col gap-6">
        <BlogPagination blogs={blogs} />
      </div>
    </div>
  );
}
