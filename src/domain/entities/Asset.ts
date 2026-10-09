export type AssetType = "membership" | "usage";
export interface Asset {
  id: string;
  name: string;
  location: string;
  destination: string;
  type: AssetType;
  image: string;
  price: number;
  usd: string;
  nights: number;
  period: string;
  auction?: string;
  used?: number;
  reserved?: number;
}
