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
          <div className="relative w-[366px] md:w-[697px] lg:w-[906px] aspect-[366/210]">
            <Image src="/introduction.png" alt="introduction" fill />
            <p className="absolute text-white text-xxs md:text-xl lg:text-2xl pt-12 md:pt-[85px] lg:pt-32 px-8 md:px-4 lg:px-16 text-center font-serif">
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
          </div>
        </div>
      </div>
    </section>
  );
};
