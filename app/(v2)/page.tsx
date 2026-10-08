import { css } from "@/lib/css";
import { HLink } from "@/components/HLink";
import { ImageSlot } from "@/components/ImageSlot";
import { BgVideo } from "@/components/BgVideo";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";

// Original prop: 'form' | 'contact-only'
const contactMode: "form" | "contact-only" = "form";

const faqs: [string, string][] = [
  ["What does dispatch cost?", "A percentage of each load's gross. No setup fee, no monthly minimum, and you only pay when your truck is moving."],
  ["Do I have to sign a long-term contract?", "No. Service runs week to week and you can stop anytime with notice."],
  ["Can I turn down a load?", "Yes. Every load is presented to you with rate, miles and pickup details before we book it. You have final say."],
  ["What do you need to get started?", "Your MC and DOT numbers, certificate of insurance, W-9 and a signed carrier packet. Most carriers are set up within 48 hours."],
  ["Do you work with new authorities?", "Yes. We work with new MCs and know which brokers will book them from day one."],
];

const stats = [
  { value: "1:1", label: "Dedicated dispatcher" },
  { value: "48h", label: "Average onboarding" },
  { value: "24/7", label: "Dispatch line" },
  { value: "48", label: "States covered" },
  { value: "$0", label: "Setup fee" },
];

const services = [
  { n: "01", title: "Load sourcing", body: "We work every major load board and our broker network daily for freight that fits your equipment, lanes and home time." },
  { n: "02", title: "Rate negotiation", body: "Your dispatcher negotiates every load with the broker to get the best rate per mile available." },
  { n: "03", title: "Paperwork", body: "Rate confirmations, BOLs, carrier setups and check calls are all handled by us." },
  { n: "04", title: "Lane planning", body: "We plan loads back to back to cut deadhead and keep you heading where you want to go." },
  { n: "05", title: "Factoring & billing", body: "We submit invoices to your factoring company so you get paid in days, not weeks." },
  { n: "06", title: "On-the-road support", body: "Breakdowns, detention and broker disputes get handled by a real person at any hour." },
];

const steps = [
  { n: "i.", title: "Call or message", body: "Tell us about your truck, where you like to run and when you're available." },
  { n: "ii.", title: "Send documents", body: "MC, DOT, insurance certificate and carrier packet. We set you up with brokers." },
  { n: "iii.", title: "We book loads", body: "Your dispatcher starts searching right away and sends you options to approve." },
  { n: "iv.", title: "Drive and get paid", body: "Pick up, deliver, repeat. We handle the broker calls and billing." },
];

