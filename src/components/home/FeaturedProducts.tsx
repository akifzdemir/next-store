import type { ProductModel } from "@/models";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  products: ProductModel[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h2 className="text-3xl font-bold tracking-tight pb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
