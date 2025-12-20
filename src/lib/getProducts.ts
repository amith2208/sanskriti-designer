import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;

  // NEW (optional for old products)
  description?: string;
  highlights?: string[];
  images?: string[];
};


export async function getProducts(): Promise<Product[]> {
  const querySnapshot = await getDocs(collection(db, "products"));

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Product, "id">),
  }));
}
