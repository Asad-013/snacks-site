"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Circle, Lightbulb } from "lucide-react";
import { CookingStep } from "@/types/recipe";
import { getCompletedSteps, toggleCompletedStep } from "@/lib/storage";

interface CookingStepsProps {
  recipeId: string;
  steps: CookingStep[];
}

export function CookingSteps({ recipeId, steps }: CookingStepsProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    setCompletedSteps(getCompletedSteps(recipeId));
  }, [recipeId]);

  const handleToggle = (stepNumber: number) => {
    const updated = toggleCompletedStep(recipeId, stepNumber);
    setCompletedSteps(updated);
  };

  const progressPercentage = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm space-y-6">
      
      {/* Header & Progress */}
      <div className="space-y-3 border-b border-[hsl(var(--border))] pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">How to Make It</h2>
          <span className="text-sm font-semibold text-[hsl(var(--primary))] bg-[hsl(var(--accent))] px-3 py-1 rounded-full">
            Step {completedSteps.length} of {steps.length} completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[hsl(var(--secondary))] h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-[hsl(var(--primary))] h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Step Cards */}
      <div className="space-y-6">
        {steps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);
          return (
            <div
              key={step.stepNumber}
              onClick={() => handleToggle(step.stepNumber)}
              className={`relative rounded-2xl border p-5 sm:p-6 transition-all cursor-pointer ${
                isDone
                  ? "bg-[hsl(var(--accent))/0.5] border-emerald-300 dark:border-emerald-800/60 opacity-90"
                  : "bg-[hsl(var(--background))] border-[hsl(var(--border))] hover:border-[hsl(var(--primary))/0.6] shadow-xs"
              }`}
            >
              <div className="flex items-start gap-4">
                
                {/* Step Number Badge & Toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(step.stepNumber);
                  }}
                  className="shrink-0 mt-0.5"
                  aria-label={`Mark Step ${step.stepNumber} as ${isDone ? "incomplete" : "complete"}`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[hsl(var(--primary))] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {step.stepNumber}
                    </div>
                  )}
                </button>

                {/* Step Text & Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold text-lg ${isDone ? "line-through text-[hsl(var(--muted-foreground))]" : "text-[hsl(var(--foreground))]"}`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Image if available */}
                  {step.image && (
                    <div className="relative aspect-16/9 w-full max-w-md rounded-xl overflow-hidden mt-3 border border-[hsl(var(--border))]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Step Tip */}
                  {step.tip && (
                    <div className="flex items-start gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 p-3 rounded-xl mt-2">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{step.tip}</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