const equipment = [
  { id: "dryvan", src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Gabriel Santos on Unsplash", href: "https://unsplash.com/@photogasan", name: "Dry van", note: "53'" },
  { id: "reefer", src: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Caleb Ruiter on Unsplash", href: "https://unsplash.com/@caleb_ruiter", name: "Reefer", note: "Temp-controlled" },
  { id: "flatbed", src: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Sander Yigin on Unsplash", href: "https://unsplash.com/@sanderyigin", name: "Flatbed", note: "48' / 53'" },
  { id: "stepdeck", src: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Zetong Li on Unsplash", href: "https://unsplash.com/@zetong", name: "Step deck", note: "Oversize OK" },
  { id: "power", src: "https://images.unsplash.com/photo-1720811559395-3ed8d1b16649?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Tom Jackson on Unsplash", href: "https://unsplash.com/@themrjaxon", name: "Power only", note: "Tractor" },
  { id: "box", src: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Robson Hatsukami Morgan on Unsplash", href: "https://unsplash.com/@robsonhmorgan", name: "Box truck", note: "26' non-CDL" },
];

const promises = [
  "One dispatcher assigned to your account",
  "You approve every load before it's booked",
  "Weekly earnings and mileage summary",
  "No long-term contract",
  "New authorities welcome",
];

const plans = [
  { name: "Owner operator", rate: "6%", fit: "1 truck", featured: false, items: ["Dedicated dispatcher", "Load sourcing & negotiation", "Rate cons & BOLs", "Weekday support"] },
  { name: "Full service", rate: "8%", fit: "1–5 trucks", featured: true, items: ["Everything in Owner operator", "Factoring & invoicing", "Lane planning", "24/7 support"] },
  { name: "Small fleet", rate: "5%", fit: "6+ trucks", featured: false, items: ["Everything in Full service", "Driver-level load planning", "Weekly fleet reports", "Volume pricing"] },
];

const testimonials = [
  { src: "https://images.unsplash.com/photo-1574757974346-45bae947d89a?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Mitchell Luo on Unsplash", href: "https://unsplash.com/@mitchel3uo", quote: "My dispatcher knows I need to be home by Friday and plans the week around it. My rate per mile went up in the first month.", name: "Driver name", meta: "Dry van · 1 truck · TX" },
  { src: "https://images.unsplash.com/photo-1551913363-3ee43854c682?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Eddy Billard on Unsplash", href: "https://unsplash.com/@eddybllrd", quote: "New authority, no broker history. They got me loaded the first week and handled all the setup packets.", name: "Driver name", meta: "Flatbed · 1 truck · GA" },
  { src: "https://images.unsplash.com/photo-1762095996527-126e49ef9d72?auto=format&fit=crop&w=1200&q=70", credit: "Photo by Polina Kuzovkova on Unsplash", href: "https://unsplash.com/@p_kuzovkova", quote: "Running four reefers used to mean I was on the phone all day. Now I get a summary every Monday and that is it.", name: "Driver name", meta: "Reefer · 4 trucks · OH" },
];

const eyebrow = "font-size:13px;letter-spacing:0.22em;text-transform:uppercase;color:oklch(0.55 0.11 70)";
const eyebrowLight = "font-size:13px;letter-spacing:0.22em;text-transform:uppercase;color:oklch(0.82 0.1 75)";
const serif = "font-family:'Instrument Serif',serif";
const h2Style = `margin:0;${serif};font-weight:400;font-size:clamp(44px,5vw,72px);line-height:1;letter-spacing:-0.015em`;
const contactRow = "display:flex;justify-content:space-between;gap:16px;padding:20px 0;border-bottom:1px solid #2c323b;font-size:18px";
const contactLabel = "font-size:13px;letter-spacing:0.16em;text-transform:uppercase;color:#9a958c";
const footerHead = "font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#7d7870";

export default function Page() {
  return (
    <div style={css("background:#f5f2ec")}>
      {/* HERO */}
      <section id="top" style={css("position:relative;min-height:100vh;color:#f5f2ec;display:flex;flex-direction:column;overflow:hidden;background:#12161c")}>
        <BgVideo
          poster="https://unsplash.com/photos/0A_XOIocfrE/download?w=1920"
          sources={["/videos/52013-720.mp4"]}
        />
        <div style={css("position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,15,20,0.82) 0%,rgba(12,15,20,0.45) 55%,rgba(12,15,20,0.2) 100%),linear-gradient(0deg,rgba(12,15,20,0.7) 0%,rgba(12,15,20,0) 40%);pointer-events:none")} />

        <header style={css("position:relative;z-index:2;max-width:1360px;width:100%;box-sizing:border-box;margin:0 auto;padding:28px 40px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap")}>
          <a href="#top" style={css("display:flex;align-items:baseline;gap:8px")}>
            <span style={css(`${serif};font-size:30px;letter-spacing:-0.01em`)}>FastLane</span>
            <span style={css("font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#cfc9bd")}>Dispatch</span>
          </a>
          <nav style={css("display:flex;gap:32px;font-size:15px;flex-wrap:wrap;color:#e6e1d7")}>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <HLink href="#contact" style="border:1px solid rgba(245,242,236,0.5);padding:11px 22px;border-radius:999px;font-size:15px;font-weight:500" hover="background:#f5f2ec;color:#12161c">Book a call</HLink>
        </header>

        <div style={css("position:relative;z-index:2;flex:1;max-width:1360px;width:100%;box-sizing:border-box;margin:0 auto;padding:40px 40px 72px;display:flex;flex-direction:column;justify-content:flex-end;gap:32px")}>
          <div style={css(eyebrowLight)}>Truck dispatch for owner operators &amp; small fleets</div>
          <h1 style={css(`margin:0;${serif};font-weight:400;font-size:clamp(56px,8vw,128px);line-height:0.95;letter-spacing:-0.02em;max-width:1000px;text-wrap:balance`)}>
            Keep the truck loaded. <em style={css("color:oklch(0.82 0.1 75)")}>We&apos;ll handle the rest.</em>
          </h1>
          <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap")}>
            <p style={css("margin:0;font-size:19px;line-height:1.6;max-width:500px;color:#ddd8ce;text-wrap:pretty")}>A dedicated dispatcher finds, negotiates and books your loads, then handles the paperwork and broker calls. You drive.</p>
            <div style={css("display:flex;gap:12px;flex-wrap:wrap")}>
              <HLink href="#contact" style="background:#f5f2ec;color:#12161c;padding:17px 30px;border-radius:999px;font-weight:600;font-size:16px" hover="background:oklch(0.82 0.1 75);color:#12161c">Start onboarding</HLink>
              <HLink href="#process" style="padding:17px 30px;border-radius:999px;font-weight:500;font-size:16px;border:1px solid rgba(245,242,236,0.5)" hover="border-color:#f5f2ec;color:#f5f2ec">How it works</HLink>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={css("border-bottom:1px solid #ddd7cc")}>
        <div style={css("max-width:1360px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr))")}>
          {stats.map((s) => (
            <div key={s.label} style={css("padding:40px 0;display:flex;flex-direction:column;gap:8px")}>
              <div style={css(`${serif};font-size:52px;line-height:1`)}>{s.value}</div>
              <div style={css("font-size:14px;color:#62666c")}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={css("max-width:1360px;margin:0 auto;padding:140px 40px")}>
        <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:80px")}>
          <div style={css("display:flex;flex-direction:column;gap:28px")}>
            <div style={css(eyebrow)}>What we do</div>
            <h2 style={css(`${h2Style};text-wrap:balance`)}>The business side of trucking, <em>handled.</em></h2>
            <p style={css('margin:0;font-size:18px;line-height:1.65;color:#474b52;max-width:440px;text-wrap:pretty')}>Everything between &quot;truck available&quot; and &quot;invoice paid&quot; is our job. Your dispatcher works your lanes every day.</p>
            <div style={css("position:relative;aspect-ratio:4/3;border-radius:6px;overflow:hidden;margin-top:12px")}>
              <ImageSlot src="https://unsplash.com/photos/S9KZmxx3OJE/download?w=1400" alt="Truck on the road" credit="Photo by Bernd Dittrich on Unsplash" creditHref="https://unsplash.com/@hdbernd" />
            </div>
          </div>
          <div style={css("display:flex;flex-direction:column;border-top:1px solid #12161c")}>
            {services.map((sv) => (
              <div key={sv.n} style={css("display:grid;grid-template-columns:56px 1fr;gap:16px;padding:32px 0;border-bottom:1px solid #ddd7cc")}>
                <div style={css("font-size:13px;color:oklch(0.55 0.11 70);padding-top:10px")}>{sv.n}</div>
                <div style={css("display:flex;flex-direction:column;gap:10px")}>
                  <h3 style={css(`margin:0;${serif};font-weight:400;font-size:32px;line-height:1.1`)}>{sv.title}</h3>
                  <p style={css("margin:0;font-size:17px;line-height:1.6;color:#474b52;text-wrap:pretty")}>{sv.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAND */}
      <section style={css("position:relative;min-height:72vh;display:flex;align-items:center;overflow:hidden;background:#12161c;color:#f5f2ec")}>
        <BgVideo
          poster="https://unsplash.com/photos/nbRgZltoOck/download?w=1920"
          sources={["/videos/41537-720.mp4"]}
        />
        <div style={css("position:absolute;inset:0;background:rgba(12,15,20,0.55);pointer-events:none")} />
        <div style={css("position:relative;max-width:1360px;width:100%;box-sizing:border-box;margin:0 auto;padding:100px 40px;display:flex;flex-direction:column;gap:28px")}>
          <p style={css(`margin:0;${serif};font-size:clamp(36px,4.6vw,68px);line-height:1.08;max-width:1050px;letter-spacing:-0.01em;text-wrap:balance`)}>You run the miles. We work the phones, the boards and the brokers, so every mile pays.</p>
          <div style={css(eyebrowLight)}>Lower 48 · 24/7 dispatch line</div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={css("max-width:1360px;margin:0 auto;padding:140px 40px")}>
        <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;margin-bottom:72px")}>
          <div style={css("display:flex;flex-direction:column;gap:24px;max-width:760px")}>
            <div style={css(eyebrow)}>Onboarding</div>
            <h2 style={css(h2Style)}>From first call to first load in <em>48 hours.</em></h2>
          </div>
          <a href="#contact" style={css("border-bottom:1px solid #12161c;padding-bottom:4px;font-weight:500")}>Start onboarding →</a>
        </div>
        <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:48px")}>
          {steps.map((st) => (
            <div key={st.n} style={css("display:flex;flex-direction:column;gap:18px;border-top:1px solid #12161c;padding-top:28px")}>
              <div style={css(`${serif};font-style:italic;font-size:44px;line-height:1;color:oklch(0.55 0.11 70)`)}>{st.n}</div>
              <h3 style={css("margin:0;font-size:21px;font-weight:600")}>{st.title}</h3>
              <p style={css("margin:0;font-size:16px;line-height:1.6;color:#474b52;text-wrap:pretty")}>{st.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={css("background:#ebe6dc")}>
        <div style={css("max-width:1360px;margin:0 auto;padding:140px 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:80px;align-items:center")}>
          <div style={css("position:relative;aspect-ratio:4/5;border-radius:6px;overflow:hidden")}>
            <ImageSlot src="https://unsplash.com/photos/nbRgZltoOck/download?w=1400" alt="Your dispatch team" credit="Photo by Wolfgang Hasselmann on Unsplash" creditHref="https://unsplash.com/@wolfgang_hasselmann" />
          </div>
          <div style={css("display:flex;flex-direction:column;gap:28px")}>
            <div style={css(eyebrow)}>About FastLane</div>
            <h2 style={css(`${h2Style};text-wrap:balance`)}>Big-fleet dispatch for the <em>one-truck operation.</em></h2>
            <p style={css("margin:0;font-size:18px;line-height:1.65;color:#474b52;max-width:520px;text-wrap:pretty")}>FastLane Dispatch was started to give owner operators and small fleets the same advantage large carriers get from a full-time dispatch team. Every account gets one dispatcher who learns your truck, your lanes and your schedule.</p>
            <div style={css("display:flex;flex-direction:column;border-top:1px solid #c9c2b5")}>
              {promises.map((p) => (
                <div key={p} style={css("display:flex;gap:16px;align-items:center;padding:15px 0;border-bottom:1px solid #c9c2b5;font-size:16px")}>
                  <div style={css("width:6px;height:6px;border-radius:50%;background:oklch(0.62 0.11 70);flex:none")} />
                  <div>{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" style={css("max-width:1360px;margin:0 auto;padding:140px 40px")}>
        <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;margin-bottom:56px")}>
          <h2 style={css(h2Style)}>Equipment we dispatch</h2>
          <p style={css("margin:0;font-size:17px;line-height:1.6;color:#474b52;max-width:420px")}>One truck or fifteen. Your dispatcher knows your equipment and how you like to run.</p>
        </div>
        <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:32px 24px")}>
          {equipment.map((eq) => (
            <div key={eq.id} style={css("display:flex;flex-direction:column;gap:16px")}>
              <div style={css("position:relative;aspect-ratio:3/2;border-radius:6px;overflow:hidden;background:#e4dfd5")}>
                <ImageSlot src={eq.src} alt={eq.name} credit={eq.credit} creditHref={eq.href} />
              </div>
              <div style={css("display:flex;justify-content:space-between;align-items:baseline;gap:12px")}>
                <div style={css(`${serif};font-size:28px`)}>{eq.name}</div>
                <div style={css("font-size:14px;color:#62666c")}>{eq.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={css("background:#12161c;color:#f5f2ec")}>
        <div style={css("max-width:1360px;margin:0 auto;padding:140px 40px")}>
          <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;margin-bottom:64px")}>
            <div style={css("display:flex;flex-direction:column;gap:24px")}>
              <div style={css(eyebrowLight)}>Dispatch rates</div>
              <h2 style={css(h2Style)}>Pay only when <em>you&apos;re moving.</em></h2>
            </div>
            <p style={css("margin:0;font-size:17px;line-height:1.6;color:#b9b4aa;max-width:420px")}>A percentage of each load&apos;s gross. No setup fee, no monthly minimum, no contract.</p>
          </div>
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:20px")}>
            {plans.map((pl) => (
              <div key={pl.name} style={css("border:1px solid #2c323b;border-radius:8px;padding:40px;display:flex;flex-direction:column;gap:24px;background:#171c23")}>
                <div style={css("display:flex;justify-content:space-between;align-items:center;gap:12px")}>
                  <div style={css("font-size:18px;font-weight:600")}>{pl.name}</div>
                  {pl.featured && (
                    <div style={css("font-size:12px;letter-spacing:0.12em;text-transform:uppercase;border:1px solid oklch(0.82 0.1 75);color:oklch(0.82 0.1 75);padding:5px 10px;border-radius:999px")}>Most chosen</div>
                  )}
                </div>
                <div style={css("display:flex;align-items:baseline;gap:10px")}>
                  <div style={css(`${serif};font-size:88px;line-height:0.9`)}>{pl.rate}</div>
                  <div style={css("font-size:14px;color:#9a958c")}>of gross · {pl.fit}</div>
                </div>
                <div style={css("display:flex;flex-direction:column;border-top:1px solid #2c323b")}>
                  {pl.items.map((it) => (
                    <div key={it} style={css("padding:13px 0;border-bottom:1px solid #2c323b;font-size:15px;color:#ddd8ce")}>{it}</div>
                  ))}
                </div>
                <HLink href="#contact" style="margin-top:auto;text-align:center;border:1px solid #f5f2ec;padding:15px;border-radius:999px;font-weight:500" hover="background:#f5f2ec;color:#12161c">Get started</HLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={css("max-width:1360px;margin:0 auto;padding:140px 40px")}>
        <div style={css(`${eyebrow};margin-bottom:56px`)}>From the driver&apos;s seat</div>
        <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:56px")}>
          {testimonials.map((t) => (
            <figure key={t.quote} style={css("margin:0;display:flex;flex-direction:column;gap:28px")}>
              <div style={css("position:relative;aspect-ratio:4/3;border-radius:6px;overflow:hidden;background:#e4dfd5")}>
                <ImageSlot src={t.src} alt="Driver photo" credit={t.credit} creditHref={t.href} />
              </div>
              <blockquote style={css(`margin:0;${serif};font-size:28px;line-height:1.25;text-wrap:pretty`)}>“{t.quote}”</blockquote>
              <figcaption style={css("display:flex;gap:14px;align-items:center")}>
                <div style={css("width:24px;height:1px;background:oklch(0.62 0.11 70);flex:none")} />
                <div style={css("display:flex;flex-direction:column;gap:2px")}>
                  <div style={css("font-weight:600;font-size:15px")}>{t.name}</div>
                  <div style={css("font-size:14px;color:#62666c")}>{t.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={css("border-top:1px solid #ddd7cc")}>
        <div style={css("max-width:1360px;margin:0 auto;padding:140px 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:80px")}>
          <div style={css("display:flex;flex-direction:column;gap:24px")}>
            <div style={css(eyebrow)}>FAQ</div>
            <h2 style={css(h2Style)}>Questions carriers ask</h2>
          </div>
          <div style={css("display:flex;flex-direction:column;border-top:1px solid #12161c")}>
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={css("background:#12161c;color:#f5f2ec")}>
        <div style={css("max-width:1360px;margin:0 auto;padding:140px 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:80px")}>
          <div style={css("display:flex;flex-direction:column;gap:32px")}>
            <div style={css(eyebrowLight)}>Get in touch</div>
            <h2 style={css(`margin:0;${serif};font-weight:400;font-size:clamp(52px,6.5vw,104px);line-height:0.95;letter-spacing:-0.02em`)}>Ready to <em>roll?</em></h2>
            <p style={css("margin:0;font-size:18px;line-height:1.6;max-width:460px;color:#c9c4ba")}>Send your details or book a 15-minute call. A dispatcher will get back to you the same day.</p>
            <div style={css("display:flex;flex-direction:column;border-top:1px solid #2c323b")}>
              <HLink href="mailto:dispatch@fastlanedispatch.com" style={contactRow} hover="color:oklch(0.82 0.1 75)"><span style={css(contactLabel)}>Email</span><span>dispatch@fastlanedispatch.com</span></HLink>
              <HLink href="https://wa.me/10000000000" style={contactRow} hover="color:oklch(0.82 0.1 75)"><span style={css(contactLabel)}>WhatsApp</span><span>Message us →</span></HLink>
              <HLink href="tel:+10000000000" style={contactRow} hover="color:oklch(0.82 0.1 75)"><span style={css(contactLabel)}>Phone</span><span>+1 (000) 000-0000</span></HLink>
              <HLink href="#book" style={contactRow} hover="color:oklch(0.82 0.1 75)"><span style={css(contactLabel)}>Book a call</span><span>Pick a 15-min slot →</span></HLink>
            </div>
          </div>
          {contactMode === "form" && <ContactForm />}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={css("background:#0d1015;color:#c9c4ba")}>
        <div style={css("max-width:1360px;margin:0 auto;padding:72px 40px 40px;display:flex;flex-direction:column;gap:56px")}>
          <div style={css("display:flex;justify-content:space-between;gap:48px;flex-wrap:wrap")}>
            <div style={css("display:flex;flex-direction:column;gap:14px;max-width:340px")}>
              <div style={css("display:flex;align-items:baseline;gap:8px;color:#f5f2ec")}>
                <span style={css(`${serif};font-size:30px`)}>FastLane</span>
                <span style={css("font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#9a958c")}>Dispatch</span>
              </div>
              <p style={css("margin:0;font-size:15px;line-height:1.6")}>Dispatch for owner operators and small fleets across the lower 48.</p>
            </div>
            <div style={css("display:flex;gap:72px;flex-wrap:wrap;font-size:15px")}>
              <div style={css("display:flex;flex-direction:column;gap:12px")}>
                <div style={css(footerHead)}>Company</div>
                <a href="#services">Services</a><a href="#about">About</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
              </div>
              <div style={css("display:flex;flex-direction:column;gap:12px")}>
                <div style={css(footerHead)}>Contact</div>
                <a href="mailto:dispatch@fastlanedispatch.com">dispatch@fastlanedispatch.com</a>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
                <a href="#contact">Book a call</a>
              </div>
            </div>
          </div>
          <div style={css("display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;border-top:1px solid #232830;padding-top:24px;font-size:13px;color:#7d7870")}>
            <div>© 2026 FastLane Dispatch. All rights reserved.</div>
            <div>Videos: Mixkit · Photos: Unsplash</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
