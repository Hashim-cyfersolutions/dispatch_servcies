"use client";

import { useEffect, useRef } from "react";

export function BgVideo({
  poster,
  sources,
  speed = 1,
}: {
  poster: string;
  sources: string[];
  speed?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultPlaybackRate = speed;
    v.playbackRate = speed;
    v.play().catch(() => {});
  }, [speed]);
  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate = speed;
      }}
      poster={poster}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    >
      {sources.map((s) => (
        <source key={s} src={s} type="video/mp4" />
      ))}
    </video>
  );
}
