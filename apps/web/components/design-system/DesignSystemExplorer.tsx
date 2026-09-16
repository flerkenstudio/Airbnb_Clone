"use client";

import React, { useState } from "react";
import { X, Copy, Check, Sparkles, Layers, Type, Palette, Component as CompIcon } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";
import { BrandGradient } from "./BrandGradient";

interface DesignSystemExplorerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesignSystemExplorer({
  isOpen,
  onClose,
}: DesignSystemExplorerProps) {
  const [activeTab, setActiveTab] = useState<"tokens" | "typography" | "components" | "gradient">("tokens");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tokens = [
    { name: "--accent", value: "#E61E4D", desc: "Primary vibrant accent" },
    { name: "--accent-deep", value: "#B8183E", desc: "Hover state for accent" },
    { name: "--bg / --surface", value: "#FFFFFF", desc: "Clean white surface" },
    { name: "--elevated", value: "#EEEEEE", desc: "Pill button & chip background" },
    { name: "--text / --ink", value: "#222222", desc: "High-contrast dark ink text" },
    { name: "--muted", value: "#6a6a6a", desc: "Secondary text" },
    { name: "--muted2", value: "#717171", desc: "Muted descriptors and captions" },
    { name: "--line", value: "#dddddd", desc: "Input & subtle component borders" },
    { name: "--line-soft", value: "#ebebeb", desc: "Divider line soft" },
    { name: "--card-border", value: "rgba(0,0,0,0.08)", desc: "Subtle card perimeter" },
    { name: "--rausch", value: "#ff385c", desc: "Secondary brand color" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Design System Explorer"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-[12px] max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col border border-[#DDDDDD] shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#EBEBEB] flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#E61E4D] flex items-center justify-center text-white text-xs font-bold">
              ✦
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#222222]">
                Design System Specification & Token Explorer
              </h2>
              <p className="text-xs text-[#717171]">
                Vibrant · Modern · 4px Grid Rhythm · 40px Pill Radius · #E61E4D Accent
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Explorer"
            className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-[#222222] transition-colors focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EBEBEB] px-6 bg-white gap-2 pt-2">
          <button
            onClick={() => setActiveTab("tokens")}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "tokens"
                ? "border-[#E61E4D] text-[#E61E4D]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Color Palette & Tokens</span>
          </button>
          <button
            onClick={() => setActiveTab("typography")}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "typography"
                ? "border-[#E61E4D] text-[#E61E4D]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography Scale</span>
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "components"
                ? "border-[#E61E4D] text-[#E61E4D]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            <CompIcon className="w-3.5 h-3.5" />
            <span>Components (Buttons, Cards, Inputs)</span>
          </button>
          <button
            onClick={() => setActiveTab("gradient")}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === "gradient"
                ? "border-[#E61E4D] text-[#E61E4D]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brand Moment Gradient</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* TAB 1: TOKENS */}
          {activeTab === "tokens" && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#222222] mb-1">
                  Named Color Tokens (CSS Custom Properties)
                </h3>
                <p className="text-xs text-[#717171] mb-4">
                  Extracted from design system brief. Click any swatch to copy value.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {tokens.map((t) => (
                  <div
                    key={t.name}
                    onClick={() => copyToClipboard(t.value)}
                    className="p-3 rounded-[8px] border border-[#EEEEEE] hover:border-[#DDDDDD] flex items-center justify-between cursor-pointer transition-colors bg-white hover:bg-[#F7F7F7]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-[6px] border border-black/10 shadow-xs"
                        style={{ backgroundColor: t.value }}
                      />
                      <div>
                        <span className="text-xs font-bold text-[#222222] block">
                          {t.name}
                        </span>
                        <span className="text-[11px] text-[#717171] block">
                          {t.desc}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-[#555555]">
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-[8px] bg-[#F7F7F7] border border-[#EEEEEE]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222] mb-2">
                  Rhythm & Dimension Rules
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#717171] block">Base Grid:</span>
                    <strong className="text-[#222222]">4px Increments</strong>
                  </div>
                  <div>
                    <span className="text-[#717171] block">Layout Max Width:</span>
                    <strong className="text-[#222222]">1521px (8px gutter)</strong>
                  </div>
                  <div>
                    <span className="text-[#717171] block">Button Radius:</span>
                    <strong className="text-[#222222]">40px (Pill)</strong>
                  </div>
                  <div>
                    <span className="text-[#717171] block">Card Radius:</span>
                    <strong className="text-[#222222]">12px (24px pad)</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TYPOGRAPHY */}
          {activeTab === "typography" && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#222222] mb-1">
                  Typography Scale & Line Heights
                </h3>
                <p className="text-xs text-[#717171] mb-4">
                  100px / 26px / 22px / 16px / 14px hierarchy with tight display line-heights.
                </p>
              </div>

              <div className="flex flex-col gap-6 divide-y divide-[#EEEEEE]">
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E61E4D] block mb-1">
                    Display — 100px (1.0 line-height)
                  </span>
                  <div className="text-[52px] sm:text-[72px] lg:text-[100px] font-medium text-[#222222] tracking-tight leading-none">
                    Solstice
                  </div>
                </div>

                <div className="pt-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#717171] block mb-1">
                    H1 — 26px (1.15 line-height, 500 weight)
                  </span>
                  <h1 className="text-[26px] font-medium text-[#222222] leading-[1.15]">
                    Architectural sanctuaries engineered for deep creative focus.
                  </h1>
                </div>

                <div className="pt-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#717171] block mb-1">
                    H2 — 22px (1.18 line-height, 500 weight)
                  </span>
                  <h2 className="text-[22px] font-medium text-[#222222] leading-[1.18]">
                    Selected Modernist Residencies & Open Ateliers
                  </h2>
                </div>

                <div className="pt-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#717171] block mb-1">
                    Body — 16px (1.5 line-height, 400 weight)
                  </span>
                  <p className="text-[16px] text-[#222222] leading-[1.5] max-w-2xl">
                    Every residency is vetted for privacy, acoustic integrity, and architectural significance. Bookings are granted exclusively on a weekly basis with curatorial approval.
                  </p>
                </div>

                <div className="pt-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#717171] block mb-1">
                    Caption / Specs — 14px (400 weight, muted)
                  </span>
                  <p className="text-[14px] text-[#717171]">
                    3 guests · 1 bedroom · 1 bed · 1 private hydrotherapy spa · High-speed fiber
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COMPONENTS */}
          {activeTab === "components" && (
            <div className="flex flex-col gap-8">
              {/* Buttons Section */}
              <div>
                <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider mb-3">
                  1. Buttons (40px Pill Radius, 0.15s Transition)
                </h4>
                <div className="flex flex-wrap items-center gap-3 p-4 bg-[#F7F7F7] rounded-[8px] border border-[#EEEEEE]">
                  <Button variant="elevated">
                    #EEEEEE Elevated (Default)
                  </Button>
                  <Button variant="primary">
                    #E61E4D Primary Accent
                  </Button>
                  <Button variant="outline">
                    Outline Pill
                  </Button>
                  <Button variant="ghost">
                    Ghost Pill
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled State
                  </Button>
                </div>
                <p className="text-xs text-[#717171] mt-2">
                  Focus ring: <code className="text-[#222222] font-mono">2px solid rgb(34, 34, 34), 2px offset</code>
                </p>
              </div>

              {/* Cards Section */}
              <div>
                <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider mb-3">
                  2. Cards (12px Radius, 1px Subtle Border, 24px Padding)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card elevation="flat">
                    <span className="text-xs font-bold text-[#E61E4D] uppercase tracking-wider block mb-1">
                      Flat Card (Default)
                    </span>
                    <h5 className="font-semibold text-base text-[#222222]">
                      Pure Flat Surface
                    </h5>
                    <p className="text-xs text-[#717171] mt-1">
                      White background, 1px subtle border rgba(0,0,0,0.08), 24px padding. No shadow by default.
                    </p>
                  </Card>

                  <Card elevation="hover">
                    <span className="text-xs font-bold text-[#222222] uppercase tracking-wider block mb-1">
                      Interactive Hover Card
                    </span>
                    <h5 className="font-semibold text-base text-[#222222]">
                      Hover to Test Elevation
                    </h5>
                    <p className="text-xs text-[#717171] mt-1">
                      Applies shadow-hover (0 2px 4px rgba(0,0,0,0.18)) and subtle -2px translateY on hover.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Inputs Section */}
              <div>
                <h4 className="text-sm font-bold text-[#222222] uppercase tracking-wider mb-3">
                  3. Form Inputs (6px Radius, 8px 12px Padding)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#F7F7F7] rounded-[8px] border border-[#EEEEEE]">
                  <Input label="Default Input" placeholder="Type here..." />
                  <Input label="Focused State" defaultValue="Curator Name" />
                  <Input label="Validation Error" defaultValue="Invalid email" error="Please enter valid email" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BRAND MOMENT GRADIENT */}
          {activeTab === "gradient" && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#222222] mb-1">
                  Brand Moment Gradient System
                </h3>
                <p className="text-xs text-[#717171] mb-4">
                  Linear gradient: <code className="font-mono text-[#222222]">#CFE3C8 → #ACD3E6 → #E9F0E4</code> used for high-impact hero brand moments, CTA ribbons, and borders.
                </p>
              </div>

              {/* Example 1: Full Banner */}
              <BrandGradient variant="banner" className="p-8">
                <div className="max-w-xl">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#222222] bg-white/70 px-2.5 py-1 rounded-[40px] inline-block mb-3">
                    Brand Moment Banner
                  </span>
                  <h3 className="text-2xl font-bold text-[#222222] mb-2 leading-tight">
                    A serene, organic palette bridging earth and light.
                  </h3>
                  <p className="text-sm text-[#333333] mb-4">
                    Soft sage greens blend into misty morning blues and luminous mint.
                  </p>
                  <Button variant="primary" size="sm">
                    Activate Experience
                  </Button>
                </div>
              </BrandGradient>

              {/* Example 2: Gradient Border Card */}
              <BrandGradient variant="border" className="p-[2px]">
                <div className="p-6">
                  <h4 className="text-base font-semibold text-[#222222]">
                    Gradient Accent Perimeter Card
                  </h4>
                  <p className="text-xs text-[#717171] mt-1">
                    Gives a jewel-like, refined outline to featured listings and priority notices.
                  </p>
                </div>
              </BrandGradient>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F7F7F7] border-t border-[#EBEBEB] flex items-center justify-between text-xs text-[#717171]">
          <span>Design tokens strictly compliant with user brief</span>
          <Button variant="elevated" size="sm" onClick={onClose}>
            Close Explorer
          </Button>
        </div>
      </div>
    </div>
  );
}
