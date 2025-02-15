import type { Folder } from "nextra";
import { version } from "nextra/package.json";
import type { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Link } from "next-view-transitions";

export const NextraTheme: FC<{
  children: ReactNode;
  pageMap: Folder[];
}> = ({ children, pageMap }) => {
  return (
    <>
      <h1 className="font-serif text-2xl font-semibold">
        <Link href="/">guillaume.id</Link>
      </h1>
      <Navbar pageMap={pageMap} />
      <div style={{ display: "flex" }}>{children}</div>
      <Footer />
    </>
  );
};
