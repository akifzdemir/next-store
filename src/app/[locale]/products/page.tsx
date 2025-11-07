import { API_URL } from "@/config/endpoints";
import { getTranslations } from "next-intl/server";
import type { ProductModel } from "@/models";
import ProductsGrid from "@/components/products/ProductsGrid";

const getAllProducts = async (): Promise<ProductModel[]> => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) return [];
  const data = (await res.json()) as ProductModel[];
  return data;
};

export default async function ProductsPage() {
  const t = await getTranslations("ProductsPage");
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
          <p className="mt-2 text-sm text-[#6B7280]">
            Browse our complete collection of products
          </p>
        </div>

        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
