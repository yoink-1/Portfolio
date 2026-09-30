// Decorative scatter plot with a fitted trend line.
// Purely illustrative: no real data or numbers are shown.
const points = [
  [40, 196], [58, 184], [72, 190], [88, 170], [104, 176], [118, 158],
  [134, 164], [150, 146], [166, 150], [180, 132], [196, 138], [212, 120],
  [226, 126], [242, 108], [258, 112], [272, 96], [288, 100], [304, 82],
];

export default function HeroChart() {
  return (
    <figure className="relative w-full max-w-md" aria-hidden="true">
      <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(21,32,51,0.04),0_12px_32px_-12px_rgba(21,32,51,0.12)]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-point" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="ml-auto h-1.5 w-16 rounded-full bg-line" />
        </div>
        <svg viewBox="0 0 340 230" className="h-auto w-full">
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="24" x2="324" y1={y} y2={y} stroke="#E1E5EB" strokeWidth="1" />
          ))}
          <line x1="24" x2="24" y1="24" y2="212" stroke="#C9D0DA" strokeWidth="1.25" />
          <line x1="24" x2="324" y1="212" y2="212" stroke="#C9D0DA" strokeWidth="1.25" />
          {points.map(([x, y], i) => (
            <circle
              key={i}
              className="chart-point"
              style={{ animationDelay: `${i * 45}ms` }}
              cx={x}
              cy={y}
              r="4"
              fill="#3E8C82"
              fillOpacity="0.8"
            />
          ))}
          <path
            className="trend-line"
            d="M 32 200 L 316 78"
            fill="none"
            stroke="#1D5C8C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <span className="h-2 rounded-full bg-accent-soft" />
          <span className="h-2 rounded-full bg-accent-soft" />
          <span className="h-2 rounded-full bg-line" />
        </div>
      </div>
    </figure>
  );
}
