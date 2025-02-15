import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getVideos() {
  const { directories } = normalizePages({
    list: await getPageMap("/videos"),
    route: "/videos",
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
  const videos = await getVideos();
  const tags = videos.flatMap((article) => article.frontMatter.tags);
  return tags;
}
