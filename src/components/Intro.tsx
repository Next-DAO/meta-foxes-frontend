import Image from "next/image";
import { useTranslation } from "next-i18next";

export const Intro = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-secondary pb-20 md:pb-28 xl:pb-36 ">
      <div className="mx-auto pt-3 md:pt-9">
        <div className="flex justify-center">
          <div className="relative w-95 md:w-189 lg:w-250 aspect-[1000/577]">
            <Image src="/banner.png" alt="banner" fill />
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
          </div>

          {/* lg */}
          <div
            className="relative w-[900px] bg-tertiary mt-16 mb-48
                       border-x-4 border-black shadow-[0_0_0_4px_#ff9111,0_0_0_8px_#000]
                       hidden lg:block"
          >
            <p className="text-white text-2xl text-center font-serif px-16 pt-12 pb-5">
              {t("introduction")}
            </p>
            <div className="absolute left-[-13px] right-[-13px] top-[-80px] h-[108px]">
              <Image src="/intro-top-lg.png" alt="intro top border" fill />
            </div>
            <div className="absolute left-[-13px] right-[-15px] bottom-[-180px] h-[186px]">
              <Image src="/intro-bottom-lg.png" alt="intro top border" fill />
            </div>
          </div>

          {/* <div className="relative w-[366px] md:w-[697px] lg:w-[906px] h-[280px]">
            <Image src="/introduction.png" alt="introduction" fill />
            <p className="absolute text-white text-sm md:text-xl lg:text-2xl pt-12 md:pt-[85px] lg:pt-32 px-8 md:px-4 lg:px-16 text-center font-serif">
              {t("introduction")}
            </p>
            <div className="absolute bottom-[10px] right-[20px]">
              <a
                className="block w-7 aspect-square bg-[#5762e4]"
                href="https://github.com/Next-DAO"
                target="__blank"
              >
                <Image src="/github.svg" alt="introduction" fill />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
