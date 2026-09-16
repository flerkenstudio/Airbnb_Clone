"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Globe, Menu, User, Home } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-[#EBEBEB]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          aria-label="Airbnb homepage"
          className="flex items-center focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1"
        >
          <Image
            src="/images/airbnb_logo.png"
            alt="Airbnb"
            width={102}
            height={33}
            priority
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Center Pill Search Bar */}
        <div className="hidden md:flex items-center border border-[#DDDDDD] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow duration-150 cursor-pointer">
          <div className="flex items-center gap-2 pr-3">
            <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center text-gray-700">
              <Home className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-semibold text-[#222222]">Anywhere</span>
          </div>
          <span className="h-5 w-[1px] bg-[#DDDDDD]" />
          <div className="px-3 text-sm font-semibold text-[#222222]">Anytime</div>
          <span className="h-5 w-[1px] bg-[#DDDDDD]" />
          <div className="pl-3 pr-2 text-sm text-[#717171]">Add guests</div>
          <button
            type="button"
            aria-label="Search"
            className="w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white hover:bg-[#E00B41] transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Right Menu Controls */}
        <div className="flex items-center gap-1 text-[#222222]">
          <button
            type="button"
            className="text-sm font-semibold px-3.5 py-2.5 rounded-full hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            Become a host
          </button>
          <button
            type="button"
            aria-label="Choose language and currency"
            className="p-2.5 rounded-full hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Globe className="w-4 h-4 text-[#222222]" />
          </button>
          <div className="relative">
            <button
              type="button"
              aria-label="User navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 border border-[#DDDDDD] rounded-full py-1.5 px-3 hover:shadow-md transition-shadow ml-1 focus-visible:ring-2 focus-visible:ring-black"
            >
              <Menu className="w-4 h-4 text-[#222222]" />
              <div className="w-7 h-7 rounded-full bg-[#717171] text-white flex items-center justify-center overflow-hidden">
                <User className="w-4 h-4 fill-white" />
              </div>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white border border-[#DDDDDD] rounded-2xl shadow-xl py-2 z-50">
                <a href="#login" className="block px-4 py-2.5 text-sm font-semibold hover:bg-gray-100 text-[#222222]">
                  Sign up
                </a>
                <a href="#login" className="block px-4 py-2.5 text-sm hover:bg-gray-100 text-[#222222]">
                  Log in
                </a>
                <div className="h-[1px] bg-[#EBEBEB] my-2" />
                <a href="#host" className="block px-4 py-2.5 text-sm hover:bg-gray-100 text-[#222222]">
                  Airbnb your home
                </a>
                <a href="#help" className="block px-4 py-2.5 text-sm hover:bg-gray-100 text-[#222222]">
                  Help Center
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
