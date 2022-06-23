import type { NextPage } from "next";
import Head from "next/head";

import {
  MainHeader,
  MainFooter,
  IndexArticles,
  IndexCategories,
  IndexHero,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ساده زیباست</title>
        <meta
          name="description"
          content="یه کارت دعوت زیبا بساز! چون ساده زیباست..."
        />
      </Head>

      <MainHeader />

      <main>
        <IndexHero />
        <IndexCategories />
        <IndexArticles />
      </main>

      <MainFooter />
    </>
  );
};

export default Home;
