import React from "react";
import { Recipe } from "@/types/recipe";
import { RecipeCard } from "./RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
  emptyMessage?: string;
}

export function RecipeGrid({ recipes, emptyMessage = "No recipes found match your criteria." }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-[hsl(var(--card))] rounded-2xl border border-[hsl(var(--border))] max-w-md mx-auto my-8">
        <p className="text-base text-[hsl(var(--muted-foreground))] mb-4">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} priorityImage={index < 4} />
      ))}
    </div>
  );
}
