import { Meta, Page, PageMapItem } from "nextra";

export type TopLevelPage = PageMapItem & {
  name: string;
  route: string;
  title: string;
};
