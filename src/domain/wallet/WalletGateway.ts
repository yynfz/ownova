export interface WalletSession {
  address: string;
  chainId: string;
}

export interface WalletGateway {
  isAvailable(): boolean;
  connect(): Promise<WalletSession>;
  getSession(): Promise<WalletSession | null>;
  subscribe(listener: (session: WalletSession | null) => void): () => void;
}
