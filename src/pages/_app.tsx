import { chains, wagmiConfig } from "@/configs/RainbowKit";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact" 
        theme={darkTheme({
          overlayBlur: "large",
          accentColor: "#ffa",
          accentColorForeground: "#111"
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
