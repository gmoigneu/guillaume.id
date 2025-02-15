import type { FC } from "react";
import { Folder, PageMapItem } from "nextra";
import { Link } from "next-view-transitions";

export const Navbar: FC<{ pageMap: Folder[] }> = ({ pageMap }) => {
  const list = pageMap.filter((item) => item.route !== "/");

  return (
    <ul className="flex flex-row gap-4">
      {list.map((item) => {
        const route = item.route || ("href" in item ? item.href! : "");
        return (
          <li key={item.name}>
            <Link href={route} className="capitalize">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
