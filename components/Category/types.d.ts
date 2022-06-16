export interface CategoryProps {
  image: {
    src: string;
    alt?: string;
  };
  href: string;
  label: string;
  id?: string | number;
}
