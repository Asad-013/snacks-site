import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import { CATEGORIES, RECIPES } from "@/data/recipes";
import { SearchBar } from "@/components/search/SearchBar";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";

export default function HomePage() {
  const popularRecipes = RECIPES.filter((r) => r.isPopular).slice(0, 8);
  const featuredRecipe = RECIPES.find((r) => r.isFeatured) || RECIPES[0];

  const popularSearches = ["Burger", "Chicken", "Pizza", "Fries", "Sandwich", "Samosa", "Churros"];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 bg-gradient-to-b from-[hsl(var(--accent))/0.6] to-transparent rounded-3xl border border-[hsl(var(--border))] px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsl(var(--accent))] border border-[hsl(var(--primary))/0.3] text-[hsl(var(--primary))] text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-[hsl(var(--primary))]" />
              Over 25+ Homemade Fast-Food & Snack Recipes
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[hsl(var(--foreground))] leading-[1.15]">
              Delicious Snacks. <br className="hidden sm:inline" />
              <span className="text-[hsl(var(--primary))]">Simple Recipes.</span>
            </h1>

            <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Discover easy-to-follow fast food and snack recipes you can make at home. From crispy fried chicken to juicy smash burgers and cheesy pizzas.
            </p>

            {/* Search Bar */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <SearchBar large placeholder="Search recipes (e.g. Crispy Wings, Shawarma)..." />
              
              {/* Popular Tag Pills */}
              <div className="flex items-center gap-2 flex-wrap mt-4 justify-center lg:justify-start text-xs text-[hsl(var(--muted-foreground))] font-semibold">
                <span>Popular:</span>
                {popularSearches.map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${term}`}
                    className="px-2.5 py-1 rounded-lg bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Hero Image / Featured Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[hsl(var(--card))]">
              <Image
                src={featuredRecipe.image}
                alt={featuredRecipe.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-bold uppercase tracking-wider">
                  Featured Today
                </span>
                <h2 className="text-2xl font-black drop-shadow-md">
                  {featuredRecipe.title}
                </h2>
                <p className="text-xs text-white/80 line-clamp-2">
                  {featuredRecipe.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/recipes/${featuredRecipe.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-neutral-100 transition-colors"
                  >
                    Get Recipe <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="space-y-8">
        <div className="flex items-end justify-between flex-wrap gap-4 border-b border-[hsl(var(--border))] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">
              Explore Variety
            </span>
            <h2 className="text-3xl font-extrabold text-[hsl(var(--foreground))]">
              Recipe Categories
            </h2>
          </div>
          <Link
            href="/categories"
            className="text-sm font-bold text-[hsl(var(--primary))] hover:underline flex items-center gap-1"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.slice(0, 10).map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="space-y-8">
        <div className="flex items-end justify-between flex-wrap gap-4 border-b border-[hsl(var(--border))] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))]">
              Top Rated
            </span>
            <h2 className="text-3xl font-extrabold text-[hsl(var(--foreground))]">
              Popular Right Now
            </h2>
          </div>
          <Link
            href="/recipes?sort=popular"
            className="text-sm font-bold text-[hsl(var(--primary))] hover:underline flex items-center gap-1"
          >
            Explore All Recipes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <RecipeGrid recipes={popularRecipes} />
      </section>

      {/* Quick Cooking Tips Banner */}
      <section className="rounded-3xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="space-y-2 md:col-span-2">
          <h3 className="text-2xl font-black text-[hsl(var(--foreground))]">
            Want to build your custom grocery shopping list?
          </h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            Save any recipe ingredients directly to your interactive shopping list and check them off while at the supermarket!
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <Link
            href="/shopping-list"
            className="px-6 py-3.5 rounded-2xl bg-[hsl(var(--primary))] text-white font-bold text-sm shadow-md hover:bg-[hsl(var(--primary))/0.9] transition-all"
          >
            Open Shopping List
          </Link>
        </div>
      </section>

    </div>
  );
}
