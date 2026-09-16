"use client";

import React, { useState } from "react";
import { SolsticeNavbar } from "../../components/solstice/SolsticeNavbar";
import { SolsticeHero } from "../../components/solstice/SolsticeHero";
import { StudioGrid, Studio, STUDIOS_DATA } from "../../components/solstice/StudioGrid";
import { StudioDetailModal } from "../../components/solstice/StudioDetailModal";
import { DesignSystemExplorer } from "../../components/design-system/DesignSystemExplorer";
import { Button } from "../../components/design-system/Button";
import { BrandGradient } from "../../components/design-system/BrandGradient";
import { Sparkles, SlidersHorizontal, ArrowUpRight } from "lucide-react";

export default function SolsticePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Sanctuaries");
  const [selectedStudio, setSelectedStudio] = useState<Studio | null>(null);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [activeView, setActiveView] = useState("explore");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222] antialiased">
      {/* Top Banner indicating Design System Mode */}
      <div className="bg-[#222222] text-white px-4 py-2 text-xs font-medium flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-[1521px] mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E61E4D] animate-pulse" />
            <span>
              <strong>Solstice Sanctuary</strong> — Original UI built strictly with the extracted vibrant & modern design tokens
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExplorerOpen(true)}
              className="underline hover:text-[#CFE3C8] transition-colors cursor-pointer flex items-center gap-1"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Inspect Token Explorer</span>
            </button>
            <span>·</span>
            <a
              href="/"
              className="underline hover:text-white/80 transition-colors flex items-center gap-0.5"
            >
              <span>Back to Listing Clone</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <SolsticeNavbar
        onOpenExplorer={() => setIsExplorerOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main Container - 1521px max width with 8px gutters */}
      <main className="flex-1 max-w-[1521px] w-full mx-auto px-4 sm:px-8 pb-16">
        {/* Hero Section with Brand Moment Gradient */}
        <SolsticeHero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Studios / Sanctuaries Grid */}
        <StudioGrid
          onSelectStudio={setSelectedStudio}
          selectedCategory={selectedCategory}
        />

        {/* Brand Moment Editorial Feature */}
        <section className="mt-16 pt-12 border-t border-[#EBEBEB]">
          <BrandGradient variant="banner" className="p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#222222] bg-white/70 px-3 py-1 rounded-[40px] inline-block mb-3">
                Architectural Residency Fellowship
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium text-[#222222] leading-[1.15] mb-3">
                Spend 4 weeks immersed in light, silence, and modernist form.
              </h2>
              <p className="text-sm md:text-base text-[#333333] leading-[1.5] mb-6">
                Fellowships are awarded bi-annually. Recipients receive full studio access, dedicated material stipend, and uninterrupted sanctuary time.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="primary" size="md">
                  Apply for Spring Fellowship
                </Button>
                <Button variant="elevated" size="md" onClick={() => setIsExplorerOpen(true)}>
                  Inspect Design Tokens
                </Button>
              </div>
            </div>
          </BrandGradient>
        </section>
      </main>

      {/* Modern Minimal Footer */}
      <footer className="border-t border-[#EBEBEB] bg-[#F7F7F7] py-10 mt-auto">
        <div className="max-w-[1521px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#717171]">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#E61E4D] flex items-center justify-center text-white text-[10px] font-bold">
              ✦
            </div>
            <span>© 2026 Solstice Sanctuaries Inc. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-[#222222]">
            <a href="#privacy" className="hover:text-[#E61E4D] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#E61E4D] transition-colors">Terms of Residency</a>
            <a href="#sitemap" className="hover:text-[#E61E4D] transition-colors">Sanctuary Map</a>
            <a href="#contact" className="hover:text-[#E61E4D] transition-colors">Curatorial Office</a>
          </div>
        </div>
      </footer>

      {/* Studio Detail Modal */}
      <StudioDetailModal
        studio={selectedStudio}
        onClose={() => setSelectedStudio(null)}
      />

      {/* Interactive Design System Token Explorer */}
      <DesignSystemExplorer
        isOpen={isExplorerOpen}
        onClose={() => setIsExplorerOpen(false)}
      />
    </div>
  );
}
