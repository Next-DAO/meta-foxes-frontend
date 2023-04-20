import { useEffect, useState } from "react";

export type Signature = {
  salt: string;
  token: string;
};

type WhiteList = Record<string, Signature>;

export const useGetWhitelist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [whitelist, setWhitelist] = useState<WhiteList | undefined>();
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_WHITELIST_URL!)
      .then((res) => res.json())
      .then((data) => setWhitelist(data))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    isLoading,
    whitelist,
  };
};
