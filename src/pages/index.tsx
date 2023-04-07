import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Partner } from "../components/Partner";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { t } = useTranslation();
  const separator = <div className="h-1 bg-fox my-1" />;
  return (
    <>
      <Head>
        <title>Meta Foxes</title>
        <meta name="description" content="NFT project by NextDAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="bg-black">
        <section className="bg-secondary pb-36 pointer-events-none">
          <div className="mx-auto pt-3 md:pt-9">
            <div className="flex justify-center">
              <div className="relative w-95 md:w-189 lg:w-250 aspect-[1000/577]">
                <Image src="/banner.png" alt="banner" fill />
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="relative w-[366px] md:w-[697px] lg:w-[906px] aspect-[366/210]">
                <Image src="/introduction.png" alt="introduction" fill />
                <p className="absolute text-white text-xxs md:text-xl lg:text-2xl pt-12 md:pt-[85px] lg:pt-32 px-8 md:px-4 lg:px-16 text-center font-serif">
                  {t("introduction")}
                </p>
              </div>
            </div>
          </div>
        </section>
        {separator}
        <section className="bg-tertiary py-20">
          <div className="flex justify-center -mt-40 ">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1">
              <div className="hidden lg:block xl:hidden w-[120px] md:w-[160px] aspect-square" />

              <div className="relative w-[120px] md:w-[160px] aspect-square">
                <Image src={`/foxes/fox0.png`} alt={`fox0`} fill />
              </div>
              <div className="relative w-[120px] md:w-[160px] aspect-square">
                <Image src={`/foxes/fox1.png`} alt={`fox1`} fill />
              </div>
              <div className="relative w-[120px] md:w-[160px] aspect-square">
                <Image src={`/foxes/fox2.png`} alt={`fox2`} fill />
              </div>

              <div className="hidden lg:block xl:hidden w-[120px] md:w-[160px] aspect-square" />
              {Array.from({ length: 17 }).map((_, index) => (
                <div
                  key={index}
                  className="relative w-[120px] md:w-[160px] aspect-square"
                >
                  <Image
                    src={`/foxes/fox${index + 3}.png`}
                    alt={`fox${index + 3}`}
                    fill
                  />
                </div>
              ))}
              <div className="hidden lg:block relative w-[120px] md:w-[160px] aspect-square">
                <Image src={`/foxes/fox20.png`} alt={`fox20`} fill />
              </div>
              <div className="md:hidden lg:block relative w-[120px] md:w-[160px] aspect-square">
                <Image src={`/foxes/fox21.png`} alt={`fox21`} fill />
              </div>
              {/* TODO: use bg-gradient */}
              <div
                className={`${styles.customization} col-start-1 lg:col-start-2 xl:col-start-3 col-span-3 md:col-span-4 lg:col-span-3  row-start-5 md:row-start-4 xl:row-start-2 row-span-2 flex justify-center`}
              >
                <div className="relative w-[314px] md:w-[432px] aspect-[432/352] -mt-6 md:-mt-8">
                  <Image src="/customization.png" alt="customization" fill />
                </div>
              </div>
            </div>
          </div>
        </section>
        {separator}
        <section className="bg-secondary py-20">
          <div className="container mx-auto flex flex-column justify-between">
            <Partner
              image="/nextdao.png"
              href="https://twitter.com/thenextdao"
              name="nextdao"
            />
            <Partner
              image="/lxdao.png"
              href="https://lxdao.io/"
              name="lxdao"
              width={175}
              height={47}
            />
            <Partner
              image="/hellonft.png"
              href="https://hellonft.pro/"
              name="hellonft"
            />
            <Partner
              image="/smartdeer.png"
              href="https://www.smartdeer.work/"
              name="smartdeer"
            />
          </div>
        </section>
        {separator}
        <section className="bg-tertiary py-20">
          <div className="container mx-auto -mt-36 flex flex-col items-center">
            <Image src="/ship.png" alt="ship" width={900} height={385} />
            <p className="text-white">
              All rights reserved by NextDAO © 2022 - 2023
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
