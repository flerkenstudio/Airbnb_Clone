"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, MapPin, Calendar, Check, Shield, Award } from "lucide-react";
import { Studio } from "./StudioGrid";
import { Button } from "../design-system/Button";
import { Card } from "../design-system/Card";
import { Input } from "../design-system/Input";

interface StudioDetailModalProps {
  studio: Studio | null;
  onClose: () => void;
}

export function StudioDetailModal({ studio, onClose }: StudioDetailModalProps) {
  const [weeks, setWeeks] = useState(2);
  const [inquirySent, setInquirySent] = useState(false);

  if (!studio) return null;

  const basePrice = studio.ratePerWeek * weeks;
  const residencyFee = Math.round(basePrice * 0.08);
  const total = basePrice + residencyFee;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-white rounded-[12px] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#DDDDDD] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#EBEBEB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-[40px] bg-[#EEEEEE] text-[#222222]">
              {studio.tag}
            </span>
            <h2 className="text-lg font-semibold text-[#222222] truncate max-w-md">
              {studio.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#222222] transition-colors focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Images & Narrative) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative h-80 w-full rounded-[12px] overflow-hidden border border-[#EEEEEE]">
              <Image
                src={studio.image}
                alt={studio.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm text-[#717171] mb-1">
                <MapPin className="w-4 h-4 text-[#E61E4D]" />
                <span>{studio.location}</span>
                <span>·</span>
                <div className="flex items-center gap-1 text-[#222222] font-semibold">
                  <Star className="w-3.5 h-3.5 fill-[#E61E4D] text-[#E61E4D]" />
                  <span>{studio.rating}</span>
                  <span className="text-[#717171] font-normal">({studio.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-[26px] font-medium text-[#222222] leading-[1.15]">
                {studio.name}
              </h1>
              <p className="text-sm font-medium text-[#717171] mt-1">
                Designed & Curated by {studio.architect}
              </p>
            </div>

            <div className="h-[1px] bg-[#EBEBEB]" />

            {/* Architectural Highlights */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[22px] font-medium text-[#222222] leading-[1.18]">
                Residency Specifications
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                This sanctuary was conceptualized to dissolve boundaries between nature and creative focus. Built with bespoke acoustics, natural limestone masonry, and expansive double-height glass panels.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-3 bg-[#F7F7F7] rounded-[6px] border border-[#EEEEEE] text-xs font-medium text-[#222222] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E61E4D]" />
                  <span>High-Speed Fiber (1 Gbps)</span>
                </div>
                <div className="p-3 bg-[#F7F7F7] rounded-[6px] border border-[#EEEEEE] text-xs font-medium text-[#222222] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E61E4D]" />
                  <span>Natural Daylight Studio</span>
                </div>
                <div className="p-3 bg-[#F7F7F7] rounded-[6px] border border-[#EEEEEE] text-xs font-medium text-[#222222] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E61E4D]" />
                  <span>Acoustic Damping Panels</span>
                </div>
                <div className="p-3 bg-[#F7F7F7] rounded-[6px] border border-[#EEEEEE] text-xs font-medium text-[#222222] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E61E4D]" />
                  <span>Private Hydrotherapy Spa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry / Booking Card */}
          <div className="lg:col-span-5">
            <Card elevation="elevated" className="sticky top-24 border border-[rgba(0,0,0,0.08)] rounded-[12px] p-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-[26px] font-bold text-[#222222]">
                    ${studio.ratePerWeek.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#717171]"> / week</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#222222]">
                  <Star className="w-3.5 h-3.5 fill-[#E61E4D] text-[#E61E4D]" />
                  <span>{studio.rating}</span>
                </div>
              </div>

              {/* Form with 6px border radius inputs */}
              <div className="flex flex-col gap-3 mb-5">
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    label="Arrival"
                    type="date"
                    defaultValue="2026-10-01"
                  />
                  <Input
                    label="Departure"
                    type="date"
                    defaultValue="2026-10-15"
                  />
                </div>

                <Input
                  label="Residency Duration (Weeks)"
                  type="number"
                  min="1"
                  max="12"
                  value={weeks}
                  onChange={(e) => setWeeks(Math.max(1, parseInt(e.target.value) || 1))}
                />

                <Input
                  label="Curator / Applicant Name"
                  placeholder="e.g. Maya Lin"
                  defaultValue="Senior Architect & Designer"
                />
              </div>

              {/* Price Calculation Table */}
              <div className="flex flex-col gap-2 py-3 border-y border-[#EBEBEB] text-xs text-[#717171]">
                <div className="flex justify-between">
                  <span>${studio.ratePerWeek.toLocaleString()} × {weeks} weeks</span>
                  <span className="text-[#222222] font-medium">${basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Curatorial & Archival fee</span>
                  <span className="text-[#222222] font-medium">${residencyFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#EEEEEE] text-sm font-bold text-[#222222]">
                  <span>Total before taxes</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              {/* 40px Pill CTA Button */}
              <div className="mt-5">
                {inquirySent ? (
                  <div className="p-3 bg-[#E9F0E4] text-[#2B5C3F] text-xs font-semibold rounded-[6px] text-center border border-[#CFE3C8]">
                    ✓ Residency Application Submitted! Our curator will contact you.
                  </div>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => setInquirySent(true)}
                  >
                    Reserve Creative Residency
                  </Button>
                )}
                <p className="text-[11px] text-[#717171] text-center mt-2.5">
                  You won't be charged until application approval.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
