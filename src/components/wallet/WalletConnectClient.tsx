"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

type WalletName =
  | "MetaMask"
  | "Coinbase Wallet"
  | "WalletConnect"
  | "Ledger Vault"
  | "Social Account";
type ConnectionState = "idle" | "connecting" | "connected";

const properties = [
  {
    name: "Uluwatu Cliff Sanctuary",
    tier: "Tier I Alpha",
    detail: "28 Nights Annual Quota · 1/8 Fractional Title",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBV0Xzi99LCUiP7ovSw-JiQikTHaUhz_-VYdSMxoswNtSg1O6aBJoh2RvWlFoKgB2Ot_yMncLrjF9-R6YUJkF_FwgJUPt_Z0MdrDpUI959CawGkbGZHn7q5FV5Y8eh2VUchIkmky2M9pGyhZI65NJDMonw1mAPQE2HbOl3KSARMAhAsg3uyYk103fmXQDkATQFgSPy6YJQCNMiYNQgYcKDZPNqi828-93FKKFm7fM9nmUBUmFFVmMk",
  },
  {
    name: "Canggu Pavilion Suite",
    tier: "Tier II Horizon",
    detail: "14 Nights Annual Quota · 1/16 Fractional Title",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKfuUMLUk0Kj9678RDnfquUJcV4uCHqYm38Vio5LTVoUtVyf-KdJtsnqheqoS37rkiJ_rOlXOBgWx8-3Bh2tyDq76cDfSWCYreaFXJb9GmsVAL5S5TX3ElFktQotrG2dQ3EW63A-LY-M6XIGwhZB6dcn5pmw-dJPU8j0ASAs4oFZJBk7540nSbMxCU4ERHGXSeUe7AeV7z8mtTJitucyHj_y6d5XMzt33gDNbjLIkRwDvzjQeo9Pc",
  },
  {
    name: "Lombok Coastal Estate",
    tier: "Tier I Alpha",
    detail: "35 Nights Annual Quota · 1/6 Fractional Title",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD86wxdhTkVsx3gS40ZVu0R6fEghy1J_3-fpvMnplOpWT0ecYshaaQg1T6540Ki67ph-tMwiFi_kc3V3AxSW54IpbTDje06OL7qb4b0s5hATRk5LJ2tjqob5xPbBX8-yeI1MjSiYURGZaVBQ2ciWrZZFX8VdInKH3y0szcRo0R0mnZz0YZcicgN0vPmURzwHAujCnvZPU0SnSCWPCTaZlr9Wx2KR1-bl5u6530u-eH-o9B1lfyFw8",
  },
];

const walletOptions: Array<{
  name: WalletName;
  description: string;
  badge?: string;
  icon: string;
  iconClass: string;
}> = [
  {
    name: "MetaMask",
    description: "Desktop browser extension & mobile app",
    badge: "Recommended",
    icon: "account_balance_wallet",
    iconClass: "text-[#e2761b]",
  },
  {
    name: "Coinbase Wallet",
    description: "Standalone smart wallet or extension",
    icon: "account_balance_wallet",
    iconClass: "text-[#0052ff]",
  },
  {
    name: "WalletConnect",
    description: "Scan QR with Rainbow, Trust, or 100+ mobile apps",
    icon: "qr_code_2",
    iconClass: "text-[#3b99fc]",
  },
  {
    name: "Ledger Vault",
    description: "Direct hardware custody for membership estates",
    badge: "Vault Secured",
    icon: "lock",
    iconClass: "text-primary",
  },
];

