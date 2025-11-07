"use client";

import { useState, useMemo } from "react";
import type { ProductModel } from "@/models";
import ProductCard from "@/components/home/ProductCard";
import ProductFilters, { FilterState } from "./ProductFilters";

interface ProductsGridProps {
  products: ProductModel[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    minPrice: 0,
    maxPrice: 1000,
    sortBy: "default",
  });

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return Array.from(cats);
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (filters.category !== "all") {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    filtered = filtered.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [products, filters]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-64 shrink-0">
        <div className="lg:sticky lg:top-24">
          <ProductFilters categories={categories} onFilterChange={setFilters} />
        </div>
      </aside>

      <div className="flex-1">
        <div className="mb-6">
          <p className="text-sm text-[#6B7280]">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg font-semibold text-[#333333]">
              No products found
            </p>
            <p className="text-sm text-[#6B7280] mt-2">
              Try adjusting your filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
