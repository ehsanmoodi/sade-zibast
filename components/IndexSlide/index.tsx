import Image from "next/image";
import Link from "next/link";
import type { IndexSlideProps } from "./types";

const IndexSlide: React.FC<IndexSlideProps> = ({ image, link, text }) => {
  return link ? (
    <Link href={link}>
      <a className="index-slide">
        <Image src={image.src} alt={image.alt} layout="fill" />
        {text && <div className="index-slide__text">{text}</div>}
      </a>
    </Link>
  ) : (
    <div className="index-slide">
      <Image src={image.src} alt={image.alt} layout="fill" />
      {text && <div className="index-slide__text">{text}</div>}
    </div>
  );
};

export default IndexSlide;
