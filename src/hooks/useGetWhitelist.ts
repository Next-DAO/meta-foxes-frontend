import { useEffect, useState } from "react";

// TODO: env this!
const WHITELIST_URL =
  "https://raw.githubusercontent.com/Next-DAO/meta-foxes-contract/main/data/goerli_signatures.json";

type WhiteList = Record<string, string>;

export const useGetWhitelist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [whitelist, setWhitelist] = useState<WhiteList | undefined>();
  useEffect(() => {
    fetch(WHITELIST_URL)
      .then((res) => res.json())
      .then((data) => setWhitelist(data))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    isLoading,
    whitelist,
  };
};
