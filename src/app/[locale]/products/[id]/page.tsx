import { notFound } from "next/navigation";
import { API_URL } from "@/config/endpoints";
import type { ProductModel } from "@/models";
import ImageGallery from "@/components/product-detail/ImageGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";
import Breadcrumbs from "@/components/product-detail/Breadcrumbs";

const getProduct = async (id: string): Promise<ProductModel | null> => {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) return null;
  const data = (await res.json()) as ProductModel;
  return data;
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
      <Breadcrumbs category={product.category} productName={product.title} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <ImageGallery image={product.image} title={product.title} />
        <ProductInfo product={product} />
      </div>
    </main>
  );
}
