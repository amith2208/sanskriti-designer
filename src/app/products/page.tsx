import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/getProducts";

const categories = [
  { key: "bangles", title: "Bangles" },
  { key: "necklace", title: "Necklace" },
  { key: "blouse-paintings", title: "Blouse Paintings" },
  { key: "saree-paintings", title: "Saree Paintings" },
  { key: "customized-paintings", title: "Customized Paintings" },
];

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categories.map((category) => {
          const filtered = products
            .filter((p) => p.category === category.key)
            .slice(0, 4);

          if (filtered.length === 0) return null;

          return (
            <section key={category.key}>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">
                  {category.title}
                </h2>
                <Link
                  href={`/products/${category.key}`}
                  className="text-sm font-medium text-yellow-500 hover:underline"
                >
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.category}/${product.id}`}
                    className="block rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative h-48 w-full rounded-t-lg bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
