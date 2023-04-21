import { useTranslation } from "next-i18next";
import { useGetWhitelist, Signature } from "@/hooks/useGetWhitelist";
import { useAccount, useContractRead, Address } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

// TODO: conditional load abi by env
import abi from "../../meta-foxes-contract/abi/goerli.json";
import { BigNumber, ethers } from "ethers";
import { FC, useState } from "react";
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

  const { data: numberMinted, refetch: refetchNumberMinted } = useContractRead({
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

  return (
    <MintButton
      signature={signature}
      refetchNumberMinted={refetchNumberMinted}
    />
  );
};

const MintButton: FC<{
  signature: Signature;
  refetchNumberMinted: () => void;
}> = ({ signature, refetchNumberMinted }) => {
  const { t } = useTranslation();

  const { config } = usePrepareContractWrite({
    address: abi.contracts.MetaFoxesGenesis.address as Address,
    abi: abi.contracts.MetaFoxesGenesis.abi,
    functionName: "mint",
    args: [1, signature?.salt, signature?.token],
    overrides: {
      value: ethers.utils.parseEther(MINT_PRICE),
    },
  });

  const { writeAsync } = useContractWrite(config);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMint = async () => {
    if (!writeAsync) {
      return;
    }
    const toastId = toast("Waiting for wallet confirmation...", {
      closeButton: false,
      isLoading: true,
      autoClose: false,
    });
    try {
      setIsProcessing(true);
      const tx = await writeAsync();
      toast.update(toastId, {
        render: (
          <span>
            Minting... <TxLink tx={tx.hash} />
          </span>
        ),
      });
      await tx.wait();
      toast.update(toastId, {
        render: (
          <span>
            Mint success. <TxLink tx={tx.hash} />
          </span>
        ),
        closeButton: true,
        isLoading: false,
        autoClose: 5000,
        type: toast.TYPE.SUCCESS,
      });
      refetchNumberMinted();
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Transaction failed.";
      toast.update(toastId, {
        closeButton: true,
        isLoading: false,
        render: msg,
        autoClose: 5000,
        type: toast.TYPE.ERROR,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Button
      onClick={handleMint}
      title={t(isProcessing ? "processing" : "mint")}
      disabled={isProcessing}
    />
  );
};

const TxLink: FC<{ tx: string }> = ({ tx }) => {
  return (
    <a
      className="underline"
      href={process.env.NEXT_PUBLIC_TX_LINK_PREFIX + tx}
      target="_blank"
    >
      Transaction Details
    </a>
  );
};
