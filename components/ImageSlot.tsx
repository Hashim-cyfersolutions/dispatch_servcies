// Static replacement for the design tool's <image-slot>: a cropped photo with
// the small Unsplash credit chip in the bottom-left corner.
function withUtm(href: string) {
  const u = new URL(href);
  if (!u.searchParams.has("utm_source")) u.searchParams.set("utm_source", "claude_design");
  if (!u.searchParams.has("utm_medium")) u.searchParams.set("utm_medium", "referral");
  return u.toString();
}

const UNSPLASH = "https://unsplash.com/?utm_source=claude_design&utm_medium=referral";

export function ImageSlot({
  src,
  alt,
  credit,
  creditHref,
  radius = 6,
}: {
  src: string;
  alt: string;
  credit: string;
  creditHref: string;
  radius?: number;
}) {
  const m = /^Photo by (.+) on Unsplash$/.exec(credit);
  return (
    <div style={{ position: "absolute", inset: 0, borderRadius: radius, overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <span
        style={{
          position: "absolute",
          left: 6,
          bottom: 6,
          maxWidth: "calc(100% - 12px)",
          padding: "3px 7px",
          borderRadius: 5,
          background: "rgba(0,0,0,.55)",
          color: "#fff",
          font: "10px/1.2 system-ui,-apple-system,sans-serif",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backdropFilter: "blur(6px)",
        }}
      >
        {m ? (
          <>
            Photo by{" "}
            <a href={withUtm(creditHref)} style={{ color: "inherit" }}>
              {m[1]}
            </a>{" "}
            on{" "}
            <a href={UNSPLASH} style={{ color: "inherit" }}>
              Unsplash
            </a>
          </>
        ) : (
          credit
        )}
      </span>
    </div>
  );
}
