"use client";

import { useState, type ReactNode } from "react";
import { css } from "@/lib/css";

// Anchor/button with a hover style override (the original `style-hover` attribute).
export function HLink({
  href,
  style,
  hover,
  children,
}: {
  href: string;
  style?: string;
  hover?: string;
  children: ReactNode;
}) {
  const [on, setOn] = useState(false);
  return (
    <a
      href={href}
      style={{ ...css(style ?? ""), ...(on && hover ? css(hover) : {}) }}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
    >
      {children}
    </a>
  );
}

export function HButton({
  type = "button",
  style,
  hover,
  onClick,
  children,
}: {
  type?: "button" | "submit";
  style?: string;
  hover?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const [on, setOn] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...css(style ?? ""), ...(on && hover ? css(hover) : {}) }}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
    >
      {children}
    </button>
  );
}
