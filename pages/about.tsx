import { NextPage } from "next";
import Link from "next/link";
import { PageTemplate } from "../templates";

const About: NextPage = () => {
  return (
    <PageTemplate
      title="درباره ما"
      metaTitle="درباره ما"
      metaDescription="ساده زیباست چیه؟"
      breadcrumb={[
        {
          id: "home",
          label: "خانه",
          href: "/",
        },
        {
          id: "about",
          label: "درباره ما",
          href: "",
        },
      ]}
    >
      <div className="about-page">
        <section className="about-page__section">
          <h2>ساده زیباست چیه؟</h2>
          <p>
            این روزا خیلی زندگیای تجملاتی آدما رو خسته کرده، همه دنبال یه سادگی
            می گردن. یه سادگی ای که هم قشنگ باشه، هم تجملی نباشه.
            <br />
            پس{" "}
            <Link href="/">
              <a>ساده زیباست</a>
            </Link>{" "}
            اومد که نشون بده علاوه بر اینکه میشه ساده بود، میشه قشنگم بود.
          </p>
        </section>

        <section className="about-page__section">
          <h2>ساده زیباست چیکار میکنه؟</h2>
          <p>
            با <Link href="/">ساده زیباست</Link> خیلی راحت می تونید انواع کارت
            های دعوت رو درست کنید، به اطرافیانتون هدیه بدید و کلی خوشحالشون
            کنید.
          </p>
        </section>

        <section className="about-page__section">
          <h2>مزیت های ساده زیباست چیه؟</h2>
          <p>
            <Link href="/">
              <a>ساده زیباست</a>
            </Link>{" "}
            چند تا مزیت داره که خیلی جذابه. اول اینکه بدون داشتن برنامه های پیدا
            کردن مسیر، میتونید مسیرتون رو از توی ساده زیباست راحت پیدا کنید. دوم
            اینکه می تونید هر عکسی که دلتون بخواد توی گالریش بذارید. سوم اینکه
            می تونید متن دلخواه خودتون رو توی کارتتون بنویسید و در آخر می تونید
            اون رویدادی که میخواید ،برای گوگل کلندر مهموناتون ارسال کنید تا
            براشون یادآوری بشه که کی و چه وقت قراره به مهمونی شما بیان.
          </p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default About;
