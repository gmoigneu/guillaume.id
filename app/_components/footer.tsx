import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      Copyright © {new Date().getFullYear()}{" "}
      <a
        href="mailto:website@guillaume.id"
        className="text-accent font-semibold underline"
      >
        Guillaume Moigneu
      </a>
    </footer>
  );
};
