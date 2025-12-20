import Link from "next/link";
import { getProducts } from "@/lib/getProducts";
import ProductImageGallery from "./ProductImageGallery";

type Props = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { category, id } = await params;
  const products = await getProducts();

  const product = products.find(
    (p) => p.category === category && p.id === id
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <Link
          href="/products"
          className="text-yellow-500 underline"
        >
          Product not found. Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-24">

        {/* Back link */}
        <Link
          href={`/products/${category}`}
          className="text-sm text-yellow-500 hover:underline"
        >
          ← Back to {category.replace("-", " ")}
        </Link>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* IMAGE GALLERY */}
          <ProductImageGallery
            images={product.images}
            fallback={product.image}
            name={product.name}
          />

          {/* DETAILS */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              {product.name}
            </h1>

            <p className="mt-3 text-xl font-semibold text-gray-800">
              {product.price}
            </p>

            {/* DESCRIPTION */}
            {product.description && (
              <p className="mt-6 text-gray-700 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* HIGHLIGHTS */}
            {product.highlights && product.highlights.length > 0 && (
              <ul className="mt-6 list-disc list-inside space-y-1 text-sm text-gray-600">
                {product.highlights.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="inline-block rounded-md bg-black px-8 py-3 text-white hover:bg-gray-900 transition"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
