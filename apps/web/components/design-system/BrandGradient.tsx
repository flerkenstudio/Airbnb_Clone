"use client";

import React from "react";

interface BrandGradientProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "banner" | "text" | "border";
}

export function BrandGradient({
  children,
  className = "",
  variant = "banner",
}: BrandGradientProps) {
  if (variant === "text") {
    return (
      <span
        className={`bg-gradient-to-r from-[#2B5C3F] via-[#1E4B6E] to-[#2F5439] bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === "border") {
    return (
      <div
        className={`p-[1px] rounded-[12px] bg-gradient-to-r from-[#CFE3C8] via-[#ACD3E6] to-[#E9F0E4] ${className}`}
      >
        <div className="bg-white rounded-[11px] h-full w-full">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-r from-[#CFE3C8] via-[#ACD3E6] to-[#E9F0E4] rounded-[12px] ${className}`}
    >
      {children}
    </div>
  );
}
