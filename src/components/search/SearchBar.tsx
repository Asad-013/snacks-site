"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
  large?: boolean;
}

export function SearchBar({
  initialValue = "",
  placeholder = "Search recipes or ingredients (e.g. Chicken, Burger, Fries)...",
  large = false,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/recipes`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      <div className={`relative flex items-center w-full rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-[hsl(var(--ring))] ${large ? "p-1.5" : "p-1"}`}>
        <Search className={`ml-4 text-[hsl(var(--muted-foreground))] ${large ? "w-6 h-6" : "w-5 h-5"}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] ${
            large ? "px-4 py-3 text-base sm:text-lg" : "px-3 py-2 text-sm"
          }`}
        />
        <button
          type="submit"
          className={`rounded-xl font-bold bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))/0.9] transition-colors ${
            large ? "px-6 py-3 text-sm sm:text-base" : "px-4 py-2 text-xs"
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
}
