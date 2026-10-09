"use client";
import { useState } from "react";
export function Calculator() {
  const [nights, setNights] = useState(14);
  const [years, setYears] = useState(10);
  const total = nights * years;
  return (
    <section className="py-16">
      <div className="rounded-[32px] bg-surface-container-high p-8 lg:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">
              Ownership Yield Calculator
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold">
              Plan your vacation access
            </h2>
            <p className="mt-4 text-on-surface-variant">
              Estimate your access costs and compare the value of acquiring
              rights versus traditional peak-season booking.
            </p>
            <div className="mt-8 space-y-8 rounded-2xl bg-white p-6 shadow-sm">
              <label className="block font-bold">
                Annual Nights Desired{" "}
                <b className="float-right text-primary">{nights} Nights</b>
                <input
                  className="range mt-4 w-full"
                  type="range"
                  min="7"
                  max="28"
                  step="7"
                  value={nights}
                  onChange={(e) => setNights(+e.target.value)}
                />
              </label>
              <label className="block font-bold">
                Usage Horizon{" "}
                <b className="float-right text-primary">{years} Years</b>
                <input
                  className="range mt-4 w-full"
                  type="range"
                  min="1"
                  max="20"
                  value={years}
                  onChange={(e) => setYears(+e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 font-display text-xl font-bold">
              Estimation Projection
            </h3>
            <div className="space-y-4">
              <p className="flex justify-between">
                <span>Total Nights Acquired</span>
                <b>{total} Nights</b>
              </p>
              <p className="flex justify-between rounded-xl bg-surface-container-low p-4">
                <span>Estimated Cost per Night</span>
                <b className="text-secondary">$120 / night</b>
              </p>
              <p className="flex justify-between">
                <span>Traditional Market Est.</span>
                <s>$350 / night</s>
              </p>
              <p className="flex justify-between rounded-xl bg-primary-container p-4 text-white">
                <span>Projected Horizon Savings</span>
                <b>${((350 - 120) * total).toLocaleString()} USD</b>
              </p>
            </div>
            <div className="mt-6 rounded-xl bg-surface-container-low p-5 text-sm font-bold text-[#4f3300]">
              {years > 5
                ? "Acquire a Membership NFT for long-term value."
                : "Acquire individual Usage Right NFTs for maximum flexibility."}
            </div>
            <p className="mt-5 text-center text-xs text-on-surface-variant">
              This calculator is illustrative and does not guarantee
              availability, future pricing, or financial returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
