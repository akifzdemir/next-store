import { notFound } from "next/navigation";
import { API_URL } from "@/config/endpoints";
import type { ProductModel } from "@/models";
import ImageGallery from "@/components/product-detail/ImageGallery";
import ProductInfo from "@/components/product-detail/ProductInfo";
import Breadcrumbs from "@/components/product-detail/Breadcrumbs";
import type { Metadata } from "next";
import { cache } from "react";
import { getTranslations } from "next-intl/server";

const getProduct = cache(async (id: string): Promise<ProductModel | null> => {
  try {
    const res = await fetch(`${API_URL}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(
        `Failed to fetch product: ${res.status} ${res.statusText}`
      );
    }

    const data = (await res.json()) as ProductModel;
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; slug: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const product = await getProduct(id);

  if (!product) {
    const t = await getTranslations("metadata.productDetail.notFound");
    return {
      title: t("title"),
      description: t("description"),
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
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
