import Link from "next/link";
export function Footer() {
  return (
    <footer className="mt-24 bg-primary-container text-white">
      <div className="mx-auto max-w-[1600px] px-margin-mobile py-16 lg:px-margin-desktop">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <b className="font-display text-xl">◇ OWNOVA</b>
            <p className="mt-4 max-w-sm text-sm text-on-primary-container">
              Architectural fractional co-ownership and stay rights for curated
              private tropical estates. Verified on-chain, custodial peace of
              mind.
            </p>
          </div>
          {[
            [
              "Marketplace",
              "Bali Villas",
              "Lombok Sanctuaries",
              "Secondary Market",
            ],
            [
              "Platform",
              "Stay Allocation",
              "Ownership Ledger",
              "Smart Contracts",
            ],
            [
              "Support & Governance",
              "Co-Owner Concierge",
              "Custody Audits",
              "DAO Voting",
            ],
          ].map(([h, ...x]) => (
            <div key={h}>
              <h4 className="mb-4 text-sm font-bold uppercase">{h}</h4>
              {x.map((v) => (
                <Link
                  key={v}
                  className="mb-2 block text-sm text-on-primary-container"
                  href="/explore"
                >
                  {v}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-on-primary-container md:flex-row">
          <p>
            Disclaimer: OWNOVA NFTs represent contractual access rights and do
            not constitute ownership of physical property, land, buildings, or
            company shares.
          </p>
          <p>© 2025 OWNOVA Protocol.</p>
        </div>
      </div>
    </footer>
  );
}
