"use client";
import { useMemo, useState } from "react";
import { Asset, AssetType } from "@/domain/entities/Asset";
import { FilterAssets } from "@/application/use-cases/FilterAssets";
export function MarketplaceClient({ assets }: { assets: Asset[] }) {
  const [tab, setTab] = useState<"all" | AssetType>("all"),
    [q, setQ] = useState(""),
    [dests, setDests] = useState<string[]>([]),
    [types, setTypes] = useState<("all" | AssetType)[]>(["all"]),
    [min, setMin] = useState<number | null>(null),
    [max, setMax] = useState<number | null>(null),
    [sort, setSort] = useState("recent"),
    [toast, setToast] = useState("");
  const list = useMemo(
    () =>
      new FilterAssets().execute(assets, {
        tab,
        query: q,
        destinations: dests,
        types,
        min,
        max,
        sort,
      }),
    [assets, tab, q, dests, types, min, max, sort],
  );
  const notify = (v: string) => {
    setToast(v);
    setTimeout(() => setToast(""), 2200);
  };
  const toggle = (v: string, set: (x: string[]) => void, arr: string[]) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  return (
    <>
      {toast && (
        <div className="fixed left-1/2 top-24 z-50 -translate-x-1/2 rounded-full bg-primary px-6 py-3 text-white shadow-xl">
          ✓ {toast}
        </div>
      )}
      <div className="flex flex-col gap-8 pb-20 lg:flex-row">
        <aside className="w-full space-y-6 lg:w-72">
          <input
            className="w-full rounded-xl bg-white p-3 shadow-sm"
            placeholder="Search destination or villa..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
            <Filter
              title="Asset Type"
              values={[
                ["all", "All Assets"],
                ["membership", "Membership NFTs"],
                ["usage", "Usage Right NFTs"],
              ]}
              selected={types}
              onToggle={(v) => toggle(v, (x) => setTypes(x as any), types)}
            />
            <Filter
              title="Destination"
              values={[
                ["bali", "Bali, Indonesia"],
                ["lombok", "Lombok, Indonesia"],
                ["phuket", "Phuket, Thailand"],
              ]}
              selected={dests}
              onToggle={(v) => toggle(v, setDests, dests)}
            />
            <div>
              <b>Price Range (ETH)</b>
              <div className="mt-3 flex gap-2">
                <input
                  className="w-1/2 rounded-lg bg-surface-container-low p-2"
                  type="number"
                  placeholder="Min"
                  onChange={(e) =>
                    setMin(e.target.value ? +e.target.value : null)
                  }
                />
                <input
                  className="w-1/2 rounded-lg bg-surface-container-low p-2"
                  type="number"
                  placeholder="Max"
                  onChange={(e) =>
                    setMax(e.target.value ? +e.target.value : null)
                  }
                />
              </div>
            </div>
            <button
              className="w-full rounded-lg bg-surface-container p-3 font-bold"
              onClick={() => {
                setQ("");
                setDests([]);
                setTypes(["all"]);
                setMin(null);
                setMax(null);
              }}
            >
              ↻ Reset Filters
            </button>
          </div>
        </aside>
        <section className="min-w-0 flex-1">
          <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl bg-surface-container-low p-2 sm:flex-row">
            <div className="flex rounded-xl bg-surface-container p-1">
              {(["all", "membership", "usage"] as const).map((v) => (
                <button
                  className={`flex-1 rounded-lg px-5 py-2 capitalize ${tab === v ? "bg-white font-bold text-primary shadow-sm" : ""}`}
                  onClick={() => setTab(v)}
                  key={v}
                >
                  {v === "usage" ? "Usage Rights" : v}
                </button>
              ))}
            </div>
            <select
              className="rounded-xl bg-white px-4"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="recent">Recently Listed</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="nights-desc">Allocation: Highest</option>
            </select>
          </div>
          {list.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {list.map((a) => (
                <AssetCard
                  key={a.id}
                  asset={a}
                  action={() =>
                    notify(
                      `${a.auction ? "Auction bid modal initiated" : "Transaction prepared"} for ${a.name} (#${a.id})`,
                    )
                  }
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-surface-container-low p-16 text-center">
              <h3 className="font-display text-xl font-bold">
                No vacation assets found
              </h3>
              <p>Adjust your filters or price range.</p>
            </div>
          )}
          <div className="mt-12 rounded-2xl bg-surface-container-low p-5 text-sm">
            Displaying{" "}
            <b>
              {list.length} of {assets.length}
            </b>{" "}
            active verified market orders
          </div>
        </section>
      </div>
    </>
  );
}
function Filter({
  title,
  values,
  selected,
  onToggle,
}: {
  title: string;
  values: string[][];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <b>{title}</b>
      <div className="mt-3 space-y-3">
        {values.map(([v, l]) => (
          <label className="flex cursor-pointer gap-3" key={v}>
            <input
              type="checkbox"
              checked={selected.includes(v)}
              onChange={() => onToggle(v)}
            />
            <span>{l}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
function AssetCard({ asset: a, action }: { asset: Asset; action: () => void }) {
  const total = (a.used || 0) + (a.reserved || 0) + a.nights;
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={a.image}
          alt={a.name}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-bold ${a.type === "membership" ? "bg-tertiary-fixed" : "bg-secondary-container"}`}
        >
          {a.type === "membership" ? "✓ Membership NFT" : "▣ Usage Right NFT"}
        </span>
        {a.auction && (
          <span className="absolute bottom-3 left-3 rounded-lg bg-[#4f3300] px-3 py-1 text-xs font-bold text-[#ca9a52]">
            ◷ {a.auction}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs">
          ⌖ {a.location}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{a.name}</h3>
        <small>Token ID: {a.id}</small>
        {a.type === "membership" ? (
          <div className="my-5 space-y-2 rounded-xl bg-surface-container-low p-4 text-sm">
            <p className="flex justify-between">
              <span>Annual Allocation</span>
              <b>{a.nights} Nights / Year</b>
            </p>
            <p className="flex justify-between">
              <span>Benefit Period</span>
              <b>{a.period}</b>
            </p>
          </div>
        ) : (
          <div className="my-5 rounded-xl bg-surface-container-low p-4 text-sm">
            <p className="mb-2 flex justify-between">
              <span>Valid Year</span>
              <b>{a.period}</b>
            </p>
            <p className="mb-2 flex justify-between">
              <span>Quota Allocation</span>
              <b>{a.nights} Nights Available</b>
            </p>
            <div className="flex h-2.5 overflow-hidden rounded-full">
              <i
                className="bg-on-surface-variant"
                style={{ width: `${((a.used || 0) / total) * 100}%` }}
              />
              <i
                className="bg-on-tertiary-container"
                style={{ width: `${((a.reserved || 0) / total) * 100}%` }}
              />
              <i
                className="bg-secondary"
                style={{ width: `${(a.nights / total) * 100}%` }}
              />
            </div>
          </div>
        )}
        <div className="flex items-end justify-between border-t border-surface-container pt-4">
          <div>
            <small>{a.auction ? "Current Bid" : "Fixed Price"}</small>
            <b className="block text-xl">{a.price.toFixed(2)} ETH</b>
            <small>~{a.usd} USD</small>
          </div>
          <button
            onClick={action}
            className="rounded-xl bg-primary-container px-6 py-2.5 font-bold text-white"
          >
            {a.auction ? "Bid" : "Buy"}
          </button>
        </div>
      </div>
    </article>
  );
}
