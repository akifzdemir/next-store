import { getTranslations } from "next-intl/server";
import FeatureCard from "./FeatureCard";
import { Truck, Undo2, Leaf } from "lucide-react";

export default async function FeaturesSection() {
  const t = await getTranslations("HomePage.features");
  const features = [
    {
      icon: Truck,
      title: t("freeShipping.title"),
      description: t("freeShipping.description"),
    },
    {
      icon: Undo2,
      title: t("easyReturns.title"),
      description: t("easyReturns.description"),
    },
    {
      icon: Leaf,
      title: t("sustainable.title"),
      description: t("sustainable.description"),
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
