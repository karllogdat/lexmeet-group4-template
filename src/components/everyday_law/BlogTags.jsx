import Tag from "../Tag";

export default function BlogTags({ tags }) {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
    </div>
  );
}