export function WalletConnectClient() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [wallet, setWallet] = useState<WalletName | null>(null);
  const [state, setState] = useState<ConnectionState>("idle");

  const connect = (walletName: WalletName) => {
    setWallet(walletName);
    setState("connecting");
    window.setTimeout(() => {
      setState("connected");
      window.setTimeout(() => router.push("/portfolio"), 1200);
    }, 2000);
  };

  return (
    <main className="relative min-h-screen bg-background pt-20">
      <div className="pointer-events-none select-none opacity-60 blur-md">
        <div className="mx-auto max-w-[1440px] px-margin-mobile py-10 lg:px-margin-desktop">
          <div className="mb-10 flex items-center justify-between rounded-2xl bg-surface-container-low p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <h1 className="font-display text-2xl font-bold text-primary">
                Private Estates
              </h1>
              <span className="rounded-full bg-secondary-container px-3 py-1 text-xs text-on-secondary-container">
                12 Sanctums Available
              </span>
            </div>
            <div className="flex gap-2">
              <div className="h-10 w-48 rounded-xl bg-surface" />
              <div className="h-10 w-24 rounded-xl bg-primary-container" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.name}
                className="rounded-2xl bg-white p-3 shadow-sm"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="h-64 w-full rounded-xl object-cover"
                />
                <div className="space-y-2 p-4">
                  <div className="flex justify-between">
                    <h2 className="font-display text-xl">{property.name}</h2>
                    <span className="text-xs font-semibold text-on-tertiary-container">
                      {property.tier}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    {property.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-on-surface/40 p-4 backdrop-blur-md sm:p-6">
          <section className="relative my-auto w-full max-w-[580px] rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => {
                setIsOpen(false);
                router.back();
              }}
              aria-label="Close wallet dialog"
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition hover:bg-surface-container-high hover:text-on-surface"
            >
              <Icon className="text-[20px]">close</Icon>
            </button>

            <div className="mb-6 flex flex-col items-center text-center">
              <div className="relative mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-primary-container shadow-md">
                <div className="h-5 w-5 rotate-45 bg-on-tertiary-container shadow-sm" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary">
                Connect Your Web3 Wallet
              </h2>
              <p className="mt-2 max-w-[440px] text-sm leading-relaxed text-on-surface-variant">
                Access verified luxury villa memberships, seasonal stay
                allocations, and custodial smart contracts on Ethereum Sepolia.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-surface-container px-3.5 py-1.5 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-secondary" />
                </span>
                <span className="uppercase tracking-wider">
                  Sepolia Testnet
                </span>
                <span className="font-normal text-on-surface-variant">
                  · Chain ID 11155111
                </span>
                <Icon className="text-[16px]">expand_more</Icon>
              </button>
            </div>

            <div className="mb-6 space-y-2.5">
              {walletOptions.map((option) => (
                <WalletOption
                  key={option.name}
                  {...option}
                  onClick={() => connect(option.name)}
                />
              ))}
            </div>

            <div className="mb-6 flex items-start gap-3 rounded-2xl bg-surface-container p-3.5">
              <Icon className="mt-0.5 text-[20px] text-on-tertiary-container">
                info
              </Icon>
              <p className="text-xs leading-relaxed">
                <b className="text-primary">Need testnet access?</b> OWNOVA
                protocol will automatically disburse Sepolia test gas upon
                initial membership session initiation.
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <div className="h-px flex-grow bg-surface-container-high" />
              <span className="mx-4 text-[10px] font-semibold uppercase tracking-widest text-outline">
                Or Connect via Passkey / Social
              </span>
              <div className="h-px flex-grow bg-surface-container-high" />
            </div>
            <button
              onClick={() => connect("Social Account")}
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-surface-container-high p-3.5 text-sm font-semibold text-primary transition hover:bg-surface-variant"
            >
              <Icon className="text-[20px]">mark_email_read</Icon>Continue with
              Email (Account Abstraction ERC-4337)
            </button>

            <div className="mt-6 space-y-2 text-center">
              <p className="text-xs leading-relaxed text-on-surface-variant">
                Connecting your wallet does{" "}
                <b className="text-on-surface">not</b> authorize asset
                transfers. All stays and fractional deeds require explicit
                cryptographic EIP-712 signature verification.
              </p>
              <p className="text-[11px] text-outline">
                ✓ Audited by OpenZeppelin · Shielded Non-Custodial Verification
                · Terms of Protocol
              </p>
            </div>

            {state !== "idle" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white/95 p-8 text-center backdrop-blur-sm">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed text-primary ${state === "connecting" ? "animate-bounce" : ""}`}
                >
                  <Icon className="text-[32px]">
                    {state === "connecting" ? "sync" : "check_circle"}
                  </Icon>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  {state === "connecting"
                    ? `Connecting ${wallet}`
                    : "Connected!"}
                </h3>
                <p className="mb-6 mt-1 max-w-sm text-sm text-on-surface-variant">
                  {state === "connecting"
                    ? "Please sign the cryptographic challenge on Ethereum Sepolia to unlock your OWNOVA membership ledger."
                    : "Welcome back to OWNOVA. Redirecting to your estate portfolio..."}
                </p>
                <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-surface-container-high">
                  <div
                    className={`h-full bg-primary ${state === "connecting" ? "w-2/3 animate-pulse" : "w-full"}`}
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

function WalletOption({
  name,
  description,
  badge,
  icon,
  iconClass,
  onClick,
}: {
  name: WalletName;
  description: string;
  badge?: string;
  icon: string;
  iconClass: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-2xl bg-surface-container-low p-3.5 text-left shadow-sm transition hover:bg-surface-container hover:shadow-md sm:p-4"
    >
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition group-hover:scale-105">
          <Icon className={`text-[25px] ${iconClass}`}>{icon}</Icon>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-base font-bold">
              {name === "Ledger Vault" ? "Ledger / Hardware Vault" : name}
            </span>
            {badge && (
              <span className="rounded-full bg-secondary-container px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-on-surface-variant">{description}</p>
        </div>
      </div>
      <Icon className="text-[20px] text-outline transition group-hover:text-primary">
        chevron_right
      </Icon>
    </button>
  );
}
