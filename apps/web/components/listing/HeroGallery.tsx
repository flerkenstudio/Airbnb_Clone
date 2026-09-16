"use client";

import React from "react";
import Image from "next/image";
import { Grid } from "lucide-react";
import { HERO_IMAGES } from "../../data/galleryData";

interface HeroGalleryProps {
  onShowAllPhotos: () => void;
  onPhotoClick: (photoId: number) => void;
}

export function HeroGallery({ onShowAllPhotos, onPhotoClick }: HeroGalleryProps) {
  return (
    <section aria-label="Photo gallery" className="relative mt-2">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[340px] sm:h-[410px] md:h-[469px] w-full rounded-xl overflow-hidden">
        {/* Main Large Hero Image (Left 50%) */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group overflow-hidden"
          onClick={() => onPhotoClick(HERO_IMAGES[0].id)}
          tabIndex={0}
          role="button"
          aria-label="View first photo: Private patio lounge with jacuzzi seating"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onPhotoClick(HERO_IMAGES[0].id);
            }
          }}
        >
          <Image
            src={HERO_IMAGES[0].src}
            alt={HERO_IMAGES[0].alt}
            fill
            priority
            sizes="(max-width: 1120px) 50vw, 560px"
            className="object-cover group-hover:brightness-95 transition-[filter] duration-200"
          />
        </div>

        {/* Top-Mid Photo */}
        <div
          className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden"
          onClick={() => onPhotoClick(HERO_IMAGES[1].id)}
          tabIndex={0}
          role="button"
          aria-label="View second photo: Evening patio seating"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onPhotoClick(HERO_IMAGES[1].id);
            }
          }}
        >
          <Image
            src={HERO_IMAGES[1].src}
            alt={HERO_IMAGES[1].alt}
            fill
            priority
            sizes="(max-width: 1120px) 25vw, 274px"
            className="object-cover group-hover:brightness-95 transition-[filter] duration-200"
          />
        </div>

        {/* Top-Right Photo */}
        <div
          className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden"
          onClick={() => onPhotoClick(HERO_IMAGES[2].id)}
          tabIndex={0}
          role="button"
          aria-label="View third photo: Jacuzzi bathtub"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onPhotoClick(HERO_IMAGES[2].id);
            }
          }}
        >
          <Image
            src={HERO_IMAGES[2].src}
            alt={HERO_IMAGES[2].alt}
            fill
            sizes="(max-width: 1120px) 25vw, 274px"
            className="object-cover group-hover:brightness-95 transition-[filter] duration-200"
          />
        </div>

        {/* Bottom-Mid Photo */}
        <div
          className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden"
          onClick={() => onPhotoClick(HERO_IMAGES[3].id)}
          tabIndex={0}
          role="button"
          aria-label="View fourth photo: Bedroom"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onPhotoClick(HERO_IMAGES[3].id);
            }
          }}
        >
          <Image
            src={HERO_IMAGES[3].src}
            alt={HERO_IMAGES[3].alt}
            fill
            sizes="(max-width: 1120px) 25vw, 274px"
            className="object-cover group-hover:brightness-95 transition-[filter] duration-200"
          />
        </div>

        {/* Bottom-Right Photo (with Show all photos button) */}
        <div
          className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden"
          onClick={() => onPhotoClick(HERO_IMAGES[4].id)}
          tabIndex={0}
          role="button"
          aria-label="View fifth photo: Exterior building"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onPhotoClick(HERO_IMAGES[4].id);
            }
          }}
        >
          <Image
            src={HERO_IMAGES[4].src}
            alt={HERO_IMAGES[4].alt}
            fill
            sizes="(max-width: 1120px) 25vw, 274px"
            className="object-cover group-hover:brightness-95 transition-[filter] duration-200"
          />
        </div>
      </div>

      {/* Floating 'Show all photos' button */}
      <button
        type="button"
        id="show-all-photos-btn"
        onClick={(e) => {
          e.stopPropagation();
          onShowAllPhotos();
        }}
        className="absolute bottom-4 right-4 bg-white text-[#222222] border border-[#222222] rounded-lg px-3.5 py-1.5 text-sm font-medium flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-gray-50 active:scale-95 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-black z-10"
      >
        <Grid className="w-4 h-4" />
        <span>Show all photos</span>
      </button>
    </section>
  );
}
