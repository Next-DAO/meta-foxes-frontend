import { useEffect, useState } from "react";

export type Signature = {
  salt: string;
  token: string;
};

type WhiteList = Record<string, Signature>;

const signatureUrl = {
  mainnet: "data/signatures.json",
  goerli: "data/goerli_signatures.json",
};

export const useGetWhitelist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [whitelist, setWhitelist] = useState<WhiteList | undefined>();
  useEffect(() => {
    fetch(signatureUrl[process.env.NEXT_PUBLIC_CHAIN])
      .then((res) => res.json())
      .then((data) => setWhitelist(data))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    isLoading,
    whitelist,
  };
};
