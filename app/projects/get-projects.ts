import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getProjects() {
  const { directories } = normalizePages({
    list: await getPageMap("/projects"),
    route: "/projects",
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
  const projects = await getProjects();
  const tags = projects.flatMap((project) => project.frontMatter.tags);
  return tags;
}
