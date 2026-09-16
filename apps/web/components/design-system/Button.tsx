"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "elevated" | "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "elevated",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-normal rounded-[40px] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

  const sizeStyles = {
    sm: "text-[13px] px-3.5 py-1.5 gap-1.5",
    md: "text-[14px] px-5 py-2.5 gap-2",
    lg: "text-[16px] px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    elevated: "bg-[#EEEEEE] text-[#222222] hover:bg-[#E2E2E2] active:bg-[#D8D8D8]",
    primary: "bg-[#E61E4D] text-white font-medium hover:bg-[#B8183E] active:bg-[#9B1233]",
    outline: "bg-transparent border border-[#DDDDDD] text-[#222222] hover:bg-[#F7F7F7] active:bg-[#EEEEEE]",
    ghost: "bg-transparent text-[#222222] hover:bg-[#F7F7F7] active:bg-[#EEEEEE]",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
