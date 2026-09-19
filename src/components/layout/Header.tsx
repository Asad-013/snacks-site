"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChefHat, 
  Search, 
  Heart, 
  ShoppingBag, 
  Sun, 
  Moon, 
  Menu, 
  X,
  BookOpen,
  Grid
} from "lucide-react";
import { getFavoriteIds, getShoppingItems } from "@/lib/storage";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [favoritesCount, setFavoritesCount] = useState<number>(0);
  const [shoppingCount, setShoppingCount] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateCounts = () => {
      setFavoritesCount(getFavoriteIds().length);
      setShoppingCount(getShoppingItems().length);
    };

    updateCounts();

    window.addEventListener("favorites-updated", updateCounts);
    window.addEventListener("shopping-list-updated", updateCounts);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("favorites-updated", updateCounts);
      window.removeEventListener("shopping-list-updated", updateCounts);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/recipes", label: "Recipes", icon: BookOpen },
    { href: "/categories", label: "Categories", icon: Grid },
    { href: "/recipes?sort=popular", label: "Popular", icon: ChefHat },
    { href: "/about", label: "About", icon: null },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--background))/0.92] backdrop-blur-md shadow-sm border-b border-[hsl(var(--border))]"
          : "bg-[hsl(var(--background))]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            aria-label="ChefSadu Fast Food & Snacks Recipes Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <ChefHat className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[hsl(var(--foreground))]">
                Snacks<span className="text-[hsl(var(--primary))]">Station</span>
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-[hsl(var(--muted-foreground))]">
                Recipes & Snacks
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[hsl(var(--secondary))/0.6] p-1.5 rounded-full border border-[hsl(var(--border))]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href) && !link.href.includes("?"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[hsl(var(--background))] text-[hsl(var(--primary))] shadow-sm"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search */}
            <Link
              href="/search"
              className="p-2.5 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors"
              aria-label="Search recipes"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Shopping List */}
            <Link
              href="/shopping-list"
              className="relative p-2.5 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors"
              aria-label="Shopping List"
            >
              <ShoppingBag className="w-5 h-5" />
              {shoppingCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[hsl(var(--primary))] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {shoppingCount}
                </span>
              )}
            </Link>

            {/* Favorites */}
            <Link
              href="/favorites"
              className="relative p-2.5 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[hsl(var(--primary))] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                pathname === link.href
                  ? "bg-[hsl(var(--accent))] text-[hsl(var(--primary))]"
                  : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[hsl(var(--border))] flex items-center justify-around">
            <Link href="/favorites" className="flex items-center gap-2 text-sm font-medium py-2 text-[hsl(var(--foreground))]">
              <Heart className="w-4 h-4 text-[hsl(var(--primary))]" /> Favorites ({favoritesCount})
            </Link>
            <Link href="/shopping-list" className="flex items-center gap-2 text-sm font-medium py-2 text-[hsl(var(--foreground))]">
              <ShoppingBag className="w-4 h-4 text-[hsl(var(--primary))]" /> List ({shoppingCount})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
