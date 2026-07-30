import { ArrowRight } from "lucide-react";
import LatestBlogImage from "../../assets/everyday-law/latest-blog.jpg";
import { useNavigate } from "react-router";

export default function LatestBlog({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-fit gap-8">
      <img
        className="w-1/2 object-cover aspect-4/3"
        src={blog.image || LatestBlogImage}
      />
      <div className="w-1/2 h-full flex flex-col justify-center gap-2.5">
        <h3 className="g4-heading-3 text-g4-900">{blog.title}</h3>
        <p className="g4-large-body text-g4-600">
          {blog.author} • {blog.published_at.toDateString()}
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
  );
}
