"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Persona = "owner" | "renter";

const ownerAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCMIEjDyktAIIcqtiPrkO6NKLnJj6vQ7UoPaJhb12HL7O-Z9mPobHnXrZYN0S68raYraCL6KpD3hpcbeyMsrRg0jhiXtfkgJ1H0-fLAC1jzUz0t2VAMNS_gr9C7r7EOIo3dEVuh0FDIrquNk4pWN_QTawnvfC4Wqp-lqVRqDdp0-d_7j6C4zKV1DgKp6YMlU1iT1VMVf7JG1LmkjzSsAryAUJK1icl1AOVrhpznoL9lZbVF4Jyazkg";
const villaOne =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeXpbWDg02m4AsoSHq_shiqPGo-YcIVnJT0YuxB9MvUzMzRGxVkuESn1K96OJ8iY1aP6aYoRUvTmksc4FvPcv2KHJUXeHNm12QbcgyQ8AF1oIV3ZJZ0lMXqHwCvyRH5tqXi7KrX5ECZnoj5hYbO4T5obhiLFQQCu6lSE-vBwmC7OwuSSFMXrKlovuKiEsAKxs_AMy_g3jhGBnXvUpGcUNfXterBDEFJkTCQes8I6ZiIbN5TPRsMyg";
const villaTwo =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1XvSD2_-DSXQPdyDvm4bRu6ARNO6pmi0wtdP-CloVWHzfX7Bpwl9Crp83Lvxdi69fL8z3awiIpRMUWlk4ZHKX184HIV27V_9ByG49jKq1hlbbEJO7qpQ6UblBKDq8pInYTOxKwvWib0qBLhrfak5ErWNRWvHyQ-gSiitXol1oyg8QLwTaRUnxfrZaOPoVnF8Oc1E3hi5QvJaHIAdjAozNEA4b003ii57sNQ4EN3hivUpPHVf8T8";

export function ProfileClient() {
  const [persona, setPersona] = useState<Persona>("owner");
  const [toast, setToast] = useState("");
  const feedback = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };
  const copyAddress = async () => {
    await navigator.clipboard?.writeText(
      "0x3F8a049dC7c1B94C2a01Fe366f0D597b872E9B21",
    );
    feedback("Wallet address copied to clipboard");
  };

  return (
    <main className="w-full bg-background pt-20">
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-primary-container px-4 py-3 text-sm text-white shadow-xl">
          <Icon className="text-[18px] text-[#f2be72]">check_circle</Icon>
          {toast}
        </div>
      )}
      <section className="relative overflow-hidden bg-surface-container-high py-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary-container/40 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-margin-mobile lg:px-margin-desktop">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-container">
            OWNOVA Protocol · Account & Custody
          </p>
          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="font-display text-4xl font-semibold">
                Account & Profile Settings
              </h1>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
                Manage your sovereign custodial identity, ENS handle, verified
                wallet credentials, and bespoke villa concierge preferences.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1.5 text-xs shadow-sm">
                ● Smart Vault ID #8841
              </span>
              <button
                onClick={() =>
                  feedback("Concierge preferences updated & synced on-chain")
                }
                className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white"
              >
                <Icon className="text-[18px]">verified</Icon>Save Preferences
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-margin-mobile py-10 lg:px-margin-desktop">
        <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-xl border-b border-surface-container-high bg-white p-4 shadow-sm md:flex-row">
          <div className="flex items-center gap-3">
            <Icon className="rounded-lg bg-primary-container/10 p-2 text-primary-container">
              switch_account
            </Icon>
            <div>
              <div className="flex items-center gap-2">
                <b>Profile View Mode</b>
                <span className="rounded-full bg-secondary-container px-2 py-0.5 text-xs">
                  Dual Persona Active
                </span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Switch between Fractional Co-Owner custodial view and Villa
                Renter credentials.
              </p>
            </div>
          </div>
          <div className="inline-flex rounded-xl bg-surface-container-low p-1">
            <PersonaButton
              active={persona === "owner"}
              icon="real_estate_agent"
              label="Co-Owner / Member"
              person="Alexander Vance"
              onClick={() => setPersona("owner")}
            />
            <PersonaButton
              active={persona === "renter"}
              icon="cottage"
              label="Penyewa Villa / Guest"
              person="Julian Hayes"
              onClick={() => setPersona("renter")}
            />
          </div>
        </div>

        {persona === "owner" ? (
          <OwnerProfile copyAddress={copyAddress} feedback={feedback} />
        ) : (
          <RenterProfile feedback={feedback} />
        )}
      </div>
    </main>
  );
}

