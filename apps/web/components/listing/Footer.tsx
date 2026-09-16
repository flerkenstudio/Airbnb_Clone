"use client";

import React from "react";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#F7F7F7] border-t border-[#EBEBEB] text-[#222222]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#EBEBEB] text-sm">
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-[#717171]">
              <li><a href="#help" className="hover:underline">Help Center</a></li>
              <li><a href="#aircover" className="hover:underline">AirCover</a></li>
              <li><a href="#anti-discrimination" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#disability-support" className="hover:underline">Disability support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Hosting</h4>
            <ul className="space-y-2 text-[#717171]">
              <li><a href="#host" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#aircover-hosts" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#hosting-resources" className="hover:underline">Hosting resources</a></li>
              <li><a href="#community-forum" className="hover:underline">Community forum</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Airbnb</h4>
            <ul className="space-y-2 text-[#717171]">
              <li><a href="#newsroom" className="hover:underline">Newsroom</a></li>
              <li><a href="#new-features" className="hover:underline">New features</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#investors" className="hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#717171] gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 Airbnb, Inc. · Playpower Labs Recreation</span>
            <span>·</span>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#terms" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#sitemap" className="hover:underline">Sitemap</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-[#222222]">
            <span className="flex items-center gap-1.5 cursor-pointer hover:underline">
              <Globe className="w-4 h-4" /> English (IN)
            </span>
            <span className="cursor-pointer hover:underline">₹ INR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
