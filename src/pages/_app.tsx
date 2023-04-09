import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const cakeNTrufflesFont = localFont({
  src: "./cake-n-truffles.ttf",
  variable: "--font-cake-n-truffles",
});

const alibabaPuHuiTi = localFont({
  src: "./alibaba-PuHuiTi.ttf",
  variable: "--font-alibaba-PuHuiTi",
});

const jingNanYuanMo = localFont({
  src: "./JingNanYuanMo.otf",
  variable: "--font-JingNanYuanMo",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${cakeNTrufflesFont.variable} ${alibabaPuHuiTi.variable} ${jingNanYuanMo.variable}`}
    >
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default appWithTranslation(App);
