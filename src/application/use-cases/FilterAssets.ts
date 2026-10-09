import { Asset } from "@/domain/entities/Asset";
export interface AssetCriteria {
  tab: "all" | Asset["type"];
  query: string;
  destinations: string[];
  types: ("all" | Asset["type"])[];
  min: number | null;
  max: number | null;
  sort: string;
}
export class FilterAssets {
  execute(items: Asset[], c: AssetCriteria) {
    const q = c.query.toLowerCase();
    const filtered = items.filter(
      (a) =>
        (c.tab === "all" || a.type === c.tab) &&
        (!q || `${a.name} ${a.location}`.toLowerCase().includes(q)) &&
        (!c.destinations.length || c.destinations.includes(a.destination)) &&
        (!c.types.length ||
          c.types.includes("all") ||
          c.types.includes(a.type)) &&
        (c.min === null || a.price >= c.min) &&
        (c.max === null || a.price <= c.max),
    );
    return [...filtered].sort((a, b) =>
      c.sort === "price-asc"
        ? a.price - b.price
        : c.sort === "price-desc"
          ? b.price - a.price
          : c.sort === "nights-desc"
            ? b.nights - a.nights
            : 0,
    );
  }
}
