"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { RECIPES } from "@/data/recipes";
import { getFavoriteIds } from "@/lib/storage";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";

export default function FavoritesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<typeof RECIPES>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadFavs = () => {
      const ids = getFavoriteIds();
      const favs = RECIPES.filter((r) => ids.includes(r.id));
      setFavoriteRecipes(favs);
    };

    loadFavs();

    window.addEventListener("favorites-updated", loadFavs);
    return () => window.removeEventListener("favorites-updated", loadFavs);
  }, []);

  if (!mounted) {
    return <div className="py-16 text-center text-sm text-[hsl(var(--muted-foreground))]">Loading favorites...</div>;
  }

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="border-b border-[hsl(var(--border))] pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-500">
            <Heart className="w-6 h-6 fill-red-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[hsl(var(--foreground))]">
            My Favorite Recipes
          </h1>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          Your personal saved recipe box stored conveniently on your browser.
        </p>
      </div>

      {/* Content */}
      {favoriteRecipes.length === 0 ? (
        <div className="text-center py-20 px-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-3xl max-w-lg mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/40 text-red-500 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">You haven&apos;t saved any recipes yet.</h2>
            <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-sm mx-auto">
              Tap the heart icon on any recipe card or recipe detail page to save it for quick access anytime!
            </p>
          </div>
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[hsl(var(--primary))] text-white font-bold text-sm shadow-md hover:bg-[hsl(var(--primary))/0.9] transition-all"
          >
            Explore Recipes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-[hsl(var(--muted-foreground))]">
            Saved ({favoriteRecipes.length} recipes)
          </div>
          <RecipeGrid recipes={favoriteRecipes} />
        </div>
      )}

    </div>
  );
}
