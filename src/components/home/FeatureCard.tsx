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
    <div className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center bg-white dark:bg-[#1a1a1a]">
      <Icon className="h-10 w-10 text-[#3B82F6] dark:text-blue-400" />
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
