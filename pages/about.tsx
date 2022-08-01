import { NextPage } from "next";
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
      <div></div>
    </PageTemplate>
  );
};

export default About;
