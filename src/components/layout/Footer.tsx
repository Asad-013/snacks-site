import React from "react";
import Link from "next/link";
import { ChefHat, Heart, Globe, Share2, Mail } from "lucide-react";
import { CATEGORIES } from "@/data/recipes";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--secondary))/0.7] border-t border-[hsl(var(--border))] text-[hsl(var(--foreground))] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center text-white shadow-md">
                <ChefHat className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight">
                Snacks<span className="text-[hsl(var(--primary))]">Station</span>
              </span>
            </Link>
            <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-sm leading-relaxed">
              Your ultimate culinary companion for fast-food, potato snacks & Deshi recipes. Discover simple, step-by-step procedures to make restaurant-worthy meals right at home.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" aria-label="Mail">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[hsl(var(--muted-foreground))]">
              <li>
                <Link href="/recipes" className="hover:text-[hsl(var(--primary))] transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[hsl(var(--primary))] transition-colors">
                  Recipe Categories
                </Link>
              </li>
              <li>
                <Link href="/recipes?sort=popular" className="hover:text-[hsl(var(--primary))] transition-colors">
                  Popular Right Now
                </Link>
              </li>
              <li>
                <Link href="/recipes?vegetarian=true" className="hover:text-[hsl(var(--primary))] transition-colors">
                  Vegetarian Snacks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[hsl(var(--primary))] transition-colors">
                  About ChefSadu
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))] mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[hsl(var(--muted-foreground))]">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} className="hover:text-[hsl(var(--primary))] transition-colors">
                    {cat.name} ({cat.recipeCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Tools */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))] mb-4">
              My Kitchen
            </h3>
            <ul className="space-y-2.5 text-sm text-[hsl(var(--muted-foreground))]">
              <li>
                <Link href="/favorites" className="hover:text-[hsl(var(--primary))] transition-colors">
                  Saved Favorites
                </Link>
              </li>
              <li>
                <Link href="/shopping-list" className="hover:text-[hsl(var(--primary))] transition-colors">
                  Shopping List
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-[hsl(var(--primary))] transition-colors">
                  Search Ingredient
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between text-xs text-[hsl(var(--muted-foreground))] gap-4">
          <p>© {new Date().getFullYear()} SnacksStation. Crafted with care for fast food lovers.</p>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-[hsl(var(--primary))] fill-[hsl(var(--primary))]" /> for food lovers everywhere.
          </div>
        </div>
      </div>
    </footer>
  );
}
