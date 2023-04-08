import Image from "next/image";

export const Footer = () => {
  return (
    <section className="bg-tertiary pt-20 pb-4 md:pb-8">
      <div className=" flex justify-center -mt-28 md:-mt-36">
        <div className="relative w-[365px] md:w-[756px] h-[158px] md:h-[325px]">
          <Image src="/ship.png" alt="ship" fill />
        </div>
      </div>
      <p className="text-white font-serif text-center">
        {`All rights reserved by NextDAO © ${new Date().getFullYear()}`}
      </p>
    </section>
  );
};
