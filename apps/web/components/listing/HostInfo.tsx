"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function HostInfo({
  host,
}: {
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
    yearsHosting: number;
  };
}) {
  return (
    <div className="py-6 border-b border-[#EBEBEB]">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
          <Image
            src={host.avatar}
            alt={host.name}
            fill
            className="object-cover"
          />
          {host.isSuperhost && (
            <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-0.5 rounded-full ring-2 ring-white">
              <ShieldCheck className="w-3 h-3" />
            </div>
          )}
        </div>
        <div>
          <div className="text-base font-semibold text-[#222222]">
            Hosted by {host.name}
          </div>
          <div className="text-sm text-[#717171]">
            {host.isSuperhost ? "Superhost · " : ""}{host.yearsHosting} years hosting
          </div>
        </div>
      </div>
    </div>
  );
}
