"use client";

import React, { useState, useEffect } from "react";
import {
  Trees,
  Bath,
  ShowerHead,
  Bed,
  Tv,
  AirVent,
  Fan,
  ShieldCheck,
  Wifi,
  Utensils,
  Car,
  Waves,
  Dumbbell,
  X,
} from "lucide-react";
import { useScrollLock } from "../../hooks/useScrollLock";

const amenityIconMap: Record<string, React.ReactNode> = {
  Trees: <Trees className="w-6 h-6 text-[#222222]" />,
  Bath: <Bath className="w-6 h-6 text-[#222222]" />,
  ShowerHead: <ShowerHead className="w-6 h-6 text-[#222222]" />,
  Bed: <Bed className="w-6 h-6 text-[#222222]" />,
  Tv: <Tv className="w-6 h-6 text-[#222222]" />,
  AirVent: <AirVent className="w-6 h-6 text-[#222222]" />,
  Fan: <Fan className="w-6 h-6 text-[#222222]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#222222]" />,
  Wifi: <Wifi className="w-6 h-6 text-[#222222]" />,
  Utensils: <Utensils className="w-6 h-6 text-[#222222]" />,
  Car: <Car className="w-6 h-6 text-[#222222]" />,
  Waves: <Waves className="w-6 h-6 text-[#222222]" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-[#222222]" />,
};

interface Amenity {
  category: string;
  icon: string;
  name: string;
}

export function AmenitiesSection({
  amenities,
}: {
  amenities: Amenity[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollLock(isModalOpen);

  // Close on Escape key
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const featured = amenities.slice(0, 10);

  // Group amenities by category for authentic modal display
  const groupedAmenities = amenities.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Amenity[]>);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 py-2">
            <div className="w-6 h-6 flex items-center justify-center">
              {amenityIconMap[item.icon] || <Wifi className="w-6 h-6" />}
            </div>
            <span className="text-base text-[#222222]">{item.name}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mt-8 border border-[#222222] rounded-lg px-6 py-3 text-base font-semibold text-[#222222] hover:bg-gray-50 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
      >
        Show all {amenities.length + 31} amenities
      </button>

      {/* Full Amenities Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="What this place offers"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-white max-w-2xl w-full rounded-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#DDDDDD] relative">
            {/* Dedicated Sticky Header Bar with Close Buttons */}
            <div className="sticky top-0 z-20 bg-white px-6 py-4 border-b border-[#EBEBEB] flex items-center justify-between">
              {/* Left: Authentic Airbnb Close Button */}
              <button
                type="button"
                aria-label="Close amenities modal"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer -ml-1"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Center Title */}
              <span className="text-base font-semibold text-[#222222]">
                What this place offers
              </span>

              {/* Right: Secondary Close Button with proper margin from scrollbar */}
              <button
                type="button"
                aria-label="Close amenities modal"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer -mr-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#222222] mb-6">
                  What this place offers
                </h3>
              </div>

              {Object.entries(groupedAmenities).map(([category, items]) => (
                <div key={category} className="pb-6 border-b border-[#EBEBEB] last:border-b-0">
                  <h4 className="text-lg font-semibold text-[#222222] mb-4">
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-1">
                        <div className="w-6 h-6 flex items-center justify-center text-[#222222]">
                          {amenityIconMap[item.icon] || <Wifi className="w-6 h-6 text-[#222222]" />}
                        </div>
                        <span className="text-base text-[#222222]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
