import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 p-8 text-center bg-white">
      <Icon className="h-10 w-10 text-[#3B82F6]" />
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}
