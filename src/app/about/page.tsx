import React from "react";
import Link from "next/link";
import { ChefHat, Heart, ShieldCheck, Flame, Sparkles } from "lucide-react";

export const metadata = {
  title: "About SnacksStation - Fast Food & Snack Recipes",
  description: "Learn more about SnacksStation, your dedicated recipe portal for easy-to-follow fast food, potato snacks, and Deshi street food.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 py-8 border-b border-[hsl(var(--border))]">
        <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--primary))] text-white flex items-center justify-center mx-auto shadow-lg">
          <ChefHat className="w-10 h-10" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-[hsl(var(--foreground))]">
          About Snacks<span className="text-[hsl(var(--primary))]">Station</span>
        </h1>

        <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] max-w-xl mx-auto leading-relaxed font-medium">
          Bringing restaurant-quality fast-food and crispy street snacks straight to your home kitchen with foolproof step-by-step guides.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[hsl(var(--primary))] flex items-center justify-center mx-auto">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">Tested Recipes</h3>
          <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
            Every recipe is calculated with precise prep time, cook time, and exact ingredients for perfect results.
          </p>
        </div>

        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">Chef Secrets & Tips</h3>
          <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
            Avoid common cooking mistakes with detailed pro tips and storage suggestions for leftovers.
          </p>
        </div>

        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">Smart Tools</h3>
          <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
            Save favorites to your recipe box and sync interactive grocery shopping lists in one click.
          </p>
        </div>

      </div>

      {/* Philosophy Section */}
      <div className="bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] rounded-3xl p-8 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
          Our Culinary Philosophy
        </h2>
        <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
          We believe that fast food doesn&apos;t have to mean low-quality food. By cooking burgers, fried chicken, wraps, and snacks at home, you have complete control over fresh ingredients, oil quality, and seasoning—resulting in cleaner, healthier, and far more delicious meals for your friends and family.
        </p>
      </div>

    </div>
  );
}
