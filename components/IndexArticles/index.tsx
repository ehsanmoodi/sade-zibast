import ArticleCard from "../ArticleCard";
import { ArticleCardProps } from "../ArticleCard/types";
import ButtonLink from "../ButtonLink";
import IndexSection from "../IndexSection";

const articles: ArticleCardProps[] = [
  {
    id: 1,
    image: {
      src: "https://picsum.photos/600/400?random=1",
      alt: "",
    },
    title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
    date: "امروز / ۲ دقیقه پیش",
    href: "/blog/1",
  },
  {
    id: 2,
    image: {
      src: "https://picsum.photos/600/400?random=2",
      alt: "",
    },
    title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
    date: "امروز / ۲ دقیقه پیش",
    href: "/blog/1",
  },
  {
    id: 3,
    image: {
      src: "https://picsum.photos/600/400?random=3",
      alt: "",
    },
    title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
    date: "امروز / ۲ دقیقه پیش",
    href: "/blog/1",
  },
];

const IndexArticles = () => {
  return (
    <IndexSection title="آخرین خواندنی‌ها">
      <div className="index-articles">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={{ src: article.image.src, alt: article.image.alt }}
            href={article.href}
            title={article.title}
            date={article.date}
          />
        ))}
      </div>
      <div className="index-articles__action">
        <ButtonLink text="مشاهده همه مطالب" href="/blog" mode="light" />
      </div>
    </IndexSection>
  );
};

export default IndexArticles;
