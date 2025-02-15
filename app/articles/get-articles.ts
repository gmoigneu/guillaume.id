import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getArticles() {
  const { directories } = normalizePages({
    list: await getPageMap("/articles"),
    route: "/articles",
  });
  return directories
    .filter((post) => post.name !== "index")
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime(),
    );
}

export async function getTags() {
  const articles = await getArticles();
  const tags = articles.flatMap((article) => article.frontMatter.tags);
  return tags;
}
