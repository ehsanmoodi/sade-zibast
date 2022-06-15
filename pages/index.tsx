import type { NextPage } from "next";
import Head from "next/head";

import { MainHeader, MainFooter, IndexHero, IndexSection } from "../components";

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
        <IndexSection title="آخرین خواندنی‌ها">
          <div>Testing This Component</div>
        </IndexSection>
      </main>

      <MainFooter />
    </>
  );
};

export default Home;
