import { MarketplaceClient } from "@/components/marketplace/MarketplaceClient";
import { InMemoryAssetRepository } from "@/infrastructure/repositories/InMemoryAssetRepository";
export default function ExplorePage() {
  const assets = new InMemoryAssetRepository().getAll();
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-[1600px] px-margin-mobile lg:px-margin-desktop">
        <section className="py-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                ● Decentralized Asset Book
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold">
                Explore Vacation Access Rights
              </h1>
              <p className="mt-2 max-w-2xl text-on-surface-variant">
                Acquire multi-year memberships or verified single-season villa
                night quotas secured on Ethereum Sepolia.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-low px-5 py-3">
              <b className="text-2xl text-primary">0.45 ETH</b>
              <span className="ml-6">48 Assets</span>
            </div>
          </div>
        </section>
        <MarketplaceClient assets={assets} />
      </div>
    </main>
  );
}
