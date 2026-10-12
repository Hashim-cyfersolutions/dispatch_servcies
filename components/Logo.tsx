export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" style={{ flexShrink: 0, alignSelf: "center" }}>
      <rect width="64" height="64" rx="14" fill="#e8b96b" />
      <rect x="9" y="25" width="9" height="4" rx="2" fill="#12161c" />
      <rect x="9" y="35" width="9" height="4" rx="2" fill="#12161c" />
      <path
        fill="#12161c"
        fillRule="evenodd"
        d="M23 16h11c10 0 17 7 17 16s-7 16-17 16H23V16Zm8 8v16h3c5 0 9-3 9-8s-4-8-9-8h-3Z"
      />
    </svg>
  );
}
