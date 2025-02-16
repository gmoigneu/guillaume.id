import { generateStaticParamsFor, importPage } from "nextra/pages";
import { MDXWrapper } from "@/_components/MDXWrapper";
import { ArticleLayout } from "@/_components/ArticleLayout";

export async function generateStaticParams() {
  const paths = await generateStaticParamsFor("mdxPath");
  return paths;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

export default async function Page(props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;

  const contentType = params.mdxPath[0];

  if (contentType === "articles") {
    return (
      <ArticleLayout article={metadata}>
        <MDXWrapper toc={toc} metadata={metadata}>
          <MDXContent {...props} params={params} />
        </MDXWrapper>
      </ArticleLayout>
    );
  }

  return (
    <MDXWrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </MDXWrapper>
  );
}