function PersonaButton({
  active,
  icon,
  label,
  person,
  onClick,
}: {
  active: boolean;
  icon: string;
  label: string;
  person: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs transition ${active ? "bg-primary-container font-semibold text-white shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`}
    >
      <Icon className="text-[17px]">{icon}</Icon>
      <span>{label}</span>
      <span
        className={`rounded-full px-1.5 py-0.5 text-[10px] ${active ? "bg-[#ffddb1] text-[#624000]" : "bg-secondary-container"}`}
      >
        {person}
      </span>
    </button>
  );
}

function OwnerProfile({
  copyAddress,
  feedback,
}: {
  copyAddress: () => void;
  feedback: (v: string) => void;
}) {
  return (
    <>
      <IdentityCard
        avatar={ownerAvatar}
        name="Alexander Vance"
        badge="Verified Member · Tier Gold"
        ens="vance.eth"
        address="0x3F8a...9B21"
        stats={[
          ["Properties", "2", "Active Shares"],
          ["Quota 2024", "14", "Nights Open"],
          ["Completed", "4", "Villa Stays"],
          ["Custody", "Tier 2", "Since Jan '24"],
        ]}
        copyAddress={copyAddress}
      />
      <Tabs />
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          <Panel
            title="Personal Identity & Villa Verification"
            subtitle="Physical guest documentation mapped to your custodial stay registry."
            badge="Verified Legal Tier"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Legal Full Name"
                value="Alexander Vance"
                help="Matches on-chain passport checksum."
              />
              <Field
                label="Concierge Email"
                value="a.vance@arcadiagroup.io"
                help="Used for cryptographic itinerary confirmations."
              />
              <Field
                label="WhatsApp / Priority Concierge Mobile"
                value="+1 (555) 382-9104"
                help="For on-ground Butler & chauffeur coordinates."
              />
              <SelectField
                label="Tax & Legal Jurisdiction"
                options={[
                  "Singapore (Compliant KYC Tier 2)",
                  "Switzerland (FINMA Standard)",
                  "United Kingdom (Offshore Access)",
                ]}
              />
            </div>
          </Panel>
          <Panel
            title="Connected Wallets & Cold Vaults"
            subtitle="Authorised signers for fractional contracts, booking deposits, and stay governance."
            action="Link Another Wallet"
          >
            <Wallet
              icon="account_balance_wallet"
              name="MetaMask Wallet"
              badge="Default Signer"
              address="0x3F8a049dC7c1B94C2a01Fe3...9B21"
              detail="Holds 2 Stay Keys"
            />
            <Wallet
              icon="security"
              name="Ledger Hardware Vault"
              badge="Cold Storage"
              address="0x712A883B104F5E6c...40B9"
              detail="Asset Guardian"
            />
          </Panel>
          <Panel
            title="Luxury Stay & Butler Protocols"
            subtitle="Pre-configured settings automatically relayed to villa managers upon arrival token burn."
          >
            <p className="text-sm font-medium">
              Culinary & Dietary Requirements
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "Plant-Based Focus",
                "Organic Produce Only",
                "Gluten-Sensitive",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-surface-container-high px-3 py-1.5 text-xs"
                >
                  ✓ {x}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <SelectField
                label="Master Suite Aromatherapy Scent"
                options={[
                  "Balinese Eucalyptus & Wild Cedarwood",
                  "Night Jasmine & White Sandalwood",
                ]}
              />
              <SelectField
                label="Pillow & Sleep Suite Selection"
                options={[
                  "Firm Hungarian Goose Down & Memory Core",
                  "Hypoallergenic Natural Bamboo Silk",
                ]}
              />
            </div>
            <div className="mt-5 space-y-2">
              <Toggle
                icon="directions_car"
                title="Airport EV Chauffeur Meet & Greet"
                detail="Automatic luxury electric transfer from Ngurah Rai or Lombok."
              />
              <Toggle
                icon="wine_bar"
                title="Curated Cellar Pre-Stocking"
                detail="Private sommelier stocks the wine room before check-in."
              />
            </div>
          </Panel>
          <Panel
            title="Annual Stay Quota Ledger"
            subtitle="Current cycle allocation breakdown across verified tropical sanctuaries."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <VillaQuota
                image={villaOne}
                name="The Uluwatu Cliff Sanctuary"
                detail="Bali · 4-Bedroom Ocean Residence"
                quota="8 Remaining / 14"
                width="57%"
              />
              <VillaQuota
                image={villaTwo}
                name="Sira Beach Pavilion"
                detail="Lombok · Private Lagoon Estate"
                quota="6 Remaining / 14"
                width="42%"
              />
            </div>
          </Panel>
        </div>
        <aside className="space-y-6 lg:col-span-4">
          <SidePanel title="Smart Contract State">
            <Status
              name="Escrow Router v2.4"
              detail="Stay Token Locking & Burning"
              status="Active"
            />
            <Status
              name="ERC-721 Gateway"
              detail="Ownership Transfer Permit"
              status="Approved"
            />
            <Status
              name="Oracle Feeder"
              detail="High-Season Dynamic Rates"
              status="Read Only"
            />
            <button
              onClick={() => feedback("Approval revocation request prepared")}
              className="mt-4 text-xs font-medium text-red-700"
            >
              ⊘ Revoke All Approvals
            </button>
          </SidePanel>
          <SidePanel title="Accreditation Level">
            <p className="mb-4 text-sm text-on-surface-variant">
              Tier 2 Sovereign Verified
            </p>
            {[
              "Biometric Identification",
              "AML & Source of Wealth",
              "Deed Signature Rights",
            ].map((x) => (
              <p key={x} className="flex justify-between py-1 text-sm">
                <span>✓ {x}</span>
                <span className="text-on-surface-variant">Verified</span>
              </p>
            ))}
          </SidePanel>
          <SidePanel title="Auditing & Session">
            <button className="w-full rounded-lg bg-surface-container-low py-2.5 text-sm">
              Export On-Chain Stay Ledger (CSV)
            </button>
            <button
              onClick={() =>
                feedback("Sessions terminated. Reconnect wallet to sign.")
              }
              className="mt-3 w-full rounded-lg bg-red-50 py-2.5 text-sm font-medium text-red-800"
            >
              Disconnect All Web3 Sessions
            </button>
          </SidePanel>
          <div className="rounded-xl bg-primary-container p-6 text-white shadow-sm">
            <span className="text-xs uppercase tracking-wider text-primary-fixed">
              Personal Liaison
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold">
              Priority Co-Owner Desk
            </h3>
            <p className="mt-2 text-sm text-on-primary-container">
              Your designated Bali lifestyle director is on call for customized
              bookings and private charter requests.
            </p>
            <button className="mt-4 w-full rounded-lg bg-[#f2be72] py-2.5 text-sm font-bold text-[#291800]">
              Message Concierge Desk
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

function RenterProfile({ feedback }: { feedback: (v: string) => void }) {
  return (
    <>
      <IdentityCard
        avatar={ownerAvatar}
        name="Julian Hayes"
        badge="Active Seasonal Renter · Platinum"
        ens="julian.eth"
        address="0x84D1...7B34"
        stats={[
          ["Active Stays", "1", "Upcoming Ubud"],
          ["Rented Rights", "7", "Nights Season 24"],
          ["Deposit Escrow", "0.15", "ETH Locked"],
          ["Concierge Rating", "5.0 ★", "Perfect Conduct"],
        ]}
        copyAddress={() => feedback("Guest wallet address copied")}
      />
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          <Panel
            title="Active Stay & Rental Smart Pass"
            subtitle="Sub-lease entitlement minted via OWNOVA Secondary Stay Pool"
            badge="Confirmed Booking"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative h-48 w-full overflow-hidden rounded-lg md:w-56">
                <img
                  src={villaOne}
                  alt="Nusa Serenity Villa"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded bg-primary/80 px-2 py-1 text-xs text-white">
                  Ubud Sanctuary
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-display text-lg font-semibold">
                    Nusa Serenity Villa
                  </h3>
                  <b className="text-[#331f00]">5 Nights Confirmed</b>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Sayan Ridge, Ubud, Bali · 2-Bedroom Rainforest Suite
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg bg-surface-container-low p-3 text-xs">
                  <p>
                    <span className="block text-on-surface-variant">
                      Check-in
                    </span>
                    <b>Nov 10, 2024 · 15:00 WITA</b>
                  </p>
                  <p>
                    <span className="block text-on-surface-variant">
                      Check-out
                    </span>
                    <b>Nov 15, 2024 · 12:00 WITA</b>
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="text-xs">◉ Digital Smart Key ready</span>
                  <button
                    onClick={() => feedback("Digital key pass opened")}
                    className="rounded-lg bg-primary-container px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    View Key Pass
                  </button>
                </div>
              </div>
            </div>
          </Panel>
          <Panel
            title="Guest & Renter Preferences (Penyewa Villa)"
            subtitle="Custom stay specifications for your upcoming rented villa period."
            badge="Auto-Synced to Property"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                label="Preferred Check-in Window"
                options={[
                  "15:00 - 17:00 WITA (Afternoon Tea Arrival)",
                  "18:00 - 20:00 WITA",
                ]}
              />
              <SelectField
                label="Airport Transfer Vehicle"
                options={[
                  "Luxury Electric SUV (Mercedes EQE / Lexus)",
                  "Private Executive Van",
                ]}
              />
              <Field
                label="Occupants & Guest Registry"
                value="2 Adults (Julian Hayes & Clara Dubois)"
              />
              <Field
                label="Special Dietary & Minibar Notes"
                value="Pescatarian, No Shellfish, Sparkling Mineral Water"
              />
            </div>
          </Panel>
          <Panel
            title="Past Rental History & Verified Reviews"
            subtitle="Completed secondary market stays with proof of on-chain escrow clearance."
          >
            <History
              name="Sira Beach Pavilion, Lombok"
              date="July 14 - July 18, 2024 (4 Nights)"
              tx="0x99a2...18c2"
            />
            <History
              name="The Uluwatu Cliff Sanctuary"
              date="March 02 - March 05, 2024 (3 Nights)"
              tx="0x48e1...f088"
            />
          </Panel>
        </div>
        <aside className="space-y-6 lg:col-span-4">
          <SidePanel title="Rental Security Escrow">
            <p className="text-sm text-on-surface-variant">
              Smart contract security deposit locked until check-out inspection
              sign-off.
            </p>
            <div className="mt-4 space-y-2 rounded-lg bg-surface-container-low p-4 text-sm">
              <p className="flex justify-between">
                <span>Locked Amount</span>
                <b>0.150 ETH</b>
              </p>
              <p className="flex justify-between">
                <span>Escrow Vault</span>
                <b>0x41F3...9C02</b>
              </p>
              <p className="flex justify-between">
                <span>Release Trigger</span>
                <b>Nov 15 + 2 hrs</b>
              </p>
            </div>
          </SidePanel>
          <SidePanel title="Emergency & On-Site Host">
            <div className="space-y-2 rounded-lg bg-surface-container-low p-4 text-sm">
              <p>
                Property Manager: <b>Wayan Sudarta</b>
              </p>
              <p>
                Mobile: <b>+62 812 3456 7890</b>
              </p>
              <p>
                Clinic: <b>BIMC Hospital Ubud</b>
              </p>
            </div>
            <button className="mt-4 w-full rounded-lg bg-primary-container py-2.5 text-sm font-semibold text-white">
              Chat with Dedicated Butler
            </button>
          </SidePanel>
          <SidePanel title="Sub-lease Agreement">
            <p className="text-sm text-on-surface-variant">
              Official fractional rental contract registered under OWNOVA
              standards.
            </p>
            <button className="mt-4 w-full rounded-lg bg-surface-container-low py-2.5 text-sm">
              Download Sub-lease PDF (Signed)
            </button>
          </SidePanel>
        </aside>
      </div>
    </>
  );
}

function IdentityCard({
  avatar,
  name,
  badge,
  ens,
  address,
  stats,
  copyAddress,
}: {
  avatar: string;
  name: string;
  badge: string;
  ens: string;
  address: string;
  stats: string[][];
  copyAddress: () => void;
}) {
  return (
    <section className="relative mb-10 overflow-hidden rounded-xl bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="h-24 w-24 rounded-full object-cover p-1 ring-1 ring-surface-container-highest"
            />
            <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-container text-white">
              ◆
            </span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display text-2xl font-semibold">{name}</h2>
              <span className="rounded-full bg-[#ffddb1] px-2.5 py-0.5 text-xs font-semibold text-[#291800]">
                {badge}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
              <b className="text-primary-container">◈ {ens}</b>
              <span>·</span>
              <span>{address}</span>
              <button onClick={copyAddress}>
                <Icon className="text-[15px]">content_copy</Icon>
              </button>
              <span>·</span>
              <span className="rounded-full bg-secondary-container px-2.5 py-0.5 text-xs">
                ● Sepolia Testnet
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-lg bg-surface-container-low p-4 sm:grid-cols-4">
          {stats.map(([l, v, d]) => (
            <div className="px-2" key={l}>
              <small className="uppercase tracking-wider text-on-surface-variant">
                {l}
              </small>
              <b className="block font-display text-2xl text-primary-container">
                {v}
              </b>
              <small className="text-on-surface-variant">{d}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Tabs() {
  return (
    <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
      {[
        ["badge", "General & Custody"],
        ["account_balance_wallet", "Wallets & Signers"],
        ["hotel", "Stay & Villa Concierge"],
        ["verified_user", "KYC & Legal Rights"],
        ["notifications_active", "Escrow & Alerts"],
      ].map(([i, l], x) => (
        <button
          key={l}
          className={`flex whitespace-nowrap items-center gap-2 rounded-lg px-4 py-2.5 text-sm ${x === 0 ? "bg-primary-container text-white" : "bg-surface-container-low text-on-surface-variant"}`}
        >
          <Icon className="text-[18px]">{i}</Icon>
          {l}
        </button>
      ))}
    </div>
  );
}
function Panel({
  title,
  subtitle,
  badge,
  action,
  children,
}: {
  title: string;
  subtitle: string;
  badge?: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="text-xs text-on-surface-variant">{subtitle}</p>
        </div>
        {badge && (
          <span className="rounded-full bg-secondary-container px-2.5 py-1 text-xs font-semibold">
            {badge}
          </span>
        )}
        {action && (
          <button className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs font-medium">
            ＋ {action}
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
function Field({
  label,
  value,
  help,
}: {
  label: string;
  value: string;
  help?: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        defaultValue={value}
        className="mt-1 w-full rounded-lg bg-surface-container-low px-3.5 py-2.5 font-normal outline-none focus:ring-1 focus:ring-primary"
      />
      {help && (
        <small className="font-normal text-on-surface-variant">{help}</small>
      )}
    </label>
  );
}
function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <select className="mt-1 w-full rounded-lg bg-surface-container-low px-3.5 py-2.5 font-normal outline-none">
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </label>
  );
}
function Wallet({
  icon,
  name,
  badge,
  address,
  detail,
}: {
  icon: string;
  name: string;
  badge: string;
  address: string;
  detail: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-surface-container-low p-4">
      <div className="flex items-center gap-4">
        <Icon className="rounded-lg bg-surface-container-high p-2">{icon}</Icon>
        <div>
          <b>{name}</b>
          <span className="ml-2 rounded-full bg-secondary-container px-2 py-0.5 text-xs">
            {badge}
          </span>
          <p className="font-mono text-xs text-on-surface-variant">{address}</p>
        </div>
      </div>
      <span className="hidden text-right text-sm sm:block">
        {detail}
        <small className="block text-secondary">ERC-721 Verified</small>
      </span>
    </div>
  );
}
function Toggle({
  icon,
  title,
  detail,
}: {
  icon: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-surface-container-low p-3">
      <div className="flex items-center gap-3">
        <Icon className="rounded-lg bg-secondary-container p-2 text-[18px]">
          {icon}
        </Icon>
        <div>
          <b className="text-sm">{title}</b>
          <p className="text-xs text-on-surface-variant">{detail}</p>
        </div>
      </div>
      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-primary"
      />
    </div>
  );
}
function VillaQuota({
  image,
  name,
  detail,
  quota,
  width,
}: {
  image: string;
  name: string;
  detail: string;
  quota: string;
  width: string;
}) {
  return (
    <div className="flex gap-4 rounded-lg bg-surface-container-low p-4">
      <img
        src={image}
        alt={name}
        className="h-20 w-20 rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <b className="text-sm">{name}</b>
          <small className="text-[#331f00]">1/8 Share</small>
        </div>
        <p className="text-xs text-on-surface-variant">{detail}</p>
        <div className="mt-3 flex justify-between text-xs">
          <span>Allocated Nights</span>
          <b>{quota}</b>
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-variant">
          <div
            className="h-full rounded-full bg-primary-container"
            style={{ width }}
          />
        </div>
      </div>
    </div>
  );
}
function SidePanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-3 font-display text-xl font-semibold">{title}</h3>
      {children}
    </section>
  );
}
function Status({
  name,
  detail,
  status,
}: {
  name: string;
  detail: string;
  status: string;
}) {
  return (
    <div className="mb-2 flex justify-between rounded-lg bg-surface-container-low p-3">
      <div>
        <b className="text-sm">{name}</b>
        <p className="text-xs text-on-surface-variant">{detail}</p>
      </div>
      <span className="self-center rounded-full bg-secondary-container px-2 py-0.5 text-xs">
        {status}
      </span>
    </div>
  );
}
function History({
  name,
  date,
  tx,
}: {
  name: string;
  date: string;
  tx: string;
}) {
  return (
    <div className="mb-2 flex justify-between rounded-lg bg-surface-container-low p-4">
      <div>
        <b>{name}</b>
        <p className="text-xs text-on-surface-variant">{date}</p>
      </div>
      <div className="text-right text-xs">
        <b className="text-[#b88a44]">★ 5.0 Host Review</b>
        <p className="font-mono">Tx: {tx}</p>
      </div>
    </div>
  );
}
