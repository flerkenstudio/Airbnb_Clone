"use client";

import React from "react";
import { Star } from "lucide-react";

export function GuestFavouriteCard({
  rating,
  reviewsCount,
}: {
  rating: number;
  reviewsCount: number;
}) {
  return (
    <div className="border border-[#DDDDDD] rounded-xl p-5 md:px-8 my-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Laurel badge */}
      <div className="flex items-center gap-3">
        <svg className="w-8 h-10 text-[#222222]" viewBox="0 0 32 40" fill="currentColor">
          <path d="M12 2C8 6 5 12 5 20c0 8 3 14 7 18-1-3-2-7-2-11 0-8 3-14 7-18-2-3-4-6-5-9z" opacity="0.85" />
          <path d="M8 8c-3 3-5 8-5 14 0 6 2 11 5 14-1-2-2-5-2-9 0-6 2-11 5-14-1-2-2-4-3-5z" opacity="0.6" />
        </svg>
        <div className="text-center font-bold text-base leading-tight text-[#222222]">
          Guest
          <br />
          favourite
        </div>
        <svg className="w-8 h-10 text-[#222222] transform scale-x-[-1]" viewBox="0 0 32 40" fill="currentColor">
          <path d="M12 2C8 6 5 12 5 20c0 8 3 14 7 18-1-3-2-7-2-11 0-8 3-14 7-18-2-3-4-6-5-9z" opacity="0.85" />
          <path d="M8 8c-3 3-5 8-5 14 0 6 2 11 5 14-1-2-2-5-2-9 0-6 2-11 5-14-1-2-2-4-3-5z" opacity="0.6" />
        </svg>
      </div>

      <div className="text-center sm:text-left text-sm font-medium text-[#222222] max-w-[280px]">
        One of the most loved homes on Airbnb, according to guests
      </div>

      {/* Metrics */}
      <div className="flex items-center gap-6">
        <div className="text-center">
          <div className="text-lg font-bold text-[#222222]">{rating.toFixed(2)}</div>
          <div className="flex items-center gap-0.5 mt-0.5 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#222222] text-[#222222]" />
            ))}
          </div>
        </div>

        <div className="h-9 w-[1px] bg-[#DDDDDD]" />

        <div className="text-center">
          <div className="text-lg font-bold text-[#222222]">{reviewsCount}</div>
          <div className="text-xs font-semibold underline text-[#222222]">Reviews</div>
        </div>
      </div>
    </div>
  );
}
