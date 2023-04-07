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
        <section className="bg-secondary pb-36">
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
          <div className="container mx-auto -mt-40">
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 22 }).map((_, index) => (
                <Image
                  key={index}
                  src={`/foxes/fox${index}.png`}
                  alt={`fox${index}`}
                  width={160}
                  height={160}
                />
              ))}
              <div
                className={`${styles.customization} col-start-3 col-end-6 row-start-2 row-end-4 flex justify-center`}
              >
                <div className="-mt-6">
                  <Image
                    src="/customization.png"
                    alt="customization"
                    width={432}
                    height={315}
                  />
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
