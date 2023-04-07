import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import localFont from "next/font/local";

const cakeNTrufflesFont = localFont({
  src: "./cake-n-truffles.ttf",
  variable: "--font-cake-n-truffles",
});

const alibabaPuHuiTi = localFont({
  src: "./alibaba-PuHuiTi.ttf",
  variable: "--font-alibaba-PuHuiTi",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${cakeNTrufflesFont.variable} ${alibabaPuHuiTi.variable}`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
