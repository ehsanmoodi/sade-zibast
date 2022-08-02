import { Tab } from "@headlessui/react";
import { NextPage } from "next";
import { useState } from "react";
import { Button, Input } from "../../components";
import ArticleCard from "../../components/ArticleCard";
import { ArticleCardProps } from "../../components/ArticleCard/types";
import { Search } from "../../icons";
import { PageTemplate } from "../../templates";

const About: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const latestArticles: ArticleCardProps[] = [
    {
      id: 1,
      image: {
        src: "/temp/blog-single-feature.png",
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
    {
      id: 3,
      image: {
        src: "/temp/blog-single-1.png",
        alt: "",
      },
      title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
      date: "امروز / ۲ دقیقه پیش",
      href: "/blog/1",
    },
    {
      id: 4,
      image: {
        src: "/temp/blog-single-2.png",
        alt: "",
      },
      title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
      date: "امروز / ۲ دقیقه پیش",
      href: "/blog/1",
    },
  ];

  const popularArticles: ArticleCardProps[] = [
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
    {
      id: 3,
      image: {
        src: "/temp/blog-single-1.png",
        alt: "",
      },
      title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
      date: "امروز / ۲ دقیقه پیش",
      href: "/blog/1",
    },
    {
      id: 4,
      image: {
        src: "/temp/blog-single-2.png",
        alt: "",
      },
      title: "۱۰ ایده ی ساده ولی خلاقانه برای ساخت کارت دعوت",
      date: "امروز / ۲ دقیقه پیش",
      href: "/blog/1",
    },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <PageTemplate
      title="مقالات"
      metaTitle="مقالات"
      metaDescription="مقالات ساده زیباست"
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
          href: "",
        },
      ]}
    >
      <div className="blog">
        <Input
          id="searchQuery"
          type="text"
          label="جستجو در بین مقالات..."
          value={searchQuery}
          extra={<Search />}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <div className="blog__video"></div>

        <Tab.Group as="div" className="blog__content">
          <Tab.List className="blog__content__tabs">
            <Tab
              className={({ selected }) =>
                classNames(selected ? "selected" : "")
              }
            >
              جدیدترین‌ها
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(selected ? "selected" : "")
              }
            >
              پربازدید‌ترین‌ها
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="blog__content__list">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  image={{ src: article.image.src, alt: article.image.alt }}
                  href={article.href}
                  title={article.title}
                  date={article.date}
                />
              ))}

              <div className="blog__content__list__action">
                <Button mode="white">مشاهده همه مطالب</Button>
              </div>
            </Tab.Panel>
            <Tab.Panel className="blog__content__list">
              {popularArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  image={{ src: article.image.src, alt: article.image.alt }}
                  href={article.href}
                  title={article.title}
                  date={article.date}
                />
              ))}

              <div className="blog__content__list__action">
                <Button mode="white">مشاهده همه مطالب</Button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </PageTemplate>
  );
};

export default About;
