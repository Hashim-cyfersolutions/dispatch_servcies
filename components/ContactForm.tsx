"use client";

import { useState, type ReactNode } from "react";
import { css } from "@/lib/css";
import { HButton } from "./HLink";

const s = {
  box: "background:#f5f2ec;color:#12161c;border-radius:8px;padding:44px",
  form: "display:flex;flex-direction:column;gap:20px",
  title: "font-family:'Instrument Serif',serif;font-size:34px;line-height:1.1",
  label: "display:flex;flex-direction:column;gap:8px;font-size:13px;font-weight:600;color:#474b52",
  field: "border:none;border-bottom:1px solid #12161c;background:transparent;padding:10px 0;font-size:16px;font-weight:400;color:#12161c;outline:none",
  grid: "display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px",
  btn: "all:unset;cursor:pointer;text-align:center;background:#12161c;color:#f5f2ec;padding:17px;border-radius:999px;font-weight:600;font-size:16px;margin-top:10px",
  done: "display:flex;flex-direction:column;gap:18px;min-height:380px;justify-content:center",
  thanks: "font-family:'Instrument Serif',serif;font-size:48px;line-height:1.05",
  reset: "all:unset;cursor:pointer;font-size:14px;text-decoration:underline;color:#474b52",
  p: "margin:0;font-size:17px;line-height:1.6;color:#474b52",
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={css(s.label)}>
      {label}
      {children}
    </label>
  );
}

function Select({ options }: { options: string[] }) {
  return (
    <select style={css(s.field)}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="book" style={css(s.box)}>
      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={css(s.form)}
        >
          <div style={css(s.title)}>Carrier onboarding</div>
          <div style={css(s.grid)}>
            <Field label="Full name">
              <input required style={css(s.field)} />
            </Field>
            <Field label="Phone">
              <input required type="tel" style={css(s.field)} />
            </Field>
            <Field label="MC number">
              <input style={css(s.field)} />
            </Field>
            <Field label="DOT number">
              <input style={css(s.field)} />
            </Field>
            <Field label="Equipment">
              <Select options={["Dry van", "Reefer", "Flatbed", "Step deck", "Power only", "Box truck"]} />
            </Field>
            <Field label="Fleet size">
              <Select options={["1 truck", "2–5 trucks", "6–15 trucks", "16+ trucks"]} />
            </Field>
          </div>
          <Field label="Preferred lanes">
            <input placeholder="e.g. Midwest to Southeast" style={css(s.field)} />
          </Field>
          <HButton type="submit" style={s.btn} hover="background:oklch(0.62 0.11 70)">
            Request a dispatcher call
          </HButton>
        </form>
      ) : (
        <div style={css(s.done)}>
          <div style={css(s.thanks)}>
            Thank you. <em>We&apos;ll call you today.</em>
          </div>
          <p style={css(s.p)}>Have your insurance certificate and carrier packet ready to send.</p>
          <button onClick={() => setSubmitted(false)} style={css(s.reset)}>
            Send another
          </button>
        </div>
      )}
    </div>
  );
}
