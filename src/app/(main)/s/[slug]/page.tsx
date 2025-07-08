
import ManufacturerCatalog from "@/components/manufacturer-catalog";

export default function ManufacturerPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <ManufacturerCatalog slug={slug} />
  )
}
