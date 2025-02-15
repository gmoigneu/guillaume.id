import type { Metadata } from "next";
import { Head } from "nextra/components";
import type { FC, ReactNode } from "react";
import { NextraTheme } from "./_components/nextra-theme";
import { ViewTransitions } from "next-view-transitions";

import "../styles/tailwind.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s - guillaume.id",
  },
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en" dir="ltr" className="h-full antialiased" suppressHydrationWarning>
        <Head faviconGlyph="✦">
          <link rel="stylesheet" href="https://use.typekit.net/ziz5txe.css" />
        </Head>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
          <Providers>
            <NextraTheme>{children}</NextraTheme>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
