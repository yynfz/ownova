import Link from "next/link";
import { Calculator } from "@/components/home/Calculator";
import { Icon } from "@/components/ui/Icon";
const props = [
  {
    name: "Nusa Serenity Villa",
    loc: "Ubud, Bali, Indonesia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbAQcqOefQZlkrvgiGplxUJ2YBpTYJ9SdyAvEMk_xSEDx73Io9ceyLvyd73Umtcwq4syZ47oZjFNXd6EN3_KhCPSK2tZJfSfKr7JhI6jaxBLfQwvA3q7W6eG2CIpwBfNw92cJCyMrFNB3GGCi215WGLot4uVpKn7HNZjwGEgm96MK6DDL8KtGpnZiotGkJX64UK8IIQwutsaPWAEC1b0nvXoRFREyY5_NB_lZ9RRNjJm3DIZUSRhw",
    beds: 4,
    guests: 8,
    price: "0.45 ETH",
    usd: "$1,350",
  },
  {
    name: "Azure Coast Residence",
    loc: "Lombok, Indonesia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkAER3fBjs1FMMo2KSZNZ-a5Uy0bbKeyteIANZn7fVvn97vu0Z82OhEl7R5ruePkX_FrkkvQBXYqeVvIldYMX5FJ3sbhEX_M-Hu5OUVw8BjtLUo7YaXMUWLsgH6GG1jx2acACmJxM7sYpBo8QLHTUC5buhkglkwFqv9Z1Lg9r-UCZYtE6B2M9PTiHjUUhrYiZjq_SirIhuaJtrprx5nFKL0wbg8wWd5Tw-LMymzm2i2F9kmJq7YoY",
    beds: 3,
    guests: 6,
    price: "0.35 ETH",
    usd: "$1,050",
  },
  {
    name: "Taman Sora Retreat",
    loc: "Canggu, Bali, Indonesia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK2s1F2j8Dmbu8jydCohwp0fejtD3URxvk0oouYlPNn2PDTfedb5j318N2OvqbqF2IUdcqmBnN9S05ceSzKjMio21UyHnvGhtEYwe02w0icjYYStp9mjEi9wUz8q7ditmBhXDblHdNeBka6bVxXb2iOPg18xGzZtuRoYl91sq0DOBS4vzNubp5d4KBFIvH4O8pW8gvq_hS5DPzlQvHHjJdirK8NA_gwvxPkX-Qya-sJAQgPVxDFA8",
    beds: 5,
    guests: 10,
    price: "0.60 ETH",
    usd: "$1,800",
  },
];
export default function Home() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-[1600px] px-margin-mobile lg:px-margin-desktop">
        <section className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <span className="rounded-full bg-surface-container-low px-4 py-2 text-xs font-bold tracking-widest">
              ● ONCHAIN VACATION ACCESS
            </span>
            <h1 className="mt-6 font-display text-[38px] font-bold leading-[1.08] text-primary lg:text-6xl">
              Own Your Access.
              <br />
              <span className="text-secondary">
                Trade What You Don&apos;t Use.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-on-surface-variant">
              Access verified luxury villas through transferable memberships and
              annual usage rights recorded securely on Ethereum.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                className="rounded-xl bg-primary px-8 py-4 font-bold text-white"
                href="/explore"
              >
                Explore Properties
              </Link>
              <a
                className="rounded-xl bg-surface-container-high px-8 py-4 font-bold"
                href="#how-it-works"
              >
                How OWNOVA Works
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] lg:col-span-5">
            <img
              className="aspect-[4/5] w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwn3USdWKN_KL8TLeEno6fXRKsKIbaaaUO39FkfS8kctxXGu4ZkrhHNZQAfiOiA10f4URYhHteYbhA8PZlLBcmAZMAa0GKg0L_PZTFxqYN-Rs08jAQAyJAvwXeX5IAqhseMG11_lhyDvyXV_d2aR_N1oPHZ8jEo1oEf2ll6xTWBekUJZ2786eN2rRvP4Rey5omjaKGJeFoB8lcQrgKw5Li0sBfRbtFaxlGdYffparix3Flzbcx19s"
              alt="Nusa Serenity Villa"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-6 backdrop-blur">
              <small className="font-bold text-[#4f3300]">
                ✓ VERIFIED OPERATOR
              </small>
              <h3 className="font-display text-xl font-bold">
                Nusa Serenity Villa
              </h3>
              <div className="mt-3 flex justify-between rounded-xl bg-surface-container-low p-4">
                <b className="text-secondary">14 Nights / 2024</b>
                <b className="text-primary">0.45 ETH</b>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 rounded-2xl bg-white p-8 text-center shadow-sm lg:grid-cols-4">
          {[
            [12, "Verified Villas"],
            [48, "Membership NFTs"],
            [320, "Usage Nights Issued"],
            [156, "On-chain Transactions"],
          ].map(([n, l]) => (
            <div className="p-4" key={l}>
              <b className="font-display text-5xl text-primary">{n}</b>
              <p className="text-sm text-on-surface-variant">{l}</p>
            </div>
          ))}
        </section>
        <section className="py-16">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">
              Dual-Token Architecture
            </p>
            <h2 className="font-display text-4xl font-bold">
              Two distinct on-chain assets
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              [
                "Membership NFT",
                "Receive eligibility for future annual vacation allocations.",
                "bg-primary-container text-white",
              ],
              [
                "Usage Right NFT",
                "Book, use, or trade vacation nights for a specific calendar year.",
                "bg-surface-container-high",
              ],
            ].map(([a, b, c]) => (
              <div className={`rounded-3xl p-10 ${c}`} key={a}>
                <h3 className="font-display text-3xl font-bold">{a}</h3>
                <p className="my-5 text-lg opacity-80">{b}</p>
                <ul className="space-y-3">
                  <li>✓ Annual allocation eligibility</li>
                  <li>✓ Transferable on marketplace</li>
                  <li>✓ Verified on-chain rights</li>
                </ul>
                <Link
                  className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-primary"
                  href="/explore"
                >
                  Explore {a}s
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16">
          <h2 className="font-display text-4xl font-bold">
            Properties worth experiencing
          </h2>
          <p className="mt-2 text-on-surface-variant">
            Explore verified vacation access from trusted hospitality operators.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {props.map((p) => (
              <article
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
                key={p.name}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6">
                  <small>{p.loc}</small>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {p.name}
                  </h3>
                  <p className="my-5 rounded-xl bg-surface-container-low p-3">
                    {p.beds} Beds · {p.guests} Guests
                  </p>
                  <div className="flex justify-between">
                    <b className="text-primary">
                      {p.price} <small>{p.usd}</small>
                    </b>
                    <Link href="/explore">View →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="how-it-works"
          className="rounded-[32px] bg-surface-container-low p-8 py-16 lg:p-16"
        >
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold">
              Simple, verifiable access
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["account_balance_wallet", "Connect"],
              ["travel_explore", "Explore"],
              ["shopping_bag", "Acquire"],
              ["calendar_month", "Reserve or Trade"],
            ].map(([i, t], x) => (
              <div
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
                key={t}
              >
                <Icon className="text-4xl text-primary">{i}</Icon>
                <small className="mt-4 block font-bold text-secondary">
                  STEP 0{x + 1}
                </small>
                <h3 className="font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">
                  A friction-free on-chain journey from custody to poolside
                  relaxation.
                </p>
              </div>
            ))}
          </div>
        </section>
        <Calculator />
        <section className="my-16 flex min-h-[420px] items-center justify-center rounded-[32px] bg-primary-container p-10 text-center text-white">
          <div>
            <h2 className="max-w-3xl font-display text-5xl font-bold">
              Your next stay can be owned, used, and transferred.
            </h2>
            <div className="mt-10">
              <Link
                className="rounded-xl bg-white px-8 py-4 font-bold text-primary"
                href="/explore"
              >
                Explore OWNOVA
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
