import { delay } from "../lib/motion";

const C = 200;
const INK = "#242421";
const STONE = "#85837D";
const BRONZE = "#8C6D43";

const TICKS = Array.from({ length: 60 }, (_, i) => ({
  angle: i * 6,
  length: i % 15 === 0 ? 20 : i % 5 === 0 ? 13 : 6,
  kind: i % 15 === 0 ? "cardinal" : i % 5 === 0 ? "major" : "minor",
}));

const R = 92; // globe radius
const r2 = (n: number) => Math.round(n * 100) / 100;
const MERIDIANS = [30, 60].map((deg) => r2(R * Math.cos((deg * Math.PI) / 180)));
const PARALLELS = [0, 30, 60].flatMap((deg) => {
  const dy = R * Math.sin((deg * Math.PI) / 180);
  const half = R * Math.cos((deg * Math.PI) / 180);
  const lines = [{ y: r2(C - dy), half: r2(half) }];
  return deg === 0 ? lines : [...lines, { y: r2(C + dy), half: r2(half) }];
});

/**
 * A watch dial that doubles as a compass and a coordinate globe:
 * minute track, cardinal points, a graticule, a swaying needle,
 * and one bronze dot that sweeps the ring once a minute.
 */
export function Dial({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`dial h-auto w-full overflow-visible ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="draw" pathLength={1} style={delay(0.1)} cx={C} cy={C} r="194" stroke={INK} strokeWidth="1" />
      <circle className="draw" pathLength={1} style={delay(0.3)} cx={C} cy={C} r="158" stroke={STONE} strokeWidth="0.75" />

      <g className="fade" style={delay(0.5)}>
        {TICKS.map(({ angle, length, kind }) => (
          <line
            key={angle}
            x1={C}
            y1={14}
            x2={C}
            y2={14 + length}
            transform={`rotate(${angle} ${C} ${C})`}
            stroke={kind === "cardinal" ? BRONZE : kind === "major" ? INK : STONE}
            strokeWidth={kind === "cardinal" ? 1.5 : kind === "major" ? 1 : 0.75}
          />
        ))}
      </g>

      <g className="graticule">
        <circle className="draw" pathLength={1} style={delay(0.8)} cx={C} cy={C} r={R} stroke={INK} strokeWidth="0.75" />
        {MERIDIANS.map((rx, i) => (
          <ellipse
            key={rx}
            className="draw"
            pathLength={1}
            style={delay(1 + i * 0.15)}
            cx={C}
            cy={C}
            rx={rx}
            ry={R}
            stroke={STONE}
            strokeWidth="0.75"
          />
        ))}
        <line className="draw" pathLength={1} style={delay(1.1)} x1={C} y1={C - R} x2={C} y2={C + R} stroke={STONE} strokeWidth="0.75" />
        {PARALLELS.map(({ y, half }, i) => (
          <line
            key={`${y}-${i}`}
            className="draw"
            pathLength={1}
            style={delay(1.2 + i * 0.08)}
            x1={C - half}
            y1={y}
            x2={C + half}
            y2={y}
            stroke={STONE}
            strokeWidth="0.75"
          />
        ))}
      </g>

      <g className="fade" style={delay(1.4)} fill={INK} fontFamily='"Instrument Serif", Georgia, serif' fontSize="17" textAnchor="middle">
        <text x={C} y="62" dominantBaseline="central">N</text>
        <text x={C} y="338" dominantBaseline="central">S</text>
        <text x="338" y={C} dominantBaseline="central">E</text>
        <text x="62" y={C} dominantBaseline="central">W</text>
      </g>

      <g className="fade" style={delay(1.6)}>
        <g className="sway">
          <polygon points={`${C},84 ${C - 5},${C} ${C + 5},${C}`} fill={BRONZE} />
          <polygon points={`${C},316 ${C - 5},${C} ${C + 5},${C}`} stroke={INK} strokeWidth="1" />
        </g>
        <circle cx={C} cy={C} r="4.5" fill="#F7F5F0" stroke={INK} strokeWidth="1" />
        <g className="sweep">
          <circle cx={C} cy="42" r="3" fill={BRONZE} />
        </g>
      </g>
    </svg>
  );
}
