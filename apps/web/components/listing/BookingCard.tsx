"use client";

import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

export function BookingCard({
  pricePerNight,
  rating,
  reviewsCount,
  cleaningFee,
  serviceFee,
}: {
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  cleaningFee: number;
  serviceFee: number;
}) {
  const [nights] = useState(5);
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const subtotal = pricePerNight * nights;
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <div className="sticky top-28 bg-white border border-[#DDDDDD] rounded-2xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
      {/* Price Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-[22px] font-bold text-[#222222]">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
          <span className="text-base text-[#717171]"> for {nights} nights</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-[#222222]">
          <Star className="w-3.5 h-3.5 fill-[#222222]" />
          <span>{rating.toFixed(2)}</span>
          <span className="text-[#717171]">·</span>
          <span className="text-[#717171] underline font-normal">{reviewsCount} reviews</span>
        </div>
      </div>

      {/* Date & Guests Picker Box */}
      <div className="border border-[#B0B0B0] rounded-xl overflow-hidden mb-4">
        <div className="grid grid-cols-2 border-b border-[#B0B0B0]">
          <div className="p-2.5 border-r border-[#B0B0B0]">
            <div className="text-[10px] font-bold text-[#222222] uppercase tracking-wider">
              Check-in
            </div>
            <div className="text-sm text-[#222222] font-normal">24/10/2026</div>
          </div>
          <div className="p-2.5">
            <div className="text-[10px] font-bold text-[#222222] uppercase tracking-wider">
              Checkout
            </div>
            <div className="text-sm text-[#222222] font-normal">29/10/2026</div>
          </div>
        </div>

        {/* Guests Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
            className="w-full p-2.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <div className="text-[10px] font-bold text-[#222222] uppercase tracking-wider">
                Guests
              </div>
              <div className="text-sm text-[#222222]">
                {guestsCount} {guestsCount === 1 ? "guest" : "guests"}
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#222222]" />
          </button>

          {isGuestDropdownOpen && (
            <div className="p-4 border-t border-[#B0B0B0] bg-white flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#222222]">Adults</div>
                <div className="text-xs text-[#717171]">Age 13+</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={guestsCount <= 1}
                  onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                  className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-lg disabled:opacity-30"
                >
                  -
                </button>
                <span className="text-sm font-semibold">{guestsCount}</span>
                <button
                  type="button"
                  disabled={guestsCount >= 3}
                  onClick={() => setGuestsCount(Math.min(3, guestsCount + 1))}
                  className="w-8 h-8 rounded-full border border-[#B0B0B0] flex items-center justify-center text-lg disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Primary Reserve Button */}
      <button
        type="button"
        className="w-full h-12 rounded-lg text-white font-semibold text-base transition-transform active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-black bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] shadow-[0_2px_4px_rgba(0,0,0,0.18)]"
      >
        Reserve
      </button>
      <div className="text-xs text-[#717171] text-center mt-3 font-normal">
        You won&apos;t be charged yet
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3 mt-6 text-sm text-[#222222]">
        <div className="flex justify-between">
          <span className="underline">
            ₹{pricePerNight.toLocaleString("en-IN")} x {nights} nights
          </span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>₹{cleaningFee.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Airbnb service fee</span>
          <span>₹{serviceFee.toLocaleString("en-IN")}</span>
        </div>
        <div className="h-[1px] bg-[#EBEBEB] my-4" />
        <div className="flex justify-between text-base font-bold">
          <span>Total before taxes</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </div>
  );
}
