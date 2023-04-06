import Head from "next/head";
import { LanguageDropdown } from "../components/LanguageDropdown";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Meta Foxes</title>
        <meta name="description" content="NFT project by NextDAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          {t("Welcome to React")}
        </h1>
      </main>
    </>
  );
}
