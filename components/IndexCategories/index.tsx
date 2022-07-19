import ButtonLink from "../ButtonLink";
import Category from "../Category";
import { CategoryProps } from "../Category/types";
import IndexSection from "../IndexSection";

const categories: CategoryProps[] = [
  {
    id: 1,
    image: {
      src: "/categories/wedding.png",
      alt: "wedding",
    },
    href: "#",
    label: "جشن عروسی",
  },
  {
    id: 2,
    image: {
      src: "/categories/celebration.png",
      alt: "celebration",
    },
    href: "#",
    label: "مراسم و جشن‌ها",
  },
  {
    id: 3,
    image: {
      src: "/categories/birthday.png",
      alt: "birthday",
    },
    href: "#",
    label: "تولدها",
  },
  {
    id: 4,
    image: {
      src: "/categories/conferences.png",
      alt: "conferences",
    },
    href: "#",
    label: "همایش‌ها",
  },
  {
    id: 5,
    image: {
      src: "/categories/organization.png",
      alt: "organization",
    },
    href: "#",
    label: "رویدادهای سازمانی",
  },
];

const IndexCategories = () => {
  return (
    <IndexSection title="کارت دعوت برای...">
      <div className="index-categories">
        {categories.map((category) => (
          <Category
            key={category.id}
            image={category.image}
            href={category.href}
            label={category.label}
          />
        ))}
      </div>
      <div className="index-categories__action">
        <ButtonLink text="همین الان بساز" href="/panel/cards/create" />
      </div>
    </IndexSection>
  );
};

export default IndexCategories;
