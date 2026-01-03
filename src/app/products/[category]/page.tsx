import { notFound } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import { CATEGORIES } from "@/lib/categories";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const meta = CATEGORIES.find((c) => c.key === category);
  if (!meta) notFound();

  const products = await getProducts();
  const filtered = products.filter((p) => p.category === category);

  return (
    <main className="bg-white min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Category Title */}
        <h1 className="mb-10 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          {meta.title}
        </h1>

        {/* EMPTY STATE */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-xl font-semibold text-gray-700">
              Every piece begins as a feeling ✨
              <br />
              Shaped by hands, finished by love 🤍
              <br />
              Crafted slow. Worn forever 💫
              <br />
              Magic loading… ⏳💍
            </p>
            {/* <p className="mt-2 text-gray-500">
              Please check back soon 🌸
            </p> */}
          </div>
        ) : (
          /* PRODUCTS GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
