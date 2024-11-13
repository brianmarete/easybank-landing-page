const ArticleCard = ({
  image,
  author,
  title,
  summary,
}: {
  image: string;
  author: string;
  title: string;
  summary: string;
}) => {
  return (
    <div className="grid grid-rows-2 rounded-md shadow-md">
      <div className="overflow-hidden">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="flex-1 p-4 space-y-2 bg-white">
        <p className="text-xs text-grayish-blue">By {author}</p>
        <h3 className="text-lg leading-snug">{title}</h3>
        <p className="text-grayish-blue text-sm leading-snug">{summary}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
