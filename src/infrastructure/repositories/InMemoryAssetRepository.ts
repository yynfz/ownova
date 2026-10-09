import { Asset } from "@/domain/entities/Asset";
export class InMemoryAssetRepository {
  getAll(): Asset[] {
    return ASSETS;
  }
}
export const ASSETS: Asset[] = [
  {
    id: "7721",
    name: "Nusa Serenity Villa",
    location: "Ubud, Bali",
    destination: "bali",
    type: "membership",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1eZwzEZ3zxqGwSw9tCyONIB_38wiKuXuT89ToU9uA6NiLZxUXhVJO8DlHdENI0tYA_al8rnCEZjnTMp0WZb3l4eias7tRijvZ47PmhXCUJqiyW29kggAl2b-hJBywCLi9YHLQijDtk48uieTri-p5in8A3UvvzJtTLfWR9oEJRsygbcT7MjhmXq6V3XZjIfF3c9rAl7HH0nhSFcbXqP4n75PR4j85hGTiN9dFh6g4hOQCAfo6fsY",
    price: 2.8,
    usd: "$8,400",
    nights: 14,
    period: "2024 - 2034",
  },
  {
    id: "3310",
    name: "Azure Coast Residence",
    location: "Lombok",
    destination: "lombok",
    type: "membership",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvf72ePocTaZOMavSDAEzY2y3uCbc5ByAim1YPvr8geWKnzlPkfwBtMx6_2O-_Vp6Qtgo881FU3ixSRHSXmDLz8WAT72lHO0G7wVBuYKM9X-p8SlbfYMpdm92aeYbiYslpwwRdoDK7vYc4ZZmagbm6Xow7N1y4WtDXWt84O-MwWe73Z_XK77mVGxr-b-XiTyoCk6FDkiqqUFBbZzjzmAmsMQzRpWEco0KCspBNPipMTp2CMqzOR-I",
    price: 1.2,
    usd: "$3,600",
    nights: 7,
    period: "2024 - 2030",
    auction: "Ends in 24h 12m",
  },
  {
    id: "UR-p1-24-05",
    name: "Nusa Serenity Villa",
    location: "Ubud, Bali",
    destination: "bali",
    type: "usage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkcwmuwK3R17H_L4ja_vFjgzOIQgusPPWASsae0BKDZCOo_3h-UPT6UV-LmWx19BDFsMY471UjgCdhv5GVq3dARoXPXaPtgie6X46Rt5ulHX8b9KmTW62N4mLRWixaLvSep2WezM0nPJELfneBeYwP2IE2M3vhoMCJUXEEpbYULC9bkFrD3QLLCq0PeTs6WeYtXhoZPFHkH4g5kXRx-odpY3W8PT_wYnGrTXR96s1ybYxVYvzRZ_4",
    price: 0.45,
    usd: "$1,350",
    nights: 7,
    period: "2024 Season",
    used: 4,
    reserved: 3,
  },
  {
    id: "UR-p3-24-12",
    name: "Taman Sora Retreat",
    location: "Canggu, Bali",
    destination: "bali",
    type: "usage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs9fcRELu8T1YuRDf1OpNnxJy4NAdczaqihAyDq3WKqALHOgbUr6mo5iL_u9LZUvNTrgsOaTdMMDsMGAEASFpc1YUm9WIBNX4_cAyTGpaslEg_RO0CXO1lXYcgNiZyoBvIsakuKC6klp6qCEBeEv9CHdE_e3iwlncVrJ5-rodwMUbyaqq0Yayme3chrq-J2RpT22qwHVBnGbj9uazwRO1v5FjT3UhqWJi9ZU2tbZCYgpTDTocRBSw",
    price: 0.6,
    usd: "$1,800",
    nights: 7,
    period: "2024 Season",
    used: 0,
    reserved: 0,
  },
  {
    id: "UR-p2-25-01",
    name: "Azure Coast Residence",
    location: "Lombok",
    destination: "lombok",
    type: "usage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr39QPoTDSyqDMT-NEtYNF4te0IKC6oAUmhLPpyHt9WDuYgtcgOxyGzo5B3gyjmDbz8F6NW1GtkiNjB76DqD3vk6RhYmS9KRjSTnXOgdLfP93kUGBoTbs4UTBOloMw9qu3mviXNZ12znbOGf4ENC-7B5aK8svFaFltMnJEKjgfExpZ2i3wqgqouNTgu_murbuXp_IrAojPtTfhOOfzolFjgNydLlzmLYEbUhJKFv35gN88-9vzXa8",
    price: 0.9,
    usd: "$2,700",
    nights: 14,
    period: "2025 Early Access",
    used: 0,
    reserved: 0,
  },
];
