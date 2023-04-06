import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
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
        <section className="bg-secondary">
          <div className="container mx-auto ">
            <div className="flex justify-center">
              <Image src="/banner.png" alt="banner" width={1047} height={577} />
            </div>
            <div className="flex justify-center">
              <Image
                src="/introduction.png"
                alt="introduction"
                width={900}
                height={685}
              />
            </div>
          </div>
        </section>
        {separator}
        <section className="bg-tertiary">
          <div className="container mx-auto ">
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
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
