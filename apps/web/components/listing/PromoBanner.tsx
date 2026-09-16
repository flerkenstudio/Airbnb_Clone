"use client";

import React, { useState } from "react";
import { Tag } from "lucide-react";

export function PromoBanner() {
  const [claimed, setClaimed] = useState(false);

  return (
    <div className="border border-[#EBEBEB] rounded-xl p-4 flex items-center justify-between gap-4 mb-6 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <Tag className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#222222]">
            Get 10% off your next stay.
          </div>
          <a href="#terms" className="text-xs underline text-[#717171] hover:text-black">
            Terms apply
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setClaimed(!claimed)}
        className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-all focus-visible:ring-2 focus-visible:ring-black ${
          claimed
            ? "bg-emerald-600 text-white border-emerald-600"
            : "bg-gray-100 text-[#222222] border-transparent hover:bg-gray-200"
        }`}
      >
        {claimed ? "Claimed" : "Claim"}
      </button>
    </div>
  );
}
