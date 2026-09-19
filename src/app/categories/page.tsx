import React from "react";
import Metadata from "next";
import { CATEGORIES } from "@/data/recipes";
import { CategoryCard } from "@/components/categories/CategoryCard";

export const metadata = {
  title: "Recipe Categories - ChefSadu",
  description: "Browse fast food and snack recipes by category including burgers, fried chicken, pizzas, sandwiches, and street food.",
};

export default function CategoriesPage() {
  return (
    <div className="space-y-8 pb-16">
      
      {/* Page Header */}
      <div className="border-b border-[hsl(var(--border))] pb-6 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-[hsl(var(--foreground))]">
          All Recipe Categories
        </h1>
        <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-xl">
          Explore our wide range of snack categories. Click on any category to view all matching step-by-step recipes.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

    </div>
  );
}
