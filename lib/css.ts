import type { CSSProperties } from "react";

// Turns a CSS declaration string ("a-b:c;d:e") into a React style object so the
// original inline styles can be kept verbatim.
export function css(input: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of input.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop) continue;
    out[prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = value;
  }
  return out as CSSProperties;
}
