import { NextPage } from "next";
import { PageTemplate } from "../../templates";

const About: NextPage = () => {
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
      <div></div>
    </PageTemplate>
  );
};

export default About;
