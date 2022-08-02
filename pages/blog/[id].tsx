import { NextPage } from "next";
import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { ArticleCardProps } from "../../components/ArticleCard/types";
import { PageTemplate } from "../../templates";

const About: NextPage = () => {
  const [liked, setLiked] = useState(false);

  const relatedArticles: ArticleCardProps[] = [
    {
      id: 1,
      image: {
        src: "/temp/blog-single-1.png",
        alt: "",
      },
      title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
      date: "امروز / ۲ دقیقه پیش",
      href: "/blog/1",
    },
    {
      id: 2,
      image: {
        src: "/temp/blog-single-2.png",
        alt: "",
      },
      title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
      date: "امروز / ۲ دقیقه پیش",
      href: "/blog/1",
    },
  ];

  return (
    <PageTemplate
      title="۱۰ ایده ای ساده ولی خلاقانه برای ساختن کارت دعوت"
      metaTitle="۱۰ ایده ای ساده ولی خلاقانه برای ساختن کارت دعوت"
      metaDescription="مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو."
      withBg={false}
      breadcrumb={[
        {
          id: "home",
          label: "خانه",
          href: "/",
        },
        {
          id: "blog",
          label: "مقالات",
          href: "/blog",
        },
        {
          id: "single",
          label: "۱۰ ایده ای ساده ولی خلاقانه برای ساختن کارت دعوت",
          href: "",
        },
      ]}
    >
      <div className="blog-single">
        <div className="blog-single__feature">
          <img src="/temp/blog-single-feature.png" alt="blog feature image" />
          <div className="blog-single__feature__box">
            <span>امروز / ۲ دقیقه پیش</span>
            <button onClick={() => setLiked(!liked)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${liked ? "liked" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.711C12.689 4.905 13.881 4 15.696 4C18.871 4 21 6.98 21 9.755C21 15.556 13.778 20 12 20C10.222 20 3 15.556 3 9.755C3 6.98 5.129 4 8.304 4C10.119 4 11.311 4.905 12 5.711Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <p>
          مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی
          الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده
          است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این
          کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما
          گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید
          سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی
          راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.
        </p>
        <img src="/temp/blog-single-1.png" alt="" />
        <p>
          مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی
          الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده
          است. فقط باید سعی کنی از روی الگویی که ما گفتیم بری جلو.مدل ساختن این
          کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی الگویی که ما
          گفتیم بری جلو.
        </p>
        <img src="/temp/blog-single-2.png" alt="" />
        <p>
          مدل ساختن این کارت دعوت خیلی راحت و ساده است. فقط باید سعی کنی از روی
          الگویی که ما گفتیم بری جلو.مدل ساختن این کارت دعوت خیلی راحت و ساده
          است.
        </p>
      </div>

      <hr />

      <div className="blog-single-related">
        <h3 className="blog-single-related__title">مقالات مرتبط</h3>
        <div className="blog-single-related__list">
          {relatedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              image={{ src: article.image.src, alt: article.image.alt }}
              href={article.href}
              title={article.title}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;
