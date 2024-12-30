import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ReactNode } from "react";
import { mainnet, goerli } from "wagmi/chains";
import { useRainbowTheme } from "../hooks/useRainbowTheme";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const projectId = '9d920b7f8ab9e75fd0680dfb919257be';

const { chains, provider } = configureChains(
  [process.env.NEXT_PUBLIC_CHAIN === "mainnet" ? mainnet : goerli],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Suggested",
    wallets: [
      injectedWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      coinbaseWallet({ projectId, chains, appName: "Meta Foxes" }),
      walletConnectWallet({ projectId, chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
type Props = {
  children: ReactNode;
};

export const Web3Provider: React.FC<Props> = ({ children }) => {
  const theme = useRainbowTheme();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={theme}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
