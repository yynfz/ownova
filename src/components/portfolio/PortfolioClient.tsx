"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type MainTab = "assets" | "activity" | "operator";

const transactions = [
  {
    icon: "event",
    type: "Reservation",
    property: "Nusa Serenity Villa",
    date: "Oct 08, 2024",
    amount: "-5 Nights",
    status: "Confirmed",
    hash: "0x12a...45b",
  },
  {
    icon: "shopping_cart",
    type: "Purchase",
    property: "Azure Coast Residence",
    date: "Sep 21, 2024",
    amount: "0.35 ETH",
    status: "Settled",
    hash: "0x88c...91d",
  },
  {
    icon: "sync_alt",
    type: "Transfer",
    property: "Taman Sora Retreat",
    date: "Aug 14, 2024",
    amount: "Membership #4410",
    status: "Settled",
    hash: "0x44f...22a",
  },
  {
    icon: "hotel_class",
    type: "Night Issuance",
    property: "Nusa Serenity Villa",
    date: "Jan 01, 2024",
    amount: "+14 Nights",
    status: "Minted",
    hash: "0x99e...33c",
  },
];

export function PortfolioClient() {
  const [tab, setTab] = useState<MainTab>("assets");
  const [toast, setToast] = useState("");
  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  return (
    <main className="w-full bg-background pt-20">
      {toast && (
        <div className="fixed right-8 top-24 z-50 flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-white shadow-xl">
          <Icon className="text-[20px] text-primary-fixed">check_circle</Icon>
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}
      <div className="mx-auto max-w-[1600px] px-margin-mobile lg:px-margin-desktop">
        <div className="flex flex-col gap-6 pb-10 pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-on-surface-variant">
              Verified Custody Ledger ·{" "}
              <span className="font-medium text-secondary">0x3F8a...9B21</span>
            </p>
            <h1 className="mt-1 font-display text-4xl font-bold">
              Portfolio Overview
            </h1>
            <p className="mt-1 text-sm text-on-surface-variant">
              Manage your verified vacation assets, bookings, and on-chain
              allocations.
            </p>
          </div>
          <div className="inline-flex rounded-xl bg-surface-container-high p-1 shadow-inner">
            {(
              [
                ["assets", "My Assets"],
                ["activity", "Activity History"],
                ["operator", "Operator Portal"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setTab(value)}
                className={`rounded-lg px-5 py-2.5 text-sm transition ${tab === value ? "bg-white font-semibold text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
              >
                {label}
                {value === "operator" && (
                  <span className="ml-2 inline-block h-2 w-2 rounded-full bg-on-tertiary-container" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            icon="account_balance_wallet"
            label="Est. Portfolio Value"
            value="4.25 ETH"
            detail="~$12,750 USD · +8.4% YoY"
          />
          <Metric
            icon="verified_user"
            label="Memberships Owned"
            value="2 NFTs"
            detail="1 Prime Villa · 1 Coastal Right"
          />
          <Metric
            icon="bed"
            label="Available Nights (2024)"
            value="14 Nights"
            detail="7 Bookable in Bali · 7 in Lombok"
          />
          <Metric
            icon="calendar_month"
            label="Active Bookings"
            value="1 Confirmed"
            detail="Check-in Nov 10, 2024"
          />
        </div>

        {tab === "assets" && <AssetsView notify={notify} setTab={setTab} />}
        {tab === "activity" && <ActivityView />}
        {tab === "operator" && <OperatorView notify={notify} />}
      </div>
    </main>
  );
}

function Metric({
  icon,
  label,
  value,
  detail,
}: {
  icon: string;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-on-surface-variant">
          {label}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high">
          <Icon className="text-[18px]">{icon}</Icon>
        </span>
      </div>
      <div className="font-display text-3xl font-bold text-primary">
        {value}
      </div>
      <p className="mt-1 text-xs text-on-surface-variant">{detail}</p>
    </div>
  );
}

function AssetsView({
  notify,
  setTab,
}: {
  notify: (v: string) => void;
  setTab: (v: MainTab) => void;
}) {
  return (
    <div className="space-y-16">
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              My Owned Vacation Assets
            </h2>
            <p className="text-sm text-on-surface-variant">
              Transferable memberships and seasonal night usage vouchers
              recorded on Sepolia.
            </p>
          </div>
          <span className="hidden rounded-full bg-surface-container px-3 py-1.5 text-xs uppercase text-on-surface-variant sm:block">
            🔒 Self-Custodial Vault
          </span>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <OwnedAsset
            name="Nusa Serenity Villa"
            token="Membership NFT #7721"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZKGJuh-kaearSC89EK-a_iJsWCGfCAXHpj_FHpnvqppx6uzYe1RQlzEIdWkEyx6LmLk-VuyOMSjBnJBxNbjXhYPrrcB1MSSbVKrAWN4VJQiaUr3iBWJ2kJnmfVweDV-p6Cnyj4hIAoQkNDUw_8XLErP3qYgw3jvyA2gbhqIit1BLcHtnX0vSitdcXy7Fb-pSF--oYe1jda6bj3qAQmd6sJzVQkkzWuJ4gy2OT6VAp_dpyHJcC0s"
            location="Ubud, Bali, Indonesia"
            operator="Nusa Retreats"
            period="2024 - 2034 (10 Years Guaranteed)"
            allocation="14 Nights / Yr"
            used={4}
            reserved={3}
            available={7}
            secondary="Trade / Relist"
            onPrimary={() =>
              notify("Initiating reservation for Nusa Serenity Villa")
            }
            onSecondary={() =>
              notify("Opening secondary peer-to-peer relisting modal")
            }
          />
          <OwnedAsset
            name="Azure Coast Residence"
            token="Usage Right NFT #UR-p2-24-08"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDmMSBpPwCkewgYVadauDQa1tzArvZ209l75MrkyNeihwI3gtSKz_AsFISlRD5tiDpJ62bJew5pLpwc-kU89exf2cosLc83zQlFgvcAItC6hINkBPZepk6z6F3sa64gT2PC7wMTo1swdjhZC0xyNdATB59DVPGN50iOcRYRWAicze5zVlpLk-KHtV0nQV9banQTZ2IabhEzQbzYHp-8a3g90LbGT0vGBd5p4YnwCJltodIEomZzTrg"
            location="South Coast, Lombok, Indonesia"
            operator="Azure Hospitality"
            period="2024 Season Exclusive (Expires Dec 31, 2024)"
            allocation="7 Nights Total"
            used={0}
            reserved={0}
            available={7}
            secondary="List for Auction"
            onPrimary={() => notify("Reserving stay at Azure Coast Residence")}
            onSecondary={() =>
              notify("Deploying Dutch Auction contract for #UR-p2-24-08")
            }
          />
        </div>
      </section>
      <Transactions notify={notify} />
      <section className="rounded-3xl bg-surface-container-low p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              ● Operator Portal Quick View
            </p>
            <div className="mt-2 flex gap-6">
              <span>
                Registered Villas: <b>3</b>
              </span>
              <span>
                Platform Utilization: <b className="text-secondary">92%</b>
              </span>
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <b className="text-xs uppercase text-secondary">
                Upcoming Arrival
              </b>
              <p className="font-display text-lg font-semibold">
                Nov 10 - Nov 15: Nusa Serenity Villa
              </p>
              <small>Guest: 0x3F8a...9B21</small>
            </div>
          </div>
          <button
            onClick={() => setTab("operator")}
            className="rounded-xl bg-primary px-6 py-3.5 font-semibold text-white"
          >
            Switch to Operator Console →
          </button>
        </div>
      </section>
    </div>
  );
}

function OwnedAsset({
  name,
  token,
  image,
  location,
  operator,
  period,
  allocation,
  used,
  reserved,
  available,
  secondary,
  onPrimary,
  onSecondary,
}: {
  name: string;
  token: string;
  image: string;
  location: string;
  operator: string;
  period: string;
  allocation: string;
  used: number;
  reserved: number;
  available: number;
  secondary: string;
  onPrimary: () => void;
  onSecondary: () => void;
}) {
  const total = used + reserved + available;
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div>
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
            ✓ {token}
          </span>
          <div className="absolute inset-x-4 bottom-4 flex justify-between rounded-xl bg-white/90 p-3 text-xs backdrop-blur">
            <span>⌖ {location}</span>
            <span className="rounded-full bg-secondary-container px-2">
              Operated by {operator}
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold">{name}</h3>
            <p className="text-xs text-on-surface-variant">
              Benefit Period: <b>{period}</b>
            </p>
          </div>
          <div className="text-right">
            <small className="uppercase text-on-surface-variant">
              Annual Allocation
            </small>
            <b className="block text-xl text-primary">{allocation}</b>
          </div>
        </div>
        <div className="my-6 rounded-2xl bg-surface-container-low p-4">
          <div className="mb-3 flex justify-between text-sm">
            <b>2024 Quota Allocation</b>
            <b className="text-secondary">{available} Nights Available</b>
          </div>
          <div className="flex h-3 overflow-hidden rounded-full bg-surface-container-highest">
            <i
              className="bg-outline-variant"
              style={{ width: `${(used / total) * 100}%` }}
            />
            <i
              className="bg-on-tertiary-container"
              style={{ width: `${(reserved / total) * 100}%` }}
            />
            <i
              className="bg-secondary"
              style={{ width: `${(available / total) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs text-on-surface-variant">
            <span>{used} Used</span>
            <span>{reserved} Reserved</span>
            <b>{available} Available for 2024</b>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onPrimary}
          className="flex-1 rounded-xl bg-primary-container px-5 py-3 font-semibold text-white"
        >
          Book Dates
        </button>
        <button
          onClick={onSecondary}
          className="flex-1 rounded-xl bg-surface-container px-5 py-3 font-semibold"
        >
          {secondary}
        </button>
      </div>
    </article>
  );
}

function Transactions({ notify }: { notify: (v: string) => void }) {
  return (
    <section>
      <div className="mb-6 flex justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold">
            On-Chain Transaction & Settlement Activity
          </h2>
          <p className="text-sm text-on-surface-variant">
            Immutable ledger events verified through OWNOVA ERC-721 and
            NightQuota smart contracts.
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container text-xs uppercase tracking-wider text-on-surface-variant">
              <tr>
                {[
                  "Type",
                  "Property / Asset",
                  "Date",
                  "Amount / Quota",
                  "Status",
                  "Tx Hash",
                ].map((h) => (
                  <th className="px-6 py-4" key={h}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {transactions.map((t) => (
                <tr className="hover:bg-surface-container-low/60" key={t.hash}>
                  <td className="px-6 py-4 font-semibold">
                    <Icon className="mr-2 align-middle text-[16px]">
                      {t.icon}
                    </Icon>
                    {t.type}
                  </td>
                  <td className="px-6 py-4 font-medium">{t.property}</td>
                  <td className="px-6 py-4 text-on-surface-variant">
                    {t.date}
                  </td>
                  <td className="px-6 py-4 font-semibold">{t.amount}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-secondary-container px-2.5 py-1 text-xs font-semibold">
                      ● {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono">
                    <button
                      onClick={() =>
                        notify(`Inspecting Tx: ${t.hash} on Sepolia Etherscan`)
                      }
                    >
                      {t.hash} ↗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ActivityView() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex justify-between border-b border-surface-container-high pb-6">
        <div>
          <h2 className="font-display text-2xl font-bold">
            Complete Blockchain Settlement Log
          </h2>
          <p className="text-sm text-on-surface-variant">
            Cryptographic proof of stay execution and custodial compliance for
            wallet 0x3F8a...9B21.
          </p>
        </div>
        <span className="rounded-xl bg-surface-container px-4 py-2 text-sm">
          Total Recorded: 4 Transactions
        </span>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Metric
          icon="local_gas_station"
          label="Gas Used (Lifetime)"
          value="0.0142 ETH"
          detail="Sepolia testnet activity"
        />
        <Metric
          icon="bed"
          label="Nights Consumed"
          value="9 Nights Total"
          detail="Across verified stays"
        />
        <Metric
          icon="verified_user"
          label="Custody State"
          value="Audited & Verified"
          detail="Contracts synchronized"
        />
      </div>
    </section>
  );
}

function OperatorView({ notify }: { notify: (v: string) => void }) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col justify-between gap-4 border-b border-surface-container-high pb-6 md:flex-row md:items-end">
        <div>
          <span className="rounded-full bg-surface-container px-3 py-1 text-xs font-bold text-on-tertiary-container">
            ✓ Verified Operator Console
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold">
            Operator Dashboard
          </h2>
          <p className="text-sm text-on-surface-variant">
            Oversee hospitality capacity, physical asset readiness, and guest
            check-in validations.
          </p>
        </div>
        <button
          onClick={() => notify("Opening Register New Villa modal flow")}
          className="rounded-xl bg-primary px-5 py-3 font-semibold text-white"
        >
          ＋ Register New Villa
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Metric
          icon="home_work"
          label="Registered Villas"
          value="3"
          detail="100% Verified"
        />
        <Metric
          icon="verified_user"
          label="Active Memberships"
          value="142"
          detail="Spread over 3 estates"
        />
        <Metric
          icon="hotel_class"
          label="Nights Issued (2024)"
          value="1,988"
          detail="Capacity healthy"
        />
        <Metric
          icon="query_stats"
          label="Average Utilization"
          value="92%"
          detail="Peak season active"
        />
      </div>
    </section>
  );
}
