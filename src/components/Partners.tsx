import Image from "next/image";
import { FC } from "react";

export const Partners: FC = () => {
  const aClasses =
    "block flex items-center justify-center bg-white w-[177px] md:w-[264px] h-[64px] md:h-[96px] border-4 rounded-lg border-black";
  return (
    <section className="bg-secondary py-12 md:py-24 xl:py-28">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <a
            className={aClasses}
            href="https://twitter.com/thenextdao"
            target="__blank"
          >
            <div className="relative w-[135px] md:w-[200px] h-[31.75px] md:h-[47.5px]">
              <Image src="/nextdao.png" alt="nextdao" fill />
            </div>
          </a>
          <a
            className={aClasses}
            href="https://twitter.com/thenextdao"
            target="__blank"
          >
            <div className="relative w-[117.47px] md:w-[175.25px] h-[31.75px] md:h-[47.34px]">
              <Image src="/lxdao.png" alt="lxdao" fill />
            </div>
          </a>
          <a className={aClasses} href="https://hellonft.pro/" target="__blank">
            <div className="relative w-[135px] md:w-[202.5px] h-6 md:h-[35.17px]">
              <Image src="/hellonft.png" alt="hellonft" fill />
            </div>
          </a>
          <a
            className={aClasses}
            href="https://www.smartdeer.work/"
            target="__blank"
          >
            <div className="relative w-[132px] md:w-[202.5px] h-6 md:h-[35.17px]">
              <Image src="/smartdeer.png" alt="smartdeer" fill />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
