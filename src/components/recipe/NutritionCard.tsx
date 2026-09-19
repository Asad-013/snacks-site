import React from "react";
import { Flame, Dumbbell, Wheat, Droplet, Leaf } from "lucide-react";
import { NutritionInfo } from "@/types/recipe";

interface NutritionCardProps {
  nutrition: NutritionInfo;
}

export function NutritionCard({ nutrition }: NutritionCardProps) {
  const items = [
    { label: "Calories", value: `${nutrition.calories}`, unit: "kcal", icon: Flame, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40" },
    { label: "Protein", value: `${nutrition.protein}`, unit: "g", icon: Dumbbell, color: "text-blue-500 bg-blue-50 dark:bg-blue-950/40" },
    { label: "Carbs", value: `${nutrition.carbs}`, unit: "g", icon: Wheat, color: "text-orange-500 bg-orange-50 dark:bg-orange-950/40" },
    { label: "Fat", value: `${nutrition.fat}`, unit: "g", icon: Droplet, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/40" },
    { label: "Fiber", value: `${nutrition.fiber}`, unit: "g", icon: Leaf, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40" },
  ];

  return (
    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm space-y-4">
      <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Nutrition Information</h3>
      <p className="text-xs text-[hsl(var(--muted-foreground))]">Estimated per serving</p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-center space-y-1"
            >
              <div className={`p-2 rounded-full ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs text-[hsl(var(--muted-foreground))] font-medium">{item.label}</span>
              <span className="font-extrabold text-base text-[hsl(var(--foreground))]">
                {item.value} <span className="text-xs font-normal text-[hsl(var(--muted-foreground))]">{item.unit}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
