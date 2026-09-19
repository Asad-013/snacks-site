"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, SlidersHorizontal, RotateCcw, Sparkles, Check } from "lucide-react";
import { RECIPES, CATEGORIES } from "@/data/recipes";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";
import { SearchBar } from "@/components/search/SearchBar";
import { SortOption } from "@/types/recipe";

function RecipesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSort = (searchParams.get("sort") as SortOption) || "popular";
  const initialVeg = searchParams.get("vegetarian") === "true";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedMaxTime, setSelectedMaxTime] = useState<number>(60);
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(initialVeg);
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Reset filters
  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedMaxTime(60);
    setVegetarianOnly(false);
    setSortBy("popular");
    setSearchQuery("");
  };

  // Filter and Sort logic
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      if (selectedCategory !== "all" && recipe.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      if (selectedDifficulty !== "all" && recipe.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) {
        return false;
      }
      if (recipe.totalTime > selectedMaxTime) {
        return false;
      }
      if (vegetarianOnly && !recipe.isVegetarian) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = recipe.title.toLowerCase().includes(q);
        const matchesDesc = recipe.description.toLowerCase().includes(q);
        const matchesIng = recipe.ingredients.some((i) => i.name.toLowerCase().includes(q));
        const matchesTags = recipe.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesIng && !matchesTags) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.reviewCount - a.reviewCount;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "quickest") return a.totalTime - b.totalTime;
      if (sortBy === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0;
    });
  }, [selectedCategory, selectedDifficulty, selectedMaxTime, vegetarianOnly, sortBy, searchQuery]);

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <div className="border-b border-[hsl(var(--border))] pb-6 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black text-[hsl(var(--foreground))]">
          Discover Recipes ({RECIPES.length} Total)
        </h1>
        <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-xl">
          Browse through our complete collection of fast food, snacks, and authentic Deshi potato recipes.
        </p>

        {/* Top Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="w-full sm:w-80">
            <SearchBar
              initialValue={searchQuery}
              placeholder="Filter by keyword (e.g. Aloo, Chop, Wedges)..."
            />
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-4 py-2.5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-xs font-bold flex items-center gap-2"
            >
              <Filter className="w-4 h-4 text-[hsl(var(--primary))]" /> Filters
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[hsl(var(--muted-foreground))]">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl px-3 py-2 text-xs font-bold text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="quickest">Quickest (&lt; min)</option>
                <option value="newest">Newest Added</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Scrollable Filter Sidebar */}
        <aside className={`lg:block ${mobileFilterOpen ? "block" : "hidden"} bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 space-y-6 shadow-xs max-h-[calc(100vh-6rem)] overflow-y-auto sticky top-24`}>
          <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-3">
            <h3 className="font-bold text-base flex items-center gap-2 text-[hsl(var(--foreground))]">
              <SlidersHorizontal className="w-4 h-4 text-[hsl(var(--primary))]" /> Filter Recipes
            </h3>
            <button
              onClick={handleReset}
              className="text-xs text-[hsl(var(--primary))] font-semibold hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Premium Custom Category Pill List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                Category
              </label>
              <span className="text-[10px] font-semibold text-[hsl(var(--primary))] bg-[hsl(var(--accent))] px-2 py-0.5 rounded-full">
                {CATEGORIES.length} Categories
              </span>
            </div>

            <div className="flex flex-col gap-1.5 max-h-64 overflow-y-auto pr-1 text-xs">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-[hsl(var(--primary))] text-white shadow-xs"
                    : "bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]"
                }`}
              >
                <span>All Categories</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === "all" ? "bg-white/20 text-white" : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"}`}>
                  {RECIPES.length}
                </span>
              </button>

              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left font-medium transition-all ${
                      isSelected
                        ? "bg-[hsl(var(--primary))] text-white shadow-xs font-bold"
                        : "bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${isSelected ? "bg-white/20 text-white" : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"}`}>
                      {cat.recipeCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
              Difficulty
            </label>
            <div className="flex items-center gap-2">
              {["all", "Easy", "Medium", "Hard"].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize border transition-colors ${
                    selectedDifficulty === diff
                      ? "bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]"
                      : "bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-[hsl(var(--muted-foreground))]">
              <span className="uppercase tracking-wider">Max Total Time</span>
              <span className="text-[hsl(var(--primary))] font-extrabold">{selectedMaxTime} min</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={selectedMaxTime}
              onChange={(e) => setSelectedMaxTime(Number(e.target.value))}
              className="w-full accent-[hsl(var(--primary))]"
            />
            <div className="flex justify-between text-[10px] text-[hsl(var(--muted-foreground))]">
              <span>10m</span>
              <span>30m</span>
              <span>60m</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[hsl(var(--border))]">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-bold text-[hsl(var(--foreground))] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Vegetarian Only
              </span>
              <input
                type="checkbox"
                checked={vegetarianOnly}
                onChange={(e) => setVegetarianOnly(e.target.checked)}
                className="w-4 h-4 accent-emerald-600 rounded"
              />
            </label>
          </div>
        </aside>

        <main className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-[hsl(var(--muted-foreground))]">
            <span>Showing {filteredRecipes.length} of {RECIPES.length} recipes</span>
          </div>

          <RecipeGrid
            recipes={filteredRecipes}
            emptyMessage="No recipes match your filter criteria. Try adjusting or resetting your filters."
          />
        </main>
      </div>
    </div>
  );
}

export default function RecipesPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center text-sm text-[hsl(var(--muted-foreground))]">Loading recipes...</div>}>
      <RecipesContent />
    </Suspense>
  );
}
