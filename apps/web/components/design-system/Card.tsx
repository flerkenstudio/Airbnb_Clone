"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  elevation?: "flat" | "hover" | "elevated";
  className?: string;
}

export function Card({
  children,
  elevation = "flat",
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "bg-white border border-[rgba(0,0,0,0.08)] rounded-[12px] p-6 transition-all duration-150";

  const elevationStyles = {
    flat: "shadow-none",
    hover: "hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] hover:-translate-y-0.5",
    elevated: "shadow-[0_6px_16px_rgba(0,0,0,0.12)]",
  };

  return (
    <div
      className={`${baseStyles} ${elevationStyles[elevation]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
