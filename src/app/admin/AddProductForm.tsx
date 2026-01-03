"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { CATEGORIES } from "@/lib/categories";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].key);
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    try {
      setLoading(true);

      const imageUrls = await Promise.all(
        images.map(async (img) => {
          const imgRef = ref(
            storage,
            `products/${category}/${Date.now()}-${img.name}`
          );
          await uploadBytes(imgRef, img);
          return await getDownloadURL(imgRef);
        })
      );

      await addDoc(collection(db, "products"), {
        name,
        price: `₹${price}`,
        category,
        description,
        highlights: highlights
          .split("\n")
          .map((h) => h.trim())
          .filter(Boolean),
        images: imageUrls,
        image: imageUrls[0],
      });

      setName("");
      setPrice("");
      setDescription("");
      setHighlights("");
      setImages([]);
      setCategory(CATEGORIES[0].key);
      setSuccess("Product added successfully 🎉");
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-5 rounded-xl bg-white p-6 shadow text-black"
  >
    <h2 className="text-xl font-bold text-gray-900">
      Add Product
    </h2>

    {success && (
      <p className="text-green-700 font-medium">
        {success}
      </p>
    )}

    {/* PRODUCT NAME */}
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Product Name
      </label>
      <input
        className="w-full border border-gray-400 px-3 py-2 rounded
                   text-gray-900 placeholder-gray-500
                   focus:border-black focus:ring-black"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    {/* PRICE */}
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Price
      </label>
      <div className="relative">
        <span className="absolute left-3 top-2.5 text-gray-800">₹</span>
        <input
          type="number"
          className="w-full border border-gray-400 px-7 py-2 rounded
                     text-gray-900 placeholder-gray-500
                     focus:border-black focus:ring-black"
          placeholder="2500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
    </div>

    {/* CATEGORY */}
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Category
      </label>
      <select
        className="w-full border border-gray-400 px-3 py-2 rounded
                   text-gray-900 focus:border-black focus:ring-black"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((c) => (
          <option key={c.key} value={c.key}>
            {c.title}
          </option>
        ))}
      </select>
    </div>

    {/* DESCRIPTION */}
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Description
      </label>
      <textarea
        className="w-full border border-gray-400 px-3 py-2 rounded
                   text-gray-900 placeholder-gray-500
                   focus:border-black focus:ring-black"
        placeholder="Product description"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>

    {/* HIGHLIGHTS */}
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Highlights (one per line)
      </label>
      <textarea
        className="w-full border border-gray-400 px-3 py-2 rounded
                   text-gray-900 placeholder-gray-500
                   focus:border-black focus:ring-black"
        placeholder="Eg: Handmade • Premium quality"
        rows={3}
        value={highlights}
        onChange={(e) => setHighlights(e.target.value)}
      />
    </div>

    {/* IMAGES */}
    <div className="flex items-center gap-4">
      <label className="cursor-pointer">
        <span className="inline-block rounded-md bg-black px-4 py-2 text-white text-sm">
          Choose Images
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) =>
            setImages(Array.from(e.target.files || []))
          }
        />
      </label>

      {images.length > 0 && (
        <span className="text-sm text-gray-700">
          {images.length} image(s) selected
        </span>
      )}
    </div>

    {/* SUBMIT */}
    <button
      type="submit"
      className="bg-black text-white px-6 py-2 rounded
                 hover:bg-gray-900 transition"
      disabled={loading}
    >
      {loading ? "Saving..." : "Add Product"}
    </button>
  </form>
);
}