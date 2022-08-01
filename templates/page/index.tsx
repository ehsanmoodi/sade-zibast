import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MainFooter, MainHeader } from "../../components";
import pagePatternBg from "../../public/page-pattern-bg.png";

interface Props {
  metaTitle: string;
  metaDescription: string;
  title: string;
  withBg?: boolean;
  breadcrumb: {
    id: string;
    label: string;
    href: string;
  }[];
  children?: JSX.Element[] | JSX.Element;
}

const PageTemplate: React.FC<Props> = ({
  metaTitle,
  metaDescription,
  title,
  withBg = true,
  breadcrumb,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <div className="page">
        <MainHeader />

        <div className="page__content">
          <ul className="page__content__breadcrumb">
            {breadcrumb.map((item) => (
              <li key={item.id}>
                {item.href !== "" ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>

          <h1>{title}</h1>

          {children}
        </div>

        {withBg && (
          <div className="page__bg">
            <Image src={pagePatternBg} placeholder="blur" />
          </div>
        )}
        <MainFooter />
      </div>
    </>
  );
};

export default PageTemplate;
