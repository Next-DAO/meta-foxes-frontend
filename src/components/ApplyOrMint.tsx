import { useTranslation } from "next-i18next";
import { useGetWhitelist, Signature } from "@/hooks/useGetWhitelist";
import { useAccount, useContractRead, Address } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

// TODO: conditional load abi by env
import abi from "../../meta-foxes-contract/abi/goerli.json";
import { BigNumber, ethers } from "ethers";
import { FC } from "react";
import { Button } from "./Button";
import { toast } from "react-toastify";

const MINT_PRICE = "0.1"; // ethers

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

  const hasMinted = !(numberMinted as BigNumber).isZero();

  if (hasMinted) {
    return (
      <div
        className={`${customizationBtnStyle} text-2xl md:text-5xl text-white text-center w-80 md:w-96`}
        style={{
          WebkitTextStrokeWidth: 2,
          WebkitTextStrokeColor: "#000",
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

  const { config, status } = usePrepareContractWrite({
    address: abi.contracts.MetaFoxesGenesis.address as Address,
    abi: abi.contracts.MetaFoxesGenesis.abi,
    functionName: "mint",
    args: [1, signature?.salt, signature?.token],
    overrides: {
      value: ethers.utils.parseEther(MINT_PRICE),
    },
  });

  const { isLoading, writeAsync } = useContractWrite(config);

  const handleMint = async () => {
    if (!writeAsync) {
      return;
    }
    const toastId = toast.loading("Waiting for wallet confirmation...");
    try {
      const tx = await writeAsync();
      toast.update(toastId, {
        // TODO: hash should a link to etherscan?
        render: `Minting... ${tx.hash}`,
      });
      await tx.wait();
      toast.update(toastId, {
        render: `Mint success. ${tx.hash}`,
        type: "success",
      });
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Transaction failed.";
      toast.update(toastId, {
        render: msg,
        type: "error",
        isLoading: false,
      });
    }
  };

  return (
    <Button
      onClick={handleMint}
      title={t(isLoading ? "processing" : "mint")}
      disabled={isLoading}
    />
  );
};
