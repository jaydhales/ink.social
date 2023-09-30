import {getDefaultWallets} from "@rainbow-me/rainbowkit";
import {configureChains, createConfig, sepolia} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_SEPOLIA_ALCHEMY_ID! }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Ink.Social",
  projectId: "ink123",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export {wagmiConfig, chains}




