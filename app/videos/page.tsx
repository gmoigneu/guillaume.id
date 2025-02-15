import Link from "next/link";
import { PostCard } from "nextra-theme-blog";
import { getVideos, getTags } from "./get-videos";

export const metadata = {
  title: "Videos",
};

export default async function PostsPage() {
  const tags = await getTags();
  const videos = await getVideos();
  const allTags = Object.create(null);

  for (const tag of tags) {
    allTags[tag] ??= 0;
    allTags[tag] += 1;
  }
  return (
    <div data-pagefind-ignore="all">
      <h1>{metadata.title}</h1>
      <div
        className="not-prose"
        style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}
      >
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag}
          </Link>
        ))}
      </div>
      {videos.map((video) => (
        <PostCard key={video.route} post={video} />
      ))}
    </div>
  );
}
