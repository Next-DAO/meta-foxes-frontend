import { useTranslation } from "next-i18next";
import { FC } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
};

export const Button: FC<Props> = ({ title, disabled, onClick, href }) => {
  const { t, i18n } = useTranslation();
  const isZhCn = i18n.language === "zh";
  const customizationBtnStyle = isZhCn ? "font-jingNanYuanMo" : "font-sans";
  const textColor = disabled ? "text-gray-400" : "text-white";
  return (
    <a
      {...(!disabled && { href, onClick })}
      className={`${customizationBtnStyle} ${textColor} hover:cursor-pointer text-2xl text-center bg-secondary rounded-full border-black
                      w-[260px] h-[44px] leading-[44px] border-2 shadow-[0_0_0_2px_#ff9111,0_0_0_4px_#000]
                      md:text-4xl md:w-[359px] md:h-[60px] md:leading-[56px] md:border-4 md:shadow-[0_0_0_4px_#ff9111,0_0_0_8px_#000]`}
    >
      {title}
    </a>
  );
};
