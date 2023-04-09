import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Intro } from "../components/Intro";
import { Foxes } from "../components/Foxes";
import { Partners } from "../components/Partners";
import { Footer } from "../components/Footer";

export default function Home() {
  const separator = <div className="bg-fox h-0.5 my-0.5 md:h-1 md:my-1" />;
  return (
    <>
      <Head>
        <title>Meta Foxes</title>
        <meta name="description" content="NFT project by NextDAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="bg-black">
        <Intro />
        {separator}
        <Foxes />
        {separator}
        <Partners />
        {separator}
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
