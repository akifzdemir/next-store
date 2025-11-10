import type { ProductModel } from "@/models";
import ProductCard from "./ProductCard";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

interface FeaturedProductsProps {
  products: ProductModel[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const t = useTranslations("HomePage.featuredProducts");
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex items-center justify-between pb-8 gap-4">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <Link href="/products">
          <Button variant="primary" size="md" className="min-h-[48px]">
            {t("showAll")}
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
