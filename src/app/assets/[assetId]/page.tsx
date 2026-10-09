import { AssetDetailClient } from "@/components/assets/AssetDetailClient";

export default async function AssetDetailPage({
  params,
}: {
  params: Promise<{ assetId: string }>;
}) {
  const { assetId } = await params;
  return <AssetDetailClient assetId={assetId} />;
}
