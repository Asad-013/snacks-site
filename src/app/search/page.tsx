"use client";

import React, { use } from "react";
import { useSearchParams } from "next/navigation";
import { searchRecipes } from "@/data/recipes";
import { SearchBar } from "@/components/search/SearchBar";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";

export default function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = use(searchParams);
  const query = params.q || "";

  const results = searchRecipes(query);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Search Header & Input */}
      <div className="border-b border-[hsl(var(--border))] pb-8 space-y-6 max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-[hsl(var(--foreground))]">
            Search Recipes
          </h1>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Find recipes by name, ingredients, tags, or category.
          </p>
        </div>

        <SearchBar large initialValue={query} />
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-sm font-medium text-[hsl(var(--muted-foreground))]">
          {query ? (
            <p>
              Found <span className="font-extrabold text-[hsl(var(--primary))]">{results.length} recipes</span> for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <p>Showing all available recipes ({results.length})</p>
          )}
        </div>

        <RecipeGrid
          recipes={results}
          emptyMessage={`No recipes found matching "${query}". Try searching for terms like "Burger", "Chicken", "Pita", "Cheese", or "Spicy".`}
        />
      </div>

    </div>
  );
}
