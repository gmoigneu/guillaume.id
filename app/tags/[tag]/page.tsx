import { PostCard } from "nextra-theme-blog";
import { getArticles, getTags } from "../../articles/get-articles";

export async function generateMetadata(props) {
  const params = await props.params;
  return {
    title: `Posts Tagged with “${decodeURIComponent(params.tag)}”`,
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();
  return [...new Set(allTags)].map((tag) => ({ tag }));
}

export default async function TagPage(props) {
  const params = await props.params;
  const { title } = await generateMetadata({ params });
  const articles = await getArticles();
  return (
    <>
      <h1>{title}</h1>
      {articles
        .filter((article) =>
          article.frontMatter.tags.includes(decodeURIComponent(params.tag)),
        )
        .map((article) => (
          <PostCard key={article.route} post={article} />
        ))}
    </>
  );
}
