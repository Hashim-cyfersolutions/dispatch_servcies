"use client";

import { useState } from "react";
import { css } from "@/lib/css";

const s = {
  border: "border-bottom:1px solid #ddd7cc",
  btn: "all:unset;cursor:pointer;width:100%;box-sizing:border-box;padding:26px 0;display:flex;justify-content:space-between;gap:24px;align-items:center;font-size:20px;font-weight:500",
  sign: "font-size:24px;font-weight:300;color:oklch(0.55 0.11 70);flex:none",
  p: "margin:0 0 26px;font-size:17px;line-height:1.65;color:#474b52;max-width:620px;text-wrap:pretty",
};

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState(0);
  return (
    <>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} style={css(s.border)}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={css(s.btn)}>
              <span>{q}</span>
              <span style={css(s.sign)}>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p style={css(s.p)}>{a}</p>}
          </div>
        );
      })}
    </>
  );
}
