"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, Upload, Heart } from "lucide-react";
import { ROOM_CATEGORIES, GALLERY_PHOTOS, GalleryImage } from "../../data/galleryData";
import { CategoryTabs } from "./CategoryTabs";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotoClick: (photoId: number) => void;
}

export function PhotoTour({ isOpen, onClose, onPhotoClick }: PhotoTourProps) {
  useScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen);
  const [activeCategory, setActiveCategory] = useState("living-room-1");
  const [isSaved, setIsSaved] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col"
    >
      {/* Sticky Header Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#EBEBEB] px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to listing"
          className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <h1 className="text-base font-semibold text-[#222222]">Photo tour</h1>

        <div className="flex items-center gap-3 text-[#222222]">
          <button
            type="button"
            aria-label="Share listing"
            onClick={() => {
              navigator.clipboard?.writeText(window.location.href);
              alert("Listing link copied!");
            }}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Upload className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Save listing"
            onClick={() => setIsSaved(!isSaved)}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Heart
              className={`w-4 h-4 ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-[#222222]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Horizontal Category Navigation Bar */}
      <div className="sticky top-16 z-20 bg-white">
        <CategoryTabs
          onCategoryClick={scrollToCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* Photo Tour Body Matching image2.png */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-20 py-10 space-y-20">
        {ROOM_CATEGORIES.map((category) => {
          const categoryPhotos: GalleryImage[] = GALLERY_PHOTOS.filter(
            (p) => p.category === category.id
          );
          if (categoryPhotos.length === 0) return null;

          const featuredPhoto = categoryPhotos[0];
          const secondaryPhotos = categoryPhotos.slice(1);

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-48 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              aria-labelledby={`heading-${category.id}`}
            >
              {/* Left Column: Category title and details */}
              <div className="lg:col-span-4 sticky top-48">
                <h2
                  id={`heading-${category.id}`}
                  className="text-[26px] font-bold text-[#222222] tracking-tight"
                >
                  {category.name}
                </h2>
                <p className="text-sm text-[#717171] mt-2 font-normal leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              {/* Right Column: Featured Image + Paired Sub-photos (image2.png) */}
              <div className="lg:col-span-8 space-y-4">
                {/* Featured Large Photo */}
                <div
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${featuredPhoto.alt}`}
                  onClick={() => onPhotoClick(featuredPhoto.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onPhotoClick(featuredPhoto.id);
                    }
                  }}
                  className="relative w-full h-[360px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-gray-100"
                >
                  <Image
                    src={featuredPhoto.src}
                    alt={featuredPhoto.alt}
                    fill
                    sizes="(max-width: 1280px) 70vw, 750px"
                    className="object-cover group-hover:brightness-95 transition-all duration-200"
                  />
                </div>

                {/* Secondary Paired Photos Grid */}
                {secondaryPhotos.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {secondaryPhotos.map((photo) => (
                      <div
                        key={photo.id}
                        tabIndex={0}
                        role="button"
                        aria-label={`View photo: ${photo.alt}`}
                        onClick={() => onPhotoClick(photo.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onPhotoClick(photo.id);
                          }
                        }}
                        className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-gray-100"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 1280px) 35vw, 370px"
                          className="object-cover group-hover:brightness-95 transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
