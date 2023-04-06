import "../i18n";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import localFont from "next/font/local";

const cakeNTrufflesFont = localFont({
  src: "./cake-n-truffles.ttf",
  variable: "--font-cake-n-truffles",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${cakeNTrufflesFont.variable} `}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
