import Link from "next/link";
import type { ArticleCardProps } from "./types";

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  date,
  href,
}) => {
  return (
    <article className="article-card">
      <div className="article-card__image">
        <img src={image.src} alt={image.alt ?? ""} />
      </div>
      <Link href={href}>
        <a className="article-card__link">{title}</a>
      </Link>
      <span className="article-card__date">{date}</span>
    </article>
  );
};

export default ArticleCard;
