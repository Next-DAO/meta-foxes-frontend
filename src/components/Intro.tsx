import Image from "next/image";
import { useTranslation } from "next-i18next";

export const Intro = () => {
  const { t } = useTranslation();
  const links = (
    <div
      className="absolute flex flex-row justify-between
                    w-[115px] bottom-[-61px] right-[15px]
                    md:w-[220px] md:bottom-[-117px] md:right-[22px]
                    lg:w-[280px] lg:bottom-[-151px] lg:right-[35px]
                    "
    >
      <a
        className="block relative w-7 md:w-12 lg:w-16 aspect-square bg-[#5762e4]"
        href="https://opensea.io/collection/meta-foxes-genesis"
        target="__blank"
      >
        <Image src="/opensea.svg" alt="opensea" fill />
      </a>
      <a
        className="block relative w-7 md:w-12 lg:w-16 aspect-square bg-[#5762e4]"
        href="https://etherscan.io/token/0xc599f72644140fe4d00ef9574100f636a30d923d"
        target="__blank"
      >
        <Image src="/etherscan.svg" alt="etherscan" fill />
      </a>
      <a
        className="block relative w-7 md:w-12 lg:w-16 aspect-square bg-[#5762e4]"
        href="https://github.com/Next-DAO"
        target="__blank"
      >
        <Image src="/github.svg" alt="github" fill />
      </a>
    </div>
  );
  return (
    <section className="bg-secondary pb-20 md:pb-28 xl:pb-36 ">
      <div className="mx-auto pt-3 md:pt-9">
        <div className="flex justify-center">
          <div className="relative w-95 md:w-189 lg:w-250 aspect-[1000/577]">
            <Image src="/banner.png" alt="banner" fill priority />
          </div>
        </div>
        <div className="flex justify-center relative">
          {/* sm */}
          <div
            className="relative w-[366px] bg-tertiary mt-8 mb-20
                       border-x-2 border-black shadow-[0_0_0_2px_#ff9111,0_0_0_4px_#000]
                       md:hidden"
          >
            <p className="text-white text-sm text-center font-serif px-4 py-2">
              {t("introduction")}
            </p>
            <div className="absolute left-[-6px] right-[-6px] top-[-40px] h-[44px]">
              <Image src="/intro-top-sm.png" alt="intro top border" fill />
            </div>
            <div className="absolute left-[-6px] right-[-7px] bottom-[-71px] h-[75px]">
              <Image src="/intro-bottom-sm.png" alt="intro top border" fill />
            </div>
            {links}
          </div>

          {/* md */}
          <div
            className="relative w-[694px] bg-tertiary mt-16 mb-32
                       border-x-4 border-black shadow-[0_0_0_4px_#ff9111,0_0_0_8px_#000]
                       hidden md:block lg:hidden"
          >
            <p className="text-white text-xl text-center font-serif px-4 pt-7 pb-2">
              {t("introduction")}
            </p>
            <div className="absolute left-[-11.5px] right-[-12px] top-[-60px] h-[82px]">
              <Image src="/intro-top-md.png" alt="intro top border" fill />
            </div>
            <div className="absolute left-[-11.5px] right-[-13px] bottom-[-140px] h-[144px]">
              <Image src="/intro-bottom-md.png" alt="intro top border" fill />
            </div>
            {links}
          </div>

          {/* lg */}
          <div
            className="relative w-[900px] bg-tertiary mt-16 mb-48
                       border-x-4 border-black shadow-[0_0_0_6px_#ff9111,0_0_0_10px_#000]
                       hidden lg:block"
          >
            <p className="text-white text-2xl text-center font-serif px-16 pt-12 pb-5">
              {t("introduction")}
            </p>
            <div className="absolute left-[-14px] right-[-14px] top-[-80px] h-[108px]">
              <Image src="/intro-top-lg.png" alt="intro top border" fill />
            </div>
            <div className="absolute left-[-14px] right-[-16px] bottom-[-180px] h-[186px]">
              <Image src="/intro-bottom-lg.png" alt="intro top border" fill />
            </div>
            {links}
          </div>
        </div>
      </div>
    </section>
  );
};
