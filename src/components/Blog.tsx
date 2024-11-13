import ArticleCard from "./Article-Card";

const Blog = () => {
  const articles = [
    {
      image: "/images/image-currency.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      summary:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    },
    {
      image: "/images/image-restaurant.jpg",
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      summary:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    },
    {
      image: "/images/image-plane.jpg",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      summary:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    },
    {
      image: "/images/image-confetti.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      summary:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite thorugh the site ...",
    },
  ];

  return (
    <section className="py-20 bg-very-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-8">Latest Articles</h2>
        <div className="flex flex-col md:flex-row my-10 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
