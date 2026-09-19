import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, getRecipesByCategory } from "@/data/recipes";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found - ChefSadu" };

  return {
    title: `${category.name} Recipes - ChefSadu`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const recipes = getRecipesByCategory(category.slug);

  return (
    <div className="space-y-10 pb-16">
      
      {/* Category Hero Header */}
      <div className="relative rounded-3xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 sm:p-12">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="px-3 py-1 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-bold uppercase tracking-wider">
            Category
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[hsl(var(--foreground))]">
            {category.name}
          </h1>
          <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed font-medium">
            {category.description}
          </p>
          <div className="text-xs font-bold text-[hsl(var(--primary))] pt-2">
            Showing {recipes.length} delicious {category.name.toLowerCase()} recipes
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden md:block">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-4">
          <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
            {category.name} Collection
          </h2>
        </div>

        <RecipeGrid
          recipes={recipes}
          emptyMessage={`No recipes found in ${category.name} yet.`}
        />
      </div>

    </div>
  );
}
