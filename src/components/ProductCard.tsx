import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link
      href={`/products/${product.category}/${product.id}`}
      className="group block"
    >
      <div
        className="
          rounded-2xl overflow-hidden
          bg-gradient-to-b from-[#fff8ec] to-white
          border border-gray-200
          shadow-sm hover:shadow-lg
          transition-all duration-300
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="
              object-cover
              group-hover:scale-105
              transition-transform duration-300
            "
            priority
          />
        </div>

        {/* TITLE */}
        <div className="px-4 py-4 text-center">
          <h3
  className="
    mt-3 text-center font-semibold text-gray-900
    text-sm sm:text-base
    leading-snug
    line-clamp-2
    min-h-[3.2rem]
  "
>
  {product.name}
</h3>
        </div>
      </div>
    </Link>
  );
}
