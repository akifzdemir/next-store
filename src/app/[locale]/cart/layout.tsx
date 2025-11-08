import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("metadata.cart");

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

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
