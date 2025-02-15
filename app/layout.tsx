import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { FC, ReactNode } from "react";
import { NextraTheme } from "./_components/nextra-theme";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import { Folder } from "nextra";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s - guillaume.id",
  },
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <ViewTransitions>
      <html lang="en" dir="ltr">
        <Head faviconGlyph="✦">
          <link rel="stylesheet" href="https://use.typekit.net/ziz5txe.css" />
        </Head>
        <body>
          <NextraTheme pageMap={pageMap as Folder[]}>{children}</NextraTheme>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
