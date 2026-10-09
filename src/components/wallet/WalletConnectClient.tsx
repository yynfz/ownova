"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { useWallet } from "@/components/wallet/WalletProvider";

export function WalletConnectClient() {
  const router = useRouter();
  const { session, connect, isConnecting, error } = useWallet();
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    if (!session) return;
    const timer = window.setTimeout(() => router.push("/portfolio"), 800);
    return () => window.clearTimeout(timer);
  }, [router, session]);

  const connectMetaMask = async () => {
    setLocalError("");
    try {
      await connect();
    } catch (connectionError) {
      const providerError = connectionError as { code?: number };
      if (providerError?.code === 4001) {
        setLocalError("Permintaan koneksi dibatalkan oleh pengguna.");
      }
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-4 pt-20">
      <section className="relative w-full max-w-[580px] rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Close wallet dialog"
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-surface-container"
        >
          <Icon className="text-[20px]">close</Icon>
        </button>

        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-container shadow-md">
            <div className="h-5 w-5 rotate-45 bg-on-tertiary-container" />
          </div>
          <h1 className="font-display text-3xl font-bold text-primary">
            Connect Your Web3 Wallet
          </h1>
          <p className="mt-2 max-w-md text-sm text-on-surface-variant">
            Hubungkan MetaMask dan gunakan jaringan Ethereum Sepolia untuk
            mengakses OWNOVA.
          </p>
        </div>

        {(localError || error) && (
          <div className="mb-4 rounded-2xl bg-red-50 p-3 text-center text-sm text-red-800">
            {localError || error}
          </div>
        )}

        {session ? (
          <div className="rounded-2xl bg-secondary-container p-5 text-center">
            <Icon className="text-4xl text-primary">check_circle</Icon>
            <b className="mt-2 block">Wallet terhubung</b>
            <p className="mt-1 break-all font-mono text-xs">
              {session.address}
            </p>
            <p className="mt-2 text-xs">Mengarahkan ke portfolio...</p>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => void connectMetaMask()}
            disabled={isConnecting}
            className="flex w-full items-center justify-between rounded-2xl bg-surface-container-low p-4 text-left shadow-sm transition hover:bg-surface-container disabled:cursor-wait disabled:opacity-70"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <Icon className="text-[26px] text-[#e2761b]">
                  account_balance_wallet
                </Icon>
              </span>
              <span>
                <b className="block font-display text-lg">MetaMask</b>
                <small className="text-on-surface-variant">
                  Browser extension wallet
                </small>
              </span>
            </div>
            <Icon className="text-[22px]">chevron_right</Icon>
          </button>
        )}

        <div className="mt-6 rounded-2xl bg-surface-container p-4 text-xs leading-relaxed">
          <b>Keamanan:</b> OWNOVA tidak pernah meminta seed phrase atau private
          key. Semua persetujuan dilakukan melalui MetaMask.
        </div>

        {isConnecting && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white/95 p-8 text-center backdrop-blur-sm">
            <Icon className="animate-spin text-5xl text-primary">
              progress_activity
            </Icon>
            <h2 className="mt-4 font-display text-2xl font-bold">
              Connecting MetaMask
            </h2>
            <p className="mt-2 max-w-sm text-sm text-on-surface-variant">
              Setujui koneksi akun dan perpindahan jaringan Sepolia di MetaMask.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
