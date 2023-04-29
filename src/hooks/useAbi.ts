import { useEffect, useState } from "react";

const loadAbi = async () => {
  const { default: abi } = await import(
    `../../meta-foxes-contract/abi/${process.env.NEXT_PUBLIC_CHAIN}.json`
  );
  return abi;
};

export const useAbi = (load = false) => {
  const [abi, setAbi] = useState(null);
  useEffect(() => {
    if (!load) {
      return;
    }
    async function fetchAbi() {
      const loadedAbi = await loadAbi();
      setAbi(loadedAbi);
    }

    fetchAbi();
  }, [load]);
  return abi;
};
