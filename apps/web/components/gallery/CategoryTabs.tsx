"use client";

import React from "react";
import Image from "next/image";
import { ROOM_CATEGORIES } from "../../data/galleryData";

interface CategoryTabsProps {
  onCategoryClick: (categoryId: string) => void;
  activeCategory?: string;
}

export function CategoryTabs({ onCategoryClick, activeCategory }: CategoryTabsProps) {
  return (
    <div className="w-full border-b border-[#EBEBEB] bg-white py-4 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto flex items-start gap-4 overflow-x-auto no-scrollbar pb-2">
        {ROOM_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onCategoryClick(cat.id)}
            className={`flex flex-col items-center gap-2 group flex-shrink-0 focus-visible:ring-2 focus-visible:ring-black rounded-xl p-1 transition-transform active:scale-95 ${
              activeCategory === cat.id ? "opacity-100" : "opacity-85 hover:opacity-100"
            }`}
          >
            <div className="relative w-[90px] h-[68px] rounded-xl overflow-hidden border border-gray-200 shadow-sm group-hover:border-black transition-colors">
              <Image
                src={cat.thumbnail}
                alt={cat.name}
                fill
                sizes="90px"
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-xs font-medium text-[#222222] text-center max-w-[90px] truncate">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
