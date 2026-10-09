"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

const gallery = [
  {
    label: "Pool Deck",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHwb_h8WLd_Z72JS3ne0cAU5GUMjFQ5hHd-iMqx7_rV0FG0VzHlooiSBLUArz9C320EJdqVg_QXRDRpcq7yJa4cos_bUfk299GiIqi1jintPsZrF8Pu1OsP2fpHakgdN_o3HXuElfF1kXgw2AxTp2gaWwf79k-54ZTeJ9r6PrzHr8278ogTILgfbnEVvA0Tu0Wk7LXYUglzhLgnGFXoX4Ut-rk4vV2bO_SvRjkM93WI57y92U3KBA",
  },
  {
    label: "Master Suite",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC8JbtTBQsoQcDH0apYpZPsDxksRsgUNBp9X0bQFpIaDWhcUpqv4QMccXvfvm3JmHeDF7CG4r8PBSJ4Yru9njEvwhGsU7ivrr4RP8gSpaLpsJ2gtxSwJPvgKSQYH973fL_5wvJhu3ORdYa90hZ3GBGw-VlRfDHMyCiV9hDtiH79ydhHhFKhmZfR484Hho_SvfxyBEm9UP2Bw39H9-J1SFszQVVzwXcQsoka69_NUsn3pnnHCcM324",
  },
  {
    label: "Pavilion",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALfUYQ9Lh-p-w2bdu7vFPUBho13knTR7IcaA6BOyjYneynzikCemXUcMkqxuGPiSiW6nAJJYqJ6dxewah31DNAZvFG19bfC2P9uF9p2uOQ8TvJddix3OGaedVMJhPMQ18rnRHwgUoiR_KhtvzHpcppwe-9pzF0UyO8-r_Pw_CBnJKRtYtdXwvMUOJdC5y3k_ZrhrZ6poiq3N2D64qY5i49Drj2vcvgqHAIAbFMQgGS5E0BbJw8JKE",
  },
];
const hero =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDI4V0zKguEtfHONerVD-l15HwIPPuGveIamgvnsXm2tBcZCoz-xjAdFKbWLmsv4ruDCu7xvHpF6uJ8arWEUYZOLV54_lCQ145zVOHNd8blQk3eiS_3Lkzj_fH-25K8PBVCjFzNZ2SvOlspJjRzcVKYtz3_8FsXXuQTt3PTG55aCsD9lIr5_37x0G_O6B5t2-PlUTV0m-8S9H3D3Cg32s74IgrelLoULvYdVDDAuaMmQtHyzQQVCqE";

