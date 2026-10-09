"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useWallet } from "@/components/wallet/WalletProvider";

const SEPOLIA_CHAIN_ID = "0xaa36a7";

function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function Header() {
  const { session, isLoading, disconnect } = useWallet();
  const isSepolia = session?.chainId.toLowerCase() === SEPOLIA_CHAIN_ID;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,.04)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-margin-mobile lg:px-margin-desktop">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-container">
              <i className="h-3.5 w-3.5 rotate-45 bg-on-tertiary-container" />
            </span>
            <b className="font-display text-xl">OWNOVA</b>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/explore">Explore</Link>
            <Link href="/explore">Assets</Link>
            <Link href="/portfolio">Portfolio</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {session && (
            <span
              className={`hidden rounded-full px-3 py-1.5 text-xs sm:flex ${isSepolia ? "bg-secondary-container" : "bg-red-100 text-red-800"}`}
            >
              ●&nbsp;
              {isSepolia
                ? "Sepolia Testnet"
                : `Wrong Network (${session.chainId})`}
            </span>
          )}

          {isLoading ? (
            <span className="rounded-full bg-white px-4 py-2 text-xs shadow-sm">
              Checking wallet...
            </span>
          ) : session ? (
            <>
              <Link
                href="/profile"
                className="rounded-full bg-white px-3.5 py-1.5 text-xs shadow-sm"
              >
                {shortenAddress(session.address)}
              </Link>
              <button
                type="button"
                onClick={disconnect}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
                aria-label="Disconnect local wallet session"
                title="Disconnect"
              >
                <Icon className="text-[18px]">logout</Icon>
              </button>
            </>
          ) : (
            <Link
              href="/connect-wallet"
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white"
            >
              Connect Wallet
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
