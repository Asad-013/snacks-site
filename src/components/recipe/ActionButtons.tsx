"use client";

import React, { useState } from "react";
import { Share2, Printer, Check } from "lucide-react";

interface ActionButtonsProps {
  recipeTitle: string;
}

export function ActionButtons({ recipeTitle }: ActionButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipeTitle,
          text: `Check out this delicious recipe for ${recipeTitle} on SnacksStation!`,
          url: url,
        });
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrint}
        className="p-2.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors"
        aria-label="Print Recipe"
        title="Print Recipe"
      >
        <Printer className="w-5 h-5" />
      </button>

      <button
        onClick={handleShare}
        className="p-2.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] transition-colors relative"
        aria-label="Share Recipe"
        title="Share Recipe"
      >
        {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">
            Link Copied!
          </span>
        )}
      </button>
    </div>
  );
}
