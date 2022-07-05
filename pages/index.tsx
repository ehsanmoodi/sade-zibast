import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import {
  MainHeader,
  MainFooter,
  IndexArticles,
  IndexCategories,
  IndexHero,
  IndexSlider,
} from "../components";

const Home: NextPage = () => {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
  }, []);

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
        <IndexSlider />
        <IndexCategories />
        <IndexArticles />
      </main>

      <MainFooter />
    </>
  );
};

export default Home;
