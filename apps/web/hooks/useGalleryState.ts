"use client";

import { useState, useCallback, useRef } from "react";
import { GALLERY_PHOTOS } from "../data/galleryData";

export function useGalleryState() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Store trigger button ref to restore focus on modal dismissal
  const triggerElementRef = useRef<HTMLElement | null>(null);

  const openPhotoTour = useCallback((triggerEl?: HTMLElement | null) => {
    if (triggerEl) triggerElementRef.current = triggerEl;
    setIsPhotoTourOpen(true);
    setIsLightboxOpen(false);
  }, []);

  const closePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
    setIsLightboxOpen(false);
    // Restore focus
    if (triggerElementRef.current) {
      triggerElementRef.current.focus();
    }
  }, []);

  const openLightbox = useCallback((photoIdOrIndex: number, triggerEl?: HTMLElement | null) => {
    if (triggerEl) triggerElementRef.current = triggerEl;

    // Determine 0-based index
    const index = GALLERY_PHOTOS.findIndex((p) => p.id === photoIdOrIndex);
    setActivePhotoIndex(index !== -1 ? index : photoIdOrIndex);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback((returnToPhotoTour = false) => {
    setIsLightboxOpen(false);
    if (!returnToPhotoTour) {
      setIsPhotoTourOpen(false);
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
      }
    }
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => {
      if (prev < GALLERY_PHOTOS.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const selectPhoto = useCallback((index: number) => {
    if (index >= 0 && index < GALLERY_PHOTOS.length) {
      setActivePhotoIndex(index);
    }
  }, []);

  return {
    isPhotoTourOpen,
    isLightboxOpen,
    activePhotoIndex,
    currentPhoto: GALLERY_PHOTOS[activePhotoIndex],
    totalPhotos: GALLERY_PHOTOS.length,
    openPhotoTour,
    closePhotoTour,
    openLightbox,
    closeLightbox,
    nextPhoto,
    prevPhoto,
    selectPhoto,
  };
}
