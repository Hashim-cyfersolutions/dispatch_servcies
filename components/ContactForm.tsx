"use client";

import { useState, type FormEvent, type ReactNode } from "react";
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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setError("");
    try {
      const body = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div id="book" style={css(s.box)}>
      {!submitted ? (
        <form onSubmit={onSubmit} style={css(s.form)}>
          <div style={css(s.title)}>Carrier onboarding</div>
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
          <div style={css(s.grid)}>
            <Field label="Full name">
              <input name="name" required autoComplete="name" style={css(s.field)} />
            </Field>
            <Field label="Phone">
              <input name="phone" required type="tel" autoComplete="tel" style={css(s.field)} />
            </Field>
            <Field label="MC number">
              <input name="mc" style={css(s.field)} />
            </Field>
            <Field label="Email">
              <input name="email" required type="email" autoComplete="email" style={css(s.field)} />
            </Field>
          </div>
          <Field label="Message or note">
            <textarea name="message" rows={3} style={{ ...css(s.field), resize: "vertical" }} />
          </Field>
          {error && (
            <p role="alert" style={{ ...css(s.p), color: "#b3261e", fontSize: 14 }}>
              {error}
            </p>
          )}
          <HButton type="submit" style={s.btn} hover="background:oklch(0.62 0.11 70)">
            {pending ? "Sending…" : "Request a dispatcher call"}
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
