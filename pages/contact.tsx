import { NextPage } from "next";
import Link from "next/link";
import { PageTemplate } from "../templates";

const Contact: NextPage = () => {
  return (
    <PageTemplate
      title="تماس با ما"
      metaTitle="تماس با ما"
      metaDescription="راه‌های تماس با پشتیبانی ساده زیباست را در این صفحه می‌توانید مشاهده کنید."
      breadcrumb={[
        {
          id: "home",
          label: "خانه",
          href: "/",
        },
        {
          id: "contact",
          label: "تماس با ما",
          href: "",
        },
      ]}
    >
      <div className="contact-page">
        <p>
          خوشحال میشیم بتونیم ملاقاتتون کنیم، اما در حال حاضر امکانش رو
          نداریم.از طریق ایمیل و چت پشتیبانی می تونید با ما در ارتباط باشید.
        </p>

        <ul className="contact-page__items">
          <li>
            <span>چت پشتیبانی</span>
            <Link href="tel:۰۹۱۲۰۵۴۸۵۶۲">۰۹۱۲۰۵۴۸۵۶۲</Link>
          </li>
          <li>
            <span>ایمیل پشتیبانی</span>
            <Link href="mailto:sadezibast@gmail.com">sadezibast@gmail.com</Link>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Contact;
