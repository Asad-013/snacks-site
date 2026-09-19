export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  category?: string;
}

export interface CookingStep {
  stepNumber: number;
  title: string;
  description: string;
  image?: string;
  tip?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number; // in grams
  carbs: number;   // in grams
  fat: number;     // in grams
  fiber: number;   // in grams
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string; // e.g. "Burgers", "Fried Chicken", "Pizza", "Sandwiches", "Wraps", "Fries", "Snacks", "Street Food", "Desserts", "Drinks"
  tags: string[];
  isVegetarian?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  
  rating: number;
  reviewCount: number;
  
  ingredients: Ingredient[];
  steps: CookingStep[];
  
  tips?: string[];
  chefTips?: string[];
  commonMistakes?: string[];
  storageInfo?: string;
  
  nutrition: NutritionInfo;
  
  createdAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  recipeCount: number;
  iconName: string;
}

export type SortOption = "popular" | "rating" | "quickest" | "newest";
