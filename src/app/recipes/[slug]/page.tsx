import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Users, Flame, Star, Sparkles, ChefHat, AlertTriangle, ShieldCheck } from "lucide-react";
import { getRecipeBySlug, getRelatedRecipes, RECIPES } from "@/data/recipes";
import { IngredientList } from "@/components/recipe/IngredientList";
import { CookingSteps } from "@/components/recipe/CookingSteps";
import { NutritionCard } from "@/components/recipe/NutritionCard";
import { FavoriteButton } from "@/components/recipe/FavoriteButton";
import { ActionButtons } from "@/components/recipe/ActionButtons";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RECIPES.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: "Recipe Not Found - SnacksStation" };

  return {
    title: `${recipe.title} Recipe - SnacksStation`,
    description: recipe.description,
    keywords: recipe.tags,
    openGraph: {
      title: `${recipe.title} Recipe`,
      description: recipe.description,
      images: [{ url: recipe.image }],
    },
  };
}

export default async function RecipeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const related = getRelatedRecipes(recipe, 4);

  // Schema.org Recipe JSON-LD Structured Data
  const recipeJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [recipe.image],
    "author": {
      "@type": "Organization",
      "name": "SnacksStation"
    },
    "datePublished": recipe.createdAt,
    "description": recipe.description,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${recipe.totalTime}M`,
    "keywords": recipe.tags.join(", "),
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": recipe.category,
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${recipe.nutrition.calories} calories`,
      "proteinContent": `${recipe.nutrition.protein} g`,
      "carbohydrateContent": `${recipe.nutrition.carbs} g`,
      "fatContent": `${recipe.nutrition.fat} g`,
      "fiberContent": `${recipe.nutrition.fiber} g`
    },
    "recipeIngredient": recipe.ingredients.map(i => `${i.quantity} ${i.name}`),
    "recipeInstructions": recipe.steps.map(s => ({
      "@type": "HowToStep",
      "name": s.title,
      "text": s.description
    }))
  };

  return (
    <article className="space-y-12 pb-20">
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />

      {/* Top Header & Breadcrumbs */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))] font-semibold">
          <Link href="/" className="hover:text-[hsl(var(--primary))]">Home</Link>
          <span>/</span>
          <Link href="/recipes" className="hover:text-[hsl(var(--primary))]">Recipes</Link>
          <span>/</span>
          <span className="text-[hsl(var(--foreground))]">{recipe.category}</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] text-xs font-bold uppercase tracking-wider">
                {recipe.category}
              </span>
              {recipe.isVegetarian && (
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Vegetarian
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[hsl(var(--foreground))] tracking-tight leading-tight">
              {recipe.title}
            </h1>

            <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-medium">
              {recipe.description}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-3 shrink-0">
            <FavoriteButton recipeId={recipe.id} size="lg" showLabel />
            <ActionButtons recipeTitle={recipe.title} />
          </div>
        </div>
      </div>

      {/* Hero Food Image & Quick Stats Bar */}
      <div className="space-y-6">
        <div className="relative aspect-21/9 w-full rounded-3xl overflow-hidden shadow-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Rating overlay badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/75 backdrop-blur-md px-4 py-2 rounded-2xl text-white">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-lg">{recipe.rating.toFixed(1)}</span>
            <span className="text-xs text-white/70">({recipe.reviewCount} user reviews)</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-4 flex items-center gap-3 shadow-xs">
            <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[hsl(var(--primary))]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] block">Prep Time</span>
              <span className="font-extrabold text-base text-[hsl(var(--foreground))]">{recipe.prepTime} mins</span>
            </div>
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-4 flex items-center gap-3 shadow-xs">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] block">Cook Time</span>
              <span className="font-extrabold text-base text-[hsl(var(--foreground))]">{recipe.cookTime} mins</span>
            </div>
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-4 flex items-center gap-3 shadow-xs">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] block">Servings</span>
              <span className="font-extrabold text-base text-[hsl(var(--foreground))]">{recipe.servings} People</span>
            </div>
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-4 flex items-center gap-3 shadow-xs">
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] block">Difficulty</span>
              <span className="font-extrabold text-base text-[hsl(var(--foreground))]">{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Recipe Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Ingredients & Prep */}
        <div className="lg:col-span-5 space-y-8">
          <IngredientList
            recipeId={recipe.id}
            recipeTitle={recipe.title}
            ingredients={recipe.ingredients}
            servings={recipe.servings}
          />

          {/* Nutrition Information */}
          <NutritionCard nutrition={recipe.nutrition} />

          {/* Storage & Shelf Life Info */}
          {recipe.storageInfo && (
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 space-y-2 shadow-xs">
              <h3 className="font-bold text-base text-[hsl(var(--foreground))] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> Storage & Reheating
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {recipe.storageInfo}
              </p>
            </div>
          )}
        </div>

        {/* Cooking Procedure & Tips */}
        <div className="lg:col-span-7 space-y-8">
          <CookingSteps recipeId={recipe.id} steps={recipe.steps} />

          {/* Preparation & Chef Tips */}
          {((recipe.tips && recipe.tips.length > 0) || (recipe.chefTips && recipe.chefTips.length > 0)) && (
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-amber-600" /> Chef's Secret Tips
              </h3>
              <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                {recipe.tips?.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">•</span>
                    <span>{t}</span>
                  </li>
                ))}
                {recipe.chefTips?.map((ct, idx) => (
                  <li key={`ct-${idx}`} className="flex items-start gap-2 font-semibold">
                    <span className="font-bold text-amber-600">★</span>
                    <span>{ct}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes */}
          {recipe.commonMistakes && recipe.commonMistakes.length > 0 && (
            <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-rose-900 dark:text-rose-200 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" /> Common Mistakes to Avoid
              </h3>
              <ul className="space-y-1.5 text-sm text-rose-800 dark:text-rose-300">
                {recipe.commonMistakes.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap pt-4">
            <span className="text-xs font-bold text-[hsl(var(--muted-foreground))]">Tags:</span>
            {recipe.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${tag}`}
                className="px-3 py-1 rounded-lg bg-[hsl(var(--secondary))] text-xs font-semibold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

        </div>

      </div>

      {/* Related Recipes Section */}
      {related.length > 0 && (
        <section className="pt-12 border-t border-[hsl(var(--border))] space-y-8">
          <h2 className="text-3xl font-extrabold text-[hsl(var(--foreground))]">
            You May Also Like
          </h2>
          <RecipeGrid recipes={related} />
        </section>
      )}

      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[hsl(var(--background))/0.95] backdrop-blur-md border-t border-[hsl(var(--border))] p-3 flex items-center justify-around gap-2 shadow-lg">
        <FavoriteButton recipeId={recipe.id} size="md" showLabel />
        <Link
          href="/shopping-list"
          className="flex-1 py-2.5 px-4 rounded-full bg-[hsl(var(--primary))] text-white font-bold text-xs text-center shadow-xs"
        >
          View Shopping List
        </Link>
      </div>

    </article>
  );
}
