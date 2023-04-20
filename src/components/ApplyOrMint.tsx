import { useTranslation } from "next-i18next";
import { useGetWhitelist, Signature } from "@/hooks/useGetWhitelist";
import { useAccount, useContractRead, Address } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

// TODO: conditional load abi by env
import abi from "../../meta-foxes-contract/abi/goerli.json";
import { ethers } from "ethers";
import { FC } from "react";
import { Button } from "./Button";

export const ApplyOrMint = () => {
  const { t } = useTranslation();
  const { address } = useAccount();
  const { whitelist } = useGetWhitelist();
  const signature = whitelist?.[address?.toLocaleLowerCase()!];
  const isWhitelisted = !!signature;
  if (!isWhitelisted) {
    return (
      <Button href="https://metafox.paperform.co" title={t("customization")} />
    );
  }

  return <Mint address={address!} signature={signature} />;
};

const Mint: FC<{ address: string; signature: Signature }> = ({
  address,
  signature,
}) => {
  const { t, i18n } = useTranslation();
  const isZhCn = i18n.language === "zh";
  const customizationBtnStyle = isZhCn ? "font-jingNanYuanMo" : "font-sans";

  const { data: numberMinted } = useContractRead({
    address: abi.contracts.MetaFoxesGenesis.address as Address,
    abi: abi.contracts.MetaFoxesGenesis.abi,
    functionName: "numberMinted",
    args: [address],
  });
  const hasMinted = !numberMinted;

  if (hasMinted) {
    return (
      <div
        className={`${customizationBtnStyle} text-2xl md:text-5xl text-white text-center w-80 md:w-96`}
        style={{
          // @ts-ignore
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "black",
        }}
      >
        {t("minted")}
      </div>
    );
  }

  return <MintButton signature={signature} />;
};

const MintButton: FC<{ signature: Signature }> = ({ signature }) => {
  const { t } = useTranslation();

  const { config } = usePrepareContractWrite({
    address: abi.contracts.MetaFoxesGenesis.address as Address,
    abi: abi.contracts.MetaFoxesGenesis.abi,
    functionName: "mint",
    args: [1, signature?.salt, signature?.token],
    overrides: {
      value: ethers.utils.parseEther("0.1"),
    },
  });
  const { isLoading, write } = useContractWrite(config);

  const handleMint = () => {
    write?.();
  };

  return (
    <Button
      onClick={handleMint}
      title={t(isLoading ? "processing" : "mint")}
      disabled={isLoading}
    />
  );
};
