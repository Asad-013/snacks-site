import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types/recipe";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative rounded-2xl border border-[hsl(var(--border))] overflow-hidden bg-[hsl(var(--card))] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[hsl(var(--muted))]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">
            {category.recipeCount} Recipes
          </span>
          <h3 className="font-extrabold text-xl mt-1 group-hover:text-[hsl(var(--primary))] transition-colors">
            {category.name}
          </h3>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))] font-semibold">
        <span className="line-clamp-1">{category.description}</span>
        <ArrowRight className="w-4 h-4 shrink-0 text-[hsl(var(--primary))] group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
