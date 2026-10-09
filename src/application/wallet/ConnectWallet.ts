import type {
  WalletGateway,
  WalletSession,
} from "@/domain/wallet/WalletGateway";

export class ConnectWallet {
  constructor(private readonly walletGateway: WalletGateway) {}

  execute(): Promise<WalletSession> {
    return this.walletGateway.connect();
  }
}
