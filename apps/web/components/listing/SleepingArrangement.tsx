"use client";

import React from "react";
import { Bed } from "lucide-react";

export function SleepingArrangement({
  arrangement,
}: {
  arrangement: { title: string; bedType: string };
}) {
  return (
    <div className="py-8 border-b border-[#EBEBEB]">
      <h2 className="text-[22px] font-semibold text-[#222222] mb-6">Where you&apos;ll sleep</h2>
      <div className="border border-[#DDDDDD] rounded-xl p-6 w-full max-w-[210px] space-y-3">
        <Bed className="w-6 h-6 text-[#222222]" />
        <div>
          <h3 className="text-base font-semibold text-[#222222]">{arrangement.title}</h3>
          <p className="text-sm text-[#717171] mt-0.5">{arrangement.bedType}</p>
        </div>
      </div>
    </div>
  );
}
