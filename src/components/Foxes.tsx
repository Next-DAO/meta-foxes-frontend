import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const Foxes = () => {
  const { t, i18n } = useTranslation();
  const isZhCn = i18n.language === "zh";
  const customizationBtnStyle = isZhCn ? "font-jingNanYuanMo" : "font-sans";

  return (
    <section className="bg-tertiary pt-20 pb-16 md:pb-36 lg:pb-40">
      <div className="flex justify-center -mt-36 md:-mt-40">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1">
          <div className="hidden lg:block xl:hidden w-[120px] md:w-[160px] aspect-square" />

          <div className="relative w-[120px] md:w-[160px] aspect-square">
            <Image src={`/foxes/fox0.png`} alt={`fox0`} fill />
          </div>
          <div className="relative w-[120px] md:w-[160px] aspect-square">
            <Image src={`/foxes/fox1.png`} alt={`fox1`} fill />
          </div>
          <div className="relative w-[120px] md:w-[160px] aspect-square">
            <Image src={`/foxes/fox2.png`} alt={`fox2`} fill />
          </div>

          <div className="hidden lg:block xl:hidden w-[120px] md:w-[160px] aspect-square" />
          {Array.from({ length: 17 }).map((_, index) => (
            <div
              key={index}
              className="relative w-[120px] md:w-[160px] aspect-square"
            >
              <Image
                src={`/foxes/fox${index + 3}.png`}
                alt={`fox${index + 3}`}
                fill
              />
            </div>
          ))}
          <div className="hidden lg:block relative w-[120px] md:w-[160px] aspect-square">
            <Image src={`/foxes/fox20.png`} alt="fox20" fill />
          </div>
          <div className="md:hidden lg:block relative w-[120px] md:w-[160px] aspect-square">
            <Image src={`/foxes/fox21.png`} alt="fox21" fill />
          </div>
          <div
            className="relative border-4 border-black rounded-xl bg-gradient-to-b from-[#303CB5] to-[#9584FE] 
                      h-[241px] md:h-[332px] lg:h-auto
                      col-start-1 lg:col-start-2 xl:col-start-3 col-span-3 md:col-span-4 lg:col-span-3 row-start-5 md:row-start-4 xl:row-start-2 row-span-2 
                      flex justify-center"
          >
            <div className="relative w-[313.7px] md:w-[432px] h-[228.77px] md:h-[315px] -mt-6 md:-mt-8  animate-floating">
              <Image src="/customization.png" alt="customization" fill />
            </div>
            <div className="absolute w-[336.7px] md:w-[463px] h-[214.97px] md:h-[296px] bottom-0 animate-pulse">
              <Image src="/stars.png" alt="stars" fill />
            </div>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <a
                href="https://metafox.paperform.co"
                className={`${customizationBtnStyle} text-2xl text-white text-center bg-secondary rounded-full border-black
                            w-[260px] h-[44px] leading-[44px] border-2 shadow-[0_0_0_2px_#ff9111,0_0_0_4px_#000]
                            md:text-4xl md:w-[359px] md:h-[60px] md:leading-[56px] md:border-4 md:shadow-[0_0_0_4px_#ff9111,0_0_0_8px_#000]`}
              >
                {t("customization")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
