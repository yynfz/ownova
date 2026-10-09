"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ConnectWallet } from "@/application/wallet/ConnectWallet";
import type { WalletSession } from "@/domain/wallet/WalletGateway";
import { MetaMaskWalletGateway } from "@/infrastructure/wallet/MetaMaskWalletGateway";

interface WalletContextValue {
  session: WalletSession | null;
  isLoading: boolean;
  isConnecting: boolean;
  error: string;
  connect: () => Promise<WalletSession>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextValue | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const gateway = useMemo(() => new MetaMaskWalletGateway(), []);
  const [session, setSession] = useState<WalletSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    void gateway
      .getSession()
      .then((value) => active && setSession(value))
      .catch(() => active && setSession(null))
      .finally(() => active && setIsLoading(false));

    const unsubscribe = gateway.subscribe((value) => {
      if (active) setSession(value);
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, [gateway]);

  const connect = useCallback(async () => {
    setError("");
    setIsConnecting(true);
    try {
      const value = await new ConnectWallet(gateway).execute();
      setSession(value);
      return value;
    } catch (connectionError) {
      const message =
        connectionError instanceof Error
          ? connectionError.message
          : "Tidak dapat menghubungkan MetaMask.";
      setError(message);
      throw connectionError;
    } finally {
      setIsConnecting(false);
    }
  }, [gateway]);

  const disconnect = useCallback(() => {
    setSession(null);
    setError("");
  }, []);

  return (
    <WalletContext.Provider
      value={{ session, isLoading, isConnecting, error, connect, disconnect }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet(): WalletContextValue {
  const value = useContext(WalletContext);
  if (!value) {
    throw new Error("useWallet harus digunakan di dalam WalletProvider.");
  }
  return value;
}
