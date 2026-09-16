"use client";

import React from "react";
import { Header } from "../components/listing/Header";
import { ListingHeader } from "../components/listing/ListingHeader";
import { HeroGallery } from "../components/listing/HeroGallery";
import { PropertySummary } from "../components/listing/PropertySummary";
import { GuestFavouriteCard } from "../components/listing/GuestFavouriteCard";
import { HostInfo } from "../components/listing/HostInfo";
import { ListingHighlights } from "../components/listing/ListingHighlights";
import { DescriptionSection } from "../components/listing/DescriptionSection";
import { SleepingArrangement } from "../components/listing/SleepingArrangement";
import { AmenitiesSection } from "../components/listing/AmenitiesSection";
import { PromoBanner } from "../components/listing/PromoBanner";
import { BookingCard } from "../components/listing/BookingCard";
import { Footer } from "../components/listing/Footer";
import { PhotoTour } from "../components/gallery/PhotoTour";
import { Lightbox } from "../components/gallery/Lightbox";
import { useGalleryState } from "../hooks/useGalleryState";
import { LISTING_DATA } from "../data/listingData";

export default function ListingPage() {
  const {
    isPhotoTourOpen,
    isLightboxOpen,
    activePhotoIndex,
    openPhotoTour,
    closePhotoTour,
    openLightbox,
    closeLightbox,
    nextPhoto,
    prevPhoto,
  } = useGalleryState();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Design System Switcher Banner */}
      <div className="bg-[#222222] text-white px-4 py-2 text-xs font-medium">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF385C]" />
            Airbnb Clone View (Playpower Take-Home Assignment)
          </span>
          <a
            href="/solstice"
            className="flex items-center gap-1 text-[#CFE3C8] hover:underline font-semibold"
          >
            <span>✨ Preview Solstice Design System</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* 1. Header (Navbar) */}
      <Header />

      {/* 2. Main Content Container (Max width 1120px to 1280px, centered) */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-20 pb-12">
        {/* Listing Title & Share/Save */}
        <ListingHeader title={LISTING_DATA.title} />

        {/* Hero Gallery Grid (5 images with 8px gaps and rounded corners) */}
        <HeroGallery
          onShowAllPhotos={openPhotoTour}
          onPhotoClick={(photoId) => openLightbox(photoId)}
        />

        {/* Content Split: Left Info + Right Booking Widget */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column (~65%) */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Property Type & Capacity */}
            <PropertySummary
              propertyType={LISTING_DATA.propertyType}
              location={LISTING_DATA.location}
              guests={LISTING_DATA.guests}
              bedrooms={LISTING_DATA.bedrooms}
              beds={LISTING_DATA.beds}
              bathrooms={LISTING_DATA.bathrooms}
            />

            {/* Guest Favourite Card (Directly below subtitle as in image1.png) */}
            <GuestFavouriteCard
              rating={LISTING_DATA.rating}
              reviewsCount={LISTING_DATA.reviewsCount}
            />

            {/* Host Profile Info */}
            <HostInfo host={LISTING_DATA.host} />

            {/* Highlights (Jacuzzi, Workspace, Self check-in) */}
            <ListingHighlights highlights={LISTING_DATA.highlights} />

            {/* About this space */}
            <DescriptionSection description={LISTING_DATA.description} />

            {/* Where you'll sleep */}
            <SleepingArrangement arrangement={LISTING_DATA.sleepingArrangement} />

            {/* Amenities Section */}
            <AmenitiesSection amenities={LISTING_DATA.amenities} />
          </div>

          {/* Right Column (Sticky Booking Sidebar, ~35%) */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <PromoBanner />
            <BookingCard
              pricePerNight={LISTING_DATA.pricePerNight}
              rating={LISTING_DATA.rating}
              reviewsCount={LISTING_DATA.reviewsCount}
              cleaningFee={LISTING_DATA.cleaningFee}
              serviceFee={LISTING_DATA.serviceFee}
            />
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* Experience 2: Photo Tour Overlay */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={closePhotoTour}
        onPhotoClick={(photoId) => openLightbox(photoId)}
      />

      {/* Experience 3: Lightbox Overlay */}
      <Lightbox
        isOpen={isLightboxOpen}
        activePhotoIndex={activePhotoIndex}
        onClose={() => closeLightbox(isPhotoTourOpen)}
        onNext={nextPhoto}
        onPrev={prevPhoto}
        onShowAllPhotos={() => {
          closeLightbox(true);
          openPhotoTour();
        }}
      />
    </div>
  );
}
