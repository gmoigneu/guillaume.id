import { importPage } from "nextra/pages";
import { MDXWrapper } from "@/_components/MDXWrapper";
import { ArticleLayout } from "@/_components/ArticleLayout";
import { getArticles } from "../get-articles";
import ArticlesIndex from "../ArticlesIndex";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    mdxPath: ["articles", article.route],
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;

  if (!params.mdxPath || params.mdxPath[0] === "articles") {
    return {
      metadata: {
        title: "Last articles",
        description: "Articles about infrastructure, development, sustainability, and AI",
      },
    };
  }

  const { metadata } = await importPage(["articles", params.mdxPath[0]]);
  return metadata;
}

export default async function Page(props) {
  const params = await props.params;

  if (!params.mdxPath || params.mdxPath[0] === "articles") {
    return <ArticlesIndex />;
  }

  const result = await importPage(["articles", params.mdxPath[0]]);
  const { default: MDXContent, toc, metadata } = result;

  return (
    <ArticleLayout article={metadata}>
      <MDXWrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </MDXWrapper>
    </ArticleLayout>
  );
}
