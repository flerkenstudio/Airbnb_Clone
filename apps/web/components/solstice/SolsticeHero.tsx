"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../design-system/Button";
import { BrandGradient } from "../design-system/BrandGradient";

interface SolsticeHeroProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function SolsticeHero({
  selectedCategory,
  onSelectCategory,
}: SolsticeHeroProps) {
  const categories = [
    "All Sanctuaries",
    "Architectural Studios",
    "Nordic Retreats",
    "Brutalist Havens",
    "Desert Pavilions",
    "Coastal Ateliers",
  ];

  return (
    <section className="relative pt-8 pb-10">
      {/* Brand Moment Gradient Banner (#CFE3C8 → #ACD3E6 → #E9F0E4) */}
      <div className="rounded-[12px] bg-gradient-to-r from-[#CFE3C8] via-[#ACD3E6] to-[#E9F0E4] p-8 md:p-12 mb-8 relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[40px] bg-white/80 backdrop-blur-xs text-[#222222] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/40">
            <Sparkles className="w-3.5 h-3.5 text-[#E61E4D]" />
            <span>Curated Architectural Spaces</span>
          </div>

          <h1 className="text-[26px] md:text-[36px] lg:text-[44px] font-medium text-[#222222] leading-[1.15] tracking-tight mb-4">
            Sanctuaries designed for focus, inspiration, and quiet grandeur.
          </h1>

          <p className="text-base md:text-lg text-[#333333] leading-[1.5] max-w-2xl mb-6">
            Handcrafted residencies built by award-winning modernist architects. Reserved for creators, thinkers, and seekers.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="md" className="shadow-xs">
              Explore Sanctuaries
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="elevated" size="md">
              Apply for Creative Residency
            </Button>
          </div>
        </div>

        {/* Decorative architectural circle accent */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full border-[20px] border-white/20 pointer-events-none" />
      </div>

      {/* Category Filter Pills (40px radius buttons) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`text-sm px-4 py-2 rounded-[40px] transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2 ${
                isSelected
                  ? "bg-[#222222] text-white font-medium shadow-xs"
                  : "bg-[#EEEEEE] text-[#222222] hover:bg-[#E0E0E0]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </section>
  );
}
