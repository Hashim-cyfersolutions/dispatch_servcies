// Static replacement for the design tool's <image-slot>: a cropped photo.
export function ImageSlot({
  src,
  alt,
  radius = 6,
}: {
  src: string;
  alt: string;
  radius?: number;
}) {
  return (
    <div style={{ position: "absolute", inset: 0, borderRadius: radius, overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
