"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";

export function DescriptionSection({ description }: { description: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-4">About this space</h2>
      <p className="text-base text-[#222222] leading-6 line-clamp-4">
        {description}
      </p>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mt-3 text-base font-semibold underline text-[#222222] flex items-center gap-1 hover:text-black focus-visible:ring-2 focus-visible:ring-black rounded p-0.5"
      >
        <span>Show more</span>
        <ChevronRight className="w-4 h-4" />
      </button>

      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 md:p-8 max-h-[80vh] overflow-y-auto shadow-2xl relative">
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-[#222222] mb-4">About this space</h3>
            <div className="text-base text-[#222222] leading-7 space-y-4">
              <p>{description}</p>
              <p>
                <strong>The Space:</strong> Designed as an intimate holiday getaway in Candolim, this unit features contemporary aesthetics with Goan-Portuguese charm. Enjoy direct access to a private hydrotherapy jacuzzi on your personal stone patio.
              </p>
              <p>
                <strong>Guest Access:</strong> Complete private access to the entire apartment, private patio, and jacuzzi. Guests also enjoy shared access to the Amor de Goa swimming pool, gym, and landscaped courtyards.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
