import type { NextPage } from "next";
import { InvitationCard, NewInvitationCard } from "../../components";
import { InvitationCardProps } from "../../components/InvitationCard/types";
import { PanelTemplate } from "../../templates";

interface CardsPageProps {
  data: InvitationCardProps[];
}

const Cards: NextPage<CardsPageProps> = ({ data }) => {
  return (
    <PanelTemplate
      title="کارت‌های دعوت"
      metaTitle="کارت‌های من"
      metaDescription="در صفحه اصلی پنل کاربری ساده زیباست می‌توانید کارتهای خود را مدیریت کنید"
    >
      <div className="cards">
        <NewInvitationCard />
        {data.map((item) => (
          <InvitationCard
            key={item.id}
            id={item.id}
            title={item.title}
            link={item.link}
            active={item.active}
          />
        ))}
      </div>
    </PanelTemplate>
  );
};

export const getServerSideProps = () => {
  const cards: InvitationCardProps[] = [
    {
      id: 1,
      title: "کارت دعوت عروسی سرور و مشتاق",
      link: "smwedding.sadehzibast.ir",
      active: false,
    },
    {
      id: 2,
      title: "کارت دعوت عروسی سرور و مشتاق",
      link: "smwedding.sadehzibast.ir",
      active: true,
    },
    {
      id: 3,
      title: "کارت دعوت عروسی سرور و مشتاق",
      link: "smwedding.sadehzibast.ir",
      active: true,
    },
    {
      id: 4,
      title: "کارت دعوت عروسی سرور و مشتاق",
      link: "smwedding.sadehzibast.ir",
      active: false,
    },
  ];

  return {
    props: { data: cards },
  };
};

export default Cards;
