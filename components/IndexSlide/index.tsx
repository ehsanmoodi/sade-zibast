import Image from "next/image";
import Link from "next/link";
import type { IndexSlideProps } from "./types";

const IndexSlide: React.FC<IndexSlideProps> = ({ image, link }) => {
  return link ? (
    <Link href={link}>
      <a className="index-slide">
        <Image src={image.src} alt={image.alt} layout="fill" />
      </a>
    </Link>
  ) : (
    <div className="index-slide">
      <Image src={image.src} alt={image.alt} layout="fill" />
    </div>
  );
};

export default IndexSlide;
