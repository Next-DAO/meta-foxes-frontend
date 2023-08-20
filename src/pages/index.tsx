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
        <meta name="description" content="Meta Foxes is an NFT collection initiated by the NextDAO community. Every Meta Fox is painstakingly crafted and customized by artists for its owner, without using any artificial intelligence or automation technology. We are committed to using unique designs for each NFT, highlighting its unique story and personality, making it a valuable collectible." />
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
