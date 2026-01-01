import { notFound } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import { CATEGORIES } from "@/lib/categories";
import ProductDetailClient from "./ProductDetailClient";

type PageProps = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, id } = await params;

  const meta = CATEGORIES.find((c) => c.key === category);
  if (!meta) notFound();

  const products = await getProducts();
  const product = products.find(
    (p) => p.id === id && p.category === category
  );

  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
