import Link from "next/link";

import type { CategoryProps } from "./types";

const Category: React.FC<CategoryProps> = ({ image, href, label }) => {
  return (
    <Link href={href}>
      <a className="category">
        <img
          className="category__image"
          src={image.src}
          alt={image.alt ?? ""}
        />
        <span className="category__label">{label}</span>
      </a>
    </Link>
  );
};

export default Category;
