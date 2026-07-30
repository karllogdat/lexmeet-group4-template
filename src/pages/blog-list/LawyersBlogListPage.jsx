import BlogCard from "../../components/everyday_law/BlogCard";
import Breadcrumbs from "../../components/everyday_law/Breadcrumbs";
import IconButton from "../../components/IconButton";
import { ArrowLeft, ArrowRight, ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router";

import { latestBlogSample } from "../../components/everyday_law/EverydayLawMainData";

export default function LawyersBlogListPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 p-8 lg:p-20">
      <Breadcrumbs />

      <div className="flex w-full h-shrink gap-2.5">
        <button type="button" onClick={() => navigate("/everyday-law")}>
          <IconButton>
            <ChevronLeft />
          </IconButton>
        </button>
        <IconButton>
          <Search />
        </IconButton>
        {/* Search bar not working yet */}
        <div className="w-full h-13 rounded-lg border border-g4-700"></div>
      </div>

      <h1 className="w-full text-center g4-heading-1 text-g4-900">
        Lawyers Blog
      </h1>

      <div className="flex flex-col gap-6">
        <BlogCard blog={latestBlogSample} />
        <BlogCard blog={latestBlogSample} />
        <BlogCard blog={latestBlogSample} />
      </div>

      <div className="flex w-full p-2.5 gap-2.5 g4-large-body justify-end">
        <div className="flex items-center justify-center w-13 h-13 rounded-full bg-g4-700 p-2.5 text-white">
          <ArrowLeft />
        </div>
        <div className="flex items-center justify-center w-13 h-13 rounded-full bg-g4-700 p-2.5 text-white">
          1
        </div>
        <div className="flex items-center justify-center w-13 h-13 rounded-full p-2.5 text-g4-700">
          2
        </div>
        <div className="flex items-center justify-center w-13 h-13 rounded-full p-2.5 text-g4-700">
          3
        </div>
        <div className="flex items-center justify-center w-13 h-13 rounded-full bg-g4-700 p-2.5 text-white">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
