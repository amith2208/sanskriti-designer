import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/getProducts";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const products = await getProducts();

  const filtered = products.filter(
    (p) => p.category === category
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-black capitalize">
            {category.replace("-", " ")}
          </h1>
          <Link
            href="/products"
            className="mt-2 inline-block text-sm text-yellow-500 hover:underline"
          >
            ← Back to all categories
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.category}/${product.id}`}
              className="block rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-64 w-full bg-white rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
