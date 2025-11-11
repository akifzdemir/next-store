import { API_URL } from "@/config/endpoints";
import { getTranslations } from "next-intl/server";
import type { ProductModel } from "@/models";
import ProductsGrid from "@/components/products/ProductsGrid";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("metadata.products");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} - Next Store`,
      description: t("description"),
      type: "website",
      locale: locale,
    },
  };
}

const getAllProducts = async (): Promise<ProductModel[]> => {
  try {
    const res = await fetch(`${API_URL}/products`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    const data = (await res.json()) as ProductModel[];
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default async function ProductsPage() {
  const t = await getTranslations("ProductsPage");
  const products = await getAllProducts();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
          <p className="mt-2 text-sm text-[#6B7280]">{t("subtitle")}</p>
        </div>

        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
