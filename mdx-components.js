import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";
import { TOC } from "./app/_components/toc";

const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <>
        <div>{children}</div>
        {toc.length > 0 && <TOC toc={toc} />}
      </>
    );
  },
});

export const useMDXComponents = (components) => ({
  ...defaultComponents,
  ...components,
});
