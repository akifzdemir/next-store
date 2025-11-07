"use client";

import { useState } from "react";

interface ProductFiltersProps {
  categories: string[];
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: string;
}

export default function ProductFilters({
  categories,
  onFilterChange,
}: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    minPrice: 0,
    maxPrice: 1000,
    sortBy: "default",
  });

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      category: "all",
      minPrice: 0,
      maxPrice: 1000,
      sortBy: "default",
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-[#333333] mb-3">
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDZMMTEgMSIgc3Ryb2tlPSIjNkI3MjgwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-size-[12px] bg-position-[center_right_1rem] bg-no-repeat"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#333333] mb-3">
          Price Range
        </label>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-[#6B7280] mb-2">
              <span>Min</span>
              <span className="font-medium text-[#333333]">
                ${filters.minPrice}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.minPrice}
              onChange={(e) =>
                handleFilterChange("minPrice", Number(e.target.value))
              }
              className="w-full accent-[#3B82F6]"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs text-[#6B7280] mb-2">
              <span>Max</span>
              <span className="font-medium text-[#333333]">
                ${filters.maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={filters.maxPrice}
              onChange={(e) =>
                handleFilterChange("maxPrice", Number(e.target.value))
              }
              className="w-full accent-[#3B82F6]"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#333333] mb-3">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDZMMTEgMSIgc3Ryb2tlPSIjNkI3MjgwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-size-[12px] bg-position-[center_right_1rem] bg-no-repeat"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-[#333333] hover:bg-gray-50 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
}
