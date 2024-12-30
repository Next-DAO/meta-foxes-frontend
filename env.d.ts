declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_CHAIN: "mainnet" | "goerli";
    NEXT_PUBLIC_MAINNET_RPC_HTTP: string;
    NEXT_PUBLIC_MAINNET_RPC_WEBSOCKET: string;
  }
}
