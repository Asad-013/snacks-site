import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star, Flame, Sparkles, ChefHat } from "lucide-react";
import { Recipe } from "@/types/recipe";
import { FavoriteButton } from "./FavoriteButton";

interface RecipeCardProps {
  recipe: Recipe;
  priorityImage?: boolean;
}

export function RecipeCard({ recipe, priorityImage = false }: RecipeCardProps) {
  const difficultyColors = {
    Easy: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40",
    Medium: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800/40",
    Hard: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800/40",
  };

  return (
    <div className="group relative bg-[hsl(var(--card))] rounded-2xl border border-[hsl(var(--border))] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[hsl(var(--muted))]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          priority={priorityImage}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 flex-wrap pointer-events-auto">
            <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[hsl(var(--background))/0.9] text-[hsl(var(--foreground))] backdrop-blur-md shadow-xs">
              {recipe.category}
            </span>
            {recipe.isVegetarian && (
              <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-600 text-white shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Veg
              </span>
            )}
          </div>

          <div className="pointer-events-auto">
            <FavoriteButton recipeId={recipe.id} size="sm" />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{recipe.rating.toFixed(1)}</span>
            <span className="text-white/70 text-[10px]">({recipe.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <Link href={`/recipes/${recipe.slug}`} className="focus:outline-none">
            <h3 className="font-bold text-lg text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors line-clamp-1">
              {recipe.title}
            </h3>
          </Link>

          <p className="text-xs text-[hsl(var(--muted-foreground))] line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-3 border-t border-[hsl(var(--border))] flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))] font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
            <span>{recipe.totalTime} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>{recipe.nutrition.calories} kcal</span>
          </div>

          <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}
