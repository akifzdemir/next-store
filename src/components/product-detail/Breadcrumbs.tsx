import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface BreadcrumbsProps {
  category: string;
  productName: string;
}

export default function Breadcrumbs({
  category,
  productName,
}: BreadcrumbsProps) {
  const t = useTranslations("ProductDetailPage.breadcrumbs");
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link
        href={`/`}
        className="text-gray-500 text-sm font-medium leading-normal hover:text-blue-600 transition-colors"
      >
        {t("home")}
      </Link>
      <span className="text-gray-500 text-sm font-medium leading-normal">
        /
      </span>
      <Link
        href={`/products?category=${category}`}
        className="text-gray-500 text-sm font-medium leading-normal hover:text-blue-600 transition-colors capitalize"
      >
        {category}
      </Link>
      <span className="text-gray-500 text-sm font-medium leading-normal">
        /
      </span>
      <span className="text-gray-900 text-sm font-medium leading-normal">
        {productName}
      </span>
    </div>
  );
}
