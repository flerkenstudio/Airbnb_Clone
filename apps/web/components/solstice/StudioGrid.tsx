"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Maximize2 } from "lucide-react";
import { Card } from "../design-system/Card";
import { Button } from "../design-system/Button";

export interface Studio {
  id: string;
  name: string;
  architect: string;
  location: string;
  rating: number;
  reviews: number;
  ratePerWeek: number;
  tag: string;
  image: string;
  specs: string;
}

export const STUDIOS_DATA: Studio[] = [
  {
    id: "glass-pavilion",
    name: "The Glass Solarium & Studio",
    architect: "Miesian Studio Collective",
    location: "Joshua Tree, California",
    rating: 4.98,
    reviews: 34,
    ratePerWeek: 3200,
    tag: "Desert Modernism",
    image: "/images/hero_1.jpg",
    specs: "2 Residents · Acoustic Piano · Darkroom · Jacuzzi Deck",
  },
  {
    id: "nordic-cliff",
    name: "Lofoten Cliff Sanctuary",
    architect: "Nordic Atelier Arkitekter",
    location: "Reine, Norway",
    rating: 4.96,
    reviews: 29,
    ratePerWeek: 2850,
    tag: "Sub-Arctic Atelier",
    image: "/images/hero_2.jpg",
    specs: "3 Residents · Writers Loft · Sauna · Sea View",
  },
  {
    id: "brutalist-vault",
    name: "The Concrete Light Vault",
    architect: "Kengo Takahashi Works",
    location: "Kyoto Foothills, Japan",
    rating: 4.99,
    reviews: 42,
    ratePerWeek: 3600,
    tag: "Minimalist Stone",
    image: "/images/hero_3.jpg",
    specs: "2 Residents · Ceramic Kiln · Zen Garden · Cedar Tub",
  },
  {
    id: "mediterranean-villa",
    name: "Villa Sol Terraces",
    architect: "Studio Marítimo",
    location: "Deià, Mallorca",
    rating: 4.95,
    reviews: 38,
    ratePerWeek: 4100,
    tag: "Limestone Haven",
    image: "/images/living_room_1_large.jpg",
    specs: "4 Residents · Olive Grove · Pool · Painting Studio",
  },
  {
    id: "alpine-cube",
    name: "Alpine Timber Observatory",
    architect: "Graubünden Design Lab",
    location: "Vals, Switzerland",
    rating: 4.97,
    reviews: 19,
    ratePerWeek: 3450,
    tag: "High Elevation",
    image: "/images/hero_4.jpg",
    specs: "2 Residents · Library · Thermal Springs Access",
  },
  {
    id: "coastal-cantilever",
    name: "The Cantilever Point",
    architect: "Pacific Modernist Bureau",
    location: "Big Sur, California",
    rating: 4.99,
    reviews: 51,
    ratePerWeek: 4800,
    tag: "Oceanfront",
    image: "/images/hero_5.jpg",
    specs: "3 Residents · Ocean Deck · Recording Suite",
  },
];

interface StudioGridProps {
  onSelectStudio: (studio: Studio) => void;
  selectedCategory: string;
}

export function StudioGrid({
  onSelectStudio,
  selectedCategory,
}: StudioGridProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-medium text-[#222222] leading-[1.18]">
            Architectural Sanctuaries Available for Booking
          </h2>
          <p className="text-sm text-[#717171] mt-1">
            Built on a strict 4px grid rhythm · 12px card borders · Flat modern aesthetic
          </p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#717171]">
          {STUDIOS_DATA.length} Sanctuaries Found
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STUDIOS_DATA.map((studio) => (
          <Card
            key={studio.id}
            elevation="hover"
            className="flex flex-col p-0 overflow-hidden cursor-pointer group border border-[rgba(0,0,0,0.08)] rounded-[12px]"
            onClick={() => onSelectStudio(studio)}
          >
            {/* Image Container with 8px inner margin */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
              <Image
                src={studio.image}
                alt={studio.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#222222] text-[11px] font-semibold px-3 py-1 rounded-[40px] border border-white/60">
                {studio.tag}
              </div>
              <div className="absolute bottom-3 right-3 bg-[#222222]/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-[40px] flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#E61E4D] text-[#E61E4D]" />
                <span>{studio.rating}</span>
                <span className="text-white/70">({studio.reviews})</span>
              </div>
            </div>

            {/* Card Content with 24px padding */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#717171] mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{studio.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#222222] group-hover:text-[#E61E4D] transition-colors leading-snug mb-1">
                  {studio.name}
                </h3>
                <p className="text-xs text-[#717171] mb-3">
                  Architect: {studio.architect}
                </p>
                <p className="text-xs text-[#555555] bg-[#F7F7F7] p-2.5 rounded-[6px] border border-[#EEEEEE]">
                  {studio.specs}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EBEBEB] flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-[#222222]">
                    ${studio.ratePerWeek.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#717171]"> / residency week</span>
                </div>
                <Button variant="elevated" size="sm" className="font-medium text-xs">
                  Inspect Space
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
