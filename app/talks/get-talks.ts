import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getTalks() {
  const { directories } = normalizePages({
    list: await getPageMap("/talks"),
    route: "/talks",
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
  const talks = await getTalks();
  const tags = talks.flatMap((talk) => talk.frontMatter.tags);
  return tags;
}
