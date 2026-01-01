import { getProducts } from "@/lib/getProducts";
import { CATEGORIES } from "@/lib/categories";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-20">
        {CATEGORIES.map((category) => {
          const filtered = products
            .filter((p) => p.category === category.key)
            .slice(0, 4);

          if (filtered.length === 0) return null;

          return (
            <section key={category.key}>
              {/* Category Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {category.title}
                </h2>

                <Link
                  href={`/products/${category.key}`}
                  className="text-sm font-semibold text-yellow-600 hover:underline"
                >
                  View All →
                </Link>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.length === 0
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <ProductSkeleton key={i} />
                    ))
                  : filtered.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
