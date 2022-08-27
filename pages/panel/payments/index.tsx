import { withIronSessionSsr } from "iron-session/next";
import moment from "jalali-moment";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { PaymentCard } from "../../../components";
import { PaymentCardProps } from "../../../components/PaymentCard/types";
import fetchJson, { initGetRequest } from "../../../lib/fetchJson";

import { sessionOptions } from "../../../lib/session";
import { PanelTemplate } from "../../../templates";
import { endPoints } from "../../../utils/endpoints";
import { messages } from "../../../utils/messages";
import { PaymentsList } from "./types";

interface PaymentPageProps {
  data: PaymentCardProps[];
}

const Payments: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ serverResponse }) => {
  useEffect(() => {
    if (serverResponse?.data.items.length === 0) {
      toast.info(messages.noPayments, { autoClose: 10000 });
    }
  }, []);

  return (
    <PanelTemplate
      title="تاریخچه پرداخت‌ها"
      metaTitle="تاریخچه پرداخت‌ها"
      metaDescription="در صفحه پرداخت‌های ساده زیباست می‌توانید تاریخچه پرداخت‌های خود را ببینید"
    >
      <div className="payments">
        {serverResponse?.data.items.length !== 0 &&
          serverResponse?.data.items.map((payment) => (
            <PaymentCard
              key={payment.id}
              id={payment.id}
              date={moment(payment.created_at.jalali).format("YYYY/MM/DD")}
              price={payment.price}
              trackingCode={payment.tracking_code}
              gateway={payment.provider_name}
              paid={payment.paid}
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
          serverResponse: emptyResponse,
        },
      };
    }

    const response: PaymentsList = await fetchJson(
      endPoints.payments + "?per_page=50",
      initGetRequest({ Authorization: `Bearer ${sessionToken}` })
    );

    return {
      props: { serverResponse: response },
    };
  },
  sessionOptions
);

export default Payments;

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
        code: -1,
        created_at: {
          gregorian: "",
          jalali: "",
          timestamp: -1,
          tz: "",
        },
        entity_id: "",
        id: "",
        paid: false,
        price: 0,
        provider_name: "",
        tracking_code: null,
        type: -1,
      },
    ],
  },
};
