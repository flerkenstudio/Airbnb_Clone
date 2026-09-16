"use client";

import React, { useState } from "react";
import { Upload, Heart } from "lucide-react";

interface ListingHeaderProps {
  title: string;
}

export function ListingHeader({ title }: ListingHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-[26px] font-semibold text-[#222222] tracking-tight leading-8">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-sm font-semibold text-[#222222]">
          <div className="relative">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 underline decoration-solid transition-colors focus-visible:ring-2 focus-visible:ring-black"
            >
              <Upload className="w-4 h-4" />
              <span>Share</span>
            </button>
            {showShareToast && (
              <div className="absolute right-0 -bottom-8 bg-[#222222] text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-20">
                Link copied to clipboard!
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 underline decoration-solid transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-[#222222]"
              }`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