export function AssetDetailClient({ assetId }: { assetId: string }) {
  const [selected, setSelected] = useState(-1);
  const [toast, setToast] = useState("");
  const notify = (value: string) => {
    setToast(value);
    window.setTimeout(() => setToast(""), 2400);
  };
  const mainImage = selected < 0 ? hero : gallery[selected].src;
  return (
    <main className="w-full bg-background pt-20">
      {toast && (
        <div className="fixed right-8 top-24 z-50 rounded-xl bg-primary px-5 py-3 text-white shadow-xl">
          {toast}
        </div>
      )}
      <div className="mx-auto max-w-[1400px] px-margin-mobile py-10 lg:px-margin-desktop">
        <div className="mb-6 flex justify-between">
          <Link
            className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary"
            href="/explore"
          >
            ← Back to Marketplace
          </Link>
          <div className="hidden gap-2 sm:flex">
            <button className="rounded-full bg-surface-container px-3 py-1.5 text-xs">
              Share Asset
            </button>
            <button className="rounded-full bg-surface-container px-3 py-1.5 text-xs">
              Watchlist
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-6 lg:w-[45%]">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface-container shadow-md">
              <img
                src={mainImage}
                alt="Nusa Serenity Villa"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold">
                ★ Membership NFT
              </span>
              <span className="absolute bottom-4 left-4 rounded-xl bg-primary/75 px-3 py-1.5 text-xs text-primary-fixed">
                ● Inspected & Surveyed Nov 2024
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {gallery.map((g, i) => (
                <button
                  onClick={() => setSelected(i)}
                  key={g.label}
                  className={`relative aspect-[16/10] overflow-hidden rounded-xl ${selected === i ? "ring-2 ring-primary ring-offset-2" : "opacity-85"}`}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1.5 left-2 rounded bg-primary/60 px-1.5 py-0.5 text-xs text-white">
                    {g.label}
                  </span>
                </button>
              ))}
            </div>
            <OnChainDetails assetId={assetId} />
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-[55%]">
            <div>
              <div className="flex gap-2">
                <span className="rounded-full bg-surface-container-highest px-3 py-1 text-xs font-semibold">
                  ✓ Verified Operator · Nusa Retreats
                </span>
                <span className="rounded-full bg-surface-container px-3 py-1 text-xs">
                  Tier 1 Core Asset
                </span>
              </div>
              <h1 className="mt-3 font-display text-4xl font-bold">
                Nusa Serenity Villa — Membership NFT #{assetId}
              </h1>
              <p className="mt-2 text-sm text-on-surface-variant">
                ⌖ <b>Sayan Ridge, Ubud, Bali, Indonesia</b> ·{" "}
                <span className="text-secondary">Private Valley View</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-surface-container p-4 sm:grid-cols-4">
              {[
                ["bed", "Bedrooms", "4 En-suite Beds"],
                ["group", "Occupancy", "8 Guests Max"],
                ["pool", "Facilities", "18m Infinity Pool"],
                ["room_service", "Hospitality", "Dedicated Butler"],
              ].map(([i, l, v]) => (
                <div className="flex gap-2" key={l}>
                  <Icon className="text-primary-container">{i}</Icon>
                  <div>
                    <small>{l}</small>
                    <b className="block text-sm">{v}</b>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 rounded-xl bg-surface-container-high p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container text-white">
                i
              </span>
              <div>
                <b className="text-sm text-primary">
                  Annual Allocation Mechanics
                </b>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  This membership provides contractual eligibility for future
                  annual vacation allocations (14 nights/year through 2034).
                  Previously minted single-season Usage Right NFTs remain
                  autonomous and tradeable even after this Membership NFT
                  transfers.
                </p>
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl bg-white p-5 shadow-sm sm:grid-cols-2">
              <AssetMetric
                label="Benefit Period"
                value="2024 – 2034"
                detail="10 Years Guaranteed Rights"
              />
              <AssetMetric
                label="Annual Allocation"
                value="14 Nights / Year"
                detail="Prime & High Season Access"
              />
              <AssetMetric
                label="Next Eligible Allocation"
                value="Q1 2025"
                detail="Season 2025 Mint Window"
              />
              <AssetMetric
                label="Transfer Status"
                value="Unlocked & Tradeable"
                detail="Instant Custodial Handshake"
              />
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <div className="flex flex-col justify-between gap-3 border-b border-surface-container pb-6 sm:flex-row sm:items-end">
                <div>
                  <small className="font-semibold uppercase tracking-wider text-on-surface-variant">
                    Best Ask / Fixed Price
                  </small>
                  <div>
                    <b className="font-display text-6xl text-primary">
                      2.8 ETH
                    </b>{" "}
                    <span className="text-xl text-on-surface-variant">
                      ≈ $8,400 USD
                    </span>
                  </div>
                </div>
                <div className="text-sm text-on-surface-variant">
                  Floor: <b>2.5 ETH</b>
                  <br />
                  Last Transferred: <b>2.65 ETH</b>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => notify("Purchase transaction prepared")}
                  className="flex-1 rounded-xl bg-primary px-6 py-4 font-bold text-white"
                >
                  Buy Membership Now
                </button>
                <button
                  onClick={() => notify("Offer flow opened")}
                  className="flex-1 rounded-xl bg-surface-container-low px-6 py-4 font-bold text-primary"
                >
                  Make an Offer
                </button>
              </div>
              <p className="mt-5 text-xs text-on-surface-variant">
                OWNOVA NFTs represent contractual vacation access rights and do
                not constitute ownership of physical property, land, buildings,
                or company shares.
              </p>
            </div>
          </div>
        </div>
        <section className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-wider text-on-tertiary-container">
            Derived Allocations
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold">
            Available 2024 / 2025 Usage Rights for this Villa
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <UsagePass
              season="Season 2024 Active"
              token="#UR-8802"
              price="0.45 ETH"
              title="7 Nights Stays — High Season Pass"
              nights="7 of 7 Nights Available"
              color="bg-primary"
              notify={notify}
            />
            <UsagePass
              season="Season 2025 Pre-mint"
              token="#UR-9140"
              price="0.90 ETH"
              title="14 Nights Stays — Full Annual Pass"
              nights="14 of 14 Nights Available"
              color="bg-on-tertiary-container"
              notify={notify}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
function AssetMetric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="border-l-4 border-on-tertiary-container pl-4">
      <small className="uppercase tracking-wider text-on-surface-variant">
        {label}
      </small>
      <b className="mt-1 block text-xl text-primary">{value}</b>
      <small className="text-on-surface-variant">{detail}</small>
    </div>
  );
}
function OnChainDetails({ assetId }: { assetId: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h3 className="font-display text-xl font-semibold">On-chain Details</h3>
        <span className="rounded-full bg-secondary-container px-2.5 py-1 text-xs font-semibold">
          Audited Contract
        </span>
      </div>
      <div className="grid gap-4 text-sm sm:grid-cols-2">
        <p>
          <small>Contract Address</small>
          <b className="block font-mono text-primary">0x8a92...11a2 ↗</b>
        </p>
        <p>
          <small>Token ID</small>
          <b className="block font-mono">#{assetId}</b>
        </p>
        <p>
          <small>Token Standard</small>
          <b className="block">ERC-721 Custodial Right</b>
        </p>
        <p>
          <small>Current Owner</small>
          <b className="block font-mono">0x3F8a...9B21</b>
        </p>
        <p>
          <small>Network</small>
          <b className="block">● Ethereum Sepolia</b>
        </p>
        <p>
          <small>Metadata Storage</small>
          <b className="block">IPFS Decentralized Pin</b>
        </p>
      </div>
    </div>
  );
}
function UsagePass({
  season,
  token,
  price,
  title,
  nights,
  color,
  notify,
}: {
  season: string;
  token: string;
  price: string;
  title: string;
  nights: string;
  color: string;
  notify: (v: string) => void;
}) {
  return (
    <article className="rounded-3xl bg-white p-7 shadow-sm">
      <div className="flex justify-between">
        <div>
          <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold">
            {season}
          </span>
          <span className="ml-2 font-mono text-xs">{token}</span>
        </div>
        <b className="text-xl text-primary">{price}</b>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-on-surface-variant">
        Valid seasonal allocation with curated hospitality benefits and verified
        quota.
      </p>
      <div className="mt-5 rounded-2xl bg-surface-container p-4">
        <div className="flex justify-between text-xs">
          <span>Stay Quota Consumption</span>
          <b>{nights}</b>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-dim">
          <div className={`h-full w-full ${color}`} />
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => notify(`Acquire flow opened for ${token}`)}
          className="flex-1 rounded-xl bg-primary py-3 font-semibold text-white"
        >
          Acquire Stay Right
        </button>
        <button className="rounded-xl bg-surface-container px-4 py-3 font-semibold">
          Calendar Details
        </button>
      </div>
    </article>
  );
}
