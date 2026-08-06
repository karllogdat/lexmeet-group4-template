import { ArrowRight } from "lucide-react";
import LatestBlogImage from "../../assets/everyday-law/latest-blog.jpg";
import { useNavigate } from "react-router";

export default function LatestBlog({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      <h2 className="w-fit g4-heading-2 text-g4-900 border-b-4 border-g4-700">
        Latest Blog
      </h2>
      <div className="flex flex-col lg:flex-row w-full h-fit items-center gap-8">
        <div className="relative lg:w-1/2">
          <img
            className="object-cover aspect-4/3"
            src={blog.image || LatestBlogImage}
          />
          <div className="absolute top-4 left-4 px-3 py-0.5 bg-g4-400 text-g4-900 border-1 border-g4-900 rounded-full">
            Featured
          </div>
        </div>

        <div className="lg:w-1/2 h-full flex flex-col justify-center gap-2.5">
          <h3 className="g4-heading-3 text-g4-900">{blog.title}</h3>
          <p className="g4-body text-g4-600">
            {blog.author} • {blog.published_at.toDateString()} •{" "}
            {blog.read_time} min read
          </p>
          <p className="line-clamp-7 text-truncate g4-body">{blog.content}</p>
          <button
            type="button"
            onClick={() => navigate("/everyday-law/blog")}
            className="cursor-pointer flex w-fit py-2 items-center justify-center gap-2.5 text-g4-700"
          >
            <span className="g4-button">Read More</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
