import { withIronSessionSsr } from "iron-session/next";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { InvitationCard, NewInvitationCard } from "../../../components";
import fetchJson, { initGetRequest } from "../../../lib/fetchJson";
import { sessionOptions } from "../../../lib/session";
import { PanelTemplate } from "../../../templates";
import { Alert } from "../../../utils/alert";
import { endPoints } from "../../../utils/endpoints";
import { messages } from "../../../utils/messages";

import type { CardsList } from "./types";

const Cards: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ serverResponse, hostname }) => {
  const router = useRouter();

  useEffect(() => {
    if (serverResponse?.data.items.length === 0) {
      Alert.fire({
        text: messages.noCards,
        icon: "info",
        confirmButtonText: "ایجاد کارت جدید",
      }).then((sweetAlertResult) => {
        if (sweetAlertResult.isConfirmed) {
          router.push("/panel/cards/create");
        }

        return;
      });
    }
  }, []);

  return (
    <PanelTemplate
      title="کارت‌های دعوت"
      metaTitle="کارت‌های من"
      metaDescription="در صفحه اصلی پنل کاربری ساده زیباست می‌توانید کارتهای خود را مدیریت کنید"
    >
      <div className="cards">
        <NewInvitationCard />
        {serverResponse?.data.items.length !== 0 &&
          serverResponse?.data.items.map((item) => (
            <InvitationCard
              key={item.id}
              id={item.id}
              title={item.name}
              link={`${item.slug}.${hostname}`}
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
    const hostname = req.headers.host ?? "";

    if (sessionToken === undefined) {
      res.setHeader("Location", "/login");
      res.statusCode = 302;
      res.end();

      return {
        props: {
          token: "",
          serverResponse: emptyResponse,
          hostname: "",
        },
      };
    }

    const response: CardsList = await fetchJson(
      endPoints.cards + "?per_page=50",
      initGetRequest({ Authorization: `Bearer ${sessionToken}` })
    );

    return {
      props: {
        token: sessionToken,
        serverResponse: response,
        hostname,
      },
    };
  },
  sessionOptions
);

export default Cards;

const emptyResponse = {
  data: {
    status: 302,
    success: false,
    meta: {
      totalCount: 0,
      pageCount: 0,
      currentPage: 0,
      perPage: 0,
    },
    links: {
      self: {
        href: "",
      },
      first: {
        href: "",
      },
      last: {
        href: "",
      },
    },
    items: [
      {
        name: "",
        date: "",
        slug: "",
        price: 0,
        paid: false,
        status: 4,
        id: "",
        expired: false,
      },
    ],
  },
};
