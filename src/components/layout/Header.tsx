import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,.04)]">
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
            <Link href="/#how-it-works">How It Works</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden rounded-full bg-surface-container-high px-3 py-1.5 text-xs sm:flex">
            ●&nbsp; Sepolia Testnet
          </span>
          <span className="rounded-full bg-white px-3.5 py-1.5 text-xs shadow-sm">
            0x3F8a...9B21
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            <Icon className="text-[18px]">person</Icon>
          </span>
        </div>
      </div>
    </header>
  );
}
