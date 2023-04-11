import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ReactNode } from "react";
import { goerli } from "wagmi/chains";
import { lightTheme } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { useRainbowTheme } from "../hooks/useRainbowTheme";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const { chains, provider } = configureChains(
  // TODO: use mainnet in production
  // [mainnet],
  [goerli],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Suggested",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: "Meta Foxes" }),
      walletConnectWallet({ chains }),
      rainbowWallet({ chains }),
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
