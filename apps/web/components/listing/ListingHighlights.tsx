"use client";

import React from "react";
import { Bath, Laptop, KeyRound } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Bath: <Bath className="w-6 h-6 text-[#222222]" />,
  Laptop: <Laptop className="w-6 h-6 text-[#222222]" />,
  KeyRound: <KeyRound className="w-6 h-6 text-[#222222]" />,
};

export function ListingHighlights({
  highlights,
}: {
  highlights: Array<{ icon: string; title: string; description: string }>;
}) {
  return (
    <div className="py-8 border-b border-[#EBEBEB] space-y-6">
      {highlights.map((h, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="mt-0.5">{iconMap[h.icon] || <Bath className="w-6 h-6" />}</div>
          <div>
            <h3 className="text-base font-semibold text-[#222222]">{h.title}</h3>
            <p className="text-sm text-[#717171] mt-0.5">{h.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
