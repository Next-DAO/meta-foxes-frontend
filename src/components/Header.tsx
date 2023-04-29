import React from "react";
import Image from "next/image";
import { LanguageDropdown } from "./LanguageDropdown";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isZhCn = i18n.language === "zh";
  const connectButtonClasses = isZhCn
    ? "-ml-1 md:ml-8 -mr-3 md:mr-0"
    : "-ml-4 md:ml-8 -mr-6 md:mr-0";

  return (
    <header className="bg-primary shadow">
      <div className="lg:w-[1024px] mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <div className="relative w-6 md:w-9 aspect-square">
              <Image src="/logo.png" alt="Logo" fill />
            </div>
            <span className="text-l md:text-2xl font-sans text-white ml-3">
              META FOXES
            </span>
          </a>
          <nav className="flex auto items-center">
            <LanguageDropdown />
            <div
              className={`scale-[0.65] md:scale-100 ${connectButtonClasses}`}
            >
              <ConnectButton
                label={t("connectWallet") as string}
                showBalance={false}
                accountStatus="address"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
