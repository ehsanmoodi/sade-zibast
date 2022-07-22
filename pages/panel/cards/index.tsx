import { withIronSessionSsr } from "iron-session/next";
import type { NextPage } from "next";

import { InvitationCard, NewInvitationCard } from "../../../components";
import fetchJson, { initGetRequest } from "../../../lib/fetchJson";
import { sessionOptions } from "../../../lib/session";
import { PanelTemplate } from "../../../templates";
import { endPoints } from "../../../utils/endpoints";

import type { CardsList } from "./types";

const Cards: NextPage<{ token: string; serverResponse: CardsList }> = ({
  serverResponse,
}) => {
  return (
    <PanelTemplate
      title="کارت‌های دعوت"
      metaTitle="کارت‌های من"
      metaDescription="در صفحه اصلی پنل کاربری ساده زیباست می‌توانید کارتهای خود را مدیریت کنید"
    >
      <div className="cards">
        <NewInvitationCard />
        {serverResponse.data.items.map((item) => (
          <InvitationCard
            key={item.id}
            id={item.id}
            title={item.name}
            link={item.slug}
            paid={item.paid}
          />
        ))}
      </div>
    </PanelTemplate>
  );
};

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const sessionToken = req.session.token?.token;

    if (sessionToken === undefined) {
      res.setHeader("Location", "/login");
      res.statusCode = 302;
      res.end();

      return {
        props: {
          token: "",
        },
      };
    }

    let response: any = await fetchJson(
      endPoints.cards + "?per_page=50",
      initGetRequest({ Authorization: `Bearer ${sessionToken}` })
    );

    return {
      props: {
        token: sessionToken,
        serverResponse: response,
      },
    };
  },
  sessionOptions
);

export default Cards;
