"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { isFavorite, toggleFavorite } from "@/lib/storage";

interface FavoriteButtonProps {
  recipeId: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function FavoriteButton({ recipeId, className = "", size = "md", showLabel = false }: FavoriteButtonProps) {
  const [fav, setFav] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFav(isFavorite(recipeId));

    const handleUpdate = () => {
      setFav(isFavorite(recipeId));
    };

    window.addEventListener("favorites-updated", handleUpdate);
    return () => window.removeEventListener("favorites-updated", handleUpdate);
  }, [recipeId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipeId);
    setFav(!fav);
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const btnPadding = {
    sm: "p-1.5",
    md: "p-2.5",
    lg: "p-3",
  };

  if (!mounted) {
    return (
      <button
        aria-label="Save Recipe"
        className={`rounded-full bg-[hsl(var(--background))/0.8] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] ${btnPadding[size]} ${className}`}
      >
        <Heart className={iconSizes[size]} />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={fav ? "Remove from Favorites" : "Save to Favorites"}
      className={`group rounded-full transition-all duration-200 flex items-center gap-2 ${
        fav
          ? "bg-red-50 dark:bg-red-950/40 text-red-500 border border-red-200 dark:border-red-900/50 shadow-sm"
          : "bg-[hsl(var(--background))/0.85] backdrop-blur-sm border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-red-500 hover:border-red-300"
      } ${btnPadding[size]} ${className}`}
    >
      <Heart
        className={`${iconSizes[size]} transition-transform duration-200 group-hover:scale-110 ${
          fav ? "fill-red-500 text-red-500 animate-in zoom-in-50 duration-150" : ""
        }`}
      />
      {showLabel && (
        <span className="text-sm font-semibold pr-1">
          {fav ? "Saved" : "Save Recipe"}
        </span>
      )}
    </button>
  );
}
