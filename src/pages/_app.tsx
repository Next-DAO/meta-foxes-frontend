import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import localFont from "next/font/local";
import { Noto_Sans_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Web3Provider } from "../components/Web3Provider";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const NotoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-noto-sans",
});

const cakeNTrufflesFont = localFont({
  src: "./cake-n-truffles.woff2",
  variable: "--font-cake-n-truffles",
});

const jingNanYuanMo = localFont({
  src: "./JingNanYuanMo.woff2",
  variable: "--font-JingNanYuanMo",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${cakeNTrufflesFont.variable} ${NotoSans.variable} ${jingNanYuanMo.variable}`}
    >
      <Web3Provider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
        <Analytics />
      </Web3Provider>
    </div>
  );
}

export default appWithTranslation(App);
