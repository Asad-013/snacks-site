"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  Trash2, 
  Check, 
  CheckSquare, 
  Square, 
  Plus, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { 
  getShoppingItems, 
  toggleShoppingItem, 
  deleteShoppingItem, 
  clearCompletedShoppingItems, 
  clearAllShoppingItems, 
  ShoppingItem 
} from "@/lib/storage";

export default function ShoppingListPage() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const loadItems = () => {
    setItems(getShoppingItems());
  };

  useEffect(() => {
    setMounted(true);
    loadItems();

    window.addEventListener("shopping-list-updated", loadItems);
    return () => window.removeEventListener("shopping-list-updated", loadItems);
  }, []);

  const handleToggle = (id: string) => {
    setItems(toggleShoppingItem(id));
  };

  const handleDelete = (id: string) => {
    setItems(deleteShoppingItem(id));
  };

  const handleClearCompleted = () => {
    setItems(clearCompletedShoppingItems());
  };

  const handleClearAll = () => {
    setItems(clearAllShoppingItems());
  };

  if (!mounted) {
    return <div className="py-16 text-center text-sm text-[hsl(var(--muted-foreground))]">Loading shopping list...</div>;
  }

  // Group items by Recipe Title
  const groupedItems = items.reduce<Record<string, ShoppingItem[]>>((acc, item) => {
    if (!acc[item.recipeTitle]) {
      acc[item.recipeTitle] = [];
    }
    acc[item.recipeTitle].push(item);
    return acc;
  }, {});

  const completedCount = items.filter((i) => i.checked).length;

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-[hsl(var(--border))] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--primary))]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[hsl(var(--foreground))]">
              Shopping List
            </h1>
          </div>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Ingredients added from your favorite recipes.
          </p>
        </div>

        {items.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {completedCount > 0 && (
              <button
                onClick={handleClearCompleted}
                className="px-3.5 py-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                Clear Completed ({completedCount})
              </button>
            )}
            <button
              onClick={handleClearAll}
              className="px-3.5 py-2 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/40 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="text-center py-20 px-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-3xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Your shopping list is empty.</h2>
            <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-sm mx-auto">
              Visit any recipe and click &ldquo;Add All to Shopping List&rdquo; to automatically load your grocery list here!
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
        <div className="space-y-8">
          
          {/* Progress Banner */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-4 flex items-center justify-between text-xs font-semibold text-[hsl(var(--muted-foreground))]">
            <span>Progress: {completedCount} of {items.length} items checked</span>
            <div className="w-32 bg-[hsl(var(--secondary))] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[hsl(var(--primary))] h-full transition-all duration-300"
                style={{ width: `${Math.round((completedCount / items.length) * 100)}%` }}
              />
            </div>
          </div>

          {/* Grouped Recipe Lists */}
          {Object.entries(groupedItems).map(([recipeTitle, recipeItems]) => (
            <div
              key={recipeTitle}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 space-y-4 shadow-xs"
            >
              <h3 className="font-bold text-lg text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" /> {recipeTitle}
              </h3>

              <ul className="space-y-2.5">
                {recipeItems.map((item) => (
                  <li
                    key={item.id}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      item.checked
                        ? "bg-[hsl(var(--accent))/0.4] border-emerald-300 dark:border-emerald-800/40 text-[hsl(var(--muted-foreground))]"
                        : "bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
                    }`}
                  >
                    <div
                      onClick={() => handleToggle(item.id)}
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <button
                        aria-label={`Toggle ${item.ingredientName}`}
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                          item.checked
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "border-[hsl(var(--muted-foreground))/0.4] bg-[hsl(var(--card))]"
                        }`}
                      >
                        {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>

                      <span className={`text-sm font-medium ${item.checked ? "line-through opacity-70" : ""}`}>
                        {item.ingredientName}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[hsl(var(--primary))] bg-[hsl(var(--accent))] px-2.5 py-1 rounded-lg shrink-0">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        aria-label="Delete item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}
