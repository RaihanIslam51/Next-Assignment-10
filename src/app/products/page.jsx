import clientPromise from "@/lib/mongodb";
import ProductsList from "./ProductsList";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("ProductApp");

  const products = await db
    .collection("products")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  // Convert to plain JSON-serializable objects
  const plainProducts = products.map((p) => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt ? p.createdAt.toISOString() : null,
    updatedAt: p.updatedAt ? p.updatedAt.toISOString() : null,
  }));

  return <ProductsList products={plainProducts} />;
}
