import { useMDXComponents } from "../../mdx-components";
import { ReactNode } from "react";
import { Heading } from "nextra";
import { Metadata } from "next";

interface Props {
  children: ReactNode;
  toc: Heading[];
  metadata: Metadata;
}

export function MDXWrapper({ children, toc, metadata }: Props) {
  const { wrapper: Wrapper } = useMDXComponents();
  return <Wrapper toc={toc} metadata={metadata}>{children}</Wrapper>;
} 