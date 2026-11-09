// Small rounded line icons that match the soft strokes of the Pink Coded logo.
const paths = {
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />,
  chat: <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h-1A2.5 2.5 0 0 1 3 12.5" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  telegram: <path d="M20.5 4.5 3.5 11l5.5 2 2 6 3-4 4.5 3.5 2-14Z M9 13l8-5.5" />,
};

export default function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
