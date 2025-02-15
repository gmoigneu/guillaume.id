import { getArticles } from "../articles/get-articles";

const CONFIG = {
  title: "guillaume.id",
  siteUrl: "https://guillaume.id",
  description: "Latest articles",
  lang: "en-us",
};

export async function GET() {
  const allArticles = await getArticles();
  const articles = allArticles
    .map(
      (article) => `    <item>
        <title>${article.title}</title>
        <description>${article.frontMatter.description}</description>
        <link>${CONFIG.siteUrl}${article.route}</link>
        <pubDate>${new Date(article.frontMatter.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${CONFIG.title}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>${CONFIG.description}</description>
    <language>${CONFIG.lang}</language>
${articles}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
