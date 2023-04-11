import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { useTranslation } from "next-i18next";

export const Partners: FC = () => {
  const { t, i18n } = useTranslation();
  const isZhCn = i18n.language === "zh";
  const customizationBtnStyle = isZhCn ? "font-jingNanYuanMo" : "font-sans";
  const aClasses =
    "block flex items-center justify-center bg-white w-[177px] md:w-[264px] h-[64px] md:h-[96px] border-4 rounded-lg border-black";

  return (
    <section className="relative bg-secondary py-12 md:py-24 xl:py-28">
      <div className="absolute -top-[52px] md:-top-32 left-0 right-0 flex flex-col items-center">
        <div className="relative flex justify-between w-[82px] md:w-[201px] top-[-0.5px]">
          <div className="relative w-[27px] md:w-[66.2px] h-[32.6px] md:h-[80px]">
            <Image src="/ear.svg" alt="ear" fill />
          </div>
          <div className="relative w-[27px] md:w-[66.2px] h-[32.6px] md:h-[80px] transform -scale-x-100">
            <Image src="/ear.svg" alt="ear" fill />
          </div>
        </div>
        <div className="flex justify-between w-[246px] md:w-[604px]">
          <div className="relative w-6 md:w-[59px] aspect-square">
            <Image src="/claw.svg" alt="claw" fill />
          </div>
          <div
            className={`${customizationBtnStyle} text-base text-white text-center bg-secondary rounded-full border-black
                            w-[134px] h-[34px] leading-[34px] border-2 shadow-[0_0_0_2px_#ff9111,0_0_0_4px_#000]
                            md:text-4xl md:w-[340px] md:h-[92px] md:leading-[92px] md:border-4 md:shadow-[0_0_0_4px_#ff9111,0_0_0_8px_#000]`}
          >
            {t("partners")}
          </div>
          <div className="relative w-6 md:w-[59px] aspect-square transform -scale-x-100">
            <Image src={"/claw.svg"} alt="claw" fill />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <a className={aClasses} href="https://nextdao.xyz" target="__blank">
            <div className="relative w-[135px] md:w-[200px] h-[31.75px] md:h-[47.5px]">
              <Image src="/nextdao.png" alt="nextdao" fill />
            </div>
          </a>
          <a className={aClasses} href="https://lxdao.io" target="__blank">
            <div className="relative w-[117.47px] md:w-[175.25px] h-[31.75px] md:h-[47.34px]">
              <Image src="/lxdao.png" alt="lxdao" fill />
            </div>
          </a>
          <a className={aClasses} href="https://hellonft.pro/" target="__blank">
            <div className="relative w-[135px] md:w-[202.5px] h-6 md:h-[35.17px]">
              <Image src="/hellonft.png" alt="hellonft" fill />
            </div>
          </a>
          <a className={aClasses} href="https://smartdeer.com" target="__blank">
            <div className="relative w-[132px] md:w-[202.5px] h-6 md:h-[35.17px]">
              <Image src="/smartdeer.png" alt="smartdeer" fill />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
