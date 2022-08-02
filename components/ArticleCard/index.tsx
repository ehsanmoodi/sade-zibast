import Image from "next/image";
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
        <Image src={image.src} alt={image.alt} layout="fill" />
      </div>
      <div className="article-card__body">
        <Link href={href}>
          <a className="article-card__link">{title}</a>
        </Link>
        {date && <span className="article-card__date">{date}</span>}
      </div>
    </article>
  );
};

export default ArticleCard;
