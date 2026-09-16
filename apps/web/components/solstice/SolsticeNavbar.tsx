"use client";

import React, { useState } from "react";
import { Search, Compass, User, Globe, SlidersHorizontal } from "lucide-react";
import { Button } from "../design-system/Button";

interface SolsticeNavbarProps {
  onOpenExplorer: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

export function SolsticeNavbar({
  onOpenExplorer,
  activeView,
  setActiveView,
}: SolsticeNavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#EBEBEB]">
      <div className="max-w-[1521px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Bespoke Geometric Brand Emblem */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView("explore")}>
          <div className="w-9 h-9 rounded-full bg-[#E61E4D] flex items-center justify-center text-white shadow-sm">
            {/* Original geometric sunburst monogram */}
            <svg
              className="w-5 h-5 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.05-6.95l-2.12 2.12M7.17 16.83l-2.12 2.12m13.9 0l-2.12-2.12M7.17 7.17L5.05 5.05" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="font-semibold text-lg text-[#222222] tracking-tight block leading-tight">
              Solstice
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#717171] block">
              Sanctuaries
            </span>
          </div>
        </div>

        {/* 40px Pill Center Search Filter */}
        <div className="hidden md:flex items-center border border-[#DDDDDD] rounded-[40px] py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-all duration-150 cursor-pointer">
          <div className="flex items-center gap-2 pr-4 text-sm font-medium text-[#222222]">
            <Compass className="w-4 h-4 text-[#E61E4D]" />
            <span>Any Sanctuary</span>
          </div>
          <span className="h-4 w-[1px] bg-[#DDDDDD]" />
          <div className="px-4 text-sm font-medium text-[#222222]">Any Season</div>
          <span className="h-4 w-[1px] bg-[#DDDDDD]" />
          <div className="pl-4 pr-3 text-sm text-[#717171]">Curators</div>
          <button
            type="button"
            aria-label="Filter"
            className="w-8 h-8 rounded-[40px] bg-[#E61E4D] flex items-center justify-center text-white hover:bg-[#B8183E] transition-colors focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2"
          >
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Right Navigation & Explorer Trigger */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenExplorer}
            className="flex items-center gap-2 border-[#DDDDDD] font-medium text-[#222222]"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#E61E4D]" />
            <span className="hidden sm:inline">Design System Tokens</span>
          </Button>

          <Button
            variant="elevated"
            size="sm"
            onClick={() => window.location.href = "/"}
            className="hidden lg:inline-flex text-[#222222]"
          >
            Airbnb Clone View
          </Button>

          <button
            type="button"
            aria-label="User navigation"
            className="flex items-center gap-2 border border-[#DDDDDD] rounded-[40px] py-1.5 px-3 hover:shadow-sm transition-shadow focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2"
          >
            <User className="w-4 h-4 text-[#222222]" />
            <span className="text-xs font-semibold text-[#222222]">Studio Member</span>
          </button>
        </div>
      </div>
    </header>
  );
}
