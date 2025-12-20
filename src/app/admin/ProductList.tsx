"use client";

import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { db, storage } from "@/lib/firebase";

type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  images?: string[];
  description?: string;
  highlights?: string[];
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newImages, setNewImages] = useState<File[]>([]);

  const [editData, setEditData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    highlights: "",
    images: [] as string[],
  });

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, "id">),
    }));
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setNewImages([]);
    setEditData({
      name: product.name,
      price: product.price.replace("₹", ""),
      category: product.category,
      description: product.description || "",
      highlights: (product.highlights || []).join("\n"),
      images: product.images || [product.image],
    });
  };

  const saveEdit = async (product: Product) => {
    let finalImages = editData.images;

    // ✅ APPEND new images (not replace)
    if (newImages.length > 0) {
      const uploaded = await Promise.all(
        newImages.map(async (img) => {
          const imgRef = ref(
            storage,
            `products/${editData.category}/${Date.now()}-${img.name}`
          );
          await uploadBytes(imgRef, img);
          return await getDownloadURL(imgRef);
        })
      );

      finalImages = [...editData.images, ...uploaded];
    }

    await updateDoc(doc(db, "products", product.id), {
      name: editData.name,
      price: `₹${editData.price}`,
      category: editData.category,
      description: editData.description,
      highlights: editData.highlights
        .split("\n")
        .map((h) => h.trim())
        .filter(Boolean),
      images: finalImages,
      image: finalImages[0], // main image
    });

    setEditingId(null);
    setNewImages([]);
    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Delete this product permanently?")) return;
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  if (loading) {
    return <p className="text-black mt-6">Loading products…</p>;
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-black mb-4">
        Manage Products
      </h2>

      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white space-y-4"
          >
            {/* IMAGES */}
            <div className="flex gap-3 flex-wrap">
              {(editingId === product.id
                ? editData.images
                : product.images || [product.image]
              ).map((img, i) => (
                <div key={i} className="relative">
                  <div className="relative h-20 w-20 border rounded bg-white">
                    <Image
                      src={img}
                      alt="Product image"
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* IMAGE ACTIONS */}
                  {editingId === product.id && (
                    <div className="mt-1 flex gap-1">
                      <button
                        type="button"
                        className="text-xs text-red-600"
                        onClick={() =>
                          setEditData({
                            ...editData,
                            images: editData.images.filter(
                              (_, idx) => idx !== i
                            ),
                          })
                        }
                      >
                        Delete
                      </button>

                      <button
                        type="button"
                        className="text-xs text-blue-600"
                        onClick={() =>
                          setEditData({
                            ...editData,
                            images: [
                              img,
                              ...editData.images.filter(
                                (_, idx) => idx !== i
                              ),
                            ],
                          })
                        }
                      >
                        Set Main
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ADD MORE IMAGES */}
            {editingId === product.id && (
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Add more images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="text-black"
                  onChange={(e) =>
                    setNewImages(Array.from(e.target.files || []))
                  }
                />
              </div>
            )}

            {/* EDIT FORM */}
            {editingId === product.id ? (
              <div className="space-y-3">
                <input
                  className="w-full border px-2 py-1 text-black"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />

                <div className="flex items-center gap-1">
                  <span>₹</span>
                  <input
                    type="number"
                    className="w-full border px-2 py-1 text-black"
                    value={editData.price}
                    onChange={(e) =>
                      setEditData({ ...editData, price: e.target.value })
                    }
                  />
                </div>

                <select
                  className="w-full border px-2 py-1 text-black"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="bangles">Bangles</option>
                  <option value="necklace">Necklace</option>
                  <option value="blouse-paintings">Blouse Paintings</option>
                  <option value="saree-paintings">Saree Paintings</option>
                  <option value="customized-paintings">
                    Customized Paintings
                  </option>
                </select>

                <textarea
                  className="w-full border px-2 py-1 text-black"
                  placeholder="Description"
                  rows={3}
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      description: e.target.value,
                    })
                  }
                />

                <textarea
                  className="w-full border px-2 py-1 text-black"
                  placeholder="Highlights (one per line)"
                  rows={3}
                  value={editData.highlights}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      highlights: e.target.value,
                    })
                  }
                />
              </div>
            ) : (
              <div>
                <p className="font-semibold text-black">
                  {product.name}
                </p>
                <p className="text-sm text-gray-700">
                  {product.price} · {product.category}
                </p>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex gap-2">
              {editingId === product.id ? (
                <>
                  <button
                    onClick={() => saveEdit(product)}
                    className="bg-black text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="border px-4 py-1 rounded text-black"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => startEdit(product)}
                    className="border px-4 py-1 rounded text-black"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="border border-red-500 px-4 py-1 rounded text-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
