import type {
  WalletGateway,
  WalletSession,
} from "@/domain/wallet/WalletGateway";

const SEPOLIA_CHAIN_ID = "0xaa36a7";
const SEPOLIA_RPC_URL =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ?? "https://rpc.sepolia.org";

const SEPOLIA_NETWORK = {
  chainId: SEPOLIA_CHAIN_ID,
  chainName: "Sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [SEPOLIA_RPC_URL],
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};

type RequestArguments = {
  method: string;
  params?: unknown[] | object;
};

type ProviderListener = (...args: unknown[]) => void;

interface EthereumProvider {
  isMetaMask?: boolean;
  request<T = unknown>(args: RequestArguments): Promise<T>;
  on?(event: string, listener: ProviderListener): void;
  removeListener?(event: string, listener: ProviderListener): void;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export class MetaMaskWalletGateway implements WalletGateway {
  private get provider(): EthereumProvider | undefined {
    return typeof window === "undefined" ? undefined : window.ethereum;
  }

  isAvailable(): boolean {
    return Boolean(this.provider?.isMetaMask);
  }

  async connect(): Promise<WalletSession> {
    const provider = this.requireProvider();
    const accounts = await provider.request<string[]>({
      method: "eth_requestAccounts",
    });
    const address = accounts[0];

    if (!address) {
      throw new Error("MetaMask tidak mengembalikan alamat akun.");
    }

    await this.ensureSepolia(provider);
    const chainId = await provider.request<string>({ method: "eth_chainId" });
    return { address, chainId };
  }

  async getSession(): Promise<WalletSession | null> {
    const provider = this.provider;
    if (!provider) return null;

    const accounts = await provider.request<string[]>({
      method: "eth_accounts",
    });
    if (!accounts[0]) return null;

    const chainId = await provider.request<string>({ method: "eth_chainId" });
    return { address: accounts[0], chainId };
  }

  subscribe(listener: (session: WalletSession | null) => void): () => void {
    const provider = this.provider;
    if (!provider?.on) return () => undefined;

    const refresh = async () => {
      try {
        listener(await this.getSession());
      } catch {
        listener(null);
      }
    };

    const accountsChanged: ProviderListener = () => void refresh();
    const chainChanged: ProviderListener = () => void refresh();

    provider.on("accountsChanged", accountsChanged);
    provider.on("chainChanged", chainChanged);

    return () => {
      provider.removeListener?.("accountsChanged", accountsChanged);
      provider.removeListener?.("chainChanged", chainChanged);
    };
  }

  private requireProvider(): EthereumProvider {
    if (!this.provider?.isMetaMask) {
      throw new Error(
        "MetaMask tidak ditemukan. Instal ekstensi MetaMask lalu muat ulang halaman.",
      );
    }
    return this.provider;
  }

  private async ensureSepolia(provider: EthereumProvider): Promise<void> {
    const chainId = await provider.request<string>({ method: "eth_chainId" });
    if (chainId.toLowerCase() === SEPOLIA_CHAIN_ID) return;

    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_CHAIN_ID }],
      });
    } catch (error) {
      const providerError = error as { code?: number; message?: string };
      if (providerError.code !== 4902) {
        throw new Error(
          providerError.message ??
            "MetaMask gagal berpindah ke jaringan Sepolia.",
        );
      }

      await provider.request({
        method: "wallet_addEthereumChain",
        params: [SEPOLIA_NETWORK],
      });
    }
  }
}
