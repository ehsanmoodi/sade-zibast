import { withIronSessionSsr } from "iron-session/next";
import { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../../../icons";
import fetchJson, {
  initGetRequest,
  initPostRequest,
} from "../../../lib/fetchJson";
import { sessionOptions } from "../../../lib/session";
import { PanelTemplate } from "../../../templates";
import { Alert } from "../../../utils/alert";
import { endPoints } from "../../../utils/endpoints";
import { messages } from "../../../utils/messages";
import { PaymentSingle } from "./types";

const ProcessPayment: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ token, id }) => {
  const [data, setData] = useState<PaymentSingle>();

  const [paid, setPaid] = useState<boolean | null>(null);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response: PaymentSingle = await fetchJson(
        endPoints.payments + "/" + id,
        initGetRequest({ Authorization: `Bearer ${token}` })
      );

      setData(response);
      setPaid(response.data.paid);
    })();
  }, []);

  useEffect(() => {
    paid === true &&
      Alert.fire({
        text: messages.successPayment,
        icon: "success",
        allowOutsideClick: false,
        confirmButtonText: "کارت‌های من",
      }).then((sweetAlertResult) => {
        if (sweetAlertResult.isConfirmed) {
          router.push("/panel/cards");
        }

        return;
      });

    paid === false &&
      Alert.fire({
        text: messages.failedPayment,
        icon: "error",
        allowOutsideClick: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "تلاش مجدد",
        cancelButtonText: "کارت‌های من",
      }).then(async (sweetAlertResult) => {
        if (sweetAlertResult.isConfirmed) {
          setPaid(null);

          try {
            const response: any = await fetchJson(
              `${process.env.NEXT_PUBLIC_API_URL}/invite-cards/${data?.data.entity_id}/payment`,
              initPostRequest(
                {},
                {
                  Authorization: `Bearer ${token}`,
                }
              )
            );

            router.push(response.data.url);
          } catch (error) {
            console.log(error);
          }
        } else if (sweetAlertResult.isDismissed) {
          router.push("/panel/cards");
        }

        return;
      });
  }, [paid]);

  return paid === null ? (
    <div className="payment-single__process">
      <Loader className="loader loader--chestnut-rose" />
    </div>
  ) : (
    <PanelTemplate
      title=""
      metaTitle="پردازش پرداخت"
      metaDescription=""
    ></PanelTemplate>
  );
};

export default ProcessPayment;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res, query }) {
    const sessionToken = req.session.token?.token;
    const id: string = query ? (query.id as string) : "";

    if (sessionToken === undefined) {
      res.setHeader("Location", "/login");
      res.statusCode = 302;
      res.end();

      return {
        props: {
          token: "",
          id: "",
        },
      };
    }

    return {
      props: {
        token: sessionToken,
        id,
      },
    };
  },
  sessionOptions
);
