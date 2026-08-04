import Tag from "../Tag";

export default function PopularTags({ tags }) {
  return (
    <div className="flex flex-col w-full gap-4 p-2">
      <h3 className="g4-heading-3 text-g4-900">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag id={index} name={tag} />
        ))}
      </div>
    </div>
  );
}
