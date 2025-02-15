import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";
import { TOC } from "./app/_components/toc";
import { JSX, ReactNode } from "react";
import { Heading } from "nextra";

interface WrapperProps {
  children: ReactNode;
  toc: Heading[];
}

interface MDXComponents {
  wrapper: (props: WrapperProps) => JSX.Element;
}

const defaultComponents = getNextraComponents({
  wrapper: function MDXWrapper({ children, toc }: WrapperProps) {
    return (
      <>
        <div>{children}</div>
        {toc.length > 0 && <TOC toc={toc} />}
      </>
    );
  },
});

export const useMDXComponents = (components?: Partial<MDXComponents>): MDXComponents => ({
  ...defaultComponents,
  ...components,
}); 