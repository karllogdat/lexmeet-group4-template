import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function BlogCard({ blog, to }) {
  const navigate = useNavigate();

  return (
    <div className="lg:w-full h-fit flex flex-col lg:flex-row gap-8 p-4 bg-linear-to-b lg:bg-linear-to-r from-g4-900/20 to-white/20 to-42% rounded-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="lg:w-1/3 aspect-4/3 shadow-g4-700 shadow-[8px_8px_0]"
      />
      <div className="flex flex-col gap-2.5">
        <h3 className="g4-heading-3 text-g4-900">{blog.title}</h3>
        <p className="g4-caption text-g4-600">
          {blog.author} • {blog.published_at.toDateString()} • 10 min read
        </p>
        <hr className="border border-g4-900" />
        <p className="g4-body text-g4-900 text-truncate line-clamp-4">
          {blog.content}
        </p>
        <button
          type="button"
          onClick={() => navigate(to ? to : "/everyday-law/blog")}
          className="cursor pointer flex w-fit py-2 items-center justify-center gap-2.5 text-g4-700"
        >
          <span className="g4-button">Read More</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
