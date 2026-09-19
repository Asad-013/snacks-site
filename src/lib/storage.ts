"use me";

export interface ShoppingItem {
  id: string;
  recipeId: string;
  recipeTitle: string;
  ingredientName: string;
  quantity: string;
  checked: boolean;
}

const FAVORITES_KEY = "chefsadu_favorites";
const SHOPPING_KEY = "chefsadu_shopping_list";
const COMPLETED_STEPS_KEY = "chefsadu_completed_steps";
const THEME_KEY = "chefsadu_theme";

// --- Favorites ---
export function getFavoriteIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const item = localStorage.getItem(FAVORITES_KEY);
    return item ? JSON.parse(item) : [];
  } catch (e) {
    console.error("Error loading favorites from localStorage", e);
    return [];
  }
}

export function isFavorite(recipeId: string): boolean {
  const favorites = getFavoriteIds();
  return favorites.includes(recipeId);
}

export function toggleFavorite(recipeId: string): string[] {
  if (typeof window === "undefined") return [];
  const favorites = getFavoriteIds();
  let updated: string[];
  if (favorites.includes(recipeId)) {
    updated = favorites.filter((id) => id !== recipeId);
  } else {
    updated = [...favorites, recipeId];
  }
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("favorites-updated"));
  } catch (e) {
    console.error("Error saving favorites to localStorage", e);
  }
  return updated;
}

// --- Shopping List ---
export function getShoppingItems(): ShoppingItem[] {
  if (typeof window === "undefined") return [];
  try {
    const item = localStorage.getItem(SHOPPING_KEY);
    return item ? JSON.parse(item) : [];
  } catch (e) {
    console.error("Error loading shopping list", e);
    return [];
  }
}

export function addRecipeIngredientsToShoppingList(
  recipeId: string,
  recipeTitle: string,
  ingredients: { name: string; quantity: string }[]
): ShoppingItem[] {
  if (typeof window === "undefined") return [];
  const current = getShoppingItems();
  
  const newItems: ShoppingItem[] = ingredients.map((ing, idx) => ({
    id: `${recipeId}-${idx}-${Date.now()}`,
    recipeId,
    recipeTitle,
    ingredientName: ing.name,
    quantity: ing.quantity,
    checked: false
  }));

  // Filter out exact duplicates for same recipe
  const filteredNew = newItems.filter(
    (newItem) => !current.some((c) => c.recipeId === recipeId && c.ingredientName.toLowerCase() === newItem.ingredientName.toLowerCase())
  );

  const updated = [...current, ...filteredNew];
  saveShoppingItems(updated);
  return updated;
}

export function toggleShoppingItem(itemId: string): ShoppingItem[] {
  const current = getShoppingItems();
  const updated = current.map((item) =>
    item.id === itemId ? { ...item, checked: !item.checked } : item
  );
  saveShoppingItems(updated);
  return updated;
}

export function deleteShoppingItem(itemId: string): ShoppingItem[] {
  const current = getShoppingItems();
  const updated = current.filter((item) => item.id !== itemId);
  saveShoppingItems(updated);
  return updated;
}

export function clearCompletedShoppingItems(): ShoppingItem[] {
  const current = getShoppingItems();
  const updated = current.filter((item) => !item.checked);
  saveShoppingItems(updated);
  return updated;
}

export function clearAllShoppingItems(): ShoppingItem[] {
  saveShoppingItems([]);
  return [];
}

function saveShoppingItems(items: ShoppingItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SHOPPING_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("shopping-list-updated"));
  } catch (e) {
    console.error("Error saving shopping list", e);
  }
}

// --- Completed Steps per recipe ---
export function getCompletedSteps(recipeId: string): number[] {
  if (typeof window === "undefined") return [];
  try {
    const item = localStorage.getItem(`${COMPLETED_STEPS_KEY}_${recipeId}`);
    return item ? JSON.parse(item) : [];
  } catch (e) {
    return [];
  }
}

export function toggleCompletedStep(recipeId: string, stepNumber: number): number[] {
  if (typeof window === "undefined") return [];
  const current = getCompletedSteps(recipeId);
  let updated: number[];
  if (current.includes(stepNumber)) {
    updated = current.filter((s) => s !== stepNumber);
  } else {
    updated = [...current, stepNumber];
  }
  try {
    localStorage.setItem(`${COMPLETED_STEPS_KEY}_${recipeId}`, JSON.stringify(updated));
  } catch (e) {
    console.error("Error saving completed steps", e);
  }
  return updated;
}
