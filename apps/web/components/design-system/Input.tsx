"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1 w-full text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-[#222222] tracking-wider uppercase"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full bg-white border border-[#DDDDDD] rounded-[6px] px-3 py-2 text-sm text-[#222222] placeholder-[#717171] transition-all duration-100 focus:border-[#222222] focus-visible:outline-2 focus-visible:outline-[rgb(34,34,34)] focus-visible:outline-offset-2 ${
          error ? "border-[#E61E4D]" : ""
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-[#E61E4D]">{error}</span>}
    </div>
  );
}
