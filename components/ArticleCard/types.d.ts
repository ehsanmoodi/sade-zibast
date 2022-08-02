export interface ArticleCardProps {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  date?: string;
  href: string;
  id?: string | number;
}
