import Image from "next/image";
import styles from "@/styles/Home.module.css";

export const Foxes = () => {
  return (
    <section className="bg-tertiary py-20">
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
            <Image src={`/foxes/fox20.png`} alt={`fox20`} fill />
          </div>
          <div className="md:hidden lg:block relative w-[120px] md:w-[160px] aspect-square">
            <Image src={`/foxes/fox21.png`} alt={`fox21`} fill />
          </div>
          {/* TODO: use bg-gradient */}
          <div
            className={`${styles.customization} col-start-1 lg:col-start-2 xl:col-start-3 col-span-3 md:col-span-4 lg:col-span-3  row-start-5 md:row-start-4 xl:row-start-2 row-span-2 flex justify-center`}
          >
            <div className="relative w-[313.7px] md:w-[432px] h-[228.77px] md:h-[315px] -mt-6 md:-mt-8">
              <Image src="/customization.png" alt="customization" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
