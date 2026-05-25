export default function OrnamentMoldovenesc({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Zigzag band top */}
      <polyline points="0,8 13,2 26,8 39,2 52,8 65,2 78,8 91,2 104,8 117,2 130,8 143,2 156,8 169,2 182,8 195,2 208,8 221,2 234,8 247,2 260,8 273,2 286,8 299,2 312,8 325,2 338,8 351,2 364,8 377,2 390,8 403,2 416,8 429,2 442,8 455,2 468,8 481,2 494,8 507,2 520,8"
        fill="none" stroke="#c0392b" strokeWidth="2.2" strokeLinejoin="round" />

      {/* Zigzag band bottom */}
      <polyline points="0,48 13,54 26,48 39,54 52,48 65,54 78,48 91,54 104,48 117,54 130,48 143,54 156,48 169,54 182,48 195,54 208,48 221,54 234,48 247,54 260,48 273,54 286,48 299,54 312,48 325,54 338,48 351,54 364,48 377,54 390,48 403,54 416,48 429,54 442,48 455,54 468,48 481,54 494,48 507,54 520,48"
        fill="none" stroke="#c0392b" strokeWidth="2.2" strokeLinejoin="round" />

      {/* Repeating motif: diamond + cross flowers every 40px */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((n) => {
        const x = 20 + n * 40;
        return (
          <g key={n} transform={`translate(${x}, 28)`}>
            {/* Diamond */}
            <polygon points="0,-11 8,0 0,11 -8,0" fill="#e8a020" stroke="#c0392b" strokeWidth="1" />
            <polygon points="0,-6 4,0 0,6 -4,0" fill="#c0392b" />
          </g>
        );
      })}

      {/* Cross/flower between diamonds */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((n) => {
        const x = 40 + n * 40;
        if (x > 510) return null;
        return (
          <g key={n} transform={`translate(${x}, 28)`}>
            {/* Horizontal petal */}
            <ellipse cx="-7" cy="0" rx="5" ry="3" fill="#2d6e3e" />
            <ellipse cx="7" cy="0" rx="5" ry="3" fill="#2d6e3e" />
            {/* Vertical petal */}
            <ellipse cx="0" cy="-7" rx="3" ry="5" fill="#2d6e3e" />
            <ellipse cx="0" cy="7" rx="3" ry="5" fill="#2d6e3e" />
            {/* Center dot */}
            <circle cx="0" cy="0" r="2.5" fill="#e8a020" />
          </g>
        );
      })}

      {/* Small dots on zigzag peaks */}
      {[13,39,65,91,117,143,169,195,221,247,273,299,325,351,377,403,429,455,481,507].map((x, i) => (
        <circle key={i} cx={x} cy={i % 2 === 0 ? 2 : 54} r="2.5" fill="#2d6e3e" />
      ))}
    </svg>
  );
}
