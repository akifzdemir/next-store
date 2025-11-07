import FeatureCard from "./FeatureCard";
import { Truck, Undo2, Leaf } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On all orders over $100",
    },
    {
      icon: Undo2,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Crafted with the planet in mind",
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
