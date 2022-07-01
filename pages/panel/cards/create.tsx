import type { NextPage } from "next";
import Head from "next/head";

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

      <main className="w-screen h-screen flex items-center justify-center">
        <h1>Create New Cart</h1>
      </main>
    </>
  );
};

export default CreateCards;
