"use client";

import React, { useState, useEffect } from "react";
import { Check, ShoppingBag, Plus } from "lucide-react";
import { Ingredient } from "@/types/recipe";
import { addRecipeIngredientsToShoppingList } from "@/lib/storage";

interface IngredientListProps {
  recipeId: string;
  recipeTitle: string;
  ingredients: Ingredient[];
  servings: number;
}

export function IngredientList({ recipeId, recipeTitle, ingredients, servings }: IngredientListProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [addedToList, setAddedToList] = useState(false);

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const handleAddAllToShoppingList = () => {
    addRecipeIngredientsToShoppingList(recipeId, recipeTitle, ingredients);
    setAddedToList(true);
    setTimeout(() => setAddedToList(false), 3000);
  };

  return (
    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[hsl(var(--border))] pb-4">
        <div>
          <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">Ingredients</h2>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Check off ingredients as you cook ({checkedIds.length}/{ingredients.length})</p>
        </div>

        <button
          onClick={handleAddAllToShoppingList}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
            addedToList
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))/0.9] shadow-sm"
          }`}
        >
          {addedToList ? (
            <>
              <Check className="w-4 h-4" /> Added to Shopping List!
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Add All to Shopping List
            </>
          )}
        </button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ingredients.map((ing) => {
          const isChecked = checkedIds.includes(ing.id);
          return (
            <li
              key={ing.id}
              onClick={() => toggleCheck(ing.id)}
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                isChecked
                  ? "bg-[hsl(var(--accent))] border-[hsl(var(--primary))/0.3] text-[hsl(var(--muted-foreground))]"
                  : "bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))/0.5]"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                  isChecked
                    ? "bg-[hsl(var(--primary))] border-[hsl(var(--primary))] text-white"
                    : "border-[hsl(var(--muted-foreground))/0.4] bg-[hsl(var(--card))]"
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <div className="flex items-center justify-between w-full text-sm font-medium">
                <span className={isChecked ? "line-through opacity-70" : ""}>{ing.name}</span>
                <span className="text-xs font-bold text-[hsl(var(--primary))] bg-[hsl(var(--accent))] px-2 py-0.5 rounded-md shrink-0 ml-2">
                  {ing.quantity}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
