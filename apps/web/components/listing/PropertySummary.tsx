"use client";

import React from "react";

export function PropertySummary({
  propertyType,
  location,
  guests,
  bedrooms,
  beds,
  bathrooms,
}: {
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}) {
  return (
    <div className="pt-6 pb-2">
      <h2 className="text-[22px] font-semibold text-[#222222]">
        {propertyType} in {location}
      </h2>
      <p className="text-base text-[#222222] mt-1">
        {guests} guests · {bedrooms} bedroom · {beds} bed · {bathrooms} bathroom
      </p>
    </div>
  );
}
