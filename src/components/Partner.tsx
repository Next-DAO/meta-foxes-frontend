import Image from "next/image";
import { FC } from "react";

type Props = {
  href: string;
  image: string;
  name: string;
  width?: number;
  height?: number;
};

export const Partner: FC<Props> = ({
  href,
  image,
  name,
  width = 200,
  height = 50,
}) => {
  return (
    <a
      className="block flex items-center justify-center bg-white w-64 h-24 border-4 rounded-lg border-black "
      href={href}
      target="__blank"
    >
      <Image src={image} alt={name} width={width} height={height} />
    </a>
  );
};
