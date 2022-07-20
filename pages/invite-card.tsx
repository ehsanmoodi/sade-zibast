import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Button, IndexSlider, InviteCardSlider } from "../components";
import { BigCalendar, BigLocation } from "../icons";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const InviteCard: NextPage = () => {
  return (
    <>
      <Head>
        <title>ساده زیباست</title>
        <meta
          name="description"
          content="یه کارت دعوت زیبا بساز! چون ساده زیباست..."
        />
      </Head>

      <main className="invite-card">
        <h1 className="invite-card__title">
          خوشا به من که دست تو پرواز هدیه می‌کند...
        </h1>
        <InviteCardSlider />
        <p className="invite-card__text">
          بسیار خوشحالیم که قراره به زودی در جشن عروسیمون🎉 ببینیمتون و شادی و
          هیجانی که برای شروع زندگی مشترک داریم رو با شما تقسیم کنیم... 😍✨
        </p>
        <div className="invite-card__details">
          <div className="invite-card__details__item">
            <BigCalendar />
            <span>زمان</span>
            <p>چهارشنبه 4 خرداد - ساعت ۸ الی ۱۲</p>
            <Button mode="black">افزودن به تقویم</Button>
          </div>
          <div className="invite-card__details__item">
            <BigLocation />
            <span>مکان</span>
            <p>گرمدره، بلوار امیرکبیر، بوستان پنجم، پلاک ۳۷، باغ روژانو</p>
            <Button mode="black">رفتن به نقشه</Button>
          </div>
        </div>
        <div className="invite-card__map">
          <MapWithNoSSR fullscreen position={{ lat: 35.7219, lng: 51.3347 }} />
        </div>
      </main>
    </>
  );
};

export default InviteCard;
