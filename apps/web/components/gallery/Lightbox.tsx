"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Grid, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_PHOTOS } from "../../data/galleryData";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";

interface LightboxProps {
  isOpen: boolean;
  activePhotoIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onShowAllPhotos: () => void;
}

export function Lightbox({
  isOpen,
  activePhotoIndex,
  onClose,
  onNext,
  onPrev,
  onShowAllPhotos,
}: LightboxProps) {
  useScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const currentPhoto = GALLERY_PHOTOS[activePhotoIndex] || GALLERY_PHOTOS[0];
  const totalPhotos = GALLERY_PHOTOS.length;
  const isFirst = activePhotoIndex === 0;
  const isLast = activePhotoIndex === totalPhotos - 1;

  // Keyboard navigation: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (!isLast) onNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (!isFirst) onPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isFirst, isLast, onNext, onPrev, onClose]);

  // Focus next button initially
  useEffect(() => {
    if (isOpen && nextBtnRef.current) {
      nextBtnRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${activePhotoIndex + 1} of ${totalPhotos}: ${currentPhoto.roomName}`}
      className="fixed inset-0 z-50 bg-white flex flex-col justify-between"
    >
      {/* Top Header (image3.png) */}
      <header className="h-16 px-6 md:px-10 flex items-center justify-between border-b border-[#EBEBEB] bg-white z-20">
        {/* Left: Show all photos grid icon */}
        <button
          type="button"
          onClick={onShowAllPhotos}
          aria-label="Show all photos in photo tour"
          className="p-2 rounded-full hover:bg-gray-100 text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black"
        >
          <Grid className="w-5 h-5" />
        </button>

        {/* Center: Category Title */}
        <div className="text-sm font-semibold text-[#222222]">
          {currentPhoto.roomName}
        </div>

        {/* Right: Counter and Close */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-normal text-[#222222]">
            {activePhotoIndex + 1} of {totalPhotos}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Image Stage */}
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Previous Button (Left) */}
        <button
          type="button"
          disabled={isFirst}
          onClick={onPrev}
          aria-label="Previous photo"
          className={`absolute left-6 md:left-10 z-20 w-11 h-11 rounded-full bg-white border border-[#DDDDDD] flex items-center justify-center shadow-md text-[#222222] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-black ${
            isFirst
              ? "opacity-25 cursor-not-allowed border-gray-200"
              : "hover:scale-105 hover:border-black active:scale-95"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Active Centered Image Container */}
        <div className="relative w-full h-full max-w-[1050px] max-h-[78vh] flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority
            sizes="(max-width: 1200px) 90vw, 1050px"
            className="object-contain transition-opacity duration-200"
          />
        </div>

        {/* Next Button (Right) */}
        <button
          ref={nextBtnRef}
          type="button"
          disabled={isLast}
          onClick={onNext}
          aria-label="Next photo"
          className={`absolute right-6 md:right-10 z-20 w-11 h-11 rounded-full bg-white border border-[#DDDDDD] flex items-center justify-center shadow-md text-[#222222] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-black ${
            isLast
              ? "opacity-25 cursor-not-allowed border-gray-200"
              : "hover:scale-105 hover:border-black active:scale-95"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </main>

      {/* Bottom Bar Caption / Subtitle */}
      {currentPhoto.caption && (
        <footer className="py-3 px-6 text-center text-xs text-[#717171] border-t border-[#EBEBEB] bg-white">
          {currentPhoto.caption}
        </footer>
      )}
    </div>
  );
}
