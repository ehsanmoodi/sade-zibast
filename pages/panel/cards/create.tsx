import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button, InnerHeader, Input } from "../../../components";

const CreateCards: NextPage = () => {
  const [data, setData] = useState({
    name: "",
    link: "",
  });

  return (
    <>
      <Head>
        <title>ساخت کارت جدید</title>
        <meta
          name="description"
          content="در این صفحه از پنل کاربری می‌توانید کارت جدیدی ایجاد کنید"
        />
      </Head>

      <main className="min-h-screen bg-vista-white">
        <InnerHeader title="ایجاد کارت دعوت جدید" backLink="/panel/cards" />

        <div className="create-page">
          <div className="create-page__col">
            <Input
              id="name"
              type="text"
              label="عنوان کارت"
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
            <Input
              id="link"
              type="text"
              dir="ltr"
              guide=".sadezibast.ir"
              value={data.link}
              onChange={(event) =>
                setData({ ...data, link: event.target.value })
              }
            />
          </div>
          <div className="create-page__col"></div>
          <div className="create-page__col">
            <Button>پرداخت</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateCards;
