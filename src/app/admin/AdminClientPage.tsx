"use client";

import { useSearchParams } from "next/navigation";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

export default function AdminClientPage() {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");

  if (secret !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-black text-lg">Access denied</p>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-14 space-y-12">
        <header>
          <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
          <p className="text-gray-700 mt-1">
            Manage products for <span className="font-medium">Sanskriti Designer</span>
          </p>
        </header>

        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black mb-4">
            Add New Product
          </h2>
          <AddProductForm />
        </section>

        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <ProductList />
        </section>
      </div>
    </main>
  );
}
