import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Button, InviteCardSlider } from "../../../components";
import { BigCalendar, BigLocation } from "../../../icons";
import fetchJson, { initGetRequest } from "../../../lib/fetchJson";
import { endPoints } from "../../../utils/endpoints";
import { InviteCardResponse } from "./types";

const MapWithNoSSR = dynamic(() => import("../../../components/Map"), {
  ssr: false,
});

const InviteCard: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content={data.description} />
      </Head>

      <main className="invite-card">
        {data.description && (
          <h1 className="invite-card__title">{data.description}</h1>
        )}

        {data.images && <InviteCardSlider images={data.images} />}

        {data.description_second && (
          <p className="invite-card__text">{data.description_second}</p>
        )}

        <div className="invite-card__details">
          {data.date_description && (
            <div className="invite-card__details__item">
              <BigCalendar />
              <span>زمان</span>
              <p>{data.date_description}</p>
              <Button mode="black">افزودن به تقویم</Button>
            </div>
          )}
          {data.address && (
            <div className="invite-card__details__item">
              <BigLocation />
              <span>مکان</span>
              <p>{data.address}</p>
              <Button mode="black">رفتن به نقشه</Button>
            </div>
          )}
        </div>

        {data.latitude && data.longitude && (
          <div className="invite-card__map">
            <MapWithNoSSR
              fullscreen
              position={{ lat: data.latitude, lng: data.longitude }}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default InviteCard;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { site: slug } = params ? params : { site: "" };
  let response: InviteCardResponse;

  try {
    response = await fetchJson(
      `${endPoints.cards}/${slug}/public`,
      initGetRequest()
    );
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: response.data,
    },
  };
};
