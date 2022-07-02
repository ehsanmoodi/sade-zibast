import type { NextPage } from "next";
import Head from "next/head";
import { InnerHeader } from "../../../components";

const CreateCards: NextPage = () => {
  return (
    <>
      <Head>
        <title>ساخت کارت جدید</title>
        <meta
          name="description"
          content="در این صفحه از پنل کاربری می‌توانید کارت جدیدی ایجاد کنید"
        />
      </Head>

      <InnerHeader title="ایجاد کارت دعوت جدید" backLink="/panel/cards" />

      <main>
        <div className="create-page">
          <div>ردیف اول</div>
          <div>ردیف دوم</div>
          <div>ردیف سوم</div>
        </div>
      </main>
    </>
  );
};

export default CreateCards;
