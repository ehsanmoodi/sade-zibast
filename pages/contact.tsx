import { NextPage } from "next";
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
      <div></div>
    </PageTemplate>
  );
};

export default Contact;
