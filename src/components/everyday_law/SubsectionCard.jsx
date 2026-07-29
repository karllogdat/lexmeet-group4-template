import { ArrowRight } from "lucide-react";

import SubsectionImage from "../../assets/everyday-law/subsection-card.jpg";

export default function SubsectionCard({ type, blog }) {
  return (
    <div className="flex flex-col justify-between p-5 gap-4">
      <div className="flex flex-col gap-4">
        <h3 className="g4-heading-3 text-g4-900">{type}</h3>
        <img
          className="w-full h-72 object-cover shadow-g4-700 shadow-[8px_8px_0]"
          src={blog.image || SubsectionImage}
        />
        <h3 className="g4-heading-3 text-g4-900">{blog.title}</h3>
        <p className="g4-caption text-g4-600">
          {blog.author} • {blog.published_at.toDateString()} • 10 min read
        </p>
        <p className="g4-body text-truncate line-clamp-7">{blog.content}</p>
      </div>
      <div className="flex w-fit py-2 items-center justify-center gap-2.5 text-g4-700">
        <span className="g4-button">View All</span>
        <ArrowRight />
      </div>
    </div>
  );
}
